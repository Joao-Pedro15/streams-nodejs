const fs = require('fs')
const zlib = require('zlib')
const  { pipeline } = require('stream')
const { promisify } = require('util')
  
const promisedPipeline = promisify(pipeline)
async function run() {
  await promisedPipeline(
    fs.createReadStream('./video/video.mp4'),
    zlib.createGzip(),
    fs.createWriteStream('./videozin.tar.gz')
  )
  console.log('deu certo!');
}

run().catch(console.error)