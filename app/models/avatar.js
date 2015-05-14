import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  login: DS.attr('string'),
  avatar_url: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      full_name: "rails/rails",
      login: "rails",
      avatar_url: "https://avatars.githubusercontent.com/u/614?v=3"
    }
  ]
});
