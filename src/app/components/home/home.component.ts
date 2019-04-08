import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    var svg = d3.select("#svgcontainer")
      .append("svg").attr("width", 1200).attr("height", 600);

    d3.select("#svgcontainer svg")
      .transition()
      .duration(2000)
      .style("background-color", "lightblue");

    svg.append("line")
      .attr("x1", 100)
      .attr("y1", 100)
      .attr("x2", 200)
      .attr("y2", 200)
      .transition()
      .duration(4000)
      .style("stroke", "rgb(255,0,0)")
      .style("stroke-width", "50");

    svg.append("rect")
      .attr("x", 200)
      .attr("y", -80)
      .attr("width", 150)
      .attr("height", 80)
      .transition()
      .delay(2000)
      .duration(4000)
      .attr("fill", "green")
      .attr("transform", "rotate(30)");

    svg.append("rect")
      .attr("x", 280)
      .attr("y", 250)
      .attr("width", 100)
      .attr("height", 100)
      .transition()
      .delay(2000)
      .duration(4000)
      .attr("fill", "purple")
      .attr("transform", "rotate(-30)");

    svg.append("circle")
      .attr("cx", 30)
      .attr("cy", 40)
      .attr("r", 30)
      .attr("fill", "blue")
      .transition()
      .delay(4000)
      .duration(4000)
      .attr("fill", "black")
      .delay(4000)
      .duration(4000)
      .attr("r", 200)
      .attr("fill", "orange");

    svg.append("ellipse")
      .attr("cx", 100)
      .attr("cy", 200)
      .attr("rx", 70)
      .attr("ry", 30)
      .attr("fill", "orange")
      .transition()
      .delay(6000)
      .duration(3000)
      .attr("fill", "white")
      .attr("cy", 350);

    svg.append("line")
      .attr("x1", 50)
      .attr("y1", 400)
      .attr("x2", 150)
      .attr("y2", 500)
      .transition()
      .delay(8000)
      .duration(500)
      .style("stroke", "rgb(0,255,0)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 150)
      .attr("y1", 500)
      .attr("x2", 250)
      .attr("y2", 400)
      .transition()
      .delay(8250)
      .duration(500)
      .style("stroke", "rgb(0,0,255)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 250)
      .attr("y1", 400)
      .attr("x2", 350)
      .attr("y2", 500)
      .transition()
      .delay(8500)
      .duration(500)
      .style("stroke", "rgb(255,255,0)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 350)
      .attr("y1", 500)
      .attr("x2", 450)
      .attr("y2", 300)
      .transition()
      .delay(8750)
      .duration(500)
      .style("stroke", "rgb(255,0,255)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 450)
      .attr("y1", 300)
      .attr("x2", 550)
      .attr("y2", 350)
      .transition()
      .delay(9000)
      .duration(500)
      .style("stroke", "rgb(0,255,255)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 550)
      .attr("y1", 350)
      .attr("x2", 650)
      .attr("y2", 200)
      .transition()
      .delay(9250)
      .duration(500)
      .style("stroke", "rgb(126,0,255)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 650)
      .attr("y1", 200)
      .attr("x2", 750)
      .attr("y2", 400)
      .transition()
      .delay(9500)
      .duration(500)
      .style("stroke", "rgb(126,255,0)")
      .style("stroke-width", "15");

    svg.append("line")
      .attr("x1", 750)
      .attr("y1", 400)
      .attr("x2", 850)
      .attr("y2", 100)
      .transition()
      .delay(9750)
      .duration(500)
      .style("stroke", "rgb(255,126,126)")
      .style("stroke-width", "15");

    svg.append("circle")
      .attr("cx", 1300)
      .attr("cy", 200)
      .attr("r", 20)
      .attr("fill", "rgb(234, 175, 234)")
      .transition()
      .delay(7000)
      .duration(4000)
      .attr("cx", 1000)
      .attr("cy", 300)
      .attr("r", 150)
      .attr("fill", "rgb(244, 66, 244)");

    svg.append("circle")
      .transition()
      .delay(10000)
      .attr("cx", 600)
      .attr("cy", 300)
      .attr("r", 1)
      .attr("fill", "black")
      .transition()
      .duration(4000)
      .attr("cx", 600)
      .attr("cy", 300)
      .attr("r", 10000)
      .attr("fill", "white");

      svg.append("svg:image")
      .transition()
      .delay(14000)
      .duration(1000)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1200)
      .attr('height', 600)
      .attr("xlink:href", "./assets/img/IMDfor.png");
  }
}
