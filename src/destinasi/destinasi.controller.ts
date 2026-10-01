import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DestinasiService } from './destinasi.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';

@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) {}

  @Get()
  async findAll() {
    return this.destinasiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findOne(id);
  }

  @Post()
  async create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return this.destinasiService.create(createDestinasiDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDestinasiDto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(id, updateDestinasiDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.remove(id);
  }

  @Get(':id/ulasan')
  async findUlasan(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findUlasan(id);
  }
}
