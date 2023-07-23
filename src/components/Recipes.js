import React from "react";
import style from '../style.module.css'

const Recipe = (props)=> {
    // console.log(props)
    return (
<div className={style.recipe}>
<h1>{props.title}</h1>
<br/>
<h4>MealType:- {props.mealType}</h4>
<ol>
    {props.ingredients.map(ing=><li>{ing.text}</li>)}
   
</ol>
<p>calories:- {props.calories}</p>
<img className={style.image} src={props.image} alt="Alternative Image"/>
</div>
    )
}

export default Recipe