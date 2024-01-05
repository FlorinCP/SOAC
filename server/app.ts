import express, { Request, Response } from "express";

const app = express();
import cors from "cors";
import fs from "fs";
import path from "path";
import { Instruction } from "./types/Instruction";
import { parseInstructions } from "./functions/parseInstructions";
import { countInstructions } from "./functions/countInstructionTypes";
import { totalInstructions } from "./types/totalInstructions";
import bodyParser from "body-parser";
import { simulationParams } from "./types/simulationParams";
import { getSimulationResponse } from "./functions/getSimulationResponse";
import { SimulationResponse } from "./types/simulationResponse";
const PORT: string | number = process.env.PORT || 5000;
import https from "https";


const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/simulate", async (req: Request, res: Response) => {
  const params: simulationParams = req.body;

  const responseArray: SimulationResponse[] = [];

  for (const filename of params.benchmarks) {
    const response = await getSimulationResponse(params, filename);
    responseArray.push(response);
  }

  res.json(responseArray);
});

app.get("/parse-file", (req: Request, res: Response) => {
  const { filename } = req.query;

  if (typeof filename !== "string") {
    return res.status(400).send("Filename must be a string");
  }

  const filePath = path.join(__dirname, "TRACES", filename);

  fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.error(`Error reading the file: ${filename}`, err);
      return res.status(500).send("Error reading the file");
    }

    const instructionsList: Instruction[] = parseInstructions(fileContent);
    const instructionsCount: Record<string, number> =
      countInstructions(instructionsList);
    const totalInstructionsCount: number = totalInstructions[filename];
    const oneCycle: number =
      totalInstructionsCount -
      instructionsCount.B -
      instructionsCount.S -
      instructionsCount.L;

    const response = {
      ...instructionsCount,
      Total: totalInstructionsCount,
      OneCycle: oneCycle,
    };

    res.json(response);
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const server = https.createServer(
  {
    key: fs.readFileSync('/etc/letsencrypt/live/sibiuparking.online/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/sibiuparking.online/fullchain.pem')
  },
  app,
);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
