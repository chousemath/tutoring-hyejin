const jimp = require('jimp');
const path = require('path');
const generateThumbnail = async imgPath => {
    //generate a thumbnail image
    //get the absolute file path to that thumbnail image (thumbPath)
    const thumbPath = path.format({
        /*
         * Joseph: I made a small modification to the output directory to
         * keep the project directory a little cleaner while testing.
         * */
        dir: path.join(path.parse(imgPath).dir, 'output'),
        //You can use either Date.now() or longerTimestamp() for the 'name'
        name: `${longerTimestamp()}-${Math.floor(Math.random() * 90) + 10}`,
        ext: path.extname(imgPath),
    });
    try {
        const result = await jimp.read(imgPath);
        /*
         * Joseph: great job on resizing the image!
         * Can you also make sure to crop the image before
         * resizing and saving the image so that we can
         * maintain aspect ratio? If you have a very wide image,
         * the resized version looks a little strange.
         * Please examine example.jpg and output/2020-03-03-1583191160479-54.jpg.
         * The aspect ratio of the thumbnail is not like the original.
         * */
        await result
            .resize(50, 50) // resize
            .write(thumbPath); // save
        return thumbPath;
    } catch (err) {
        console.log(err);
    }
};
const longerTimestamp = () => {
    // YYYY-MM-DD-timestamp
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
    }-${Date.now()}`;
};

module.exports = { generateThumbnail };
