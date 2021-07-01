import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryAxis,
  VictoryScatter
} from 'victory';
import theme from '../../utils/theme';

type Props = {
  maxWidth: number;
  maxHeight: number;
  // ID must be unique from other charts on the page
  id: number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  emptyStateMessage?: string;
};

const baseChartTheme = {
  group: {
    style: {
      data: { strokeWidth: 2, fillOpacity: 0.6 }
    },
    domainPadding: { y: 15 }
  },
  axis: {
    style: {
      axis: { stroke: theme.main.gray.medium },
      axisLabel: {
        stroke: theme.main.gray.medium,
        padding: 33,
        fontFamily: theme.StyledText.fontFamily
      },
      tickLabels: {
        fill: theme.main.gray.medium,
        padding: 15,
        textAnchor: 'middle',
        fontFamily: theme.StyledText.fontFamily,
        textTransform: 'uppercase'
      },
      grid: {
        stroke: 'transparent'
      }
    }
  }
};

export function EmptyVictoryLineChartTime({
  maxWidth,
  maxHeight,
  id,
  xAxisLabel,
  yAxisLabel,
  emptyStateMessage = 'Insufficient Data to Display Graph'
}: Props) {
  const formattedData = [
    { x: new Date('2/9/2021'), y: 2 },
    { x: new Date('2/11/2021'), y: 1 },
    { x: new Date('2/12/2021'), y: 2 },
    { x: new Date('2/13/2021'), y: 6 },
    { x: new Date('2/14/2021'), y: 5 },
    { x: new Date('2/15/2021'), y: 4 },
    { x: new Date('2/16/2021'), y: 2 },
    { x: new Date('2/17/2021'), y: 6 },
    { x: new Date('2/18/2021'), y: 3 },
    { x: new Date('2/19/2021'), y: 2 },
    { x: new Date('2/20/2021'), y: 8 },
    { x: new Date('2/21/2021'), y: 4 },
    { x: new Date('2/22/2021'), y: 2 },
    { x: new Date('2/23/2021'), y: 1 },
    { x: new Date('2/24/2021'), y: 6 },
    { x: new Date('2/25/2021'), y: 1 },
    { x: new Date('2/26/2021'), y: 1 },
    { x: new Date('2/27/2021'), y: 4 },
    { x: new Date('2/28/2021'), y: 2 },
    { x: new Date('3/1/2021'), y: 1 },
    { x: new Date('3/3/2021'), y: 3 },
    { x: new Date('3/4/2021'), y: 3 },
    { x: new Date('3/5/2021'), y: 10 },
    { x: new Date('3/6/2021'), y: 3 },
    { x: new Date('3/7/2021'), y: 6 },
    { x: new Date('3/8/2021'), y: 2 },
    { x: new Date('3/9/2021'), y: 3 },
    { x: new Date('3/10/2021'), y: 1 },
    { x: new Date('3/11/2021'), y: 7 },
    { x: new Date('3/12/2021'), y: 2 },
    { x: new Date('3/13/2021'), y: 1 },
    { x: new Date('3/14/2021'), y: 5 },
    { x: new Date('3/15/2021'), y: 7 },
    { x: new Date('3/16/2021'), y: 7 },
    { x: new Date('3/17/2021'), y: 5 },
    { x: new Date('3/18/2021'), y: 1 },
    { x: new Date('3/19/2021'), y: 2 },
    { x: new Date('3/20/2021'), y: 2 }
  ];

  return (
    <div style={{ position: 'relative', pointerEvents: 'none' }}>
      <div style={{ opacity: '0.2' }}>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id={`chartFill${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.main.gray.stormGrey}
                stopOpacity={0.9}
              />
              <stop
                offset="95%"
                stopColor={theme.main.gray.stormGrey}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart
          width={maxWidth}
          height={maxHeight}
          theme={baseChartTheme}
        >
          <VictoryGroup data={formattedData} scale={{ x: 'time' }}>
            <VictoryAxis label={xAxisLabel} />
            <VictoryAxis
              label={yAxisLabel}
              dependentAxis
              tickFormat={tick => Math.round(tick)}
            />
            <VictoryArea
              interpolation="catmullRom"
              style={{
                data: {
                  fill: `url(#chartFill${id})`,
                  stroke: theme.main.gray.dark
                }
              }}
            />
            <VictoryScatter
              style={{
                data: {
                  fill: theme.main.white.primary,
                  fillOpacity: 1,
                  stroke: theme.main.gray.dark,
                  strokeWidth: 2
                }
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '46%',
          width: '100%',
          textAlign: 'center',
          fontSize: '26px',
          fontWeight: 600,
          color: theme.main.black.primary,
          opacity: '1'
        }}
      >
        {emptyStateMessage}
      </div>
    </div>
  );
}
