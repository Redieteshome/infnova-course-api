import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Delete } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getCourses() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  getCourse(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCourse(@Body() body: CreateCourseDto) {
    return this.coursesService.create(body);
  }

  @Put(':id')
  updateCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  deleteCourse(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.delete(id);
  }
}
