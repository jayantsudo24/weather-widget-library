import { OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from './weather.service';
export declare class WeatherComponent implements OnChanges {
    _ws: WeatherService;
    location: string;
    unit: string;
    errText: string;
    weathersubscription: any;
    temp: number;
    desc: string;
    weatherico: string;
    country: string;
    city: string;
    dt: Date;
    constructor(_ws: WeatherService);
    renderWeather(): void;
    getLocalTime(lat: any, long: any): void;
    ngOnChanges(changes: SimpleChanges): void;
}
