import express, { Request, Response } from 'express';

const app = express();
import fs from "fs";
import path from "path";
import {Instruction} from "./types/Instruction";
import {parseInstructions} from "./functions/parseInstructions";
import {countInstructions} from "./functions/countInstructionTypes";
const PORT: string | number = process.env.PORT || 5000;


app.get('/parse-file', (req:Request, res:Response) => {

    const { filename } = req.query;

    if (typeof filename !== 'string') {
        return res.status(400).send('Filename must be a string');
    }

    const filePath = path.join(__dirname, 'TRACES', filename);

    fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
            console.error(`Error reading the file: ${filename}`, err);
            return res.status(500).send('Error reading the file');
        }

        const instructionsList:Instruction[] = parseInstructions(fileContent);
        const instructionsCount:Record<string, number> = countInstructions(instructionsList);
        res.json(instructionsCount);
    });
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


