/* App.jsx */
import { useState } from 'react'
import './App.css'

function App() {
  const [scheduleList, setScheduleList] = useState([]);  
  const [newSchedule, setNewSchedule] = useState('');

  // 고유 id 생성
  const createId = () => Date.now() + Math.random();

  // 할 일 추가 핸들러
  const addScheduleHandler = () => {
    if (newSchedule.trim() === '') return;
    setScheduleList([
      ...scheduleList,
      { id: createId(), text: newSchedule, completed: false }
    ]);
    setNewSchedule('');
  };

  // 엔터키 입력 핸들러
  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      addScheduleHandler();
    }
  };

  // 체크 토글 핸들러 (완료 <-> 미완료)
  const toggleHandler = (id) => {
    const updatedScheduleList = scheduleList.map((schedule) =>
      schedule.id === id ? { ...schedule, completed: !schedule.completed } : schedule
    );
    setScheduleList(updatedScheduleList);
  };

  // 삭제 핸들러
  const deleteHandler = (id) => {
    setScheduleList(scheduleList.filter((schedule) => schedule.id !== id));
  };

  return (
    <div className='dailyView'>
      {/* 할 일 작성 */}
      <h2>할 일 추가</h2>
      <div className='schedule-input'>
        <input
          type="text"
          value={newSchedule}
          placeholder='할 일 입력해라'
          onChange={(e) => setNewSchedule(e.target.value)}
          onKeyDown={enterHandler}
        />
        <button onClick={addScheduleHandler}>+</button>
      </div>

      <div className='schedule-area'>
        <div className='before'>
          {/* 할 일 목록 */}
          <h2>할 일</h2>
          <ul>
            {scheduleList
              .filter(schedule => !schedule.completed)
              .map((schedule) => (
                <li key={schedule.id}>
                  <input
                    type="checkbox"
                    checked={schedule.completed}
                    onChange={() => toggleHandler(schedule.id)}
                  />
                  {schedule.text}
                  <button onClick={() => deleteHandler(schedule.id)}>x</button>
                </li>
              ))}
          </ul>
        </div>

        <div className='after'>
          {/* 한 일 목록 */}
          <h2>한 일</h2>
          <ul>
            {scheduleList
              .filter(schedule => schedule.completed)
              .map((schedule) => (
                <li key={schedule.id}>
                  <input
                    type="checkbox"
                    checked={schedule.completed}
                    onChange={() => toggleHandler(schedule.id)}
                  />
                  {schedule.text}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='routine'>
        <h2>루틴</h2>

      </div>
    </div>
  );
}

export default App;
