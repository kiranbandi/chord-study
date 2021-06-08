import React, { Component } from 'react';
import _ from 'lodash';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

export default class ChordDiagram extends Component {

    componentDidMount() {

        let { names, data } = this.props,
            colors = d3.schemeTableau10;

        let parallelData = [];

        let mapList = [];

        _.map(data, (d, outerIndex) => {
            _.map(d, (p, innerIndex) => {
                // Filter out empty links where there is no flow
                if (p != 0) {
                    let INmigrationKey = names[outerIndex] + '-' + names[innerIndex],
                        OUTmigrationKey = names[innerIndex] + '-' + names[outerIndex];
                    if (mapList.indexOf(INmigrationKey) == -1 && mapList.indexOf(OUTmigrationKey) == -1) {
                        var dataPoint = { 'source': names[outerIndex], 'target': names[innerIndex], 'value': p }
                        mapList.push(INmigrationKey);
                        mapList.push(OUTmigrationKey);
                        parallelData.push(dataPoint);
                    }
                }

            });
        });

        let keys = ['source', 'target'];
        let color = d3.scaleOrdinal(names, colors);

        let width = 700, height = 700;

        let sankeys = sankey()
            .nodeSort(null)
            .linkSort(null)
            .nodeWidth(10)
            .nodePadding(5)
            .extent([[100, 35], [width - 100, height - 35]]);


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
            .attr("fill", d => color(d.name))
            .append("title")
            .text(d => `${d.name}\n${d.value.toLocaleString()}`);

        svg.append("g")
            .attr("stroke-opacity", 0.8)
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
            .style("font", "12px sans-serif")
            .style("font-weight", "bolder")
            .style("fill", "black")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", function (d) {
                return d.x0 < width / 2 ? d.x1 - 15 : d.x0 + 15;
            })
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x0 < width / 2 ? "end" : "start")
            .text(d => d.name);

    }

    render() {
        // set the dimensions of the graph
        return (
            <div className='sankey-wrapper'>
                <svg className="m-b-0" id='sankey-diagram-anchor'></svg>
                <h4 className="m-t-0">Source Country <span>&#8594;</span> Target Country</h4>
            </div>

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