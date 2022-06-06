const a_lang = document.getElementById("a_lang");
const a_langs = document.getElementById("a_langs");
const dom_lang = document.getElementById("dom_lang");
const dom_langs = document.getElementById("dom_langs");
const load_lang = document.getElementById("load_lang");
const load_langs = document.getElementById("load_langs");
const a_lang_poll = document.getElementById("a_lang_poll");
const a_langs_poll = document.getElementById("a_langs_poll");
const dom_lang_poll = document.getElementById("dom_lang_poll");
const dom_langs_poll = document.getElementById("dom_langs_poll");
const load_lang_poll = document.getElementById("load_lang_poll");
const load_langs_poll = document.getElementById("load_langs_poll");

const f_a_lang = document.getElementById("f_a_lang");
const f_a_langs = document.getElementById("f_a_langs");
const f_dom_lang = document.getElementById("f_dom_lang");
const f_dom_langs = document.getElementById("f_dom_langs");
const f_load_lang = document.getElementById("f_load_lang");
const f_load_langs = document.getElementById("f_load_langs");
const f_a_lang_poll = document.getElementById("f_a_lang_poll");
const f_a_langs_poll = document.getElementById("f_a_langs_poll");
const f_dom_lang_poll = document.getElementById("f_dom_lang_poll");
const f_dom_langs_poll = document.getElementById("f_dom_langs_poll");
const f_load_lang_poll = document.getElementById("f_load_lang_poll");
const f_load_langs_poll = document.getElementById("f_load_langs_poll");

document.addEventListener('readystatechange', () => console.log("document.readyState " + document.readyState));

console.log("whenever: " + navigator.language);
a_lang.innerHTML = navigator.language;
a_langs.innerHTML = navigator.languages;
f_a_lang.innerHTML = frame.contentWindow.navigator.language;
f_a_langs.innerHTML = frame.contentWindow.navigator.languages;
a_lang_poll.innerHTML = navigator.language;
a_langs_poll.innerHTML = navigator.languages;
f_a_lang_poll.innerHTML = frame.contentWindow.navigator.language;
f_a_langs_poll.innerHTML = frame.contentWindow.navigator.languages;


const obj = window.navigator;

function keepChecking(oldValue) {
  if(oldValue) {
    setInterval(() => {
     if(obj.language !== oldValue) {
      console.log("poll: " + obj.language);
      oldValue = obj.language;
      a_lang_poll.innerHTML = navigator.language;
      a_langs_poll.innerHTML = navigator.languages;
      f_a_lang_poll.innerHTML = frame.contentWindow.navigator.language;
      f_a_langs_poll.innerHTML = frame.contentWindow.navigator.languages;
      dom_lang_poll.innerHTML = navigator.language;
      dom_langs_poll.innerHTML = navigator.languages;
      f_dom_lang_poll.innerHTML = frame.contentWindow.navigator.language;
      f_dom_langs_poll.innerHTML = frame.contentWindow.navigator.languages;
      load_lang_poll.innerHTML = navigator.language;
      load_langs_poll.innerHTML = navigator.languages;
      f_load_lang_poll.innerHTML = frame.contentWindow.navigator.language;
      f_load_langs_poll.innerHTML = frame.contentWindow.navigator.languages;
      }
    }, 3000);
  }
}
keepChecking(obj.language);


document.addEventListener("DOMContentLoaded", function(){
    console.log("dom content loaded: " + navigator.language);
    dom_lang.innerHTML = navigator.language;
    dom_langs.innerHTML = navigator.languages;
    f_dom_lang.innerHTML = frame.contentWindow.navigator.language;
    f_dom_langs.innerHTML = frame.contentWindow.navigator.languages;
    dom_lang_poll.innerHTML = navigator.language;
    dom_langs_poll.innerHTML = navigator.languages;
    f_dom_lang_poll.innerHTML = frame.contentWindow.navigator.language;
    f_dom_langs_poll.innerHTML = frame.contentWindow.navigator.languages;
});

  window.addEventListener('load', (event) => {
    console.log("window loaded: " + navigator.language);
    load_lang.innerHTML = navigator.language;
    load_langs.innerHTML = navigator.languages; 
    f_load_lang.innerHTML = frame.contentWindow.navigator.language;
    f_load_langs.innerHTML = frame.contentWindow.navigator.languages;
    load_lang_poll.innerHTML = navigator.language;
    load_langs_poll.innerHTML = navigator.languages;
    f_load_lang_poll.innerHTML = frame.contentWindow.navigator.language;
    f_load_langs_poll.innerHTML = frame.contentWindow.navigator.languages;
});
