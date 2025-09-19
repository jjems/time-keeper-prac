// src/component/views/WeeklyView.jsx
import React from "react";
import ScheduleList from "../ScheduleList";

function WeeklyView({ date, scheduleList }) {
  const currentDate = new Date(date);

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="weeklyView">
      <h2>Weekly View ({date})</h2>
      <p>
        이번주: {startOfWeek.toISOString().slice(0, 10)} ~{" "}
        {endOfWeek.toISOString().slice(0, 10)}
      </p>

      <div className="weekList">
        {days.map((day, i) => {
          const thisDate = new Date(startOfWeek);
          thisDate.setDate(startOfWeek.getDate() + i);
          const thisDateStr = thisDate.toISOString().slice(0, 10);

          // ✅ 할 일만 표시 (루틴 제외)
          const daySchedules = scheduleList.filter(
            (s) => s.type === "todo" && s.date === thisDateStr
          );

          return (
            <div key={day} className="dayColumn">
              <h3>
                {day}({thisDateStr.slice(8, 10)})
              </h3>
              <ScheduleList scheduleList={daySchedules} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyView;
