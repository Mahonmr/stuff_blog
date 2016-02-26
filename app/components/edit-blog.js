import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(blog) {
      var params = {
        subject: this.get('subject'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.sendAction('update', blog, params);
    },

    delete(blog) {
      this.sendAction('delete', blog);
    },
  }
});
