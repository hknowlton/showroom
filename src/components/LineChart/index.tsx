import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip
} from 'victory';
import { VictoryAreaProps } from 'victory-area';

import theme from '../../utils/theme';
import { formatDate } from '../../utils/format';

type VictoryDataPoint = {
  //  The string must be able to be converted to a JS date object with new Date()
  x: string | Date;
  y: number;
};

export type InterpolationProps = VictoryAreaProps['interpolation'];

type Props = {
  maxWidth: number;
  maxHeight: number;
  data: VictoryDataPoint[];
  colorScheme: 'blue' | 'green' | 'yellow' | 'red';
  // ID must be unique from other charts on the page
  id: number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  interpolation?: InterpolationProps;
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
  },
  tooltip: {
    flyoutStyle: {
      stroke: theme.main.gray.border,
      strokeWidth: 1,
      fill: theme.main.white.primary,
      marginBottom: '5px'
    },
    flyoutPadding: { top: 0, bottom: 7, left: 7, right: 7 },
    cornerRadius: 8,
    pointerLength: 10
  }
};

export function VictoryLineChartTime({
  maxWidth,
  maxHeight,
  data,
  colorScheme,
  id,
  xAxisLabel,
  yAxisLabel,
  interpolation = 'catmullRom'
}: Props) {
  const sampleDataPoint = data[0].x;
  let formattedData = data;
  if (sampleDataPoint instanceof Date === false) {
    formattedData = data.map(d => {
      return { ...d, x: new Date(d.x) };
    });
  }

  return (
    <>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={`chartFill${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.main[colorScheme].primary}
              stopOpacity={0.9}
            />
            <stop
              offset="95%"
              stopColor={theme.main[colorScheme].primary}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart width={maxWidth} height={maxHeight} theme={baseChartTheme}>
        <VictoryGroup data={formattedData} scale={{ x: 'time' }}>
          <VictoryAxis label={xAxisLabel} />
          <VictoryAxis
            label={yAxisLabel}
            dependentAxis
            tickFormat={tick => Math.round(tick)}
          />
          <VictoryArea
            interpolation={interpolation}
            style={{
              data: {
                fill: `url(#chartFill${id})`,
                stroke: theme.main[colorScheme].dark
              }
            }}
          />
          <VictoryScatter
            labels={({ datum }) => [
              `${formatDate(datum.x, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}`,
              `${datum.y}`
            ]}
            labelComponent={
              <VictoryTooltip
                // each index of this array styles the relative index in the label prop above
                style={[
                  {
                    fill: theme.main.gray.dark,
                    fontSize: '10px'
                  },
                  {
                    fill: theme.main[colorScheme].dark,
                    fontSize: '25px'
                  }
                ]}
              />
            }
            style={{
              data: {
                fill: theme.main.white.primary,
                fillOpacity: 1,
                stroke: theme.main[colorScheme].dark,
                strokeWidth: 2,
                cursor: 'pointer'
              }
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </>
  );
}
