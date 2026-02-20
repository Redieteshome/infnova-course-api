import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses = [
    {
      id: 1,
      title: 'Intro to HTML',
      level: 'Beginner',
      duration: '4 weeks',
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((c) => c.id === id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  create(courseData: any) {
    const newCourse = {
      id: this.courses.length + 1,
      ...courseData,
    };

    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: number, updateData: any) {
    const course = this.findOne(id);

    Object.assign(course, updateData);

    return course;
  }

  delete(id: number) {
    const index = this.courses.findIndex((c) => c.id === id);

    if (index === -1) {
      throw new NotFoundException('Course not found');
    }

    this.courses.splice(index, 1);

    return { message: 'Course deleted successfully' };
  }
}
