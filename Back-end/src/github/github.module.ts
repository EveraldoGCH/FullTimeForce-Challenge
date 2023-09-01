import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { HttpModule } from '@nestjs/axios';
import { GithubController } from './github.controller';

@Module({
  imports:[HttpModule],
  controllers:[GithubController],
  providers: [GithubService]
})
export class GithubModule {}