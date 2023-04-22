const conponents = document.querySelectorAll('#addons > div:nth-child(n+2)');
const markers = document.querySelectorAll('[name="tab"]');
const HIDDEN = 'hidden';
const markObj = {
    toggleMarkers() {
        conponents.forEach((addon, i) => addon.classList.toggle(HIDDEN,!markers[i].checked));
    },
    setDefault() {
        for(let i=1; i<conponents.length; i++){
            conponents[i].classList.add(HIDDEN);
        }
    }
}
markObj.setDefault();
markers.forEach(ele => ele.onchange = markObj.toggleMarkers);
// marker.forEach(ele => ele.onclick = markObj.toggleMarker);