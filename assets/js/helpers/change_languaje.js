function changeLanguage() {
    const langToggle = document.getElementById('change_languaje');
    const language = langToggle.checked ? 'english' : 'spanish';
    
    if (language === 'english') {
        window.location.href = 'indexenglish.html';
    } else {
        window.location.href = 'index.html';
    }
}

const langToggle = document.getElementById('change_languaje');
langToggle.addEventListener('change', changeLanguage);

export default 'change_languaje'