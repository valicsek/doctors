// @ts-check

const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.unsplash.com'],
    },
}

module.exports = withNextIntl(config)
