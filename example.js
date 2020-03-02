const { generateThumbnail } = require('./generateThumbnail');
const imagePath = 'example.jpg';
(async () => {
    const thumbPath = await generateThumbnail(imagePath);
    console.log(thumbPath);
    //if you need to use the value of 'thumbPath' in your code, you can put the code here.
})();
