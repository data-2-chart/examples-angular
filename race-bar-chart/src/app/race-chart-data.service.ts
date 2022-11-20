import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RaceChartData } from '@data-2-chart/data-2-chart';

@Injectable({
  providedIn: 'root'
})
export class RaceChartDataService {

  constructor(private http: HttpClient) { }

  getData(fileName: string) {
    return this.http.get<RaceChartData>(`/assets/${fileName}`);
  }
}
