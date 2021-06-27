import {useState} from "react"
import axios from "axios"
import { BASE_URL,headers } from "../constant/url"

const useGetStarred = () => {
    
const [starred,setStarred] = useState({})


const getStarred = (username) => {
    if(starred.length){ // Se Starred tem conteudo, limpa starred
        setStarred({})
    }else{ //Caso Starred esteja limpo, 
        axios
        .get(`${BASE_URL}/${username.login}/starred`,headers)
        .then((response) => {
            setStarred(response.data)
        })
        .catch((err) => {
            setStarred({})
        })
    }
}
return {setStarred,getStarred,starred}
}

export default useGetStarred