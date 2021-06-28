import { useState } from "react"
import axios from "axios"
import { BASE_URL, headers } from "../constant/url"

const useGetRepo = () => {
    const [repo, setRepo] = useState({})

    //Resgata lista de repositórios de usuario do GitHub
    const getRepo = (username, number) => {
        axios
            .get(`${BASE_URL}/${username.login}/repos?page=${number}`, headers)
            .then((response) => {
                setRepo(response.data)
            })
            .catch((err) => {
                setRepo({})
            })

    }
    return { setRepo, getRepo, repo }
}

export default useGetRepo