import type { Goal } from "../models/Goal";

interface GoalCardProps {
    goal: Goal;
}

function GoalCard({ goal }: GoalCardProps) {
    return (
        <article className="goal-card">
            <p className="goal-card__category">
                {goal.category}
            </p>

            <h3 className="goal-card__title">
                {goal.title}
            </h3>

            <p className="goal-card__description">
                {goal.shortDescription}
            </p>

            <div className="goal-card__progress">
                <div className="goal-card__progress-info">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                </div>

                <progress
                    value={goal.progress}
                    max={100}
                />
            </div>

            <p className="goal-card__deadline">
                Deadline: {goal.deadline.toLocaleDateString()}
            </p>
        </article>
    );
}

export default GoalCard;