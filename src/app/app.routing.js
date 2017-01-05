"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./Home/home.component');
var customer_component_1 = require('./Customer/customer.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'customer', component: customer_component_1.CustomerComponent },
    { path: '**', redirectTo: '' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map