import * as d3 from 'd3';
import _ from 'lodash';
import "./style.css";

const draw = (props) => {
    let data = [];
    if(props.data != null){
        data = _.cloneDeep(props.data.activities);
    }

    d3.select('.vis-linechart > *').remove();
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    function handleMouseOver(d, i){
        d3.select(this)
            .attr("class", "mouseover")
            .attr("r", 6);

        svg.select(this)
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(function(d){
                return d[1];
            })
            .attr("y", function(d){
                return d[1];
            })
    }

    function handleMouseOut(d, i){
        d3.select(this)
            .attr("class", "mouseout")
            .attr("r", 3);

        // d3.select("#t" + d.count + i).remove();
    }
    let svg = d3.select('.linechart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    data.forEach(function(d){
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
    });

    //Add X axis --> it is a date format
    let xScale = d3.scaleTime()
            .domain(d3.extent(data, function(d){
                return d.date;
            }))
            .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    //Add Y axis
    var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d){
                return +d.count;
            })])
            .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(yScale));

    
    //Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function(d){
                return xScale(d.date)
            })
            .y((function(d){
                return yScale(d.count)
            }))
            .curve(d3.curveMonotoneX)
            )
        .attr("class", "line")

    // Appends a circle for each datapoint
    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", 'dot')
        .attr("cx", function(d){
            return xScale(d.date)
        })
        .attr("cy", function(d){
            return yScale(d.count)
        })
        .attr("r", 3)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    // onClick when move mouse on the circle

}
    

export default draw;