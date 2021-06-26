import React from 'react'

function SearchForm(props) {
    return (
        <div>
            <input onChange = {props.search} name = "Git User" placeholder = "Nome de usuario do Github" />
        </div>
    )
}

export default SearchForm
