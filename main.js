(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 1em;\n  height: 1em;\n  margin-right: .5em;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.container {\n  display: block;\n  max-width: 50em;\n  margin: 0 auto;\n  padding: 1em;\n}\n\n.app-title {\n  margin-left: auto;\n  font-size: .8em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <a href=\"https://www.contentful.com\">\n    <svg class=\"logo\" aria-label=\"Contentful Website\" width=\"29\" height=\"32\" viewBox=\"0 0 29 32\" xmlns=\"http://www.w3.org/2000/svg\"><title>contentful-dark-1a51a42b</title><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M9.7 22.3C8 20.7 7 18.5 7 16s1-4.7 2.6-6.3c1.4-1.4 1.4-3.6 0-5s-3.6-1.4-5 0C1.8 7.6 0 11.6 0 16s1.8 8.4 4.7 11.3c1.4 1.4 3.6 1.4 5 0 1.3-1.4 1.3-3.6 0-5z\" fill=\"#FAE501\"/><path d=\"M9.7 9.7C11.3 8 13.5 7 16 7s4.7 1 6.3 2.6c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5C24.4 1.8 20.4 0 16 0S7.6 1.8 4.7 4.7c-1.4 1.4-1.4 3.6 0 5 1.4 1.3 3.6 1.3 5 0z\" fill=\"#4FB5E1\"/><path d=\"M22.3 22.3C20.7 24 18.5 25 16 25s-4.7-1-6.3-2.6c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5C7.6 30.2 11.6 32 16 32s8.4-1.8 11.3-4.7c1.4-1.4 1.4-3.6 0-5-1.4-1.3-3.6-1.3-5 0z\" fill=\"#F05751\"/><circle fill=\"#0681B6\" cx=\"7.2\" cy=\"7.2\" r=\"3.5\"/><circle fill=\"#CD4739\" cx=\"7.2\" cy=\"24.8\" r=\"3.5\"/></g></svg>\n  </a>\n  <a mat-button routerLink=\"/products\">\n    Products\n  </a>\n  <a mat-button routerLink=\"/categories\">Categories</a>\n  <a mat-button routerLink=\"/settings\">Settings</a>\n\n  <span class=\"app-title\">{{ title }}</span>\n</mat-toolbar>\n\n<main class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentful.service */ "./src/app/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ContentfulService) {
        this.ContentfulService = ContentfulService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ContentfulService.onTitleChange(function (title) { return _this.title = title; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contentful.service */ "./src/app/contentful.service.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// check this and make a module out of it
var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"] },
    { path: 'products/:slug', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"] },
    { path: 'categories', component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__["CategoryListComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__["CategoryListComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            providers: [_contentful_service__WEBPACK_IMPORTED_MODULE_10__["ContentfulService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category-list/category-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/category-list/category-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -0.5em;\n}\n\n.category-grid > * {\n  flex: 1 0 5em;\n  margin: 0.5em;\n\n  min-width: 20em;\n  max-width: 37.5em;\n}\n\n.category-card {\n  height: 100%;\n}\n\n.category-image {\n  width: 3em;\n  height: 3em;\n\n  margin-left: auto;\n}\n"

/***/ }),

/***/ "./src/app/category-list/category-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/category-list/category-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"u-listReset category-grid\">\n    <li *ngFor=\"let category of categories\">\n      <mat-card class=\"category-card\">\n        <mat-card-header>\n          <img *ngIf=\"category.fields.icon\" class=\"category-image\" src=\"{{ category.fields.icon.fields.file.url }}\">\n          <mat-card-title>{{ category.fields.title }}</mat-card-title>\n          <mat-card-subtitle>{{ category.fields.categoryDescription }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-list>\n            <mat-list-item *ngFor=\"let product of productsForCategories[category.sys.id]\">\n              <a mat-line [routerLink]=\"['/products', product.fields.slug]\">{{product.fields.productName}}</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/category-list/category-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-list/category-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MdList } from '@angular/material';

var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(contentfulService) {
        this.contentfulService = contentfulService;
        this.productsForCategories = {};
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getCategories()
            .then(function (categories) {
            _this.categories = categories;
            return Promise.all(_this.categories.map(function (category) { return _this.contentfulService.getProducts({
                'fields.categories.sys.id': category.sys.id
            }); }));
        })
            .then(function (productListings) {
            _this.categories.forEach(function (cat, i) {
                _this.productsForCategories[cat.sys.id] = productListings[i];
            });
        });
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/category-list/category-list.component.css")],
        }),
        __metadata("design:paramtypes", [_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/contentful.service.ts":
/*!***************************************!*\
  !*** ./src/app/contentful.service.ts ***!
  \***************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/contentful.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// change these to include your own settings
var DEFAULT_CONFIG = {
    credentials: {
        space: 'bkp1t915hkvx',
        accessToken: 'f11f4df5e62a44e0d85cbfa912ea9e3b3a562496760dcb9ddcbf7d53f37eb168',
    },
    contentTypeIds: {
        product: 'product',
        category: 'category'
    }
};
var ContentfulService = /** @class */ (function () {
    function ContentfulService() {
        try {
            this.config = JSON.parse(localStorage.catalogConfig);
        }
        catch (e) {
            this.config = DEFAULT_CONFIG.credentials;
        }
        this.titleHandlers = [];
        this._createClient();
        this.getSpace();
    }
    ContentfulService.prototype.onTitleChange = function (fn) {
        this.titleHandlers.push(fn);
    };
    // get the current space
    ContentfulService.prototype.getSpace = function () {
        var _this = this;
        return this.cdaClient.getSpace()
            .then(function (space) {
            _this.titleHandlers.forEach(function (handler) { return handler(space.name); });
            return space;
        });
    };
    // fetch products
    ContentfulService.prototype.getProducts = function (query) {
        return this.cdaClient.getEntries(Object.assign({
            content_type: DEFAULT_CONFIG.contentTypeIds.product
        }, query))
            .then(function (res) { return res.items; });
    };
    // fetch products with a given slug
    // and return one of them
    ContentfulService.prototype.getProduct = function (slug) {
        return this.getProducts({ 'fields.slug': slug })
            .then(function (items) { return items[0]; });
    };
    // fetch categories
    ContentfulService.prototype.getCategories = function () {
        return this.cdaClient.getEntries({
            content_type: DEFAULT_CONFIG.contentTypeIds.category
        })
            .then(function (res) { return res.items; });
    };
    // return a custom config if available
    ContentfulService.prototype.getConfig = function () {
        return this.config !== DEFAULT_CONFIG.credentials ?
            Object.assign({}, this.config) :
            { space: '', accessToken: '' };
    };
    // set a new config and store it in localStorage
    ContentfulService.prototype.setConfig = function (config) {
        localStorage.setItem('catalogConfig', JSON.stringify(config));
        this.config = config;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    // set config back to default values
    ContentfulService.prototype.resetConfig = function () {
        localStorage.removeItem('catalogConfig');
        this.config = DEFAULT_CONFIG.credentials;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    ContentfulService.prototype._createClient = function () {
        this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
            space: this.config.space,
            accessToken: this.config.accessToken
        });
    };
    ContentfulService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-container {\n  padding: 2em 0;\n}\n\n.brand-panel {\n  display: flex;\n}\n\n.brand-panel-img {\n  flex: 0 0 10em;\n  margin-right: 2em;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <p *ngIf=\"product\">\n  <mat-card class=\"product-card\">\n    <mat-card-header>\n      <mat-card-title>{{ product.fields.productName }}</mat-card-title>\n      <mat-card-subtitle>{{ product.fields.sizetypecolor }} | <strong>Price: {{ product.fields.price }} $</strong></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group>\n        <mat-tab *ngIf=\"product.fields.image\" label=\"Image\">\n          <div class=\"tab-container\">\n            <img class=\"u-marginAutoHorizontal\" src=\"{{ product.fields.image[0].fields.file.url }}\">\n            <p>{{ product.fields.image[0].fields.description }}</p>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Description\">\n          <div class=\"tab-container\">\n            <p>{{ product.fields.productDescription }}</p>\n            <p>SKU: {{ product.fields.sku || 'SKU not available' }}</p>\n          </div>\n        </mat-tab>\n        <mat-tab *ngIf=\"product.fields.brand\" label=\"Brand\">\n          <div class=\"tab-container\">\n            <div class=\"brand-panel\">\n              <div class=\"brand-panel-img\">\n                <img src=\"{{ product.fields.brand.fields.logo.fields.file.url }}\">\n              </div>\n              <div>\n                <h3>{{ product.fields.brand.fields.companyName }}</h3>\n                <p>{{ product.fields.brand.fields.companyDescription }}</p>\n              </div>\n            </div>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n  </mat-card>\n</p>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(ContentfulService, route) {
        this.ContentfulService = ContentfulService;
        this.route = route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) { return _this.ContentfulService.getProduct(params.get('slug')); }))
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -0.5em;\n}\n\n.product-grid > * {\n  flex: 1 0 5em;\n  margin: 0.5em;\n\n  min-width: 20em;\n  max-width: 37.5em;\n}\n\n.product-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"u-listReset product-grid\">\n  <li class=\"u-marginBottom\" *ngFor=\"let product of products\">\n    <mat-card class=\"product-card\">\n      <mat-card-header>\n        <mat-card-title>{{ product.fields.productName }}</mat-card-title>\n        <mat-card-subtitle><strong>Price: {{ product.fields.price }} $</strong></mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{ product.fields.image[0].fields.file.url }}\">\n      <mat-card-actions class=\"u-marginTopAuto\">\n        <a mat-button [routerLink]=\"['/products', product.fields.slug]\">View details</a>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(contentfulService) {
        this.contentfulService = contentfulService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getProducts()
            .then(function (products) { return _this.products = products; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n}\n\n.push-down {\n  margin-bottom: 1em;\n}\n\n.mat-hint {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Settings</mat-card-title>\n    <mat-card-subtitle>Use your own space</mat-card-subtitle>\n  </mat-card-header>\n  <p>\n    This demo application is connected to a read-only demo space. Use the form below to connect to your own space. The space\n    needs to be created implementing the product catalogue data template from Contentful to function properly.\n  </p>\n  <p>Once a valid space id and api for the deliver api is provided, the credentials need to be saved in the current browser\n    tab session. For convenience a deeplink to the settings dialogue can be created.\n  </p>\n  <mat-card-content>\n    <form #settingsForm=\"ngForm\" (submit)=\"saveConfig()\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Space Id\" name=\"spaceId\" [(ngModel)]=\"config.space\" required>\n        <mat-hint align=\"start\" *ngIf=\"errorMessages.space\">\n          <strong>12 alpha-numeric characters required</strong>\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"CDA access token\" name=\"accessToken\" [(ngModel)]=\"config.accessToken\" required>\n        <mat-hint align=\"start\" *ngIf=\"errorMessages.accessToken\">\n          <strong>64 alpha-numeric characters required</strong>\n        </mat-hint>\n      </mat-form-field>\n\n      <p *ngIf=\"deepLink\">\n        You can quickly access this configuration by calling\n        <a href=\"{{ deepLink }}\">this URL</a>.\n        <p>\n\n          <p>\n            <button mat-button [disabled]=\"settingsForm.invalid\">Save configuration</button>\n            <button mat-button (click)=\"resetConfig()\" type=\"reset\">Reset</button>\n          </p>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorMessages = /** @class */ (function () {
    function ErrorMessages() {
    }
    return ErrorMessages;
}());
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(ContentfulService, route) {
        this.ContentfulService = ContentfulService;
        this.route = route;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.errorMessages = { space: null, accessToken: null };
        this.config = this.ContentfulService.getConfig();
        this.deepLink = false;
        if (this.route.snapshot.queryParams.spaceId &&
            this.route.snapshot.queryParams.apiKey) {
            console.log('joooo');
            this.config.space = this.route.snapshot.queryParams.spaceId;
            this.config.accessToken = this.route.snapshot.queryParams.apiKey;
            this.saveConfig();
        }
    };
    SettingsComponent.prototype.saveConfig = function () {
        this.errorMessages = this.getValidationErrors();
        if (!this.errorMessages.space && !this.errorMessages.accessToken) {
            this.ContentfulService.setConfig(this.config);
            this.deepLink = window.location.href + "?spaceId=" + this.config.space + "&apiKey=" + this.config.accessToken;
        }
    };
    SettingsComponent.prototype.resetConfig = function () {
        this.errorMessages = { space: null, accessToken: null };
        this.config = this.ContentfulService.resetConfig();
    };
    SettingsComponent.prototype.getValidationErrors = function () {
        var messages = { space: null, accessToken: null };
        if (!/^[a-z0-9]{12}$/.test(this.config.space)) {
            messages.space = true;
        }
        if (!/^[a-z0-9]{64}$/.test(this.config.accessToken)) {
            messages.accessToken = true;
        }
        return messages;
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edwin/Projects/product-catalogue-web.ts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map