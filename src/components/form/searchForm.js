import React from 'react'

function SearchForm(props) {
    return (
        <form>
            <div className ="mb-3">
                <input class="form-control" onChange = {props.search} name = "Git User" placeholder = "Nome de usuario do Github" />

            </div>
        </form>
    )
}

export default SearchForm
