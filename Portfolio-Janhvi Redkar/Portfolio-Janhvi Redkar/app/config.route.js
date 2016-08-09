(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            },{
                url: '/Resume',
                config: {
                    title: 'Resume',
                    templateUrl: 'app/admin/admin.html',
                    
                }
            }, {
                url: '/Cover_Letter',
                config: {
                    title: 'Cover Letter',
                    templateUrl: 'app/coverletter/coverletter.html',
                   
                }
            }, {
                url: '/WorkExp',
                config: {
                    title: 'Professional Experiance',
                    templateUrl: 'app/Workex/Workex.html',
                    settings: {
                        nav: 4,
                        content: '<i class="glyphicon glyphicon-list-alt"></i> Professional Experiance'
                    }
                }
            }, {
                url: '/Acad',
                config: {
                    title: 'Acadamic Experiance ',
                    templateUrl: 'app/Acad/Acad.html',
                    settings: {
                        nav: 5,
                        content: '<i class="glyphicon glyphicon-list-alt"></i> Acadamic Experiance'
                    }
                }
            }
        ];
    }
})();