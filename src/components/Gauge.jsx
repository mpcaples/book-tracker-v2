import React from "react"
import * as d3 from 'd3';
import { scaleLinear } from "d3-scale"
import { format } from "d3-format"
import usePrevious from "../hooks/usePrevious";




const Gauge = ({
 active=false,
 value=50,
 metricValue=50,
 min=0,
 max=1,
 divisions=4, // controls how many arcs/color divisions there are to the gauge
 modelLabel="",
 meterLabels=["", "", "", ""],
 fontSize='48px'
}) => {
 // default arc definitions (for division of 4)

 const redArc = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(-Math.PI/2)
 .endAngle(-Math.PI/4)();

 const orangeArc = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(-Math.PI/4.1)
 .endAngle(-0.01)();

 const yellowArc = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(0.01)
 .endAngle(Math.PI/4.1)();

 const greenArc = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(Math.PI/4)
 .endAngle(Math.PI / 2)();

 // arcs definitions for semicircleThree

 const redArc2 = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(-Math.PI/2)
 .endAngle(-Math.PI/4.8)();

 const yellowArc2 = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(-Math.PI/5)
 .endAngle(Math.PI/5)();

 const greenArc2 = d3.arc()
 .innerRadius(1.025)
 .outerRadius(0.87)
 .startAngle(Math.PI/4.8)
 .endAngle(Math.PI / 2)();


 const percentScale = scaleLinear()
 .domain([min, max])
 .range([0, 1])
 const percent = percentScale(value)
 const prevValue = usePrevious(value);
 const percentPrevious = percentScale(prevValue)
 const angleScale = scaleLinear()
 .domain([0, 1])
 .range([-Math.PI / 2, Math.PI / 2])
 .clamp(true)
 const angle = angleScale(percent)
 const anglePrevious = angleScale(percentPrevious)

 const markerLocation = getCoordsOnArc(
 angle,
 1 - ((1 - 0.87) / 2),
 )

 const animateArc = d3.arc()
 .innerRadius(.95)
 .outerRadius(.95)
 .startAngle(anglePrevious ? anglePrevious : -Math.PI / 2)
 .endAngle(angle ? angle : Math.PI / 2)();

 const animateArcPath = <path d={animateArc} fill="red" id={`animatePath${value}`}/>


 /**
 definitions for arcs that create path for labels to lay on
 divisions = 4
 */

 const getArcCenterRed1point0 = (d) => {
 const redArc = d3.arc()
 .innerRadius(2)
 .outerRadius(0.5)
 .startAngle(-Math.PI/2)
 .endAngle(-Math.PI/4);

 const [x, y] = redArc.centroid(d);
 return `translate(${x}, ${y})`;
 }
 const getArcCenterRed1point5 = (d) => {
 const redArc = d3.arc()
 .innerRadius(0.7)
 .outerRadius(1.5)
 .startAngle(-Math.PI/1.7)
 .endAngle(-Math.PI/4);

 const [x, y] = redArc.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const getArcCenterOrange = (d) => {
 const orangeArc = d3.arc()
 .innerRadius(1.6)
 .outerRadius(0.9)
 .startAngle(-Math.PI/4)
 .endAngle(-0.01)

 const [x, y] = orangeArc.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const getArcCenterYellow1 = (d) => {
 const yellowArc = d3.arc()
 .innerRadius(1.5)
 .outerRadius(1)
 .startAngle(0.01)
 .endAngle(Math.PI/4.1)

 const [x, y] = yellowArc.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const getArcCenterGreen1 = (d) => {
 const greenArc = d3.arc()
 .innerRadius(1.25)
 .outerRadius(1)
 .startAngle(Math.PI/4)
 .endAngle(Math.PI / 2 );

 const [x, y] = greenArc.centroid(d);
 return `translate(${x}, ${y})`;
 }

 // divisions = 3

 const getArcCenterRed2 = (d) => {
 const arcRed = d3.arc()
 .innerRadius(1.25)
 .outerRadius(0.9)
 .startAngle(-Math.PI/2)
 .endAngle(-Math.PI/4.8)

 const [x, y] = arcRed.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const getArcCenterYellow2 = (d) => {
 const arcRed = d3.arc()
 .innerRadius(1.5)
 .outerRadius(0.9)
 .startAngle(-Math.PI/5)
 .endAngle(Math.PI/5)

 const [x, y] = arcRed.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const getArcCenterGreen2 = (d) => {
 const arcRed = d3.arc()
 .innerRadius(1.25)
 .outerRadius(0.9)
 .startAngle(Math.PI/4.8)
 .endAngle(Math.PI / 2)

 const [x, y] = arcRed.centroid(d);
 return `translate(${x}, ${y})`;
 }

 const semicircleFour = <React.Fragment>
 <g>
 <path d={redArc} fill={'transparent'} />
 <text
 textAnchor="end"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterRed1point0(redArc)}
 >{meterLabels[0].slice(0, 4)}</text>
 <path d={redArc} fill={active ? "#E84258" : "#441c37"}/>
 <text
 textAnchor="end"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterRed1point5(redArc)}
 >{meterLabels[0].slice(5)}</text>
 </g>
 <g>
 <path d={orangeArc} fill={active ? "#FB875C" : "#482a38"}/>
 <text
 textAnchor="end"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterOrange(orangeArc)}
 >{meterLabels[1]}</text>
 </g>
 <g>
 <path d={yellowArc} fill={active ? "#FDD156" : "#483936"}/>
 <text
 textAnchor="start"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterYellow1(yellowArc)}
 >{meterLabels[2]}</text>
 </g>
 <g>
 <path d={greenArc} fill={active ? "#71B537" : "#2c3331"} />
 <text
 textAnchor="start"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterGreen1(greenArc)}
 >{meterLabels[3]}</text>
 </g>
 </React.Fragment>

 const semicircleThree = <React.Fragment>
 <g>
 <path id="redArcPath" d={redArc2} fill={active ? "#E84258" : "#441c37"} />
 <text
 textAnchor="end"
 alignmentBaseline="middle"
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 transform={getArcCenterRed2(redArc2)}
 >{meterLabels[0]}</text>
 </g>
 <g>
 <path d={yellowArc2} fill={active ? "#6D7B9B" : "#2A2842"} />
 <text
 textAnchor="middle"
 alignmentBaseline="middle"
 transform={getArcCenterYellow2(yellowArc2)}
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 >
 {meterLabels[1]}
 </text>
 </g>
 <g>
 <path d={greenArc2} fill={active ? "#71B537" : "#2c3331"} />
 <text
 textAnchor="start"
 alignmentBaseline="middle"
 transform={getArcCenterGreen2(greenArc2)}
 fill="rgba(255, 255, 255, 0.7)"
 fontSize={.15}
 fontWeight={300}
 >
 {meterLabels[2]}
 </text>
 </g>
 </React.Fragment>


 return (
 <div
 key={value}
 style={{
 padding: "0px",
 textAlign: "center",
 }}>
 <svg id="gauge" style={{overflow: "visible"}}
 viewBox={[
 -1, -1,
 2, 1,
 ].join(" ")}>
 {divisions === 4 ? semicircleFour : semicircleThree}
 { !active ? <circle
 cx={markerLocation[0]}
 cy={markerLocation[1]}
 r="0.1"
 strokeWidth="0.08"
 fill="transparent"
 stroke="transparent"
 /> : <circle
 cx={markerLocation[0]}
 cy={markerLocation[1]}
 transform={`translate(${-markerLocation[0]} ${-markerLocation[1]})`}
 r="0.09"
 strokeWidth="0.05"
 fill="transparent"
 stroke="white"
 >
 <animateMotion
 repeatCount='1'
 fill='freeze'
 calcMode='spline'
 dur='.5s'
 keySplines="0 0.65 0.35 1"
 keyPoints="0; 0.5"
 keyTimes="0;1"
 >
 <mpath xlinkHref={`#animatePath${value}`} />
 </animateMotion>
 </circle>}
 {animateArcPath}

 </svg>

 <div className='meter-number-label' style={{
 color: "white",
 fontSize: fontSize,
 lineHeight: "1em",
 fontWeight: "700",
 fontFeatureSettings: "'zero', 'tnum' 1",
 }}>
 { isNaN(metricValue) ? '--' : format(",")(metricValue)}
 </div>

 {!!modelLabel && (
 <div style={{
 color: "white",
 marginTop: "0.6em",
 fontSize: "20px",
 lineHeight: "1.3em",
 fontWeight: "400",
 }}>
 { modelLabel }
 </div>
 )}


 </div>
 )
}
const getCoordsOnArc = (angle, offset=10) => [
 Math.cos(angle - (Math.PI / 2)) * offset,
 Math.sin(angle - (Math.PI / 2)) * offset,
]



export default Gauge;
