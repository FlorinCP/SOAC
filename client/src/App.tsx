import "./App.css";
import ActionButton from "./components/ActionButton/ActionButton.tsx";
import { useState } from "react";
import Benchmarks from "./components/Benchmarks/Benchmarks.tsx";
import ArchParamsBox from "./components/ArchParamsBox/ArchParamsBox.tsx";
import { ArchParams } from "./types/archParams.ts";
import CacheParamsBox from "./components/CacheParamsBox/CacheParamsBox.tsx";
import { CacheParams } from "./types/cacheParams.ts";
import { simulationParams } from "./types/simulationParams.ts";
import { simulate } from "./functions/simulate.ts";

function App() {
  const [simulationParams, setSimulationParams] = useState<simulationParams>({
    benchmarks: [],
    FR: 0,
    IBS: 0,
    IRMax: 0,
    Latency: 0,
    BS_IC: 0,
    Size_IC: 0,
    BS_DC: 0,
    Size_DC: 0,
  });

  const handleBenchmarks = (data: string[]) => {
    setSimulationParams((prevState) => {
      return {
        ...prevState,
        benchmarks: data,
      };
    });
  };

  const handleArchParams = (data: ArchParams) => {
    setSimulationParams((prevState) => {
      return {
        ...prevState,
        FR: data.FR,
        IBS: data.IBS,
        IRMax: data.IRMax,
        Latency: data.Latency,
      };
    });
  };

  const handleCacheParams = (data: CacheParams) => {
    setSimulationParams((prevState) => {
      return {
        ...prevState,
        BS_IC: data.BS_IC,
        Size_IC: data.Size_IC,
        BS_DC: data.BS_DC,
        Size_DC: data.Size_DC,
      };
    });
  };

  const [simulationResults, setSimulationResults] = useState({});

  const simulation = async () => {
    try {
      const response = await simulate(simulationParams);
      console.log(response);
      setSimulationResults(response);
    } catch (error) {
      console.error("Error in simulation:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>SOAC Matrix</h1>
        <h5>Simularea şi Optimizarea Arhitecturilor de Calcul</h5>
      </div>

      <div>
        <div className="selectionDiv">
          <ArchParamsBox sendArchParams={(data) => handleArchParams(data)} />

          <CacheParamsBox sendCacheParams={(data) => handleCacheParams(data)} />

          <Benchmarks
            sendSelectedBenchmarks={(data) => handleBenchmarks(data)}
          />
        </div>

        <div className="commandDiv">
          <ActionButton
            text={"Reset"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            active={true}
            color={"white"}
            backgroundColor={"rgb(238, 49, 88)"}
          >
            <span className="material-symbols-outlined">restart_alt</span>
          </ActionButton>

          <ActionButton
            text={"Simuleaza"}
            onClick={simulation}
            active={true}
            backgroundColor={"#1c79b8"}
            color={"white"}
          >
            <span className="material-symbols-outlined">check_circle</span>
          </ActionButton>
        </div>

        {simulationResults && (
          <div>
            <div className="nameColl">
              {Object.keys(simulationResults).map((key, index) => (
                <div className="nameCell" key={index}>
                  <p>{key}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
