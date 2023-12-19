module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    
    images: {
        domains: ['filipizen.com', 'images.unsplash.com'], // Add the domains where your images are hosted
      },
}