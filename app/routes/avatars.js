import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return ajax({
            url: 'https://api.github.com/repositories?since=1000',
            type: 'get'
        }).then(function(avatars) {
            avatars.forEach(function(avatar) {
              avatar.fullName = avatar.full_name;
              avatar.login = avatar.owner['login'];
              avatar.avatarUrl = avatar.owner['avatar_url'];
            });
            return avatars;
        });
    }
});
