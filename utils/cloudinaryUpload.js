const cloudinary = require('../config/cloudinary.config');
const fs = require('fs');

const uploadToCloudinary = async (localFilePath) => {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: 'books',
    });
    fs.unlinkSync(localFilePath);
    return result.secure_url;
  } catch (error) {
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } catch (unlinkErr) {
      console.error('Failed to remove file:', unlinkErr);
    }
    throw error;
  }
};

module.exports = uploadToCloudinary;
