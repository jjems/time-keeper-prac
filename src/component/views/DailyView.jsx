// src/component/DailyView.jsx
import { useState } from "react";
import InputForm from "../InputForm";
import ScheduleList from "../ScheduleList";
import RoutineList from "../RoutineList";

function DailyView() {
  const [scheduleList, setScheduleList] = useState([]);
  const [newSchedule, setNewSchedule] = useState('');
  const [selectedType, setSelectedType] = useState('todo');

  const createId = () => Date.now() + Math.random();

  const selectHandler = (type) => setSelectedType(type);

  // ✅ 루틴 추가 시 할 일에도 추가
  const addScheduleHandler = () => {
    if (newSchedule.trim() === '') return;

    if (selectedType === 'routine') {
      setScheduleList([
        ...scheduleList,
        { id: createId(), text: newSchedule, completed: false, type: 'routine' },
        { id: createId(), text: newSchedule, completed: false, type: 'todo' }
      ]);
    } else {
      setScheduleList([
        ...scheduleList,
        { id: createId(), text: newSchedule, completed: false, type: 'todo' }
      ]);
    }

    setNewSchedule('');
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') addScheduleHandler();
  };

  const toggleHandler = (id) => {
    const updated = scheduleList.map((schedule) =>
      schedule.id === id ? { ...schedule, completed: !schedule.completed } : schedule
    );
    setScheduleList(updated);
  };

  const deleteHandler = (id) => {
    setScheduleList(scheduleList.filter((schedule) => schedule.id !== id));
  };

  return (
    <div className='dailyView'>
      <h2>할 일 / 루틴 추가</h2>
      <InputForm
        newSchedule={newSchedule}
        setNewSchedule={setNewSchedule}
        selectedType={selectedType}
        selectHandler={selectHandler}
        addScheduleHandler={addScheduleHandler}
        enterHandler={enterHandler}
      />

      <ScheduleList
        scheduleList={scheduleList}
        toggleHandler={toggleHandler}
        deleteHandler={deleteHandler}
      />

      <RoutineList
        scheduleList={scheduleList}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default DailyView;
