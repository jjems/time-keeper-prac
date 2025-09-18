// src/component/views/MonthlyView
import React from "react";

function MonthlyView({date}){
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    
    return (
        <div className="monthlyView">
            <h2>Monthly View({date})</h2>
            <p>
                {year}년 {month}월
            </p>
        </div>
    );
}

export default MonthlyView;