import React from 'react'
import AreaCards from '../components/AreaCards'
import SearchForm from '../components/form/searchForm'
import useGetUser from '../hooks/useGetUser'

function Home() {
    const {profile,getUser} = useGetUser()

    return (
        <div className = "container">
            <div className="row">
                <div>
                    <SearchForm
                    search = {getUser}
                    />
                </div>
                    <AreaCards
                    profile = {profile}
                    />   
            </div>
        </div>
    )
}

export default Home
