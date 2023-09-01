import {  useEffect } from "react"
import { useAppDispatch } from "./useRedux"
import { setCommits } from "../redux/slices/userSlice/userSlice"
import { finishLoadingUi } from "../redux/slices/uiSlice/uiSlice"


export const useFetchData = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const baseUrl = "http://localhost:5000"
        const url = "/github/commits?owner=everaldogch&repo=fulltimeforce-challenge"
        fetch(baseUrl + url)
            .then(response => response.json())
            .then(json => {
                dispatch(setCommits(json))
                dispatch(finishLoadingUi())
            })
            .catch(error => console.error(error));
    }, [])
}


