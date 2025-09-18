// src/component/RoutineList.jsx
import React from "react";
import '../style/Routine.css';

function RoutineList({scheduleList, deleteHandler }){
    return (
        <div className='routine'>
            <h2>루틴</h2>
            <ul>
                {scheduleList
                    .filter(schedule => schedule.type === 'routine')
                    .map((schedule) => (
                        <li key={schedule.id}>
                            {schedule.text}
                            <button onClick={() => deleteHandler(schedule.id)}>x</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default RoutineList;