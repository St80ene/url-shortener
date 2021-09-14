const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../model/url');

const baseUrl = process.env.BASE_URI;

const shorten = async (req, res) => {
  const { defaultUrl } = req.body;
  try {
    // Checking if base uri is valid
    if (!validUrl.isUri(baseUrl))
      return res
        .status(401)
        .json({ status: false, message: 'Invalid base Url' });

    // Generate url code
    const urlCode = shortid.generate();

    // Check validity of default uri supplied
    if (validUrl.isUri(defaultUrl)) {
      // Checking for duplicate before creating new one
      let url = await Url.findOne({ defaultUrl });
      if (url)
        return res
          .status(400)
          .json({ status: false, message: 'Url already exists', url });
      // Join generated code with base uri
      // const shortUrl = baseUrl + '/' + urlCode;
      const shortUrl = `${baseUrl}/${urlCode}`;

      const shortenedUrl = await Url.create({
        defaultUrl,
        shortUrl,
        urlCode,
      });
      return res.status(201).json({
        status: true,
        message: 'Shortened Url has been created',
        shortenedUrl,
      });
    }
    return res.status(401).json('Invalid Default Url');
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: 'Server Error.', error: error.message });
  }
};

const redirectUrl = async (req, res) => {
  const {code} = req.params

    try {
        // check for duplicates
        const url = await Url.findOne({
            urlCode: code
        })
        if (url) {
            return res.redirect(url.defaultUrl)
        } else {
            return res.status(404).json({status: false, message: 'No URL Found'})
        }

    }
    catch (error) {
        res.status(500).json({status: false, message: 'Server Error', error: error.message})
    }
};

module.exports = { shorten, redirectUrl };
