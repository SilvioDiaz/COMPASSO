import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetRepo = () => {
const [repo,setRepo] = useState({})

const getRepo = (username) => {
    console.log(username)

    if(repo.length){
        setRepo({})
    }else{
        axios
        .get(`${BASE_URL}/${username.login}/repos`,headers)
        .then((response) => {
            setRepo(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            setRepo({})
        })

    }


}
return {setRepo,getRepo,repo}
}

export default useGetRepo