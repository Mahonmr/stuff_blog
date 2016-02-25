import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    save() {
      var params = {
        subject: this.get('subject'),
        content: this.get('content'),
        image: this.get('image'),
        datepublished: Date.now()
      }
      console.log(params)
      this.set('addNewBlog', false),
      this.sendAction('save', params);
    }
  }
});
