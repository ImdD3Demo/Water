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
      text: 'Liters of water going through a pipe per second'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
          text: 'Liters'
      }
    },
    series: [
      {
        type: 'line',
        name: "Liters of water per second",
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
