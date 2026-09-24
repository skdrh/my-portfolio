import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // One raster image on the whole site — the portrait in the hero, served
    // through next/image at the default quality. Everything else visual is
    // type, rule and mark.
    reactStrictMode: true,
};

export default nextConfig;
