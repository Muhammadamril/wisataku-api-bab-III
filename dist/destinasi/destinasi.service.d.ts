import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';
export declare class DestinasiService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }>;
    create(data: CreateDestinasiDto): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }>;
    update(id: number, data: UpdateDestinasiDto): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }>;
    findUlasan(id: number): Promise<{
        id: number;
        createdAt: Date;
        destinasiId: number;
        rating: number;
        komentar: string;
    }[]>;
}
