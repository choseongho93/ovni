import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}
    
    @Get()
    getAll(): MoviesController[] {
        return this.movieService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieid: number): Movie {
        return this.moviesServicce.getOne(movieid);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.movieService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.movieService.update(movieId,updateData);
    }

}
