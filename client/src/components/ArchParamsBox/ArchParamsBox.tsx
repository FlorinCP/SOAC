import CustomDropdown from "../CustomDropdown/CustomDropdown.tsx";
import {useEffect, useState} from "react";
import {FR} from "../../consts/FR.ts";
import {IBS} from "../../consts/IBS.ts";
import {IRMax} from "../../consts/IRMax.ts";
import {Latency} from "../../consts/Latency.ts";
import {ArchParams} from "../../types/archParams.ts";

export default function ArchParamsBox({sendArchParams}: {sendArchParams: (archParams: ArchParams) => void}) {

    const [archParams, setArchParams] = useState<ArchParams>({
        FR: parseInt(FR[0].value),
        IBS: parseInt(IBS[0].value),
        IRMax: parseInt(IRMax[0].value),
        Latency: parseInt(Latency[0].value),
    });

    useEffect(() => {
        sendArchParams(archParams);
    }, [archParams]);

    return (
        <div className="sectionArea">
            <p className="sectionAreaTitle">Parametrii Arhitecturii</p>
            <div className="selectionItem">
                <p>Fetch Rate </p>
                <CustomDropdown
                    options={FR}
                    placeholder={"FR"}
                    value={
                        archParams.FR !== 0 ? archParams.FR.toString() : FR[0].value
                    }
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
                    value={
                        archParams.IBS !== 0
                            ? archParams.IBS.toString()
                            : IBS[0].value
                    }
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
                    value={
                        archParams.IRMax !== 0
                            ? archParams.IRMax.toString()
                            : IRMax[0].value
                    }
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
                    value={
                        archParams.Latency !== 0
                            ? archParams.Latency.toString()
                            : Latency[0].value
                    }
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
    )
}
