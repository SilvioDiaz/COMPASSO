import React from 'react'

const SearchForm = (props) => {
    return (
        <section id = "searchForm">
            <div className = "mb-3 col-sm-12">
                <h2>Insira o nome do usuário do GitHub</h2>
                <input name = "Search" value = {props.inputValue} id = "searchInput" className = "form-control"
                 onChange = {props.search} name = "Git User" placeholder = "Nome de usuario do Github" />
            </div>
        </section>


    )
}

export default SearchForm
