const path = require('path');

module.exports = {
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
