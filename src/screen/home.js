import React from 'react'
import CardGit from '../components/cards/CardGit'
import SearchForm from '../components/form/searchForm'
import useGetUser from '../hooks/useGetUser'

function Home() {
    const {profile,getUser} = useGetUser()

    console.log(profile)
    return (
        <div className = "container">
            <div className="row">
                <div className="col-12">
                    <SearchForm
                    search = {getUser}
                    />
                </div>
                    <CardGit
                    profile = {profile}
                    />   
            </div>
        </div>
    )
}

export default Home
