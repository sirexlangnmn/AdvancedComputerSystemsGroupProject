const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");


const REGION = "us-east-1";

const client = new S3Client({
  region: REGION
});

exports.main = async (req, res) => {
  const command = new ListBucketsCommand({});

  try {
    const { Owner, Buckets } = await client.send(command);
    console.log(
      `${Owner.DisplayName} owns ${Buckets.length} bucket${
        Buckets.length === 1 ? "" : "s"
      }:`,
    );
    console.log(`${Buckets.map((b) => ` • ${b.Name}`).join("\n")}`);
  } catch (err) {
    console.error(err);
  }
};
