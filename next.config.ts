import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // This site ships no raster imagery on purpose, so there is nothing here
    // for the image optimiser to do. Everything visual is type, rule and mark.
    reactStrictMode: true,
};

export default nextConfig;
