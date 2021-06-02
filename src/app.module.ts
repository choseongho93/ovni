import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [MoviesModule],
  controllers: [, MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
