// src/component/views/DailyView.jsx
import { useState } from "react";
import InputForm from "../InputForm";
import ScheduleList from "../ScheduleList";
import RoutineList from "../RoutineList";

function DailyView({ date, setDate, scheduleList, setScheduleList }) {
  const [newSchedule, setNewSchedule] = useState("");
  const [selectedType, setSelectedType] = useState("todo");

  const createId = () => Date.now() + Math.random();

  // ✅ 일정 추가 (루틴은 날짜 없이, 할 일은 날짜 포함)
  const addScheduleHandler = () => {
    if (newSchedule.trim() === "") return;

    if (selectedType === "routine") {
      setScheduleList([
        ...scheduleList,
        { id: createId(), text: newSchedule, completed: false, type: "routine" },
      ]);
    } else {
      setScheduleList([
        ...scheduleList,
        { id: createId(), text: newSchedule, completed: false, type: "todo", date },
      ]);
    }

    setNewSchedule("");
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") addScheduleHandler();
  };

  const toggleHandler = (id) => {
    setScheduleList(
      scheduleList.map((s) =>
        s.id === id ? { ...s, completed: !s.completed } : s
      )
    );
  };

  const deleteHandler = (id) => {
    setScheduleList(scheduleList.filter((s) => s.id !== id));
  };

  return (
    <div className="dailyView">
      <h2>Daily View ({date})</h2>

      {/* ✅ 날짜 선택 */}
      <label>
        날짜 선택:{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      {/* 입력 폼 */}
      <InputForm
        newSchedule={newSchedule}
        setNewSchedule={setNewSchedule}
        selectedType={selectedType}
        selectHandler={setSelectedType}
        addScheduleHandler={addScheduleHandler}
        enterHandler={enterHandler}
      />

      <div className="schedule-area">
        {/* 할 일 */}
        <div className="before">
          <h2>할 일</h2>
          <ScheduleList
            scheduleList={scheduleList.filter(
              (s) => s.type === "todo" && s.date === date && !s.completed
            )}
            toggleHandler={toggleHandler}
            deleteHandler={deleteHandler}
          />
        </div>

        {/* 한 일 */}
        <div className="after">
          <h2>한 일</h2>
          <ScheduleList
            scheduleList={scheduleList.filter(
              (s) => s.type === "todo" && s.date === date && s.completed
            )}
            toggleHandler={toggleHandler}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>

      {/* 루틴 */}
      <RoutineList
        scheduleList={scheduleList.filter((s) => s.type === "routine")}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default DailyView;
