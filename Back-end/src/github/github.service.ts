import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class GithubService {
    constructor(private readonly httpService:HttpService){

    }
   async getCommitsService(owner, repo):Promise<AxiosResponse<any>>{
    try{
        const baseUrl="https://api.github.com"
        const response = await firstValueFrom(this.httpService.get(baseUrl+`/repos/${owner}/${repo}/commits`))
        return response.data
    }
    catch(error){
        console.log(error)
    }
    }
}