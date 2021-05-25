import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// for graph margin styling
export const Margins = {
  TOP_MARGIN: 20,
  LEFT_MARGIN: 160,
  RIGHT_MARGIN: 160,
  BOTTOM_MARGIN: 30,
};

export default function Graph(props) {
  const {
    id, data, initialHeight, initialWidth, human,
  } = props;

  // set the dimensions and margins of the graph
  const margin = {
    top: Margins.TOP_MARGIN, right: Margins.RIGHT_MARGIN, bottom: Margins.BOTTOM_MARGIN, left: Margins.LEFT_MARGIN,
  };
  const width = initialWidth - margin.left - margin.right;
  const height = initialHeight - margin.top - margin.bottom;

  const svgRef = useRef(null);

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();
    // append the svg object to the body of the page
    const svg = d3.select(svgRef.current)
      // this viewbox makes graph responsive
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform',
        `translate(${margin.left},${margin.top})`);

    // Add X axis
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map((d) => { return d.label; }))
      .padding(0.2);

    const xAxis = svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Y axis
    const maxRange = human ? 500 : 2500;

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, maxRange]);

    // Update the X axis
    x.domain(data.map((d) => { return d.label; }));
    xAxis.call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5));

    // graph
    const u = svg.selectAll('rect')
      .data(data);

    u
      .enter()
      .append('rect') // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
    // .on('click', (event, d) => (d.children ? update(expand(d), d.children) : update(data, data))) // subAssembly expanded
      .transition() // and apply changes to all of them
      .duration(500)
    // .attr('class', (d) => 'rectvert') // uncomment to highlight on hover
      .attr('x', (d) => { return x(d.label); })
      .attr('y', (d) => { return y(d.value); })
      .attr('width', x.bandwidth())
      .attr('fill', '#F25F5C')
      .attr('height', (d) => { return y(0) - y(d.value); });

    u
      .exit()
      .remove();

    svg.selectAll('myRect')
      .data(data)
      .enter()
      .append('path')
      .style('stroke', '#F25F5C')
      .style('fill', 'none');

    svg.selectAll('myRect')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'barText')
      .attr('x', (d) => {
        return x(d.label) + x.bandwidth() / 2;
      })
      .style('text-anchor', 'middle')
      .attr('font-family', 'Cabin Condensed')
      .attr('font-size', '14px')
      .style('fill', '#F25F5C');
  }, []);

  return (
    <div id={id}>
      <svg ref={svgRef} />
    </div>
  );
}
