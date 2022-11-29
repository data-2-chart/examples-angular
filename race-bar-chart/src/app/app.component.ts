import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceChartDataService } from './race-chart-data.service';
import { RaceChartData, ColorSchema } from '@data-2-chart/data-2-chart';
// import '@data-2-chart/data-2-chart/dist/charts/race-bar-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  description = 'Top global brands from 2000-2018';
  raceChartData: Observable<RaceChartData> | null = null;
  colorSchema = ColorSchema.SchemeTableau10;

  constructor(private raceChartDataService: RaceChartDataService) { }

  ngOnInit(): void {
    this.raceChartData = this.raceChartDataService.getData('top-global-brands.json');
  }
}
