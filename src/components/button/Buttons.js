import React from 'react'

function Buttons(props) {

    return (
        <div className = "d-grid gap-2">
            <button onClick = {props.getRepo} type="button" class="btn btn-outline-primary">Repositórios</button>
            <button onClick = {props.getStarred} type="button" class="btn btn-outline-primary">Repositórios mais visitados</button>
        </div>       
    )
}

export default Buttons
