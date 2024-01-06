import FetchRateInfluenceChart, {
  DataPoint,
} from "../Charts/FetchRateInfluenceChart.tsx";
import {CacheSizeInfluenceDataPoint, ChartViewParams} from "../../types/CacheSizeInfluenceDataPoint .ts";
import { PrefetchBufferInfluenceDataPoint } from "../../types/PrefetchBufferInfluenceDataPoint .ts";
import { CacheSizeInfluenceChart } from "../Charts/CacheSizeInfluenceChart.tsx";
import { PrefetchBufferInfluenceChart } from "../Charts/PrefetchBufferInfluenceChart.tsx";



export default function ChartView({ simulationResults }: ChartViewParams ) {
  const FR = 4;
  const IR: number = simulationResults.IR;
  const ICMissRate: number = simulationResults.ICMissRate;
  const DCMissRate: number = simulationResults.DCMissRate;
  const IBS: number = 4;

  const exampleData: DataPoint[] = [
    { FR: FR, IR: IR, ICMissRate: ICMissRate, DCMissRate: DCMissRate },
  ];

  const cacheSizeData: CacheSizeInfluenceDataPoint[] = [
    { SIZE_IC: 64, IR: IR, RmissIC: simulationResults.ICMissRate },
  ];

  const prefetchBufferData: PrefetchBufferInfluenceDataPoint[] = [
    { IBS: IBS, IR: IR, IBE: 0 },
  ];

  return (
    <div>
      <h1>{simulationResults.filename}</h1>
      <h3>Fetch Rate Influence on Processing Rate and Miss Rate</h3>
      <FetchRateInfluenceChart dataArray={exampleData} />;
      <h3>Cache Size Influence on Processing Rate and Miss Rate</h3>
      <CacheSizeInfluenceChart dataArray={cacheSizeData} />
      <h3>
        Prefetch Buffer Size Influence on Processing Rate and Buffer Empty
        Percentage
      </h3>
      <PrefetchBufferInfluenceChart dataArray={prefetchBufferData} />
    </div>
  );
}
