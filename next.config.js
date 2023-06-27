/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './src/config/imgLoader.js',
  },
}
