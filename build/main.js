webpackJsonp([6],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anak-bermain-handphone/anak-bermain-handphone.module": [
		268,
		5
	],
	"../pages/anak-bermain-komputer/anak-bermain-komputer.module": [
		273,
		4
	],
	"../pages/anak-rajin/anak-rajin.module": [
		269,
		3
	],
	"../pages/anak/anak.module": [
		270,
		2
	],
	"../pages/family/family.module": [
		271,
		1
	],
	"../pages/keluarga/keluarga.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.KeluargaPage = function (ket) {
        this.navCtrl.push("KeluargaPage", { kategori: ket });
    };
    HomePage.prototype.AnakPage = function (ket) {
        this.navCtrl.push("AnakPage", { kategori: ket });
    };
    HomePage.prototype.AnakBermainHandphonePage = function (ket) {
        this.navCtrl.push("AnakBermainHandphonePage", { kategori: ket });
    };
    HomePage.prototype.AnakBermainKomputerPage = function (ket) {
        this.navCtrl.push("AnakBermainKomputerPage", { kategori: ket });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Izal\Documents\myapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Menu Utama\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col (click)="KeluargaPage()">\n				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV66XmDF-SJ0j9T0NcrcRbHCSGhz9xbPY8m1Y7s3HQleSWb1XBjQ">\n			</ion-col>\n			<ion-col (click)="AnakPage()">\n				<img src="data:image/png;base64,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">\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col (click)="AnakBermainHandphonePage()">\n				<img src="data:image/jpeg;base64,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">\n			</ion-col>\n			<ion-col (click)="AnakBermainKomputerPage()">\n				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-lq2SO2tZP7OoP-T7n7rFVLwOc29ndAkVRZlyXyrdVlNP43i">\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n89QtIqWqoW0LBCHaAjlZet10KufeAjR37XrbCV_3xIdfYkrfw">\n			</ion-col>\n			<ion-col>\n				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ki90iOTtc03QdlFKaupPjZTu1a2MaMh9Mli4jmtWo9BLgeIm">\n			</ion-col>\n		</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Izal\Documents\myapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anak-bermain-handphone/anak-bermain-handphone.module#AnakBermainHandphonePageModule', name: 'AnakBermainHandphonePage', segment: 'anak-bermain-handphone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anak-rajin/anak-rajin.module#AnakRajinPageModule', name: 'AnakRajinPage', segment: 'anak-rajin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anak/anak.module#AnakPageModule', name: 'AnakPage', segment: 'anak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/family/family.module#FamilyPageModule', name: 'FamilyPage', segment: 'family', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/keluarga/keluarga.module#KeluargaPageModule', name: 'KeluargaPage', segment: 'keluarga', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anak-bermain-komputer/anak-bermain-komputer.module#AnakBermainKomputerPageModule', name: 'AnakBermainKomputerPage', segment: 'anak-bermain-komputer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Izal\Documents\myapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Izal\Documents\myapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map