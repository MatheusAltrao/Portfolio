/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
            {
                protocol: 'https',
                hostname: 'matheus-money.vercel.app',
            },

            {
                protocol: 'https',
                hostname: 'github.com',
            },

            {
                protocol: 'https',
                hostname: 'myportfolio-omega-nine.vercel.app',
            },

            {
                protocol: 'https',
                hostname: 'games-indol-five.vercel.app',
            },



        ],
    },
}

module.exports = nextConfig
