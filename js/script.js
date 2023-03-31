// let copy = document.querySelectorAll(".contacts");

// for (let i = 0 ; i < copy.length; i++){
    
//     if(i == (copy.length - 1)){
//         Додати клас
//         copy[i].classList.add("newClass2222");
//         Приховати елемент
//         copy[i].style.display = "none";

//         Видалити весь HTML всередині елементу
//         copy[i].innerHTML = "";

//         Видалити атрибут клас
//         copy[i].removeAttribute("class");

//         Змінюємо колір фону
//         copy[i].style.background = "red";

//         Додаємо в елемент тег зі стилізацією
//         let newDiv = document.createElement("div");
//         newDiv.innerText = "Power Code";
//         copy[i].appendChild(newDiv);
//     }
// }


let featuresArr = [
    {
        title: "Suspendisse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://developer.mozilla.org/ru/docs/Web/API/Element/setAttribute',
        iconSrc: "https://pngimg.com/uploads/like/like_PNG71.png"
    },
    {
        title: "Maecenas",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://www.freepnglogos.com/uploads/key-png/key-icon-housing-and-residential-life-28.png"
    },
    {
        title: "Aliquam",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7wTEBP8hB6_9ADMMPEhcO_timBkTSvPcpcb7mSaBhpNfYThj-"
    },
    {
        title: "Habitasse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://s1.iconbird.com/ico/2013/3/635/w240h264139388538316.png"
    }
]


let features = document.querySelector(".features");



for (let i = 0; i < featuresArr.length; i++){
    let featuresBox = document.createElement("div");
    featuresBox.classList.add("featuresBox");

    let featuresBoxImg = document.createElement("img");
    featuresBoxImg.classList.add("featuresBox__img");
    let featuresBoxHeading = document.createElement("h5");
    featuresBoxHeading.classList.add("featuresBox__heading");
    let featuresBoxDescr = document.createElement("p");
    featuresBoxDescr.classList.add("featuresBox__descr");
    let featuresBoxBtn = document.createElement("a");
    featuresBoxBtn.classList.add("featuresBox__btn");

    featuresBoxHeading.innerText = featuresArr[i].title;
    featuresBoxDescr.innerText = featuresArr[i].text;
    featuresBoxBtn.innerText = "See more";
    featuresBoxBtn.setAttribute("href", featuresArr[i].link);
    featuresBoxImg.src = featuresArr[i].iconSrc;

    featuresBox.appendChild(featuresBoxImg);
    featuresBox.appendChild(featuresBoxHeading);
    featuresBox.appendChild(featuresBoxDescr);
    featuresBox.appendChild(featuresBoxBtn);

    features.appendChild(featuresBox);
}


