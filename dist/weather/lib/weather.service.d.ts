import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class WeatherService {
    private _http;
    apiURL: string;
    timeApiURL: string;
    userdetails: string;
    appID: string;
    constructor(_http: HttpClient);
    getWeather(city: any, unit: any): Observable<any>;
    getLocalTime(lat: any, long: any): Observable<any>;
    handlError(error: any): Observable<never>;
}
