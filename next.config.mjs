/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/latest-news',
                destination: 'https://x.com/race_of_sloths/status/1852730800023781885',
                permanent: false,
            },

        ]
    },
};

export default nextConfig;
