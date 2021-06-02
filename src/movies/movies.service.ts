import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity'

// 여기는 Model쪽이라고 생각하면 됨
@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:string):Movie{
        return this.movies.find(movie => movie.id === parseInt(id));
    }

}
