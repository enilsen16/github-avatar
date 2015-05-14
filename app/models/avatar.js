import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr('string'),
  login: DS.attr('string'),
  url: DS.attr('string'),
  avatarUrl: DS.attr('string')
});
