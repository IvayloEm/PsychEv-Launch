/**
 * Created by Ivaylo on 27.5.2016 г..
 */
Router.route('/', {
    name: 'homepage'
});

Router.route('/test', {
    name: 'uDashboard'
});

Router.route('/t', {
    name: 'tDashboard'
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

Router.route('/t/statement', {
    name: 'tStatement'
});