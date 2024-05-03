const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require('fs');

const REGION = "us-east-1";
const BUCKET_NAME = "is215-a5-final-exam"; // Replace with your S3 bucket name

const client = new S3Client({
  region: REGION
});


exports.uploads2 = async (req, res) => {
  try {
    const file = req.file;
    console.log('file : ', file)

    const fileContent = fs.readFileSync(file.path);

    const params = {
      Bucket: BUCKET_NAME,
      Key: file.originalname,
      Body: fileContent,
      ContentType: file.mimetype
    };

    const command = new PutObjectCommand(params);

    await client.send(command);

    fs.unlinkSync(file.path); // Delete the temporary file

    res.json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error uploading file to S3' });
  }
};
