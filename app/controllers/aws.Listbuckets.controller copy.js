// // import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

// const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

// const client = new S3Client({});


// exports.main = async (req, res) => {
//   const command = new ListBucketsCommand({});

//   try {
//     const { Owner, Buckets } = await client.send(command);
//     console.log(
//       `${Owner.DisplayName} owns ${Buckets.length} bucket${
//         Buckets.length === 1 ? "" : "s"
//       }:`,
//     );
//     console.log(`${Buckets.map((b) => ` • ${b.Name}`).join("\n")}`);
//   } catch (err) {
//     console.error(err);
//   }
// };





exports.main = async (req, res) => {
  return res.status(200).send({
      message: 'Hello World'
  });

};
