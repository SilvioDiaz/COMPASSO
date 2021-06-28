import React from 'react'

const ContentCard = ({Details}) => {
    const {name,description,svn_url} = Details

    return (

        <div id = "contentCard" className = "card mb-3">
            <div className = "card-body">
                <h5 className = "card-title">{name}</h5>
                <p className = "card-text">{description}</p>
                <a href={svn_url} target="_blank" rel="noreferrer" className = "btn btn-outline-primary">Ver mais</a>
            </div>
        </div>
    )
}

export default ContentCard
