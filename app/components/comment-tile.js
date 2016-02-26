import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitComment(){
      var params = {
        blog: this.get("blog"),
        content: this.get("content"),
      };
      this.sendAction('submitComment', params);
    },
  }
});
