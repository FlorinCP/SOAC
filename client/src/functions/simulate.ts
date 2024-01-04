import { simulationParams } from "../types/simulationParams";
export async function simulate(simulationParams:simulationParams){

    const url = 'http://localhost:5000/simulate'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(simulationParams)
    };

    try{
        const response = await fetch(url, options)

        return await response.json()
    } catch (error) {
        console.error("Fetching parsed file failed:", error);
        throw error;
    }

}
