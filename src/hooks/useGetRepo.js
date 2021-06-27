import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetRepo = () => {
    
const [repo,setRepo] = useState({})


const getRepo = (username) => {

    axios
        .get(`${BASE_URL}/${username}`,headers)
        .then((response) => {
            setRepo(response.data)
        })
        .catch((err) => {
            console.log(err)
            setRepo({})
        })

}
console.log(repo)
return {getRepo,repo}
}

export default useGetRepo