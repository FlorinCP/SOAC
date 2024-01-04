import CustomDropdown from "../CustomDropdown/CustomDropdown.tsx";
import { useEffect, useState } from "react";
import { BlockSize } from "../../consts/BlockSize.ts";
import { Size } from "../../consts/Size.ts";
import { CacheParams } from "../../types/cacheParams.ts";

export default function CacheParamsBox({
  sendCacheParams,
}: {
  sendCacheParams: (cacheParams: CacheParams) => void;
}) {
  const [cacheParams, setCacheParams] = useState<CacheParams>({
    BS_IC: parseInt(BlockSize[0].value),
    Size_IC: parseInt(Size[0].value),
    BS_DC: parseInt(BlockSize[0].value),
    Size_DC: parseInt(Size[0].value),
  });

  useEffect(() => {
    sendCacheParams(cacheParams);
  }, [cacheParams]);

  return (
    <div className="sectionArea">
      <p className="sectionAreaTitle">Parametrii Cache</p>
      <div className="selectionItem">
        <p>Block Size IC</p>
        <CustomDropdown
          options={BlockSize}
          placeholder={"BS"}
          value={
            cacheParams.BS_IC !== 0
              ? cacheParams.BS_IC.toString()
              : BlockSize[0].value
          }
          sendSelectedOption={(data) =>
            setCacheParams((prevState) => {
              return {
                ...prevState,
                BS_IC: parseInt(data.value),
              };
            })
          }
        />
      </div>
      <div className="selectionItem">
        <p>Size_IC </p>
        <CustomDropdown
          options={Size}
          placeholder={"IC"}
          value={
            cacheParams.Size_IC !== 0
              ? cacheParams.Size_IC.toString()
              : Size[0].value
          }
          sendSelectedOption={(data) =>
            setCacheParams((prevState) => {
              return {
                ...prevState,
                Size_IC: parseInt(data.value),
              };
            })
          }
        />
      </div>
      <div className="selectionItem">
        <p>Block Size DC</p>
        <CustomDropdown
          options={BlockSize}
          placeholder={"BS"}
          value={
            cacheParams.BS_DC !== 0
              ? cacheParams.BS_DC.toString()
              : BlockSize[0].value
          }
          sendSelectedOption={(data) =>
            setCacheParams((prevState) => {
              return {
                ...prevState,
                BS_DC: parseInt(data.value),
              };
            })
          }
        />
      </div>
      <div className="selectionItem">
        <p>Size_DC </p>
        <CustomDropdown
          options={Size}
          placeholder={"DC"}
          value={
            cacheParams.Size_DC !== 0
              ? cacheParams.Size_DC.toString()
              : Size[0].value
          }
          sendSelectedOption={(data) =>
            setCacheParams((prevState) => {
              return {
                ...prevState,
                Size_DC: parseInt(data.value),
              };
            })
          }
        />
      </div>
    </div>
  );
}
