import { useState } from "react";
import type { FormEvent } from "react";
import type { Goal } from "../models/Goal";

interface GoalFormProps {
  onAddGoal: (goal: Goal) => void;
  onCancel: () => void;
}

function GoalForm({ onAddGoal, onCancel }: GoalFormProps) {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [benefit, setBenefit] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState(2);
  const [targetValue, setTargetValue] = useState(1);
  const [valueDescription, setValueDescription] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newGoal: Goal = {
      id: Date.now(),
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      benefit: benefit.trim(),
      category: category.trim() || "Other",

      createdAt: new Date(),
      startDate: new Date(),
      deadline: new Date(deadline),

      priority,
      progress: 0,
      completed: false,
      milestones: [],

      targetValue,
      currentValue: 0,
      valueDescription: valueDescription.trim(),
    };

    onAddGoal(newGoal);
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <h2>Create a new goal</h2>

      <label>
        Goal name
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="For example: Learn TypeScript"
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={shortDescription}
          onChange={(event) => setShortDescription(event.target.value)}
          placeholder="What do you want to achieve?"
        />
      </label>

      <label>
        Why is this goal important?
        <textarea
          value={benefit}
          onChange={(event) => setBenefit(event.target.value)}
          placeholder="What will achieving this give you?"
        />
      </label>

      <label>
        Category
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Education, Health, Finance..."
        />
      </label>

      <label>
        Deadline
        <input
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
          required
        />
      </label>

      <label>
        Priority
        <select
          value={priority}
          onChange={(event) => setPriority(Number(event.target.value))}
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      </label>

      <label>
        Target value
        <input
          type="number"
          min="1"
          value={targetValue}
          onChange={(event) => setTargetValue(Number(event.target.value))}
        />
      </label>

      <label>
        What does the value represent?
        <input
          type="text"
          value={valueDescription}
          onChange={(event) => setValueDescription(event.target.value)}
          placeholder="Lessons completed, € saved, workouts..."
        />
      </label>

      <div className="goal-form-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="primary-button">
          Create goal
        </button>
      </div>
    </form>
  );
}

export default GoalForm;