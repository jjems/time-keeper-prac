// src/component/ScheduleList.jsx
import React from "react";

function ScheduleList({ scheduleList, toggleHandler, deleteHandler }){
    return (
        <div className='schedule-area'>
            {/* 할 일 */}
            <div className='before'>
                <h2>할 일</h2>
                <ul>
                    {scheduleList
                        .filter(schedule => schedule.type === "todo" && !schedule.completed)
                        .map((schedule) => (
                            <li key={schedule.id}>
                                <input 
                                    type="checkbox"
                                    checked={schedule.completed}
                                    onChange={() => toggleHandler(schedule.id)}
                                />
                                {schedule.text}
                                <button onClick={()=> deleteHandler(schedule.id)}>x</button>
                            </li>
                    ))}
                </ul>
            </div>

            {/* 한 일 */}
            <div className='after'>
                <h2>한 일</h2>
                <ul>
                    {scheduleList
                        .filter(schedule => schedule.type === "todo" && schedule.completed)
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
    );
}

export default ScheduleList;

