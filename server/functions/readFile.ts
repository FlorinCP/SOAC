import * as fs from 'fs';
import * as path from 'path';
import {parseInstructions} from "./parseInstructions";
import {Instruction} from "../types/Instruction";

export default function readFile(filename: string): Promise<Instruction[]> {
    const filePath = path.join(__dirname,'..', 'TRACES', filename);

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const instructions = parseInstructions(fileContent);
                    resolve(instructions);
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
}
