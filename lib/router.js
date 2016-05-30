/**
 * Created by Ivaylo on 27.5.2016 г..
 */
Router.route('/', {
    name: 'homepage'
});

Router.route('/u', {
    name: 'uDashboard'
});

Router.route('/u/hacks-list', {
    name: 'uCourseList'
});

Router.route('/t', {
    name: 'tDashboard'
});

Router.route('/t/clients', {
    name: 'tClients'
});

Router.route('/t/account', {
    name: 'tAccount'
});

Router.route('/t/earnings', {
    name: 'tEarnings'
});

Router.route('/t/public-profile', {
    name: 'tPublicProfile'
});

Router.route('/t/messages', {
    name: 'tMessages'
});

Router.route('/t/statement', {
    name: 'tStatement'
});