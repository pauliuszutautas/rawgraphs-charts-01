import * as d3 from 'd3'
import { legend } from '@rawgraphs/rawgraphs-core'
import '../d3-styles.js'

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  // destructurate visual visualOptions
  const {
    // artboard options
    width,
    height,
    background,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // styling
    colorScale,
    dotsRadius,
  } = visualOptions

  // Margin convention
const margin = {
  top: marginTop,
  right: marginRight,
  bottom: marginBottom,
  left: marginLeft,
};

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// select the SVG element
const svg = d3.select(node)
  .attr('width', width)
  .attr('height', height)
  .attr('overflow', 'visible');

console.log(data);

 // Create scales with padding
 let xScale = d3.scaleLinear()
 .domain(d3.extent(data, d => d.x))
 .rangeRound([dotsRadius, innerWidth - dotsRadius])
 .nice();

let yScale = d3.scaleLinear()
 .domain(d3.extent(data, d => d.y))
 .rangeRound([innerHeight - dotsRadius, dotsRadius])
 .nice();

 // Create a group element for the margin convention
 const g = svg.append('g')
 .attr('transform', `translate(${margin.left},${margin.top})`);

// Add X axis
g.append('g')
  .attr('transform', `translate(0,${innerHeight})`)
  .call(d3.axisBottom(xScale));

// Add Y axis
g.append('g')
  .call(d3.axisLeft(yScale));

// Add dots
g.selectAll('circle')
  .data(data)
  .join('circle')
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('r', dotsRadius)
  .attr('fill', d => colorScale(d.color))
  .attr('opacity', 0.75);

// // Add title
// svg.append('text')
//   .attr('x', 10)
//   .attr('y', 20)
//   .text('My chart')
//   .styles(styles.seriesLabel);
}