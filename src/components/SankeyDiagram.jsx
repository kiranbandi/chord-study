import React, { Component } from 'react';
import _ from 'lodash';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

export default class ChordDiagram extends Component {

    componentDidMount() {

        let { names, data } = this.props,
            colors = d3.quantize(d3.interpolateViridis, names.length);

        let parallelData = [];

        let mapList = [];

        _.map(data, (d, outerIndex) => {
            _.map(d, (p, innerIndex) => {
                let INmigrationKey = names[outerIndex] + '-' + names[innerIndex],
                    OUTmigrationKey = names[innerIndex] + '-' + names[outerIndex];
                if (mapList.indexOf(INmigrationKey) == -1 && mapList.indexOf(OUTmigrationKey) == -1) {
                    var dataPoint = { 'source': names[outerIndex], 'target': names[innerIndex], 'value': p }
                    mapList.push(INmigrationKey);
                    mapList.push(OUTmigrationKey);
                    parallelData.push(dataPoint);
                }
            });
        });

        let keys = ['source', 'target'];
        let color = d3.scaleOrdinal(names, colors);

        let width = 975, height = 975;

        let sankeys = sankey()
            .nodeSort(null)
            .linkSort(null)
            .nodeWidth(4)
            .nodePadding(20)
            .extent([[0, 5], [width, height - 5]]);


        let graph = graphifyData(keys, parallelData);

        const svg = d3.select("#sankey-diagram-anchor")
            .attr("viewBox", [0, 0, width, height]);

        const { nodes, links } = sankeys({
            nodes: graph.nodes.map(d => Object.assign({}, d)),
            links: graph.links.map(d => Object.assign({}, d))
        });

        svg.append("g")
            .selectAll("rect")
            .data(nodes)
            .join("rect")
            .attr("x", d => d.x0)
            .attr("y", d => d.y0)
            .attr("height", d => d.y1 - d.y0)
            .attr("width", d => d.x1 - d.x0)
            .append("title")
            .text(d => `${d.name}\n${d.value.toLocaleString()}`);

        svg.append("g")
            .attr("fill", "none")
            .selectAll("g")
            .data(links)
            .join("path")
            .attr("d", sankeyLinkHorizontal())
            .attr("stroke", d => color(d.names[0]))
            .attr("stroke-width", d => d.width)
            .style("mix-blend-mode", "multiply")
            .append("title")
            .text(d => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);

        svg.append("g")
            .style("font", "10px sans-serif")
            .style("fill", "white")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
            .text(d => d.name)
            .append("tspan")
            .attr("fill-opacity", 0.7)
            .text(d => ` ${d.value.toLocaleString()}`);

    }

    render() {
        // set the dimensions of the graph
        return (
            <svg id='sankey-diagram-anchor'></svg>
        );
    }
}



function graphifyData(keys, data) {
    let index = -1;
    const nodes = [];
    const nodeByKey = new Map;
    const indexByKey = new Map;
    const links = [];

    for (const k of keys) {
        for (const d of data) {
            const key = JSON.stringify([k, d[k]]);
            if (nodeByKey.has(key)) continue;
            const node = { name: d[k] };
            nodes.push(node);
            nodeByKey.set(key, node);
            indexByKey.set(key, ++index);
        }
    }

    for (let i = 1; i < keys.length; ++i) {
        const a = keys[i - 1];
        const b = keys[i];
        const prefix = keys.slice(0, i + 1);
        const linkByKey = new Map;
        for (const d of data) {
            const names = prefix.map(k => d[k]);
            const key = JSON.stringify(names);
            const value = d.value || 1;
            let link = linkByKey.get(key);
            if (link) { link.value += value; continue; }
            link = {
                source: indexByKey.get(JSON.stringify([a, d[a]])),
                target: indexByKey.get(JSON.stringify([b, d[b]])),
                names,
                value
            };
            links.push(link);
            linkByKey.set(key, link);
        }
    }
    return { nodes, links };
}