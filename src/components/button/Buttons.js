import React from 'react'

const Buttons = (props) => {

    return (
        <div id ="buttons" className = "d-grid gap-2">
            <button id = "btnRepo" onClick = {props.getRepo} type="button" className="btn btn-outline-primary">Repositórios</button>
            <button id ="btnStarred" onClick = {props.getStarred} type="button" className="btn btn-outline-primary">Repositórios mais visitados</button>
        </div>       
    )
}

export default Buttons
