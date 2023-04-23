const BGIMG_URL1 = 'https://t1.daumcdn.net/cfile/tistory/99E3B33E5B2852742A';
const BGIMG_URL2 = 'https://t1.daumcdn.net/cfile/tistory/176DCE484E95190E19';
const BGIMG_URL3 = 'https://blog.kakaocdn.net/dn/cvXGS2/btqBW03RfsV/8ucvtATGWdo6PF3KK2PqiK/img.jpg';

const img_arr = [BGIMG_URL1,BGIMG_URL2,BGIMG_URL3];

const background_imgtag = img_arr[Math.floor(Math.random() * img_arr.length)];

document.body.style.backgroundImage = `url(${background_imgtag})`;