import React, { useEffect } from 'react'
import useGetRepo from '../hooks/useGetRepo'
import useGetStarred from '../hooks/useGetStarred'
import Buttons from "./button/Buttons"
import ContentCard from './cards/ContentCard'
import ProfileCard from './cards/ProfileCard'

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
        <main className = "row row__card row-mobile__card ">
            <section id = "profileCard" className = "col-sm-12 col-md-4 col-lg-3 mb-3">

                {profile.login && (
                    <div>
                    <ProfileCard profile = {profile}/>
                    
                    <Buttons //Chama Repo e Starred da API
                        getRepo = {() => {getRepo({login}); setStarred({}) }}
                        getStarred = {() => {getStarred({login}); setRepo({})}}
                    />
                    </div>
                )}

            </section>
            {/* Imprime Repositório e Starred caso tenham conteudo */}
            <section id = "cardArea_Details" className = "col-sm-12 col-md-8 col-lg-9 contents-component">

                {repo.length > 0 && (
                    <section id ="repoCard">
                        <h2>Repositório</h2>
                        {listRepo}
                    </section>

                )}{
                    repo.length === 0 && 
                    //Caso repo esteja vazio
                    "Nenhum repositório encontrado"
                }
                
                {starred.length > 0 &&(
                    <section id = "starrCard">
                        <h2>Repositórios Mais Visitados</h2>
                        {listStarred}
                    </section>
                )}{
                    starred.length === 0 &&
                    //Caso Starred esteja vazia
                    "Nenhuma Starred encontrada"
                }

            </section>

        </main>
    )
}

export default CardGit
