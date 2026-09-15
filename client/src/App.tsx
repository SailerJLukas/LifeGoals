import { useState } from "react";
import "./App.css";
import GoalForm from "./features/goals/components/GoalForm";
import GoalCard from "./features/goals/components/GoalCard";
import type { Goal } from "./features/goals/models/Goal";

function App() {
  const reactGoal: Goal = {
    id: 1,
    title: "Learn React",
    shortDescription: "Complete the React fundamentals.",
    benefit: "Become a better frontend developer.",
    category: "Education",

    createdAt: new Date(),
    startDate: new Date(),
    deadline: new Date("2026-10-31"),

    priority: 3,
    progress: 10,
    completed: false,
    milestones: [],

    targetValue: 30,
    currentValue: 3,
    valueDescription: "Lessons completed",
  };
   const typeScriptGoal: Goal = {
    id: 2,
    title: "Learn typescript",
    shortDescription: "Complete the React fundamentals.",
    benefit: "Become a better frontend developer.",
    category: "Education",

    createdAt: new Date(),
    startDate: new Date(),
    deadline: new Date("2026-10-31"),

    priority: 2,
    progress: 35,
    completed: false,
    milestones: [],

    targetValue: 30,
    currentValue: 3,
    valueDescription: "Lessons completed",
  };
  const [goals, setGoals] = useState<Goal[]>([reactGoal,typeScriptGoal]);

  const [showGoalForm, setShowGoalForm] = useState(false);

  function addGoal(newGoal: Goal) {
  setGoals((currentGoals) => [
    ...currentGoals,
    newGoal,
  ]);

  setShowGoalForm(false);
}
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">🎯</div>

          <div>
            <h1>Life Goals</h1>
            <p>Turn your plans into progress.</p>
          </div>
        </div>

        <button className="profile-button" type="button">
          LS
        </button>
      </header>

      <main className="dashboard">
        <section className="welcome-section">
          <div>
            <p className="eyebrow">PERSONAL DASHBOARD</p>
            <h2>{goals[0].title}</h2>

            <p className="welcome-text">
              Keep moving forward. Every completed step brings you closer to
              your goals.
            </p>
          </div>

          <button className="primary-button" type="button" onClick={()=> setShowGoalForm(true)}>
            <span>+</span>
            Add goal
          </button>
        </section>

        <section className="summary-grid">
          <article className="summary-card">
            <p>Active goals</p>
            <strong>1</strong>
            <span>Currently in progress</span>
          </article>

          <article className="summary-card">
            <p>Completed goals</p>
            <strong>0</strong>
            <span>No completed goals yet</span>
          </article>

          <article className="summary-card">
            <p>Upcoming deadlines</p>
            <strong>1</strong>
            <span>Within the current goal list</span>
          </article>
        </section>

        {showGoalForm && (
  <GoalForm
    onAddGoal={addGoal}
    onCancel={() => setShowGoalForm(false)}
  />
)}
        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR PROGRESS</p>
              <h2>Active goals</h2>
            </div>

            <button className="text-button" type="button">
              View all
            </button>
          </div>

          <div className="goal-grid">
            {goals.map((goal) => (
  <GoalCard key={goal.id} goal={goal} />))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;