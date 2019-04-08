import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { interval } from 'rxjs';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Litres of water going through a pipe'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        name: "Litres of water",
        data: [1000, 1500, 2500]
      }
    ]
  });

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(x => {
      this.add();
    });
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 3000));
  }

}
