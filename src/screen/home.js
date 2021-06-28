import React, { useState } from 'react'
import AreaCards from '../components/AreaCards'
import SearchForm from '../components/form/searchForm'
import useGetUser from '../hooks/useGetUser'
import SearchButton from '../components/button/SearchButton'

const Home = () => {
    const {profile,getUser } = useGetUser()
    const [userName,setUserName] = useState("")

    function handleUserName(event) { // Recebe valor de Input
        setUserName(event.target.value)
    }

    return (
        <div className = "container">
            <div className="row">

                <div id = "searchArea">
                    <SearchForm // Input para pesquisa
                    search = {handleUserName}
                    inputValue = {userName}
                    />
                </div>

                <div id = "buttonArea" className = "mb-3 d-flex flex-row-reverse">
                    <SearchButton // Botão de pesquisa
                        getSearch = {() => {getUser(userName);setUserName("")} } //Chama api de usuario e limpa input
                    />
                </div>

                
                <div id = "cardArea">
                    {profile.login && ( //Area com cards, conteudo e detalhes de perfil
                        <AreaCards
                            profile = { profile }
                        />  
                    )}
 
                </div>

            </div>
        </div>
    )
}

export default Home
