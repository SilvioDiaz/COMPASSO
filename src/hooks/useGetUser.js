import {useState} from "react"
import axios from "axios"
import { BASE_URL,Oath } from "../constant/url"

const useGetUser = () => {
    
const [profile,setProfile] = useState({})


const getUser = (event) => {
    const username = event.target.value

    axios
        .get(`${BASE_URL}/${username}?client_id=${Oath.client_id}&client_secret=${Oath.client_secret}`)
        .then((response) => {
            setProfile(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

}

return {getUser,profile}
}

export default useGetUser