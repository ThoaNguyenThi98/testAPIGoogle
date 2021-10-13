/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  GOOGLE_GEOCODING_API: process.env.GOOGLE_GEOCODING_API,
  GOOGLE_GEOCODING_API_KEY: process.env.GOOGLE_GEOCODING_API_KEY
}
