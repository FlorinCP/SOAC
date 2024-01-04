import React, { useEffect, useState } from "react";

export default function Benchmarks({sendSelectedBenchmarks}: {sendSelectedBenchmarks: (benchmarks: string[]) => void}) {
  const [selectedBenchmarks, setSelectedBenchmarks] = useState<string[]>([]);

    useEffect(() => {
        sendSelectedBenchmarks(selectedBenchmarks);
    }, [selectedBenchmarks]);

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

  return (
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
  );
}
