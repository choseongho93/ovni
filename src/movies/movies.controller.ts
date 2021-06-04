import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController{

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('/search')
    search(@Query("year") searchingyear){
        return `We are searching for a movie title : ${searchingyear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId : string){
        return `This will return one movie ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId : string){
        return `This will delete a movie ${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId : string, @Body() updateData){
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }

}