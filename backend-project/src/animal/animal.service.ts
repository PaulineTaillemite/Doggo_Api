import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(animal: Partial<Animal>): Promise<Animal> {
    const newAnimal = this.animalRepository.create(animal);
    return this.animalRepository.save(newAnimal);
  }

  async findAllWithOwners(): Promise<Animal[]> {
    return this.animalRepository.find({
      relations: ['owner'],
    });
  }

  async findAll(): Promise<Animal[]> {
    return this.animalRepository.find({
      relations: ['owner'],
    });
  }

  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!animal) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
    return animal;
  }

  async update(id: number, updateData: Partial<Animal>): Promise<Animal> {
    await this.animalRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.animalRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
  }
}
