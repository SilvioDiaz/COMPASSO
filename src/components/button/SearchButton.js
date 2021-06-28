import React from 'react'

const SearchButton = (props) => {
    return (
        <div id = "searchButton">
            <button id = "btnSearch" onClick = {props.getSearch} type="button" className ="btn btn-outline-primary">Pesquisar</button>
        </div>
    )
}

export default SearchButton
