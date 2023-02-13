const fs = require('fs')
const zlib = require('zlib')
const  { pipeline } = require('stream/promises')
  
async function run() {
  await pipeline(
    fs.createReadStream('./video/video.mp4'),
    zlib.createGzip(),
    fs.createWriteStream('./videozin2.tar.gz')
  )
  console.log('deu certo!');
}

run().catch(console.error)