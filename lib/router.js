/**
 * Created by Ivaylo on 27.5.2016 г..
 */
Router.route('/', function () {
    this.render('homepage');
});

Router.route('/test', function () {
    this.render('sDashboard');
});

Router.route('/therapist', function() {
    this.render('tDashboard');
});