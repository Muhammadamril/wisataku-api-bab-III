import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';

@Injectable()
export class DestinasiService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.destinasi.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!destinasi) {
      throw new NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
    }

    return destinasi;
  }

  async create(data: CreateDestinasiDto) {
    return this.prisma.destinasi.create({
      data: {
        nama: data.nama,
        lokasi: data.lokasi,
        kategori: data.kategori,
        hargaTiket: 0,
      },
    });
  }

  async update(id: number, data: UpdateDestinasiDto) {
    await this.findOne(id);

    return this.prisma.destinasi.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.destinasi.delete({
      where: {
        id,
      },
    });
  }

  async findUlasan(id: number) {
    return this.prisma.ulasan.findMany({
      where: {
        destinasiId: id,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
}
