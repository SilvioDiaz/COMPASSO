import React from 'react'

function DetailsCard( {profile} ) {
    
    const {login,avatar_url,followers,following,public_repos} = profile

    return (
        <div className="card mb-3" styles="width: 5rem;">
        <img src={avatar_url} class="card-img-top" alt={login}/>
        <div className="card-body">
            <h3>{login}</h3>
            <p>Seguidores: {followers}</p>
            <p>Respositórios: {public_repos}</p>
            <p>Seguindo: {following}</p>                            
        </div>
    </div>

    )
}

export default DetailsCard
