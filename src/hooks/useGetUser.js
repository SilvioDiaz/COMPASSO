import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetUser = () => {
    
const [profile,setProfile] = useState({})

//Recebe os dados de usuario do GitHub
const getUser = (username) => {
    axios
        .get(`${BASE_URL}/${username}`, headers)
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