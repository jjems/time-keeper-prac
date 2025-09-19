// src/App.jsx
import { useState } from "react";
import DailyView from "./component/views/DailyView";
import WeeklyView from "./component/views/WeeklyView";
import MonthlyView from "./component/views/MonthlyView";
import "./App.css";

function App() {
  const [view, setView] = useState("daily"); // 현재 화면 (daily / weekly / monthly)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // 선택된 날짜
  const [scheduleList, setScheduleList] = useState([]); // 전체 일정 (할 일 + 루틴)

  return (
    <div className="app">
      {/* 화면 전환 버튼 */}
      <div className="view-buttons">
        <button onClick={() => setView("monthly")}>Monthly</button>
        <button onClick={() => setView("weekly")}>Weekly</button>
        <button onClick={() => setView("daily")}>Daily</button>
      </div>

      {/* 조건부 렌더링 */}
      <div className="view-container">
        {view === "daily" && (
          <DailyView
            date={date}
            setDate={setDate}
            scheduleList={scheduleList}
            setScheduleList={setScheduleList}
          />
        )}
        {view === "weekly" && (
          <WeeklyView date={date} scheduleList={scheduleList} />
        )}
        {view === "monthly" && (
          <MonthlyView date={date} scheduleList={scheduleList} />
        )}
      </div>
    </div>
  );
}

export default App;
