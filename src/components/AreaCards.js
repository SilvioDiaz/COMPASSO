import React, { useEffect } from 'react'
import useGetRepo from '../hooks/useGetRepo'
import useGetStarred from '../hooks/useGetStarred'
import Buttons from "./button/Buttons"
import ContentCard from './cards/ContentCard'
import DetailsCard from './cards/DetailsCard'

import "./style.css"

function CardGit({profile}) {
    const {login} = profile
    const {repo,getRepo,setRepo} = useGetRepo()
    const {starred,getStarred,setStarred} = useGetStarred()

    useEffect(() => { //Limpa objeto de repositório e Starred ao trocar de perfil
        setRepo({})
        setStarred({})
    }, [login])

    //Resgata lista de repositório e Starred para Content Card
    const listRepo = repo.length && repo.map((rep) => { 
        return(
            <ContentCard
            Details = {rep}
            />
    
        )
    })

    const listStarred = starred.length && starred.map((starr) => {
        return(
            <ContentCard
            Details = {starr}
            />
        )
    })

    //Imprime Cards
    return (
        <div className = "row row__card row-mobile__card ">
            <div className = "col-sm-12 col-md-4 col-lg-3 mb-3">

                {profile.login && (
                    <div>
                    <DetailsCard profile = {profile}/>
                    
                    <Buttons //Chama Repo e Starred da API
                        getRepo = {() => {getRepo({login}); setStarred({}) }}
                        getStarred = {() => {getStarred({login}); setRepo({})}}
                    />
                    </div>
                )}

            </div>
            {/* Imprime Repositório e Starred caso tenham conteudo */}
            <div className = "col-sm-12 col-md-8 col-lg-9 contents-component">

                {repo.length && repo.length !== 0 ? (

                    <div>
                        <h2>Repositório</h2>
                        {listRepo}
                    </div>

                ): //Caso repositório esteja vazio
                "Nenhum repositório encontrado"
                }
                
                {starred.length && starred.length !== 0 ? (
                    <div>
                        <h2>Starred</h2>
                        {listStarred}
                    </div>
                ): //Caso Starred esteja vazia
                "Nenhuma Starred encontrada"
                }

            </div>

        </div>
    )
}

export default CardGit
