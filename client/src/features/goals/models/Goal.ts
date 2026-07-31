import type { Milestone } from "./Milestone";

export interface Goal {
    id: number;
    title: string;
    shortDescription: string;
    benefit: string;
    category: string;

    createdAt: Date;
    startDate: Date;
    deadline: Date;

    priority: number;
    progress: number;
    milestones: Milestone[];
    completed: boolean;

    targetValue: number;
    currentValue: number;
    valueDescription: string;
}