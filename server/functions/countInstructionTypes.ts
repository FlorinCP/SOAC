import { Instruction } from '../types/Instruction';

export function countInstructions(instructions: Instruction[]): Record<string, number> {
    return instructions.reduce((acc, instruction) => {
        acc[instruction.type] = (acc[instruction.type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}
