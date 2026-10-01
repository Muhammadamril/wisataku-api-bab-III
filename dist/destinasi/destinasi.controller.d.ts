import { DestinasiService } from './destinasi.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';
export declare class DestinasiController {
    private readonly destinasiService;
    constructor(destinasiService: DestinasiService);
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
    create(createDestinasiDto: CreateDestinasiDto): Promise<{
        nama: string;
        lokasi: string | null;
        kategori: string;
        id: number;
        hargaTiket: number;
        ratingRata: number;
        createdAt: Date;
    }>;
    update(id: number, updateDestinasiDto: UpdateDestinasiDto): Promise<{
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
