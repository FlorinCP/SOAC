import {SimulationResponse} from "../../types/simulationResponse.ts";

export default function ResultTable({ simulationResults }: { simulationResults: SimulationResponse[] }) {

    function roundToDecimals(value:number, decimals:number) {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }
    return (
      <div className="resultTable">
        <div className="nameColl">
            <div className="nameCell"></div>
          {Object.keys(simulationResults[0])
              .filter((_key, index) => index !== 0)
              .map((key, index) => (
            <div className="nameCell" key={index}>
              <p>{key}</p>
            </div>
          ))}
        </div>

        {simulationResults.map((result, index) => (
          <div className="resultColl" key={index}>
            {
              <div className="resultCell">
                <p>{simulationResults[index].filename}</p>
              </div>
            }
            {Object.values(result)
              .filter((_value, index) => index !== 0)
              .map((value, index) => (
                <div className="resultCell" key={index}>
                  <p>{roundToDecimals(value, 4)}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    );
}
