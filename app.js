/* RETO 1 */

/*const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3 },
    { name: "Fernanda", age: 16 },
    { name: "María", age: 7 },
    { name: "Sandra", age: 35 }
];

const ul = canvas.append("ul");

const li = ul.selectAll("li").data(data);

li.enter()
    .append("li")
    .text(d => d.name + " "+ d.age);*/


/* RETO 2 */
/*
const canvas = d3.select("#canvas");

const data = [
    {name: "Juan", age: 3},
    {name: "Orlando", age: 39},
    {name: "María", age: 7},
    {name: "Sandra", age: 35},
    {name: "Fernanda", age: 16},
    {name: "Maribel", age: 45},
    {name: "Sofía", age: 6}
];

const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top -margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const y = d3.scaleLinear() 
    .domain([0, 30])
    .range([iheight, 0]);

const x = d3.scaleBand()
.domain(data.map(d => d.name) ) 
.range([0, iwidth])
.padding(0.1); 

const bars = g.selectAll("rect").data(data);

bars.enter().append("rect")
.attr("class", "bar")
.style("fill", "steelblue")
.attr("x", d => x(d.name))
.attr("y", d => y(d.age))
.attr("height", d => iheight - y(d.age))
.attr("width", x.bandwidth())  

g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));


*/

/* RETO 3  */

/*
const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3 },
    { name: "Orlando", age: 39 },
    { name: "María", age: 7 },
    { name: "Sandra", age: 35 },
    { name: "Fernanda", age: 16 },
    { name: "Maribel", age: 45 },
    { name: "Sofía", age: 6 }
];

const width = 700;
const height = 500;
const margin = { top: 10, left: 50, bottom: 40, right: 10 };
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);


const datos = [];

d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {
    console.log(data);
  ;

    const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, iwidth])
    .padding(0.1);

    const y = d3.scaleLinear()
    .domain([1000000, 0])
    .range([iheight, 0]);


    const bars = g.selectAll("rect").data(data);

bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("x", d => 0)
    .attr("y", d => x(d.name))
    .attr("height", x.bandwidth() )
    .attr("width", d => iheight - y(d.value))

g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(y))
    .attr("transform", `translate(0, ${iheight})`);

g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(x));


    
});

*/
/* RETO 4 */


const canvas = d3.select("#canvas");

d3.json("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json").then(data => {
    console.log(data);


    const width = 700;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear()
        .domain([0, 90])
        .range([iheight, 0]);


    const x = d3.scaleLinear()
        .domain([0, 50000])
        .range([0, iwidth]);


    const circles = g.selectAll("circle").data(data);

    circles.enter().append("circle")
        .attr('cx',  function (d) { return  d.purchasingpower*(width/50000); })
        .attr('cy', function (d) { return height - d.lifeexpectancy*(500/90); })
        .attr('r',  function (d) { return d.population*0.000001 ; })
        .attr('stroke', 'black')
        .attr('fill', '#69a3b2');

    const texts = g.selectAll("text").data(data);

    texts.enter().append("text")
    .attr('x',  function (d) { return d.purchasingpower*(width/50000); })
    .attr('y', function (d) { return height - d.lifeexpectancy*(500/90); })
    .text( function (d) { return d.country; });

    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);

    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));



});

