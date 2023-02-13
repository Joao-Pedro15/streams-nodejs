const fs = require('fs')
const zlib = require('zlib')
const  { pipeline } = require('stream')

pipeline(
  fs.createReadStream('./video/video.mp4'),
  zlib.createGzip(),
  fs.createWriteStream('./test.tar.gz'),
  err => {
    if(err) {
      console.error('Deu treta', err)
    }else {
      console.log('bombou')
    }
  }
)