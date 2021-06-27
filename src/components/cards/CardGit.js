import React from 'react'
import useGetRepo from '../../hooks/useGetRepo'
import useGetStarred from '../../hooks/useGetStarred'
import Buttons from "../button/Buttons"
import ReporCard from './ReporCard'
import StarredCard from './StarredCard'

function CardGit({profile}) {
    const {login,avatar_url,followers,following,public_repos} = profile
    const {repo,getRepo} = useGetRepo()
    const {starred,getStarred} = useGetStarred()

    return (
        <div className = "row">
            <div className = "col-3">
                <div className="card" styles="width: 5rem;">
                    <img src={avatar_url} class="card-img-top" alt={login}/>
                    <div className="card-body">
                        <p>Seguidores: {followers}</p>
                        <p>Respositórios: {public_repos}</p>
                        <p>Seguindo: {following}</p>

                        <Buttons
                        getRepo = {() => getRepo({login})}
                        getStarred = {() => getStarred({login})}
                        />
                                        
                    </div>
                </div>
            </div>

            <div className = "col-9">
                <ReporCard
                    Repo = {repo}
                />

                <StarredCard
                    Starred = {starred}
                />
            </div>

        </div>
    )
}

export default CardGit
