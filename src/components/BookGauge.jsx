import React from 'react'; 
import * as d3 from 'd3'; 
import { scaleLinear } from 'd3-scale'; 
import { format } from 'd3-format'; 

const BookGauge = ({
    active=false,
    value=50,
    metricValue=50,
    min=0,
    max=1,
    guageLabel="",
    fontSize='48px'
   }) => {

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
 const angleScale = scaleLinear()
 .domain([0, 1])
 .range([-Math.PI / 2, Math.PI / 2])
 .clamp(true)
 const angle = angleScale(percent)

 const markerLocation = getCoordsOnArc(
 angle,
 1 - ((1 - 0.87) / 2),
 )

 const semicircleThree = <React.Fragment>
 <g>
 <path id="redArcPath" d={redArc2} fill={active ? "#6573c3" : "#441c37"} />
 </g>
 <g>
 <path d={yellowArc2} fill={active ? "#3f51b5" : "#2A2842"} />
 </g>
 <g>
 <path d={greenArc2} fill={active ? "#2c387e" : "#2c3331"} />
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
            {semicircleThree}
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
            r="0.09"
            strokeWidth="0.05"
            fill="transparent"
            stroke="white"
             />
            }
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

            {!!guageLabel && (
            <div style={{
            color: "white",
            marginTop: "0.6em",
            fontSize: "20px",
            lineHeight: "1.3em",
            fontWeight: "400",
            }}>
            { guageLabel }
            </div>
        )}


        </div>   
    )

}

const getCoordsOnArc = (angle, offset=10) => [
    Math.cos(angle - (Math.PI / 2)) * offset,
    Math.sin(angle - (Math.PI / 2)) * offset,
   ]
   
export default BookGauge;