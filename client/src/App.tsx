import "./App.css";
import CustomDropdown from "./components/CustomDropdown/CustomDropdown.tsx";
import ActionButton from "./components/ActionButton/ActionButton.tsx";
import React, { useEffect, useState } from "react";
import { fetchParsedFile } from "./functions/parseFile.ts";

function App() {
  const FR = [
    {
      value: "4",
      label: "4",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "16",
      label: "16",
    },
  ];

  const IBS = [
    {
      value: "4",
      label: "4",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "16",
      label: "16",
    },
    {
      value: "32",
      label: "32",
    },
  ];

  const IRMax = [
    {
      value: "2",
      label: "2",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "16",
      label: "16",
    },
  ];

  const Size = [
    {
      value: "64",
      label: "64",
    },
    {
      value: "128",
      label: "128",
    },
    {
      value: "256",
      label: "256",
    },
    {
      value: "512",
      label: "512",
    },
    {
      value: "1024",
      label: "1024",
    },
    {
      value: "2048",
      label: "2048",
    },
    {
      value: "4096",
      label: "4096",
    },
    {
      value: "8192",
      label: "8192",
    },
  ];

  const Latency = [
    {
      value: "0",
      label: "0",
    },
    {
      value: "1",
      label: "1",
    },
  ];

  const benchmarks = [
    {
      value: "Fbubble.trc",
      label: "Fbubble",
    },
    {
      value: "Fmatrix.trc",
      label: "Fmatrix",
    },
    {
      value: "Fperm.trc",
      label: "Fperm",
    },
    {
      value: "Fpuzzle.trc",
      label: "Fpuzzle",
    },
    {
      value: "Fqueens.trc",
      label: "Fqueens",
    },
    {
      value: "Fsort.trc",
      label: "Fsort",
    },
    {
      value: "Ftower.trc",
      label: "Ftower",
    },
    {
      value: "Ftree.trc",
      label: "Ftree",
    },
    {
      value: "All",
      label: "All",
    },
  ];

  const [selectedBenchmarks, setSelectedBenchmarks] = useState<string[]>([]);

  const handleBenchmarkSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      setSelectedBenchmarks([...selectedBenchmarks, event.target.value]);
    } else {
      setSelectedBenchmarks(
        selectedBenchmarks.filter(
          (benchmark) => benchmark !== event.target.value,
        ),
      );
    }
  };

  useEffect(() => {
    if (selectedBenchmarks.includes("All")) {
      setSelectedBenchmarks(
        benchmarks
          .filter((benchmark) => benchmark.value !== "All")
          .map((benchmark) => benchmark.value),
      );
    }
  }, [selectedBenchmarks]);

  interface ArchParams {
    FR: number;
    IBS: number;
    IRMax: number;
    Latency: number;
  }

  interface CacheParams {
    BS_IC: number;
    Size_IC: number;
    BS_DC: number;
    Size_DC: number;
  }

  const [archParams, setArchParams] = useState<ArchParams>({
    FR: 0,
    IBS: 0,
    IRMax: 0,
    Latency: 0,
  });

  const [cacheParams, setCacheParams] = useState<CacheParams>({
    BS_IC: 0,
    Size_IC: 0,
    BS_DC: 0,
    Size_DC: 0,
  });

  const simulation = async () => {
    try {
      const {B, S, L} = await fetchParsedFile(selectedBenchmarks);
      console.log(B, S, L);
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
      {/* options */}
      <div>
        <div className="selectionDiv">
          <div className="sectionArea">
            <p className="sectionAreaTitle">Parametrii Arhitecturii</p>
            <div className="selectionItem">
              <p>Fetch Rate </p>
              <CustomDropdown
                options={FR}
                placeholder={"FR"}
                value={ archParams.FR !== 0 ? archParams.FR.toString() : FR[0].value }
                sendSelectedOption={(data) =>
                  setArchParams((prevState) => {
                    return {
                      ...prevState,
                      FR: parseInt(data.value),
                    };
                  })
                }
              />
            </div>
            <div className="selectionItem">
              <p>Ins. Buffer Size </p>
              <CustomDropdown
                options={IBS}
                placeholder={"IBS"}
                value={ archParams.IBS !== 0 ? archParams.IBS.toString() : IBS[0].value }
                sendSelectedOption={(data) =>
                    setArchParams((prevState) => {
                      return {
                        ...prevState,
                        IBS: parseInt(data.value),
                      };
                    })
                }
              />
            </div>
            <div className="selectionItem">
              <p>Ins. Rate Max </p>
              <CustomDropdown
                options={IRMax}
                placeholder={"IRMax"}
                value={ archParams.IRMax !== 0 ? archParams.IRMax.toString() : IRMax[0].value }
                sendSelectedOption={(data) =>
                    setArchParams((prevState) => {
                      return {
                        ...prevState,
                        IRMax: parseInt(data.value),
                      };
                    })
                }
              />
            </div>
            <div className="selectionItem">
              <p>Latency </p>
              <CustomDropdown
                options={Latency}
                placeholder={"Latency"}
                value={ archParams.Latency !== 0 ? archParams.Latency.toString() : Latency[0].value }
                sendSelectedOption={(data) =>
                    setArchParams((prevState) => {
                      return {
                        ...prevState,
                        Latency: parseInt(data.value),
                      };
                    })
                }
              />
            </div>
          </div>

          <div className="sectionArea">
            <p className="sectionAreaTitle">Parametrii Cache</p>
            <div className="selectionItem">
              <p>Block Size </p>
              <CustomDropdown
                options={FR}
                placeholder={"BS"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Size_IC </p>
              <CustomDropdown
                options={Size}
                placeholder={"IC"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Block Size </p>
              <CustomDropdown
                options={FR}
                placeholder={"BS"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Size_DC </p>
              <CustomDropdown
                options={Size}
                placeholder={"DC"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
          </div>

          <div className="sectionAreaB">
            <p className="sectionAreaTitle">Benchmarks</p>
            {benchmarks.map((benchmark, index) => (
              <div className="selectionBench" key={index}>
                <label>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    value={benchmark.value}
                    onChange={handleBenchmarkSelection}
                  />
                  {benchmark.label}
                </label>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}

export default App;
