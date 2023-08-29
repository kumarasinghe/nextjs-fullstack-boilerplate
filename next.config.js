/** @type {import('next').NextConfig} */
const nextConfig = {
    // TODO: remove experimental flags when stabilized
    experimental: {
        instrumentationHook: true,
        serverActions: true,
    },
};

module.exports = nextConfig;
