import React, { useMemo } from "react";
import { AreaClosed } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleTime, scaleLinear } from "@visx/scale";
import { withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { LinearGradient } from "@visx/gradient";
import { max, extent } from "d3-array";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
// Data
import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { sampleDataGraph, ISampleDataGraph } from "./GraphData";

type TooltipData = ISampleDataGraph;

const stock = sampleDataGraph.slice(1);

const latestValue = sampleDataGraph[sampleDataGraph.length - 1];

console.log(latestValue);

// accessors
const getDate = (d: ISampleDataGraph) => new Date(d.date);
const getStockValue = (d: ISampleDataGraph) => d.value;

console.log("data", sampleDataGraph);
console.log("sliced", stock);

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip<AreaProps, TooltipData>(
  ({
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null;

    const theme = useTheme();

    const background = theme.palette.primary.main;
    const background2 = theme.palette.primary.main;
    const accentColor = latestValue.value >= 80 ? "#df3d32" : "#edffea";

    // bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(stock, getDate) as [Date, Date],
        }),
      [innerWidth, margin.left]
    );
    const stockValueScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],
          nice: true,
        }),
      [margin.top, innerHeight]
    );

    const GraphBox = styled.div`
      display: flex;
      align-items: center;
    `;

    return (
      <GraphBox>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#area-background-gradient)"
          />
          <LinearGradient
            id="area-background-gradient"
            from={background}
            to={background2}
          />
          <LinearGradient
            id="area-gradient"
            from={accentColor}
            to={accentColor}
            toOpacity={0.1}
          />
          <GridRows
            left={margin.left}
            scale={stockValueScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <AreaClosed<ISampleDataGraph>
            data={stock}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => stockValueScale(getStockValue(d)) ?? 0}
            yScale={stockValueScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
        </svg>
      </GraphBox>
    );
  }
);

// type TooltipData = AppleStock;

// const stock = appleStock.slice(800);
// export const background = "#3b6978";
// export const background2 = "#204051";
// export const accentColor = "#edffea";
// export const accentColorDark = "#75daad";

// // accessors
// const getDate = (d: AppleStock) => new Date(d.date);
// const getStockValue = (d: AppleStock) => d.close;

// console.log("data", appleStock);
// console.log("sliced", stock);

// export type AreaProps = {
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
// };

// export default withTooltip<AreaProps, TooltipData>(
//   ({
//     width,
//     height,
//     margin = { top: 0, right: 0, bottom: 0, left: 0 },
//   }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
//     if (width < 10) return null;

//     // bounds
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;

//     // scales
//     const dateScale = useMemo(
//       () =>
//         scaleTime({
//           range: [margin.left, innerWidth + margin.left],
//           domain: extent(stock, getDate) as [Date, Date],
//         }),
//       [innerWidth, margin.left]
//     );
//     const stockValueScale = useMemo(
//       () =>
//         scaleLinear({
//           range: [innerHeight + margin.top, margin.top],
//           domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],
//           nice: true,
//         }),
//       [margin.top, innerHeight]
//     );

//     const GraphBox = styled.div`
//       display: flex;
//       align-items: center;
//     `;

//     return (
//       <GraphBox>
//         <svg width={width} height={height}>
//           <rect
//             x={0}
//             y={0}
//             width={width}
//             height={height}
//             fill="url(#area-background-gradient)"
//           />
//           <LinearGradient
//             id="area-background-gradient"
//             from={background}
//             to={background2}
//           />
//           <LinearGradient
//             id="area-gradient"
//             from={accentColor}
//             to={accentColor}
//             toOpacity={0.1}
//           />
//           <GridRows
//             left={margin.left}
//             scale={stockValueScale}
//             width={innerWidth}
//             strokeDasharray="1,3"
//             stroke={accentColor}
//             strokeOpacity={0.2}
//             pointerEvents="none"
//           />
//           <GridColumns
//             top={margin.top}
//             scale={dateScale}
//             height={innerHeight}
//             strokeDasharray="1,3"
//             stroke={accentColor}
//             strokeOpacity={0.2}
//             pointerEvents="none"
//           />
//           <AreaClosed<AppleStock>
//             data={stock}
//             x={(d) => dateScale(getDate(d)) ?? 0}
//             y={(d) => stockValueScale(getStockValue(d)) ?? 0}
//             yScale={stockValueScale}
//             strokeWidth={1}
//             stroke="url(#area-gradient)"
//             fill="url(#area-gradient)"
//             curve={curveMonotoneX}
//           />
//         </svg>
//       </GraphBox>
//     );
//   }
// );
