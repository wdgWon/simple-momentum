const BGIMG_URL1 = 'https://t1.daumcdn.net/cfile/tistory/99E3B33E5B2852742A';
const BGIMG_URL2 = 'https://t1.daumcdn.net/cfile/tistory/176DCE484E95190E19';
const BGIMG_URL3 = 'https://blog.kakaocdn.net/dn/cvXGS2/btqBW03RfsV/8ucvtATGWdo6PF3KK2PqiK/img.jpg';
const imgElements = document.querySelectorAll('[alt="background"]');
let count = 0;

const img_arr = [BGIMG_URL1,BGIMG_URL2,BGIMG_URL3];

setBackground();

document.body.ondblclick = () => {
    getQuoteAndAuthor();
    setBackground();
    imgElements[0].classList.toggle('fade-out');
    imgElements[1].classList.toggle('fade-in');
};


function setBackground() {
    const background_imgtag = img_arr[count%3];
    imgElements[count%2].setAttribute('src',background_imgtag);
    count++;
}
