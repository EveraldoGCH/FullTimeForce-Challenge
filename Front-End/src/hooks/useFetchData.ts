import { useState, useEffect } from "react"
import { useAppDispatch } from "./useRedux"
import { getCommitsAsync } from "../redux/slices/userSlice/thunk"


export const useFetchData = () => {
const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getCommitsAsync())
    },[])
}


