import { IsOptional, IsString } from 'class-validator';

export class UpdateDestinasiDto {
  @IsOptional()
  @IsString()
  nama?: string;

  @IsOptional()
  @IsString()
  lokasi?: string;

  @IsOptional()
  @IsString()
  kategori?: string;
}
