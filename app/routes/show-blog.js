import Ember from 'ember';

export default Ember.Route.extend({
  showCommentForm: false,
  model(params) {
    return Ember.RSVP.hash({
      blog: this.store.findRecord('blog', params.blog_id),
      comment: this.store.findAll('comment')
    });
  },
  actions: {
    commentShow: function() {
      this.set('showCommentForm', true);
    },

    submitComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blog.save();
      });
      this.transitionTo('index');
    },
  }
});
