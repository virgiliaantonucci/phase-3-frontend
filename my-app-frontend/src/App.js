//import logo from './logo.svg';
import './App.css';
import MealDisplay from "./components/MealDisplay.js"
import { useState, useEffect } from 'react';




function App() {
  const [meals, setMeals] = useState([])
  const [dishes, setDishes] = useState([])
  const [days, setDays] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/meals`)
      .then(res => res.json())
      .then(data => setMeals(data))
  }, [])
  useEffect(() =>{
    fetch(`http://localhost:9292/dishes`)
      .then(res => res.json())
      .then(data => setDishes(data))
  }, [])
  useEffect(() =>{
    fetch(`http://localhost:9292/days`)
      .then(res => res.json())
      .then(data => setDays(data))
  }, [])


  return (
    <MealDisplay meals={meals} days={days}/>
  )
  

//not days for display prob
//need navbar for days, and use meals for display
//need routes for days
//find images for food
//setup seeds manually instead of faker /wrist





}

export default App;
