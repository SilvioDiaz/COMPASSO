import React from 'react'
import SearchForm from '../components/form/searchForm'
import useGetUser from '../hooks/useGetUser'

function Home() {
    const {profile,getUser} = useGetUser()

    console.log(profile)
    return (
        <div>
            <SearchForm
            search = {getUser}
            />
            
        </div>
    )
}

export default Home
