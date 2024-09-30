import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async create(person: Partial<Person>): Promise<Person> {
    const newPerson = this.personRepository.create(person);
    return this.personRepository.save(newPerson);
  }

  async findAllWithAnimals(): Promise<Person[]> {
    return this.personRepository.find({
      relations: ['animals'],
    });
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return person;
  }

  async findOneWithAnimals(id: number): Promise<Person> {
    if (isNaN(id)) {
      throw new NotFoundException('Invalid ID');
    }
    const person = await this.personRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return person;
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async createMany(persons: Person[]): Promise<Person[]> {
    return this.personRepository.save(persons);
  }

  async update(id: number, updateData: Partial<Person>): Promise<Person> {
    await this.personRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.personRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
  }
}
