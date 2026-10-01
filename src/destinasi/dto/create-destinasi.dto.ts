import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDestinasiDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  lokasi: string;

  @IsString()
  @IsNotEmpty()
  kategori: string;
}
