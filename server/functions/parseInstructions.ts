import {Instruction} from "../types/Instruction";

export function parseInstructions(data: string): Instruction[] {
    // Define the regular expression pattern to match each instruction
    const instructionPattern = /\b([BSL])\s+(\d+)\s+(\d+)\b/g;
    const instructions: Instruction[] = [];

    let match;
    while ((match = instructionPattern.exec(data)) !== null) {
        instructions.push({
            type: match[1],
            icAddress: parseInt(match[2], 10),
            dataAddress: parseInt(match[3], 10),
        });
    }

    return instructions;
}
