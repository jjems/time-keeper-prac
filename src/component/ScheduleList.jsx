// src/component/ScheduleList.jsx
import React from "react";

function ScheduleList({ scheduleList, toggleHandler, deleteHandler }) {
  return (
    <ul>
      {scheduleList.map((schedule) => (
        <li key={schedule.id}>
          {/* toggleHandler 있을 때만 체크박스 표시 */}
          {toggleHandler && (
            <input
              type="checkbox"
              checked={schedule.completed}
              onChange={() => toggleHandler(schedule.id)}
            />
          )}

          {schedule.text}

          {/* deleteHandler 있을 때만 삭제 버튼 표시 */}
          {deleteHandler && (
            <button onClick={() => deleteHandler(schedule.id)}>x</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ScheduleList;