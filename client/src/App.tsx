import "./App.css";
import CustomDropdown from "./components/CustomDropdown/CustomDropdown.tsx";

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
      value: "FBUBBLE",
      label: "FBUBBLE",
    },
    {
      value: "FMATRIX",
      label: "FMATRIX",
    },
    {
      value: "PERM",
      label: "PERM",
    },
    {
      value: "FPUZZLE",
      label: "FPUZZLE",
    },
    {
      value: "FQUEENS",
      label: "FQUEENS",
    },
    {
      value: "FSORT",
      label: "FSORT",
    },
    {
      value: "FTOWER",
      label: "FTOWER",
    },
    {
      value: "FTREE",
      label: "FTREE",
    },
  ];

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
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Ins. Buffer Size </p>
              <CustomDropdown
                options={IBS}
                placeholder={"IBS"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Ins. Rate Max </p>
              <CustomDropdown
                options={IRMax}
                placeholder={"IRMax"}
                sendSelectedOption={(data) => console.log(data)}
              />
            </div>
            <div className="selectionItem">
              <p>Latency </p>
              <CustomDropdown
                options={Latency}
                placeholder={"Latency"}
                sendSelectedOption={(data) => console.log(data)}
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
                  />
                  {benchmark.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
