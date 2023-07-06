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



for (let i = 0; i < featuresArr.length; i++) {
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

// ----------------------------------
document.querySelector(".addEvent__btn").onclick = addEvent;

let idToDoListItem = 1;

let formEvents = document.querySelector(".todoForm");


function addEvent() {
    let eventText = document.querySelector(".addEvent__text").value;

    let toDoItem = document.createElement("div");
    toDoItem.classList.add("formToDolist");


    let toDoItemText = document.createElement("p");
    toDoItemText.classList.add("formToDolist__text");
    toDoItemText.innerText = eventText;

    let toDoItemCheckbox = document.createElement("input");
    toDoItemCheckbox.classList.add("formToDolist__checkbox");
    toDoItemCheckbox.setAttribute("type", "checkbox");
    toDoItemCheckbox.setAttribute("id", idToDoListItem++)
    toDoItemCheckbox.setAttribute("name", "done")

    if (eventText) {
        toDoItem.appendChild(toDoItemText);
        toDoItem.appendChild(toDoItemCheckbox);
        formEvents.appendChild(toDoItem);
    } else {
        alert("Введіть текст для завдання)))");
    }




    let doneEvent = document.querySelectorAll(".formToDolist__checkbox");

    doneEvent.forEach((check) => {
        check.addEventListener('click', toDoneEvent);
    });
    clearInput();
}

let formDoneEvents = document.querySelector(".list__done");

function toDoneEvent() {
    let doneItem = document.createElement("div");
    doneItem.classList.add("formToDolist");

    // let doneItemText = document.createElement("p");
    // doneItemText.classList.add("formToDolist__text");


    let textBox = this.previousSibling;
    let textEvent = textBox.cloneNode(true);
    console.log(textBox);


    // let eventText = this.previousSibling.textContent;
    // doneItemText.textContent = eventText;

    let delItemImg = document.createElement("img");
    delItemImg.classList.add("formToDolist__imgDel");
    delItemImg.setAttribute("src", "../media/images/icon-shopping.png");

    delItemImg.addEventListener('click', delEvent);
    doneItem.appendChild(textEvent);
    doneItem.appendChild(delItemImg);
    formDoneEvents.appendChild(doneItem);

    this.parentNode.parentNode.removeChild(this.parentNode);
}

function delEvent() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function clearInput() {
    var getValue = document.querySelector(".addEvent__text");
    if (getValue.value != "") {
        getValue.value = "";
    }
}

function computedStyle() {
    let a = getComputedStyle(document.querySelector(".title__item"));

    console.log(a.fontSize)
}


let products = [
    {
        name: "Apple iPhone 12",
        price: 1000,
        currency: "USD",
        status: "active"
    },
    {
        name: "Xiaomi Redmi Note 9",
        price: 600,
        currency: "USD",
        status: "active"
    },
    {
        name: "Samsung Galaxy s20",
        price: 850,
        currency: "USD",
        status: "active"
    },
    {
        name: "Apple iPhone X",
        price: 550,
        currency: "USD",
        status: "active"
    },
    {
        name: "Xiaomi Redmi 5",
        price: 200,
        currency: "USD",
        status: "not_available"
    },
    {
        name: "Samsung Note 8",
        price: 400,
        currency: "USD",
        status: "not_active"
    },
]


function filterArr(arr) {
    let newArr = [];
    arr.filter(function (item) {
        if (item.status === "active") {
            newArr.push(item);
        }
    });
    return newArr;
}
let a = filterArr(products);
// console.log(a);

function filterArr2(arr) {
    let newArr = [];
    arr.filter(function (item) {
        if (item.price > 650) {
            newArr.push(item);
        }
    });
    return newArr;
}
let a1 = filterArr2(products);
// console.log(a1);




let newProducts = products.filter(item => item.status === "active");
let newProducts2 = products.filter(item => item.price > 650);
// console.log(newProducts);
// console.log(newProducts2);
sum = 0;
products.map((item) => {
    if (item.price > 650) {
        sum += item.price;
    }
});
// console.log(sum);

// allPrices.forEach((item) => sum += item);
// console.log(sum);




// products.forEach(function(item){
//     item.is_phone = true;
//     if(item.price > 800){
//         item.premium = true;
//     }
// });

// console.log(products);

function getCapacity(w = 1, h = 1, l = 1) {
    return w * h * l;
}
// console.log(getCapacity(12));


function getMinMax(funcType = "min", ...args) {
    if (funcType === "min") {
        return Math.min(...args);
    }
    if (funcType === "max") {
        return Math.max(...args);
    }

}

numbers = [4, 5];
tuc = [55, -77712, 45];

// console.log(getMinMax("min", 44444444, 3, 4));


let newArr = [...numbers, ...tuc];
// console.log(newArr);


let autos = [];

let auto = [
    {
        wheels: 4,
        type: "sedan",
        na_hody: true,
        ne_bita: true,
        ne_krashena: true
    }
]

let index = 0;
let autoTemplate = [
    {
        wheels: 4,
        type: "sedan",
        na_hody: true,
        ne_bita: true,
        ne_krashena: true
    }
]


function createAuto(name = "carName", ...args) {
    let wheels = args[0];
    let type = args[1];
    let na_hody = args[2];
    let ne_bita = args[3];
    let ne_krashena = args[4];

    autos.push(
        {
            name,
            wheels,
            type,
            na_hody,
            ne_bita,
            ne_krashena,
            ...autoTemplate,
            ...args
        }
    )

}

let firstAuto = createAuto("Mazda", wheels = 4, type = "sedan", na_hody = false, ne_bita = false, ne_krashena = true);

let secondAuto = createAuto("Mercedes", wheels = 2, type = "sedan", na_hody = false, ne_bita = false, ne_krashena = true);

let thirdAuto = createAuto("Audi", wheels = 4, type = "sedan", na_hody = false, ne_bita = false, ne_krashena = false);

// console.log(autos);
// console.log(autos[0].name);
// console.log(autos[1].wheels);
// console.log(autos[2].ne_krashena);

const HOUSE = new Object({
    pidval: true,
    poverhy: 1,
    enters: 1,
    windows: 10,
    showInfo() {
        console.log(this.pidval);
        console.log(this.poverhy);
        console.log(this.enters);
        console.log(this.windows);
        // console.log(this.address);
    }
})

const HOUSE_01 = Object.create(HOUSE);
HOUSE_01.address = "Kyiv, Kreshatyk str, 10";
HOUSE_01.getHouseAddress = function () {
    console.log(this.address);
}
HOUSE_01.windows = 381;

const HOUSE_02 = Object.create(HOUSE);
HOUSE_02.address = "Poltava, Shevshenko str, 181";

// HOUSE_01.showInfo();
// HOUSE_01.getHouseAddress();
// console.log(HOUSE_01);

// HOUSE_01.getHouseAddress.bind(HOUSE_02)();
// HOUSE_01.getHouseAddress.call(HOUSE_02);
// console.log("----------------");
// let arr = [1, 2, 3 ,4];
// HOUSE_01.getHouseAddress.apply(HOUSE_02, arr);

// console.log(HOUSE_01.getHouseAddress);

let actor = -8;
let pr = new Promise(function (resolve, reject) {
    actor += 2;
    // console.log(actor);

    if (actor > 0) {
        resolve(actor);
    } else {
        reject(`No data`);
    }
    // setTimeout(() => {
    //     actor += 2;
    //     console.log("Я щось зробив через 1 секунду");
    //     console.log(actor);
    //     resolve(actor);
    // }, 3000);
});

pr.then(actor => {
    actor += 20;
    // console.log(actor);
}).then(() =>{
    let dir = 15;
    // console.log(dir);
}).catch(error => {
    // console.log(error);
}).finally(() => {
    // console.log("Thats all");
    // console.log("----------------");
})


function createEmail(mail){
    return function(userLink){
        return `${userLink}@${mail}`;
    }
}

let gmailMail = createEmail("gmail.com");
let ukrNet =  createEmail("ukr.net");


let myMail = gmailMail("skurtachvitalii");
let myUkrainianMail = ukrNet("skyrtach");


// console.log(myMail);
// console.log(myUkrainianMail);












