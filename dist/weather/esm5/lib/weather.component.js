/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './weather.service';
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
        { type: Component, args: [{
                    selector: 'app-weather',
                    template: "\r\n<article class=\"widget\">\r\n    <div *ngIf=\"errText\" class=\"error\">{{errText}}</div>\r\n  <div class=\"weatherIcon\"><img width=\"100\" height=\"100\" src='{{weatherico}}'/></div>\r\n  <div class=\"weatherInfo\">\r\n    <div class=\"temperature\"><span>{{temp}}&deg;</span></div>\r\n    <div class=\"description\">    \r\n      <div class=\"weatherCondition\">{{desc}}</div>    \r\n      <div class=\"place\">{{city}}, {{country}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"date\">{{dt | date:'MMM d'}}</div>\r\n</article>\r\n",
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: [".error{padding:10px;background:#fff;width:100%;margin-bottom:10px;color:red;font-weight:700;font-size:14px;font-family:arial}.widget{position:absolute;font-family:Poiret One;top:50%;left:50%;display:flex;height:300px;width:600px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);flex-wrap:wrap;cursor:pointer;border-radius:20px;box-shadow:0 27px 55px 0 rgba(0,0,0,.3),0 17px 17px 0 rgba(0,0,0,.15)}.widget .weatherIcon{flex:1 100%;height:60%;border-top-left-radius:20px;border-top-right-radius:20px;background:#fce044;font-family:weathericons;display:flex;align-items:center;justify-content:space-around;font-size:100px}.widget .weatherIcon i{padding-top:30px}.widget .weatherInfo{flex:0 0 70%;height:40%;background:#080705;border-bottom-left-radius:20px;display:flex;align-items:center;color:#fff}.widget .weatherInfo .temperature{flex:0 0 40%;width:100%;font-size:65px;display:flex;justify-content:space-around}.widget .weatherInfo .description{flex:0 60%;display:flex;flex-direction:column;width:100%;height:100%;justify-content:center}.widget .weatherInfo .description .weatherCondition{text-transform:uppercase;font-size:35px;font-weight:100}.widget .weatherInfo .description .place{font-size:15px}.widget .date{flex:0 0 30%;height:40%;background:#70c1b3;border-bottom-right-radius:20px;display:flex;justify-content:space-around;align-items:center;color:#fff;font-size:30px;font-weight:800}p{position:fixed;bottom:0;right:2%}p a{text-decoration:none;color:#e4d6a7;font-size:10px}"]
                }] }
    ];
    /** @nocollapse */
    WeatherComponent.ctorParameters = function () { return [
        { type: WeatherService }
    ]; };
    WeatherComponent.propDecorators = {
        location: [{ type: Input, args: ['location',] }],
        unit: [{ type: Input, args: ['unit',] }]
    };
    return WeatherComponent;
}());
export { WeatherComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AamF5YW50d2FsZGlhL3dlYXRoZXIvIiwic291cmNlcyI6WyJsaWIvd2VhdGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUErQixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQ7SUFpQkUsMEJBQ1MsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFUckIsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQVV4QixDQUFDOzs7O0lBRUwsd0NBQWE7OztJQUFiO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUN0RixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsa0NBQWtDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRCxDQUFDOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7Ozs7SUFFRCx1Q0FBWTs7Ozs7SUFBWixVQUFhLEdBQUcsRUFBRSxJQUFJO1FBQXRCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQUk7WUFDOUMsS0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ3hDLElBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEM7WUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFFSCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyaUJBQXVDO29CQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7aUJBQzNDOzs7O2dCQVBPLGNBQWM7OzsyQkFTbkIsS0FBSyxTQUFDLFVBQVU7dUJBQ2hCLEtBQUssU0FBQyxNQUFNOztJQTZDZix1QkFBQztDQUFBLEFBckRELElBcURDO1NBL0NZLGdCQUFnQjs7O0lBQzNCLG9DQUFtQzs7SUFDbkMsZ0NBQTJCOztJQUMzQixtQ0FBNEI7O0lBQzVCLCtDQUEyQjs7SUFDM0IsZ0NBQW1COztJQUNuQixnQ0FBb0I7O0lBQ3BCLHNDQUEwQjs7SUFDMUIsbUNBQXVCOztJQUN2QixnQ0FBb0I7O0lBQ3BCLDhCQUFnQjs7SUFFZCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXdlYXRoZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWF0aGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi93ZWF0aGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ2xvY2F0aW9uJykgbG9jYXRpb246c3RyaW5nO1xyXG4gIEBJbnB1dCgndW5pdCcpIHVuaXQ6c3RyaW5nO1xyXG4gIHB1YmxpYyBlcnJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgd2VhdGhlcnN1YnNjcmlwdGlvbjtcclxuICBwdWJsaWMgdGVtcDpudW1iZXI7XHJcbiAgcHVibGljIGRlc2M6IHN0cmluZztcclxuICBwdWJsaWMgd2VhdGhlcmljbzogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgcHVibGljIGNpdHk6IHN0cmluZztcclxuICBwdWJsaWMgZHQ6IERhdGU7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgX3dzOiBXZWF0aGVyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHJlbmRlcldlYXRoZXIoKSB7XHJcbiAgICB0aGlzLndlYXRoZXJzdWJzY3JpcHRpb24gPSB0aGlzLl93cy5nZXRXZWF0aGVyKHRoaXMubG9jYXRpb24sIHRoaXMudW5pdCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyVGV4dCA9ICcnO1xyXG4gICAgICB0aGlzLnRlbXAgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxuICAgICAgdGhpcy5kZXNjID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLndlYXRoZXJpY28gPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nK2RhdGEud2VhdGhlclswXS5pY29uKycucG5nJztcclxuICAgICAgdGhpcy5jaXR5ID0gZGF0YS5uYW1lO1xyXG4gICAgICB0aGlzLmNvdW50cnkgPSBkYXRhLnN5cy5jb3VudHJ5O1xyXG4gICAgICB0aGlzLmdldExvY2FsVGltZShkYXRhLmNvb3JkLmxhdCwgZGF0YS5jb29yZC5sb24pO1xyXG5cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5lcnJUZXh0ID0gZXJyb3I7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYWxUaW1lKGxhdCwgbG9uZykge1xyXG4gICAgdGhpcy5fd3MuZ2V0TG9jYWxUaW1lKGxhdCwgbG9uZykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuZHQgPSBkYXRhLnRpbWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmKGNoYW5nZXNbJ2xvY2F0aW9uJ10gfHwgY2hhbmdlc1sndW5pdCddKXtcclxuICAgICAgaWYodGhpcy53ZWF0aGVyc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXJXZWF0aGVyKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==