import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetRepo = () => {
const [repo,setRepo] = useState({})

const getRepo = (username) => {

    if(repo.length){ //Se repo não esta limpo, limpa repo
        setRepo({})
    }else{ //Se repo não existe, chama repo
        axios
        .get(`${BASE_URL}/${username.login}/repos`,headers)
        .then((response) => {
            setRepo(response.data)
        })
        .catch((err) => {
            setRepo({})
        })

    }
}
return {setRepo,getRepo,repo}
}

export default useGetRepo