import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() person: Partial<Person>): Promise<Person> {
    return this.personService.create(person);
  }

  @Get()
  findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get('with-animals')
  async findAllWithAnimals() {
    return this.personService.findAllWithAnimals();
  }

  @Get(':id/with-animals')
  findOneWithAnimals(@Param('id') id: string): Promise<Person> {
    return this.personService.findOneWithAnimals(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Person> {
    return this.personService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Person>,
  ): Promise<Person> {
    return this.personService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personService.remove(+id);
  }
}
