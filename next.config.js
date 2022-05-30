/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibWFucmFqMjMiLCJhIjoiY2wzbHUwemdnMDRzdDNibzhseWd1YWtiMiJ9.Gc3UdE5h7LOCu8GKzJlrfA",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
