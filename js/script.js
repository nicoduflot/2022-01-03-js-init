// création d'une petite bobliothèque de fonctions 
// a utiliser sur tout le site

// vérifier le chargement de la page DOMContentLoaded
function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

// raccourcis du querySelector
function s(selector){
    return document.querySelector(selector);
}

// raccourcis du querySelectorAll
function sAll(selector){
    return document.querySelectorAll(selector);
}

// fonction de création et suppression de cookie
// par défaut, dans durée en jour du cookie, le cookie appelé sera détruit
// setCookie('monCookie'); // donne la date actuelle moins un jour en date d'expiration
function setCookie(name, value = '', days = -1){
    let dateNow = new Date();
    dateNow.setTime( dateNow.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
    document.cookie = `${name}=${value}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
}

function getCookie(name){
    let tabCookie = document.cookie.split('; ');
    //console.table(tabCookie);
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        //console.table(tabValue);
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

function clearCookie(){
    let tabCookie = document.cookie.split('; ');
    //console.table(tabCookie);
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        setCookie(tabValue[0]);
    }
}