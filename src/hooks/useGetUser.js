import {useState} from "react"
import axios from "axios"
import { BASE_URL,Oath } from "../constant/url"

const useGetUser = () => {
    
const [profile,setProfile] = useState({})


const getUser = (event) => {
    const username = event.target.value
    console.log(Oath.client_id)
    axios
        .get(`${BASE_URL}/${username}?client_secret=${Oath.client_secret}`)
        .then((response) => {
            setProfile(response.data)
        })
        .catch((err) => {
            setProfile({})
        })

}

return {getUser,profile}
}

export default useGetUser