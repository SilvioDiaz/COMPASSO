import React, { useEffect,useState } from 'react'
import useGetRepo from '../hooks/useGetRepo'
import useGetStarred from '../hooks/useGetStarred'
import DetailsCards from "./DetailsCards"
import Buttons from "./button/Buttons"
import ProfileCard from './cards/ProfileCard'

import "./style.css"

const CardGit = ({profile}) => {
    const {login,public_repos} = profile
    const {repo,getRepo,setRepo} = useGetRepo()
    const {starred,getStarred,setStarred} = useGetStarred()

    const [pagesRepo,setPagesRepo] = useState()

    const pageList = []

    useEffect(() => { //Limpa states ao trocar de usuario
        setRepo({})
        setStarred({})
        setPagesRepo([])
    }, [login])

    const getPages = () => { // Verifica número de paginas necessárias para lista de repositório e cria botões
        const repoNumbers = public_repos / 30

        if(repoNumbers > 1){
            const pageRepoNumbers = parseInt(repoNumbers) + 1

            for(let i = 1;i <= pageRepoNumbers;i++){
                pageList.push(
                <li class="page-item">
                    <a class="page-link" onClick = {() => {getRepo({login},i); setStarred({}) }}>{i}</a>
                </li>)
                
            }
            setPagesRepo(pageList)
        }else{
            setPagesRepo([]) //Limpa botões casa usuario tenha menos de uma pagina de repositórios 
        }


    }

    //Imprime Cards
    return (
        <main className = "row row__card row-mobile__card ">
            <section id = "profileCard_Area" className = "col-sm-12 col-md-4 col-lg-3 mb-3">

                {profile.login && (
                    <div>
                    <ProfileCard profile = {profile}/>
                    
                    <Buttons //Chama Repo e Starred da API
                        getRepo = {() => {getRepo({login},1); setStarred({});getPages()}}
                        getStarred = {() => {getStarred({login}); setRepo({}); setPagesRepo([   ]) }}
                    />

                    </div>
                )}

            </section>

            <section id = "cardArea_Details" className = "col-sm-12 col-md-8 col-lg-9 contents-component">

                {/* Imprime botões de paginação */}
                <nav aria-label="Navegação de Repositório">
                    <ul class="pagination">
                {pagesRepo}
                    </ul>
                </nav>
                <DetailsCards  /* Imprime Repositório e Starred caso tenham conteudo */
                    repo = {repo}
                    starred = {starred}
                />
               

            </section>

        </main>
    )
}

export default CardGit
