import React from 'react'

function ContentCard({Details}) {
    const {name,description,svn_url} = Details

    return (

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <a href={svn_url} target="_blank" class="btn btn-outline-primary">Ver mais</a>
            </div>
        </div>
    )
}

export default ContentCard
