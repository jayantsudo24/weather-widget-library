(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@jayantwaldia/weather', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.jayantwaldia = global.jayantwaldia || {}, global.jayantwaldia.weather = {}), global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, http, rxjs, operators, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WeatherService = /** @class */ (function () {
        function WeatherService(_http) {
            this._http = _http;
            this.apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
            this.timeApiURL = 'http://api.geonames.org/timezoneJSON?formatted=true&';
            this.userdetails = '&username=kalyan11021980&style=full';
            // lat=22.57&lng=88.35
            this.appID = '&appid=dc9b03f27b6d1b3ef9e1e36680b989ed';
        }
        /**
         * @param {?} city
         * @param {?} unit
         * @return {?}
         */
        WeatherService.prototype.getWeather = /**
         * @param {?} city
         * @param {?} unit
         * @return {?}
         */
        function (city, unit) {
            return this._http.get(this.apiURL + city + this.appID + '&units=' + unit).pipe(operators.catchError(this.handlError));
        };
        /**
         * @param {?} lat
         * @param {?} long
         * @return {?}
         */
        WeatherService.prototype.getLocalTime = /**
         * @param {?} lat
         * @param {?} long
         * @return {?}
         */
        function (lat, long) {
            return this._http.get(this.timeApiURL + 'lat=' + lat + '&lng=' + long + this.userdetails);
        };
        /**
         * @param {?} error
         * @return {?}
         */
        WeatherService.prototype.handlError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return rxjs.throwError(error.error.message);
        };
        WeatherService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WeatherService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ WeatherService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WeatherService_Factory() { return new WeatherService(core.ɵɵinject(http.HttpClient)); }, token: WeatherService, providedIn: "root" });
        return WeatherService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WeatherComponent = /** @class */ (function () {
        function WeatherComponent(_ws) {
            this._ws = _ws;
            this.errText = '';
        }
        /**
         * @return {?}
         */
        WeatherComponent.prototype.renderWeather = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.weathersubscription = this._ws.getWeather(this.location, this.unit).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.errText = '';
                _this.temp = Math.round(data.main.temp);
                _this.desc = data.weather[0].description;
                _this.weatherico = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                _this.city = data.name;
                _this.country = data.sys.country;
                _this.getLocalTime(data.coord.lat, data.coord.lon);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.errText = error;
            }));
        };
        /**
         * @param {?} lat
         * @param {?} long
         * @return {?}
         */
        WeatherComponent.prototype.getLocalTime = /**
         * @param {?} lat
         * @param {?} long
         * @return {?}
         */
        function (lat, long) {
            var _this = this;
            this._ws.getLocalTime(lat, long).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.dt = data.time;
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        WeatherComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes['location'] || changes['unit']) {
                if (this.weathersubscription) {
                    this.weathersubscription.unsubscribe();
                }
                this.renderWeather();
            }
        };
        WeatherComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-weather',
                        template: "\r\n<article class=\"widget\">\r\n    <div *ngIf=\"errText\" class=\"error\">{{errText}}</div>\r\n  <div class=\"weatherIcon\"><img width=\"100\" height=\"100\" src='{{weatherico}}'/></div>\r\n  <div class=\"weatherInfo\">\r\n    <div class=\"temperature\"><span>{{temp}}&deg;</span></div>\r\n    <div class=\"description\">    \r\n      <div class=\"weatherCondition\">{{desc}}</div>    \r\n      <div class=\"place\">{{city}}, {{country}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"date\">{{dt | date:'MMM d'}}</div>\r\n</article>\r\n",
                        encapsulation: core.ViewEncapsulation.ShadowDom,
                        styles: [".error{padding:10px;background:#fff;width:100%;margin-bottom:10px;color:red;font-weight:700;font-size:14px;font-family:arial}.widget{position:absolute;font-family:Poiret One;top:50%;left:50%;display:flex;height:300px;width:600px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);flex-wrap:wrap;cursor:pointer;border-radius:20px;box-shadow:0 27px 55px 0 rgba(0,0,0,.3),0 17px 17px 0 rgba(0,0,0,.15)}.widget .weatherIcon{flex:1 100%;height:60%;border-top-left-radius:20px;border-top-right-radius:20px;background:#fce044;font-family:weathericons;display:flex;align-items:center;justify-content:space-around;font-size:100px}.widget .weatherIcon i{padding-top:30px}.widget .weatherInfo{flex:0 0 70%;height:40%;background:#080705;border-bottom-left-radius:20px;display:flex;align-items:center;color:#fff}.widget .weatherInfo .temperature{flex:0 0 40%;width:100%;font-size:65px;display:flex;justify-content:space-around}.widget .weatherInfo .description{flex:0 60%;display:flex;flex-direction:column;width:100%;height:100%;justify-content:center}.widget .weatherInfo .description .weatherCondition{text-transform:uppercase;font-size:35px;font-weight:100}.widget .weatherInfo .description .place{font-size:15px}.widget .date{flex:0 0 30%;height:40%;background:#70c1b3;border-bottom-right-radius:20px;display:flex;justify-content:space-around;align-items:center;color:#fff;font-size:30px;font-weight:800}p{position:fixed;bottom:0;right:2%}p a{text-decoration:none;color:#e4d6a7;font-size:10px}"]
                    }] }
        ];
        /** @nocollapse */
        WeatherComponent.ctorParameters = function () { return [
            { type: WeatherService }
        ]; };
        WeatherComponent.propDecorators = {
            location: [{ type: core.Input, args: ['location',] }],
            unit: [{ type: core.Input, args: ['unit',] }]
        };
        return WeatherComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WeatherModule = /** @class */ (function () {
        function WeatherModule() {
        }
        WeatherModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [WeatherComponent],
                        imports: [
                            http.HttpClientModule,
                            common.CommonModule
                        ],
                        exports: [WeatherComponent]
                    },] }
        ];
        return WeatherModule;
    }());

    exports.WeatherComponent = WeatherComponent;
    exports.WeatherModule = WeatherModule;
    exports.WeatherService = WeatherService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jayantwaldia-weather.umd.js.map
