import{ useState }from 'react'
import './App.css'

function Card(props){
return(
    <>
    <div id="card-container">
    <div id="card"><h1>{props.username}</h1><p>Lorem ipsum dolor sit amet consectetur,adipisicing elit.Velit aut nemo maiores atque ratione amet corporis obcaecati laudantium saepe laborum. Incidunt illum explicabo beatae maiores necessitatibus facere, aliquid est tenetur!</p></div>
    <div id="card"><h1>{props.username}</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rem optio quo, quisquam eligendi quod expedita non quos minus ipsa magnam possimus totam ab voluptatibus debitis soluta, nam voluptate enim.</p></div>
    </div>
    </>
)  
}
export default Card