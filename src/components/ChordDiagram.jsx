import React, { Component } from 'react';
import _ from 'lodash';
import * as d3 from 'd3';

export default class ChordDiagram extends Component {

    componentDidMount() {

        let { names, data } = this.props,
            colors = d3.quantize(d3.interpolateViridis, names.length);

        let height = 500, width = 500,
            outerRadius = Math.min(width, height) * 0.5 - 80,
            innerRadius = outerRadius - 10;

        let tickStep = d3.tickStep(0, d3.sum(data.flat()), 100);

        let formatValue = d3.format(".2");

        function ticks({ startAngle, endAngle, value }) {
            const k = (endAngle - startAngle) / value;
            return d3.range(0, value, tickStep).map(value => {
                return { value, angle: value * k + startAngle };
            });
        }

        let chord = d3.chordDirected()
            .padAngle(10 / innerRadius)
            .sortSubgroups(d3.descending)
            .sortChords(d3.descending);

        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        let ribbon = d3.ribbon()
            .radius(innerRadius - 1)
            .padAngle(1 / innerRadius);

        let color = d3.scaleOrdinal(names, colors);

        const svg = d3.select('#chord-diagram-anchor');

        svg.attr("viewBox", [-width / 2, -height / 2, width, height]);

        const chords = chord(data);

        const group = svg.append("g")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .selectAll("g")
            .data(chords.groups)
            .join("g");

        group.append("path")
            .attr("fill", d => color(names[d.index]))
            .attr("d", arc);

        group.append("title")
            .text(d => `${names[d.index]}
      ${formatValue(d.value)}`);

        const groupTick = group.append("g")
            .selectAll("g")
            .data(ticks)
            .join("g")
            .attr("transform", d => `rotate(${d.angle * 180 / Math.PI - 90}) translate(${outerRadius},0)`);

        groupTick.append("line")
            .attr("stroke", "currentColor")
            .attr("x2", 6);

        groupTick.append("text")
            .attr("x", 8)
            .attr("dy", "0.35em")
            .style("font", "7px sans-serif")
            .attr("transform", d => d.angle > Math.PI ? "rotate(180) translate(-16)" : null)
            .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
            .text(d => formatValue(d.value));

        group.select("text")
            .attr("font-weight", "bold")
            .text(function (d) {
                return this.getAttribute("text-anchor") === "end"
                    ? `↑ ${names[d.index]}`
                    : `${names[d.index]} ↓`;
            });

        svg.append("g")
            .attr("fill-opacity", 0.8)
            .selectAll("path")
            .data(chords)
            .join("path")
            .style("mix-blend-mode", "multiply")
            .attr("fill", d => color(names[d.source.index]))
            .attr("d", ribbon)
            .append("title")
            .text(d => `${formatValue(d.source.value)} ${names[d.target.index]} → ${names[d.source.index]}${d.source.index === d.target.index ? "" : `\n${formatValue(d.target.value)} ${names[d.source.index]} → ${names[d.target.index]}`}`);

    }

    render() {
        // set the dimensions of the graph
        return (
            <svg id='chord-diagram-anchor'></svg>
        );
    }
}



