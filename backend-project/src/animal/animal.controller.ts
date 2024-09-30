import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Animal } from './animal.entity';
import { AnimalService } from './animal.service';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() animal: Partial<Animal>): Promise<Animal> {
    return this.animalService.create(animal);
  }

  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Get('with-owners')
  async findAllWithOwners() {
    return this.animalService.findAllWithOwners();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Animal> {
    return this.animalService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Animal>,
  ): Promise<Animal> {
    return this.animalService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.animalService.remove(+id);
  }
}
