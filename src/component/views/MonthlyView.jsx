// src/component/views/MonthlyView.jsx
import React from "react";
import ScheduleList from "../ScheduleList";
import "../style/MonthlyView.css";

function MonthlyView({ date, scheduleList }) {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  // ✅ 이번 달 시작 요일 (0=일요일, 1=월요일...)
  const startDay = startOfMonth.getDay();

  // ✅ 이번 달 총 일수
  const totalDays = endOfMonth.getDate();

  // ✅ 날짜 배열 (앞에 공백 포함)
  const daysArray = [
    ...Array(startDay).fill(null), // 앞에 비는 칸
    ...Array.from({ length: totalDays }, (_, i) => i + 1), // 1~말일
  ];

  return (
    <div className="monthlyView">
      <h2>
        Monthly View ({year}-{String(month + 1).padStart(2, "0")})
      </h2>
      <p>
        이번달: {startOfMonth.toISOString().slice(0, 10)} ~{" "}
        {endOfMonth.toISOString().slice(0, 10)}
      </p>

      {/* ✅ 달력 그리드 */}
      <div className="calendar-grid">
        {/* 요일 헤더 */}
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="day-header">
            {d}
          </div>
        ))}

        {/* 날짜 + 일정 */}
        {daysArray.map((day, i) => {
          if (day === null) {
            return <div key={i} className="day-cell empty"></div>;
          }

          const thisDateStr = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;

          const daySchedules = scheduleList.filter(
            (s) => s.type === "todo" && s.date === thisDateStr
          );

          return (
            <div key={i} className="day-cell">
              <div className="date-label">{day}</div>
              <ul>
                {daySchedules.map((s) => (
                  <li key={s.id}>{s.text}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyView;
