import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { NotFoundException } from '@nestjs/common';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  describe('findOne', () => {
    it('should return a course if found', () => {
      const course = service.findOne(1);
      expect(course).toBeDefined();
      expect(course.id).toBe(1);
    });

    it('should throw NotFoundException if course does not exist', () => {
      expect(() => service.findOne(999)).toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return a new course', () => {
      const newCourse = service.create({
        title: 'NestJS Basics',
        level: 'Intermediate',
        duration: '6 weeks',
      });

      expect(newCourse).toBeDefined();
      expect(newCourse.id).toBeGreaterThan(0);
      expect(newCourse.title).toBe('NestJS Basics');
    });
  });
});
