const BGIMG_URL1 = 'https://t1.daumcdn.net/cfile/tistory/99E3B33E5B2852742A';
const BGIMG_URL2 = 'https://t1.daumcdn.net/cfile/tistory/176DCE484E95190E19';
const BGIMG_URL3 = 'https://blog.kakaocdn.net/dn/cvXGS2/btqBW03RfsV/8ucvtATGWdo6PF3KK2PqiK/img.jpg';
const imgElements = document.querySelectorAll('[alt="background"]');

const img_arr = {
    url : [BGIMG_URL1,BGIMG_URL2,BGIMG_URL3],
    switchImg : 1
}

setBackground();

document.body.ondblclick = () => {
    getQuoteAndAuthor();
    setBackground();
    imgElements[0].classList.toggle('fade-in');
    imgElements[1].classList.toggle('fade-out');
};


function setBackground() {

    const previous = imgElements[(img_arr.switchImg-1)%2].getAttribute('src');
    const background_imgtag = img_arr.url.filter(v => v !== previous);
    const random = ~~(Math.random() * background_imgtag.length);

    imgElements[img_arr.switchImg%2].setAttribute('src',background_imgtag[random]);
    img_arr.switchImg++;
}