import { S3 } from 'aws-sdk';
import { config } from 'dotenv';
import * as uniqid from 'uniqid';

config();

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export async function uploadFile(file: Express.Multer.File) {
  const key = uniqid();

  return await s3_upload(
    file.buffer,
    process.env.AWS_BUCKET_NAME,
    key,
    file.mimetype,
  );
}

async function s3_upload(
  file: Buffer,
  bucket: string,
  key: string,
  mimetype: string,
) {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: file,
    ContentType: mimetype,
    ContentDisposition: 'inline',
    CreateBucketConfiguration: {
      LocationsConstraint: process.env.AWS_BUCKET_REGION,
    },
  };

  try {
    return s3.upload(params).promise();
  } catch (error) {
    console.log(error);
  }
}

export async function downloadFile(key: string) {
  const downloadParams = {
    Key: key,
    Bucket: process.env.AWS_BUCKET_NAME,
  };

  return s3.getObject(downloadParams).createReadStream();
}
