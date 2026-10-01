var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, } from '@nestjs/common';
import { DestinasiService } from './destinasi.service.js';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';
let DestinasiController = class DestinasiController {
    destinasiService;
    constructor(destinasiService) {
        this.destinasiService = destinasiService;
    }
    async findAll() {
        return this.destinasiService.findAll();
    }
    async findOne(id) {
        return this.destinasiService.findOne(id);
    }
    async create(createDestinasiDto) {
        return this.destinasiService.create(createDestinasiDto);
    }
    async update(id, updateDestinasiDto) {
        return this.destinasiService.update(id, updateDestinasiDto);
    }
    async remove(id) {
        return this.destinasiService.remove(id);
    }
    async findUlasan(id) {
        return this.destinasiService.findUlasan(id);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "findOne", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDestinasiDto]),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "create", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateDestinasiDto]),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "remove", null);
__decorate([
    Get(':id/ulasan'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DestinasiController.prototype, "findUlasan", null);
DestinasiController = __decorate([
    Controller('destinasi'),
    __metadata("design:paramtypes", [DestinasiService])
], DestinasiController);
export { DestinasiController };
//# sourceMappingURL=destinasi.controller.js.map