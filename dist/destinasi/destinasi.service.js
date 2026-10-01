var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let DestinasiService = class DestinasiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.destinasi.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findOne(id) {
        const destinasi = await this.prisma.destinasi.findUnique({
            where: { id },
        });
        if (!destinasi) {
            throw new NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
        }
        return destinasi;
    }
    async create(data) {
        return this.prisma.destinasi.create({
            data: {
                nama: data.nama,
                lokasi: data.lokasi,
                kategori: data.kategori,
                hargaTiket: 0,
            },
        });
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.destinasi.update({
            where: {
                id,
            },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.destinasi.delete({
            where: {
                id,
            },
        });
    }
    async findUlasan(id) {
        return this.prisma.ulasan.findMany({
            where: {
                destinasiId: id,
            },
            orderBy: {
                id: 'asc',
            },
        });
    }
};
DestinasiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DestinasiService);
export { DestinasiService };
//# sourceMappingURL=destinasi.service.js.map