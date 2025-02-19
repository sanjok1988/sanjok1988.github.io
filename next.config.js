const path = require('path')
 
module.exports = {
  basePath: "/SANJOK1988.GITHUB.IO",
  output:"export",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { unoptimized: true }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'media.dev.to',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'media2.dev.to',
  //       pathname: '**',
  //     },
  //   ],
  // },
}