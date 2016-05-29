/**
 * Created by Ivaylo on 27.5.2016 г..
 */
Template.homepage.helpers({
    authInProcess: function() {
        return Meteor.loggingIn();
    },
    canShow: function() {
        return !!Meteor.user();
    }
});