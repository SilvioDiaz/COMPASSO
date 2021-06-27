import React from 'react'

function SearchForm(props) {
    return (
        <form>
            <div className ="mb-3">
                <h2>Insira o nome do usuário do GitHub</h2>
                <input class="form-control" onChange = {props.search} name = "Git User" placeholder = "Nome de usuario do Github" />
            </div>
        </form>
    )
}

export default SearchForm
