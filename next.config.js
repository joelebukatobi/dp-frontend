const path = require('path');

module.exports = {
  // Add your scss file folder path here
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};
