/*
    لیست لغات و کلمات برای جستجو
*/
let words = [
  "شکار",
  "خشم",
  "امتحان",
  "مازندران",
  "کشاورز",
  "چای",
  "شیرین",
  "کاظمی",
  "فوتبال",
  "هما",
  "حسن",
  "پارکینسون",
  "کتاب",
];

/*
    tags قرار دادن لیست لغات در تگ 
*/
const tags = document.querySelector(".tags");
const initTags = () => {
  tags.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    let lbl = document.createElement("label");
    lbl.textContent = words[i];
    tags.appendChild(lbl);
  }
};

/*
    در این بخش کاراکترهایی که در باکس جستجو وارد میشود 
    را در لیست لغات جستجو میکند و سپس نمایش میدهد.
*/
const SearchChange = document.getElementsByName("search")[0];
let search = "";
SearchChange.addEventListener("keyup", (e) => {
  SearchNow(e.target.value);
});

const SearchNow = (e) => {
  let found = [];
  if (e === "") {
    initTags();
  } else {
    words.forEach((word, i) => {
      if (word.includes(e)) {
        found.push(word);
      }
    });
    
    tags.textContent = "";
    for (let i = 0; i < words.length; i++) {
      let lbl = document.createElement("label");
      lbl.textContent = found[i];
      tags.appendChild(lbl);
    }
  }
};

/*
    برای درج لیست لغات در محل مربوطه
*/
initTags();
