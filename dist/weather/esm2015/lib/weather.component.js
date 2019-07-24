/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './weather.service';
export class WeatherComponent {
    /**
     * @param {?} _ws
     */
    constructor(_ws) {
        this._ws = _ws;
        this.errText = '';
    }
    /**
     * @return {?}
     */
    renderWeather() {
        this.weathersubscription = this._ws.getWeather(this.location, this.unit).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.errText = '';
            this.temp = Math.round(data.main.temp);
            this.desc = data.weather[0].description;
            this.weatherico = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            this.city = data.name;
            this.country = data.sys.country;
            this.getLocalTime(data.coord.lat, data.coord.lon);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.errText = error;
        }));
    }
    /**
     * @param {?} lat
     * @param {?} long
     * @return {?}
     */
    getLocalTime(lat, long) {
        this._ws.getLocalTime(lat, long).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.dt = data.time;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['location'] || changes['unit']) {
            if (this.weathersubscription) {
                this.weathersubscription.unsubscribe();
            }
            this.renderWeather();
        }
    }
}
WeatherComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-weather',
                template: "\r\n<article class=\"widget\">\r\n    <div *ngIf=\"errText\" class=\"error\">{{errText}}</div>\r\n  <div class=\"weatherIcon\"><img width=\"100\" height=\"100\" src='{{weatherico}}'/></div>\r\n  <div class=\"weatherInfo\">\r\n    <div class=\"temperature\"><span>{{temp}}&deg;</span></div>\r\n    <div class=\"description\">    \r\n      <div class=\"weatherCondition\">{{desc}}</div>    \r\n      <div class=\"place\">{{city}}, {{country}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"date\">{{dt | date:'MMM d'}}</div>\r\n</article>\r\n",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [".error{padding:10px;background:#fff;width:100%;margin-bottom:10px;color:red;font-weight:700;font-size:14px;font-family:arial}.widget{position:absolute;font-family:Poiret One;top:50%;left:50%;display:flex;height:300px;width:600px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);flex-wrap:wrap;cursor:pointer;border-radius:20px;box-shadow:0 27px 55px 0 rgba(0,0,0,.3),0 17px 17px 0 rgba(0,0,0,.15)}.widget .weatherIcon{flex:1 100%;height:60%;border-top-left-radius:20px;border-top-right-radius:20px;background:#fce044;font-family:weathericons;display:flex;align-items:center;justify-content:space-around;font-size:100px}.widget .weatherIcon i{padding-top:30px}.widget .weatherInfo{flex:0 0 70%;height:40%;background:#080705;border-bottom-left-radius:20px;display:flex;align-items:center;color:#fff}.widget .weatherInfo .temperature{flex:0 0 40%;width:100%;font-size:65px;display:flex;justify-content:space-around}.widget .weatherInfo .description{flex:0 60%;display:flex;flex-direction:column;width:100%;height:100%;justify-content:center}.widget .weatherInfo .description .weatherCondition{text-transform:uppercase;font-size:35px;font-weight:100}.widget .weatherInfo .description .place{font-size:15px}.widget .date{flex:0 0 30%;height:40%;background:#70c1b3;border-bottom-right-radius:20px;display:flex;justify-content:space-around;align-items:center;color:#fff;font-size:30px;font-weight:800}p{position:fixed;bottom:0;right:2%}p a{text-decoration:none;color:#e4d6a7;font-size:10px}"]
            }] }
];
/** @nocollapse */
WeatherComponent.ctorParameters = () => [
    { type: WeatherService }
];
WeatherComponent.propDecorators = {
    location: [{ type: Input, args: ['location',] }],
    unit: [{ type: Input, args: ['unit',] }]
};
if (false) {
    /** @type {?} */
    WeatherComponent.prototype.location;
    /** @type {?} */
    WeatherComponent.prototype.unit;
    /** @type {?} */
    WeatherComponent.prototype.errText;
    /** @type {?} */
    WeatherComponent.prototype.weathersubscription;
    /** @type {?} */
    WeatherComponent.prototype.temp;
    /** @type {?} */
    WeatherComponent.prototype.desc;
    /** @type {?} */
    WeatherComponent.prototype.weatherico;
    /** @type {?} */
    WeatherComponent.prototype.country;
    /** @type {?} */
    WeatherComponent.prototype.city;
    /** @type {?} */
    WeatherComponent.prototype.dt;
    /** @type {?} */
    WeatherComponent.prototype._ws;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AamF5YW50d2FsZGlhL3dlYXRoZXIvIiwic291cmNlcyI6WyJsaWIvd2VhdGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUErQixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRbEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVczQixZQUNTLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBVHJCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFVeEIsQ0FBQzs7OztJQUVMLGFBQWE7UUFDWCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLGtDQUFrQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEQsQ0FBQzs7OztRQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQztZQUN4QyxJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBRUgsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMmlCQUF1QztnQkFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2FBQzNDOzs7O1lBUE8sY0FBYzs7O3VCQVNuQixLQUFLLFNBQUMsVUFBVTttQkFDaEIsS0FBSyxTQUFDLE1BQU07Ozs7SUFEYixvQ0FBbUM7O0lBQ25DLGdDQUEyQjs7SUFDM0IsbUNBQTRCOztJQUM1QiwrQ0FBMkI7O0lBQzNCLGdDQUFtQjs7SUFDbkIsZ0NBQW9COztJQUNwQixzQ0FBMEI7O0lBQzFCLG1DQUF1Qjs7SUFDdkIsZ0NBQW9COztJQUNwQiw4QkFBZ0I7O0lBRWQsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC13ZWF0aGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd2VhdGhlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd2VhdGhlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCdsb2NhdGlvbicpIGxvY2F0aW9uOnN0cmluZztcclxuICBASW5wdXQoJ3VuaXQnKSB1bml0OnN0cmluZztcclxuICBwdWJsaWMgZXJyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHdlYXRoZXJzdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHRlbXA6bnVtYmVyO1xyXG4gIHB1YmxpYyBkZXNjOiBzdHJpbmc7XHJcbiAgcHVibGljIHdlYXRoZXJpY286IHN0cmluZztcclxuICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaXR5OiBzdHJpbmc7XHJcbiAgcHVibGljIGR0OiBEYXRlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIF93czogV2VhdGhlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICByZW5kZXJXZWF0aGVyKCkge1xyXG4gICAgdGhpcy53ZWF0aGVyc3Vic2NyaXB0aW9uID0gdGhpcy5fd3MuZ2V0V2VhdGhlcih0aGlzLmxvY2F0aW9uLCB0aGlzLnVuaXQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmVyclRleHQgPSAnJztcclxuICAgICAgdGhpcy50ZW1wID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbiAgICAgIHRoaXMuZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy53ZWF0aGVyaWNvID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJytkYXRhLndlYXRoZXJbMF0uaWNvbisnLnBuZyc7XHJcbiAgICAgIHRoaXMuY2l0eSA9IGRhdGEubmFtZTtcclxuICAgICAgdGhpcy5jb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcclxuICAgICAgdGhpcy5nZXRMb2NhbFRpbWUoZGF0YS5jb29yZC5sYXQsIGRhdGEuY29vcmQubG9uKTtcclxuXHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuZXJyVGV4dCA9IGVycm9yO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExvY2FsVGltZShsYXQsIGxvbmcpIHtcclxuICAgIHRoaXMuX3dzLmdldExvY2FsVGltZShsYXQsIGxvbmcpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmR0ID0gZGF0YS50aW1lO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZihjaGFuZ2VzWydsb2NhdGlvbiddIHx8IGNoYW5nZXNbJ3VuaXQnXSl7XHJcbiAgICAgIGlmKHRoaXMud2VhdGhlcnN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMud2VhdGhlcnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyV2VhdGhlcigpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=