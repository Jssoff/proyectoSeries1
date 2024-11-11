import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    const sesionesTotales = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = Math.round(sesionesTotales / this.series.length);
  }
}
