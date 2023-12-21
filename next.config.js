module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
    
  images: {
      domains: [
      'filipizen.com', //filipizen 
      'lh3.googleusercontent.com', // google/gmail
      'images.unsplash.com', // unsplash
      'i.insider.com', //insider
      'platform-lookaside.fbsbx.com' //facebook
    ],
  },
}