exports.upload = (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        res.status(400).json({ message: 'Please select a file' });
      } else {
        res.status(200).json({ message: 'File uploaded successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error uploading file' });
    }
  };
  