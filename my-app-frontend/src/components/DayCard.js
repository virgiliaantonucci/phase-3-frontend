import React from "react";
import MealCard from "./MealCard"

function DayCard({ day, meals }) {
    return (
        <li className="card">
            {/* <div className="cardimage">
                <span className="price"></span>
                <img src={"temp"} alt={"temp"} />
            </div> */}
            <div className="details">
             <h3>{day.name}</h3>
            {meals.map((meal) =>(
                    <MealCard key={meal.id} meal={meal}/>
                ))}
                <span></span>
            </div>
        </li>
    )
}
export default DayCard