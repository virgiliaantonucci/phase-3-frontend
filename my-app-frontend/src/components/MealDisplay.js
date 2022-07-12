import React from "react";
import DayCard from "./DayCard"

function MealDisplay({meals, days}){
    return(
        <div className ="ui four column grid">
            <ul className="row">
                 {days.map((day) =>(
                    <DayCard key={day.id} meals={meals} day={day}/>
                ))} 
            </ul>
        </div>
    )
}

export default MealDisplay