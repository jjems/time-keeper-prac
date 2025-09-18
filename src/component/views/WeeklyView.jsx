// src/component/views/WeeklyView.jsx
import React from "react";

function WeeklyView({date}){
    const currentDate = new Date(date);
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return (
        <div className="weeklyView">
            <h2>Weekly View({date})</h2>
            <p>
                이번주: {startOfWeek.toISOString().slice(0,10)} ~ {""}
                {endOfWeek.toISOString().slice(0,10)}
            </p>
        </div>
    )
}

export default WeeklyView;