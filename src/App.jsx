// src/App.jsx
import { useState } from "react";
import DailyView from "./component/views/DailyView";
import WeeklyView from "./component/views/WeeklyView";
import MonthlyView from "./component/views/MonthlyView";
import "./App.css";

function App() {
  const [view, setView] = useState("daily");

  // 오늘 날짜 (yyyy-mm-dd 형식)
  const today = new Date().toISOString().slice(0,10);

  return (
    <div className="app-container">
      {/* 네비게이션 버튼 */}
      <div className="nav-buttons">
        <button
          className={view === "monthly" ? "active" : ""}
          onClick={() => setView("monthly")}
        >
          Monthly
        </button>

        <button
          className={view === "weekly" ? "active" : ""}
          onClick={() => setView("weekly")}
        >
          Weekly
        </button>
        
        <button
          className={view === "daily" ? "active" : ""}
          onClick={() => setView("daily")}
        >
          Daily
        </button>
      </div>

      {/* 조건부 렌더링 */}
      <div className="view-container">
        {view === "daily" && <DailyView date={today} />}
        {view === "weekly" && <WeeklyView date={today} />}
        {view === "monthly" && <MonthlyView date={today} />}
      </div>
    </div>
  );
}

export default App;
