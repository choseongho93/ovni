import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { MoviesModule } from './movies/movies.module';

@Module({
//  imports: [MoviesModule],
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
