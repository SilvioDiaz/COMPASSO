import { useState } from "react"
import axios from "axios"
import { BASE_URL, headers } from "../constant/url"

const useGetStarred = () => {

    const [starred, setStarred] = useState({})

    //Recebe a lista de Starred do usuario do GitHub
    const getStarred = (username) => {
        axios
            .get(`${BASE_URL}/${username.login}/starred`, headers)
            .then((response) => {
                setStarred(response.data)
            })
            .catch((err) => {
                setStarred({})
            })
    }
    return { setStarred, getStarred, starred }
}

export default useGetStarred