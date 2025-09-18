// src/component/InputForm.jsx
import React from "react";

function InputForm({ newSchedule, setNewSchedule, selectedType, selectHandler, addScheduleHandler, enterHandler }) {
  return (
    <div className='schedule-input'>
      <div className='type-buttons'>
        <button
          className={selectedType === 'todo' ? 'active' : ''}
          onClick={() => selectHandler('todo')}
        >
          할 일
        </button>
        <button
          className={selectedType === 'routine' ? 'active' : ''}
          onClick={() => selectHandler('routine')}
        >
          루틴
        </button>
      </div>

      <input
        type="text"
        value={newSchedule}
        placeholder={selectedType === "todo" ? '할 일을 입력해라' : '루틴을 입력해라'}
        onChange={(e) => setNewSchedule(e.target.value)}
        onKeyDown={enterHandler}
      />
      <button onClick={addScheduleHandler}>+</button>
    </div>
  );
}

export default InputForm;
