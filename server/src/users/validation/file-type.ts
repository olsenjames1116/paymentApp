import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileTypeValidationPipe implements PipeTransform {
  transform(value: Express.Multer.File) {
    const imageRegex = /image/i;

    if (imageRegex.test(value.mimetype)) {
      return value;
    } else {
      throw new BadRequestException('File must be of type image');
    }
  }
}
