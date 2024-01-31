import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from 'src/types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  //create post
  @Post()
  @HttpCode(201)
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
    status: 201,
    description: 'created',
    type: Post,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPostDto: CreatePostDto,
  ) {
    const { public_id, url } = await this.cloudinaryService.uploadFile(
      file,
      'baza_skill',
    );
    const res = this.postsService.create(public_id, url, createPostDto);
    return res;
  }

  //get all posts
  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all testimonials',
    type: [Post],
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findAll() {
    return this.postsService.findAll();
  }

  //get post by ID
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get post by id',
    type: Post,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  //update post
  @Patch(':id')
  @ApiBody({ type: UpdatePostDto })
  @ApiResponse({
    status: 201,
    description: 'update post',
    type: Post,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: number,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const { image_id } = await this.postsService.findOne(id);
      await this.cloudinaryService.deleteFile(image_id);
      const { public_id, url } = await this.cloudinaryService.uploadFile(
        file,
        'baza_skill',
      );
      return this.postsService.update(+id, updatePostDto, public_id, url);
    }
    return this.postsService.update(+id, updatePostDto);
  }

  //delete post
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'delete post' })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'internal server error',
  })
  //  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const res = await this.postsService.remove(+id);
    await this.cloudinaryService.deleteFile(res.post.image_id);
    return res;
  }
}
