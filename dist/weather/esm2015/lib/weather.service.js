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
export class WeatherService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
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
    getWeather(city, unit) {
        return this._http.get(this.apiURL + city + this.appID + '&units=' + unit).pipe(catchError(this.handlError));
    }
    /**
     * @param {?} lat
     * @param {?} long
     * @return {?}
     */
    getLocalTime(lat, long) {
        return this._http.get(this.timeApiURL + 'lat=' + lat + '&lng=' + long + this.userdetails);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handlError(error) {
        return throwError(error.error.message);
    }
}
WeatherService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WeatherService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ WeatherService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WeatherService_Factory() { return new WeatherService(i0.ɵɵinject(i1.HttpClient)); }, token: WeatherService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGpheWFudHdhbGRpYS93ZWF0aGVyLyIsInNvdXJjZXMiOlsibGliL3dlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUs1QyxNQUFNLE9BQU8sY0FBYzs7OztJQU16QixZQUNVLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFOcEIsV0FBTSxHQUFHLG9EQUFvRCxDQUFDO1FBQzlELGVBQVUsR0FBRyxzREFBc0QsQ0FBQztRQUNwRSxnQkFBVyxHQUFHLHFDQUFxQyxDQUFBOztRQUVuRCxVQUFLLEdBQUcseUNBQXlDLENBQUM7SUFLeEQsQ0FBQzs7Ozs7O0lBRUYsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDOzs7Ozs7SUFDRCxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxHQUFHLEdBQUMsT0FBTyxHQUFDLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7SUFDRCxVQUFVLENBQUMsS0FBSztRQUNkLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFVBQVU7Ozs7O0lBUWpCLGdDQUFxRTs7SUFDckUsb0NBQTJFOztJQUMzRSxxQ0FBMEQ7O0lBRTFELCtCQUF5RDs7Ozs7SUFFdkQsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXBpVVJMID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JztcclxuICBwdWJsaWMgdGltZUFwaVVSTCA9ICdodHRwOi8vYXBpLmdlb25hbWVzLm9yZy90aW1lem9uZUpTT04/Zm9ybWF0dGVkPXRydWUmJztcclxuICBwdWJsaWMgdXNlcmRldGFpbHMgPSAnJnVzZXJuYW1lPWthbHlhbjExMDIxOTgwJnN0eWxlPWZ1bGwnXHJcbiAgLy8gbGF0PTIyLjU3JmxuZz04OC4zNVxyXG4gIHB1YmxpYyBhcHBJRCA9ICcmYXBwaWQ9ZGM5YjAzZjI3YjZkMWIzZWY5ZTFlMzY2ODBiOTg5ZWQnO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG5cclxuICAgfVxyXG5cclxuICBnZXRXZWF0aGVyKGNpdHksIHVuaXQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KHRoaXMuYXBpVVJMK2NpdHkrdGhpcy5hcHBJRCsnJnVuaXRzPScrdW5pdCkucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxFcnJvcikpO1xyXG4gIH1cclxuICBnZXRMb2NhbFRpbWUobGF0LCBsb25nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55Pih0aGlzLnRpbWVBcGlVUkwrJ2xhdD0nK2xhdCsnJmxuZz0nK2xvbmcrdGhpcy51c2VyZGV0YWlscyk7XHJcbiAgfVxyXG4gIGhhbmRsRXJyb3IoZXJyb3IpIHtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXX0=