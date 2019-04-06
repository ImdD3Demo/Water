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

  //D3.js code can be added in this method
  ngAfterContentInit() {
    // dataset
    var data = [10, 5, 12, 15, 24, 36, 14, 9, 12, 48, 50, 23, 43, 29, 22, 4, 20, 12, 32, 49];

    // private variables
    var _scaleFactor = 10; //multiplies the pixels times this factor
    var _height = Math.max.apply(Math, data) * _scaleFactor; //the width of the svg itself
    var _barWidth = 50; //or width, its a laying bar

    // creates the svg on the body of the DOM (html)
    var svg = d3.select("body") //selects the html body
      .append("svg") //adds the svg element to the DOM
      .attr("height", _height) // as high as all the bars added together
      .attr("width", _barWidth * data.length) //sets the width.
      .attr("class", "barchart");

    d3.select(".barchart")
      .transition()
      .duration(4000)
      .style("background-color", "rgb(230,230,255)");

    //creates a bar group with all the locations for the rectangles (they will be added later)
    var bar = svg.selectAll("g") //Selects all groups for the svg
      .data(data) //binds a group to 1 datapoint
      .enter() //enters the data to append
      .append("g") //appends a group foreach datapoint
      .attr("transform", function (d, i) { //changes the location foreach bar to index of the bar times the bar height
        console.log(`start location of rectangle ${i}: (${i * _barWidth}, ${_height - (d * _scaleFactor)})`);
        return `translate(${i * _barWidth}, ${_height - (d * _scaleFactor)})`;
      });

    //we have a barchart with a location for all the groups (bars) 
    //now we add a rectangle foreach bar group, this makes the bars appear.
    bar.append("rect") //adds the rectangle
      .attr("width", _barWidth - 5) //sets the height on 30 minus 1 so the bars are not against eachother
      .attr("fill", "rgb(39, 150, 111)") //sets the color.
      .attr("height", 0)
      .transition()
      .duration(1000)
      .delay(function (d, i) {
        return i * 200;
      })
      .attr("height", function (d, i) {
        console.log("width of rectangle " + i + ": (" + _barWidth + ")");
        console.log("height of rectangle " + i + ": (" + d * _scaleFactor + ")");
        return d * _scaleFactor; //sets the width on the datapoint (pixels) times the factor
      })

    bar.append("text") //this adds the label
      //the x (location) of the label will be determined by the datapoint with the scalefactor to reach the end of the bar
      .attr("x", _barWidth / 3) //we want the label to be in the middle of the bar.
      .attr("y", function (d) { return (15); }) //I substract 5 pixels to make it look better.
      .attr("fill", "rgb(255,255,255)") 
      .transition()
      .duration(1000)
      .delay(function (d, i) {
        return i * 200;
      })
      .text(function (d)  //the text in the label is set to be the datapoint value.
      {
        if (d < 10) {
          return "0" + d;
        }
        return d;
      });
  }
}
