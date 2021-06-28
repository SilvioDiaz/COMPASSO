import React from 'react'
import ContentCard from './cards/ContentCard'

const DetailsCards = (props) => {
    const repo = props.repo
    const starred = props.starred


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
    

    return (
        <div>
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

        </div>
    )
}

export default DetailsCards
