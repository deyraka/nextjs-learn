/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'c.pxhere.com',
                port: '',
                pathname: '/photos/**'
            }
        ]
    }
};

module.exports = nextConfig;
