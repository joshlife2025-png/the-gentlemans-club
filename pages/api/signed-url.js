import AWS from 'aws-sdk'
const s3 = new AWS.S3({region:'us-east-1'})
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const {key, contentType} = req.body
  const url = s3.getSignedUrl('putObject',{
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Expires: 60,
    ContentType: contentType,
    ACL: 'private'
  })
  res.json({url})
}
