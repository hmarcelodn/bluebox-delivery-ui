webpackJsonp([0],{0:function(e,t,r){"use strict";var n=r(1),o=r(3),s=r(24);o.enableProdMode(),n.platformBrowserDynamic().bootstrapModule(s.AppModule)},24:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3),c=r(21),i=r(25),a=r(26),l=r(34),u=r(67),p=r(70),d=r(74),f=function(){function AppModule(){}return AppModule=n([s.NgModule({imports:[c.BrowserModule,l.Routing,i.HttpModule],declarations:[a.AppComponent,p.CustomerComponent,u.HomeComponent,d.OrderComponent],bootstrap:[a.AppComponent],providers:[]}),o("design:paramtypes",[])],AppModule)}();t.AppModule=f},26:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3);r(27);var c=function(){function AppComponent(){}return AppComponent=n([s.Component({selector:"my-app",template:r(31),styles:[r(33)]}),o("design:paramtypes",[])],AppComponent)}();t.AppComponent=c},27:function(e,t){},31:function(e,t,r){e.exports='<nav>\r\n   <div class="navbar-fixed">\r\n     <a href="#" class="brand-logo">\r\n       <img src="'+r(32)+'"/>\r\n     </a>\r\n     <ul id="nav-mobile" class="right hide-on-med-and-down">\r\n       <li><a routerLink="/">Home</a></li>\r\n       <li><a routerLink="/customer">Customers</a></li>\r\n       <li><a routerLink="/order">Ordering</a></li>\r\n       <li><a class="waves-effect waves-teal btn-flat login-btn">LOGOUT</a></li>\r\n     </ul>\r\n   </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>'},32:function(e,t,r){e.exports=r.p+"assets/bluebox-logo.e5f84f4ecf5fd0c57a7c3c6553f7e5bf.png"},33:function(e,t){e.exports=".bluebox-logo{\r\n    background: url(../../public/img/bluebox-logo.png) no-repeat;\r\n}\r\n\r\n.login-btn{\r\n    background-color: #fbc02d!important;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n\r\nnav a, nav ul li a {\r\n    color: #212121 !important;\r\n}\r\n\r\nnav{\r\n    height: 70px !important;\r\n    background-color: white;\r\n}\r\n"},34:function(e,t,r){"use strict";var n=r(35),o=r(67),s=r(70),c=r(74),i=[{path:"",component:o.HomeComponent},{path:"customer",component:s.CustomerComponent},{path:"order",component:c.OrderComponent},{path:"**",redirectTo:""}];t.Routing=n.RouterModule.forRoot(i)},67:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3),c=function(){function HomeComponent(){}return HomeComponent=n([s.Component({template:r(68),styles:[r(69)]}),o("design:paramtypes",[])],HomeComponent)}();t.HomeComponent=c},68:function(e,t){e.exports='<section>\r\n    <div class="row">\r\n        <div class="section">\r\n            <div class="container">\r\n                <h1 class="header center">Delivery Center</h1>\r\n                <div class="center row">\r\n                    <h5>Bluebox Delivery Center App is a Software Platform for Practicing Software Architectures.</h5>\r\n                </div>\r\n                <div class="center row">\r\n                    <a class="waves-effect waves-light btn-large">GET STARTED</a>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n        <div class="section">\r\n            <div class="container">\r\n                <div class="col s12 m4">\r\n                    <h2 class="center">\r\n                        <i class="large material-icons">settings_input_component</i>\r\n                    </h2>\r\n                    <h5 class="center">\r\n                        Plug-in your own components\r\n                    </h5>\r\n                    <p class="center light">\r\n                        Microservices Architecture\r\n                    </p>\r\n                </div>\r\n                <div class="col s12 m4">\r\n                    <h2 class="center">\r\n                        <i class="large material-icons">code</i>\r\n                    </h2>\r\n                    <h5 class="center">\r\n                        Plug-in your own components\r\n                    </h5>          \r\n                    <p class="center light">\r\n                        Angular 2 + ASP.NET Core\r\n                    </p>                              \r\n                </div>\r\n                <div class="col s12 m4">\r\n                    <h2 class="center">\r\n                        <i class="large material-icons">store</i>\r\n                    </h2>\r\n                    <h5 class="center">\r\n                        Plug-in your own components\r\n                    </h5>            \r\n                    <p class="center light">\r\n                        Use Bluebox to simulate sending packages\r\n                    </p>                           \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>'},69:function(e,t){e.exports=""},70:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3),c=r(71),i=function(){function CustomerComponent(e){this.customerService=e}return CustomerComponent.prototype.ngOnInit=function(){this.getCustomers()},CustomerComponent.prototype.getCustomers=function(){var e=this;this.customerService.getCustomers().subscribe(function(t){return e.customers=t})},CustomerComponent=n([s.Component({template:r(72),styles:[r(73)],providers:[c.CustomerService]}),o("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.CustomerService&&c.CustomerService)&&e||Object])],CustomerComponent);var e}();t.CustomerComponent=i},71:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3),c=r(25),i=r(5),a=function(){function CustomerService(e){this.http=e,this.customersUrl="http://localhost:5001/customers"}return CustomerService.prototype.getCustomers=function(){return this.http.get(this.customersUrl).map(this.extractData).catch(this.handleError)},CustomerService.prototype.extractData=function(e){var t=e.json();return t||{}},CustomerService.prototype.handleError=function(e){return console.log("handleError"),i.Observable.throw(e)},CustomerService=n([s.Injectable(),o("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.Http&&c.Http)&&e||Object])],CustomerService);var e}();t.CustomerService=a},72:function(e,t){e.exports='<div class="container customerList">\r\n    <div class="row">\r\n        <div class="col s12">\r\n            <div class="container">\r\n                <h5>Bluebox Customers</h5>\r\n                <div class="divider"></div>\r\n                <p class="light">Consuming Customers Microservice GET "/"" endpoint</p>\r\n                <div class="row">\r\n                    <div class="col s12">\r\n                        <ul class="collection with-header">\r\n                            <li class="collection-header">\r\n                                <div class="row">\r\n                                    <div class="col s3">\r\n                                        \r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        <b>Customer</b>\r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        <b>Address</b>\r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        <b>Delivery Address</b>\r\n                                    </div>                                                                        \r\n                                </div>\r\n                            </li>\r\n                            <li class="collection-item" *ngFor="let customer of customers">\r\n                                <div class="row">\r\n                                    <div class="col s3">\r\n                                        <a href="#">\r\n                                            <i class="small material-icons">person_pin</i>\r\n                                        </a>\r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        <a href="#">{{customer.name + \' \' + customer.lastName}}</a>\r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        {{customer.address}}\r\n                                    </div>\r\n                                    <div class="col s3">\r\n                                        {{customer.deliveryAddress}}\r\n                                    </div>                                                                        \r\n                                </div>\r\n                            </li>          \r\n                        </ul>                     \r\n                    </div>          \r\n                    <div class="row">\r\n                        <div class="col s12">\r\n                            <a class="waves-effect waves-light btn">ADD</a>\r\n                        </div>                        \r\n                    </div>                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </div>    \r\n</div>\r\n'},73:function(e,t){e.exports=".customerList{\r\n    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);    \r\n    margin-top: 40px;\r\n}"},74:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=r(3),c=r(71),i=function(){function OrderComponent(e){this.customerService=e}return OrderComponent.prototype.ngOnInit=function(){this.getCustomers()},OrderComponent.prototype.getCustomers=function(){var e=this;this.customerService.getCustomers().subscribe(function(t){return e.customers=t})},OrderComponent=n([s.Component({template:r(75),styles:[r(76)],providers:[c.CustomerService]}),o("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.CustomerService&&c.CustomerService)&&e||Object])],OrderComponent);var e}();t.OrderComponent=i},75:function(e,t){e.exports='<div class="row">\r\n    <div class="col s12">\r\n        <div class="container">\r\n            <div class="row">\r\n                <div class="col s12">\r\n                    <label>Customer</label>\r\n                    <select class="browser-default">\r\n                        <option value="" disabled selected>Choose your customer</option>\r\n                        <option value="{{customer.customerId}}" *ngFor="let customer of customers">\r\n                            {{customer.name + \' \' + customer.lastName}}\r\n                        </option>\r\n                    </select>              \r\n                </div>\r\n            </div>\r\n            <div class="row">\r\n                <div class="col s6 center">\r\n                    <a class="waves-effect waves-light btn">Deliver new package wizard</a>\r\n                </div>\r\n                <div class="col s6 center">\r\n                    <a class="waves-effect waves-light btn">Retrieve delivered packages</a>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},76:69});
//# sourceMappingURL=app.66aa838215d0d02d0995.js.map