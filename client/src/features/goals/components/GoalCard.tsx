import type { Goal } from "../models/Goal";

interface GoalCardProps {
  goal: Goal;
}

function GoalCard({ goal }: GoalCardProps) {
  return (
    <article className="goal-card">
      <div className="goal-card-header">
        <span className="category-badge">{goal.category}</span>

        <button className="menu-button" type="button">
          ⋯
        </button>
      </div>

      <h3>{goal.title}</h3>

      <p>{goal.shortDescription}</p>

      <div className="progress-information">
        <span>
          {goal.currentValue} of {goal.targetValue} {goal.valueDescription}
        </span>

        <strong>{goal.progress}%</strong>
      </div>

      <progress value={goal.progress} max={100}>
        {goal.progress}%
      </progress>

      <div className="goal-footer">
        <span>Deadline</span>
        <strong>{goal.deadline.toLocaleDateString()}</strong>
      </div>
    </article>
  );
}

export default GoalCard;