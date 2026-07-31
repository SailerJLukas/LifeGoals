import "./App.css";
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
    valueDescription: "Lessons completed"
};

const goals: Goal[] = [
  reactGoal
];
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

          <button className="primary-button" type="button">
            <span>+</span>
            Add goal
          </button>
        </section>

        <section className="summary-grid">
          <article className="summary-card">
            <p>Active goals</p>
            <strong>4</strong>
            <span>Currently in progress</span>
          </article>

          <article className="summary-card">
            <p>Completed goals</p>
            <strong>2</strong>
            <span>Great work so far</span>
          </article>

          <article className="summary-card">
            <p>Upcoming deadlines</p>
            <strong>3</strong>
            <span>Within the next 30 days</span>
          </article>
        </section>

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
            <article className="goal-card">
              <div className="goal-card-header">
                <span className="category-badge">Finance</span>
                <button className="menu-button" type="button">
                  ⋯
                </button>
              </div>

              <h3>Build an emergency fund</h3>
              <p>Save enough money to cover six months of expenses.</p>

              <div className="progress-information">
                <span>€2,500 of €10,000</span>
                <strong>25%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-value progress-25" />
              </div>

              <div className="goal-footer">
                <span>Deadline</span>
                <strong>31 December 2027</strong>
              </div>
            </article>

            <article className="goal-card">
              <div className="goal-card-header">
                <span className="category-badge">Education</span>
                <button className="menu-button" type="button">
                  ⋯
                </button>
              </div>

              <h3>Learn web development</h3>
              <p>Build and publish the first version of Life Goals.</p>

              <div className="progress-information">
                <span>4 of 10 milestones</span>
                <strong>40%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-value progress-40" />
              </div>

              <div className="goal-footer">
                <span>Deadline</span>
                <strong>30 June 2027</strong>
              </div>
            </article>

            <article className="goal-card">
              <div className="goal-card-header">
                <span className="category-badge">Health</span>
                <button className="menu-button" type="button">
                  ⋯
                </button>
              </div>

              <h3>Exercise regularly</h3>
              <p>Complete three exercise sessions every week.</p>

              <div className="checklist-row">
                <input id="exercise-goal" type="checkbox" />
                <label htmlFor="exercise-goal">Complete today's exercise</label>
              </div>

              <div className="goal-footer">
                <span>Frequency</span>
                <strong>3 times per week</strong>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;