import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('partners')
export class PartnersController {
  constructor(
    private readonly partnersService: PartnersService, 
    private readonly CloudinaryService: CloudinaryService
    ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file') )
  async create(@UploadedFile() file: Express.Multer.File, @Body() CreatePartnerDto: CreatePartnerDto) {
    const {public_id, url} = await this.CloudinaryService.uploadFile(file, 'baza_skill')
    const res = this.partnersService.create(public_id, url, CreatePartnerDto)
    return res;
  }

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file') )
  async update(@Param('id') id: number, @Body() updatePartnerDto: UpdatePartnerDto, @UploadedFile() file?: Express.Multer.File,) {

    if(file) {
      const {public_cloudinary_id} = await this.partnersService.findOne(id)
      await this.CloudinaryService.deleteFile(public_cloudinary_id)
      const {public_id, url} =  await this.CloudinaryService.uploadFile(file, 'baza_skill')
      return this.partnersService.update(+id, updatePartnerDto, public_id, url);
    }
    return this.partnersService.update(+id, updatePartnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.partnersService.remove(+id);
    await this.CloudinaryService.deleteFile(res.partner.public_cloudinary_id)
    return res
  }
}
