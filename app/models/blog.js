import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  datepublished: DS.attr()
});
