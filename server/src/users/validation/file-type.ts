import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileTypeValidationPipe implements PipeTransform {
  transform(pic: Express.Multer.File) {
    const imageRegex = /image/i;

    console.log(pic);

    if (imageRegex.test(pic.mimetype)) {
      return pic;
    } else {
      throw new BadRequestException('File must be of type image');
    }
  }
}
