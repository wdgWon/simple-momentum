const BGIMG_URL1 = 'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg';
const BGIMG_URL2 = 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg';
const BGIMG_URL3 = 'https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881_960_720.jpg';

const img_arr = [BGIMG_URL1,BGIMG_URL2,BGIMG_URL3];

const background_imgtag = img_arr[Math.floor(Math.random() * img_arr.length)];

document.body.style.backgroundImage = `url(${background_imgtag})`;