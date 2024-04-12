const langToggle = document.querySelector('.btn-language')
const currentLang = window.location.href.includes('indexenglish.html')
langToggle.checked = currentLang

function changeLanguaje(Language) {
    if (langToggle.checked) {
        window.location.href = 'indexenglish.html';
    } else {
        window.location.href = 'index.html'
    }
}
langToggle.addEventListener

export default changeLanguaje