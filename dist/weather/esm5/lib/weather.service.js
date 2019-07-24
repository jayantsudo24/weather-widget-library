/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
        return this._http.get(this.apiURL + city + this.appID + '&units=' + unit).pipe(catchError(this.handlError));
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
        return throwError(error.error.message);
    };
    WeatherService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WeatherService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ WeatherService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WeatherService_Factory() { return new WeatherService(i0.ɵɵinject(i1.HttpClient)); }, token: WeatherService, providedIn: "root" });
    return WeatherService;
}());
export { WeatherService };
if (false) {
    /** @type {?} */
    WeatherService.prototype.apiURL;
    /** @type {?} */
    WeatherService.prototype.timeApiURL;
    /** @type {?} */
    WeatherService.prototype.userdetails;
    /** @type {?} */
    WeatherService.prototype.appID;
    /**
     * @type {?}
     * @private
     */
    WeatherService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGpheWFudHdhbGRpYS93ZWF0aGVyLyIsInNvdXJjZXMiOlsibGliL3dlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU1QztJQVNFLHdCQUNVLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFOcEIsV0FBTSxHQUFHLG9EQUFvRCxDQUFDO1FBQzlELGVBQVUsR0FBRyxzREFBc0QsQ0FBQztRQUNwRSxnQkFBVyxHQUFHLHFDQUFxQyxDQUFBOztRQUVuRCxVQUFLLEdBQUcseUNBQXlDLENBQUM7SUFLeEQsQ0FBQzs7Ozs7O0lBRUYsbUNBQVU7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsSUFBSTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7Ozs7O0lBQ0QscUNBQVk7Ozs7O0lBQVosVUFBYSxHQUFHLEVBQUUsSUFBSTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxVQUFVLEdBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxPQUFPLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7OztJQUNELG1DQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQ2QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxVQUFVOzs7eUJBRG5CO0NBNkJDLEFBeEJELElBd0JDO1NBckJZLGNBQWM7OztJQUN6QixnQ0FBcUU7O0lBQ3JFLG9DQUEyRTs7SUFDM0UscUNBQTBEOztJQUUxRCwrQkFBeUQ7Ozs7O0lBRXZELCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcbiAgcHVibGljIGFwaVVSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSc7XHJcbiAgcHVibGljIHRpbWVBcGlVUkwgPSAnaHR0cDovL2FwaS5nZW9uYW1lcy5vcmcvdGltZXpvbmVKU09OP2Zvcm1hdHRlZD10cnVlJic7XHJcbiAgcHVibGljIHVzZXJkZXRhaWxzID0gJyZ1c2VybmFtZT1rYWx5YW4xMTAyMTk4MCZzdHlsZT1mdWxsJ1xyXG4gIC8vIGxhdD0yMi41NyZsbmc9ODguMzVcclxuICBwdWJsaWMgYXBwSUQgPSAnJmFwcGlkPWRjOWIwM2YyN2I2ZDFiM2VmOWUxZTM2NjgwYjk4OWVkJztcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuXHJcbiAgIH1cclxuXHJcbiAgZ2V0V2VhdGhlcihjaXR5LCB1bml0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55Pih0aGlzLmFwaVVSTCtjaXR5K3RoaXMuYXBwSUQrJyZ1bml0cz0nK3VuaXQpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsRXJyb3IpKTtcclxuICB9XHJcbiAgZ2V0TG9jYWxUaW1lKGxhdCwgbG9uZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4odGhpcy50aW1lQXBpVVJMKydsYXQ9JytsYXQrJyZsbmc9Jytsb25nK3RoaXMudXNlcmRldGFpbHMpO1xyXG4gIH1cclxuICBoYW5kbEVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl19