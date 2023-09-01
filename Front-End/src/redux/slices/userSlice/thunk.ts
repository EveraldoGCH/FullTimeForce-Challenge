import { getCommitsService } from "../../services/commitsService"
import { AppDispatch } from "../../store"
import { DataCommits } from "../../../types"
import { setCommits } from "./userSlice"

export const getCommitsAsync=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            const response: DataCommits[] = await getCommitsService()
            dispatch(setCommits(response))
            console.log(response)
        }
        catch(error){
            console.log("CATCH", error)
        }
    }
}