import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {

    constructor(private githubService:GithubService){}

    @Get("commits")
    async getCommits(@Query("owner")owner:string, @Query("repo")repo:string):Promise<any>{
        return await this.githubService.getCommitsService(owner, repo)

    }

}