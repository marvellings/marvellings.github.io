const show_lang = document.getElementById("show_lang");
const show_langs = document.getElementById("show_langs");
const a_lang = document.getElementById("a_lang");
const a_langs = document.getElementById("a_langs");
const dom_lang = document.getElementById("dom_lang");
const dom_langs = document.getElementById("dom_langs");
const load_lang = document.getElementById("load_lang");
const load_langs = document.getElementById("load_langs");

document.addEventListener('readystatechange', () => console.log("document.readyState " + document.readyState));

console.log("whenever: " + navigator.language);
a_lang.innerHTML = navigator.language;
a_langs.innerHTML = navigator.languages;
show_lang.innerHTML = navigator.language;
show_langs.innerHTML = navigator.languages;


const obj = window.navigator;

function keepChecking(oldValue) {
  if(oldValue) {
    setInterval(() => {
     if(obj.language !== oldValue) {
      console.log()
       console.log("poll: " + obj.language);
      oldValue = obj.language;
      show_lang.innerHTML = navigator.language;
      show_langs.innerHTML = navigator.languages;
      }
    }, 3000);
  }
}
keepChecking(obj.language);


document.addEventListener("DOMContentLoaded", function(){
    console.log("dom content loaded: " + navigator.language);
    dom_lang.innerHTML = navigator.language;
    dom_langs.innerHTML = navigator.languages;
    show_lang.innerHTML = navigator.language;
    show_langs.innerHTML = navigator.languages;
});

  window.addEventListener('load', (event) => {
    console.log("window loaded: " + navigator.language);
    load_lang.innerHTML = navigator.language;
    load_langs.innerHTML = navigator.languages;
    show_lang.innerHTML = navigator.language;
    show_langs.innerHTML = navigator.languages;
});