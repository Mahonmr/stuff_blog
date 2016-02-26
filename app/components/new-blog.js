import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        subject: this.get('subject'),
        content: this.get('content'),
        image: this.get('image'),
        datepublished: Date.now()
      }
      this.sendAction('save', params);
    }
  }
});
