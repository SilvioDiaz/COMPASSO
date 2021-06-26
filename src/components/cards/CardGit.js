import React from 'react'
import Buttons from "../button/Buttons"
import DetailsCard from './DetailsCard'

function CardGit({profile}) {
    const {login,avatar_url,followers,following,public_repos} = profile

    return (
        <div className = "row">
            <div className = "col-3">
                <div className="card" styles="width: 5rem;">
                    <img src={avatar_url} class="card-img-top" alt={login}/>
                    <div className="card-body">
                        <p>Seguidores: {followers}</p>
                        <p>Respositórios: {public_repos}</p>
                        <p>Seguindo: {following}</p>

                        <Buttons/>
                                        
                    </div>
                </div>
            </div>

            <div className = "col-9">
                <DetailsCard/>
            </div>

        </div>
    )
}

export default CardGit
