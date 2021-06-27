import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetStarred = () => {
    
const [starred,setStarred] = useState({})


const getStarred = (username) => {
    console.log(username.login)
    axios
        .get(`${BASE_URL}/${username.login}/starred`,headers)
        .then((response) => {
            alert('foi')
            setStarred(response.data)
        })
        .catch((err) => {
            console.log(err)
            setStarred({})
        })

}
console.log(starred)
return {getStarred,starred}
}

export default useGetStarred