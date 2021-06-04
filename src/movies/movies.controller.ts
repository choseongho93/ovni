import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController{

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('/:id')
    getOne(@Param('id') movieId : string){
        return `This will return one movie ${movieId}`;
    }

    @Post()
    create(){
        return "This will create all movies";
    }

    @Delete("/:id")
    remove(@Param('id') movieId : string){
        return `This will delete a movie ${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId : string){
        return `This will update a movie id : ${movieId}`;
    }
}