import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr( ),
  blog: DS.belongsTo('blog', { async: true })
});
