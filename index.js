let btnAll = document.querySelector(".navi");
let cags = document.querySelectorAll(".cag");
let tickets = [];
let buybuttons = []
let turkey = document.querySelector('.turkey')
let france = document.querySelector('.france');
let tnames = ['Prestige Hotel Old City', 'Barin Hotel', 's Pearl']
let fdates = ['31.05.2023', '02.06.2023', '02.06.2023']
let fdescriptions = [`Отличный отель, всё включено,<br>бассейн прямо под окном,<br>разные блюда со всего мира`, `Отель в современном стиле,<br> отличные виды из окна,<br> недалеко от центра Города`, `Ресторан прямо на первом этаже отеля!<br>Море в трёх минутах ходьбы.`]
let spain = document.querySelector('.spain');
let tcosts = ['11286', '14215', 'Нет в наличии']
let snames = ['TOC Hostel Barcelona', 'Alexandre Hotel Fira Congress', 'Hotel Barcelona Universal']
let sdescriptions = ['Шведский стол,<br>солярий прямо в отеле', 'Отличный вид на море,<br>интересные мироприятия', 'Спа процедуры включены,<br>вид на водопад!']
let fcosts = ['12910', '16250', '14240']
let scosts = ['20155', 'Нет в наличии', '16271'];
let cart = document.querySelector('.cart')
let sidebar = document.querySelector('.sidebar')
let cardcont = document.querySelector('.ticks');
let sum = document.querySelector('.sum')
console.log(cags)
sidebar.classList.add('hidden')
cart.addEventListener('click', function() {
    sidebar.classList.toggle('hidden');
})
let fnames = ["de Castiglione", "Pullman Paris Montparnasse Hotel", 'Mercure Paris Gare Montparnasse TGV']
let pics = []
for(let i = 0; i < cags.length; i++) {
    cags[i].addEventListener("click", function() {
        for(let i = 0; i < cags.length; i++) {
            cags[i].className = 'cag';
        }
        btnAll.className = 'cag';
        cags[i].classList.toggle('navi')
        francerender();
        spainrender();
        turkeyrender();
    })
    console.log("return")
}

btnAll.addEventListener("click", function() {
    for(let i = 0; i < cags.length; i++) {
        cags[i].className = 'cag';
    }
    btnAll.classList.toggle('navi')
})
let sumnum = 0;
/*<div class="city"><div><img src="assets/44e520af46af5e615c37caf8f84775c4fc950962.jpeg" alt=""></div><div>
<div class="name">Отель de Castiglione</div>
<div class="description">Отличный отель, всё включено,<br>бассейн прямо под окном,<br>разные блюда со всего мира</div><br><div class="date">27.05.2023</div>
<button class="buy">Купить билет</button></div></div> */
function francerender() {
    france.innerHTML = '';
    for(let i = 0; i < fnames.length; i++) {
        let card = document.createElement('div');
        card.className = "ticket";
        card.innerHTML = `<div><img class="pic" src="assets/fotel${i + 1}.jpg" alt=""></div><div><div class="name">Отель ${fnames[i]}</div><br><div class="description">${fdescriptions[i]}</div><br><div class="city">Город: Париж</div><div class="cost">От ${fcosts[i]}₽ За ночь</div><div class="date">${fdates[i]}</div><button class="buy">Купить билет</button></div>`;
        france.append(card);
        tickets.push(card);
        let buttonbuy = card.querySelector('.buy');
        buttonbuy.addEventListener('click', function() {
            cardcont.innerHTML += `<div>${fnames[i]}, Цена - ${fcosts[i]}₽</div>`
            sumnum += Number(fcosts[i]);
            sum.innerHTML = `Итого: ${sumnum}₽`
        })
    }
}
function spainrender() {
    spain.innerHTML = '';
    for(let i = 0; i < snames.length; i++) {
        let card = document.createElement('div');
        card.className = "ticket";
        if (scosts[i] === 'Нет в наличии' && !cags[1].className.includes('nav')) {
            card.innerHTML = `<div><img class="pic" src="assets/sotel${i + 1}.jpg" alt=""></div><div><div class="name">Отель ${fnames[i]}</div><br><div class="description">${sdescriptions[i]}</div><br><div class="city">Город: Барселона</div><div class="Outof">Нет в наличии!</div><div class="date">${fdates[i]}</div></div>`;

        }
        else if (scosts[i] == 'Нет в наличии' && cags[1].className.includes('nav')) {
            continue;
        }
        else {
            card.innerHTML = `<div><img class="pic" src="assets/sotel${i + 1}.jpg" alt=""></div><div><div class="name">Отель ${fnames[i]}</div><br><div class="description">${sdescriptions[i]}</div><br><div class="city">Город: Барселона</div><div class="cost">От ${fcosts[i]}₽ За ночь</div><div class="date">${fdates[i]}</div><button class="buy">Купить билет</button></div>`;
            let buttonbuy1 = card.querySelector('.buy');
            buttonbuy1.addEventListener('click', function() {
                cardcont.innerHTML += `<div>${snames[i]}, Цена - ${scosts[i]}₽</div>`


            })

        }

        spain.append(card);
    }
}
function turkeyrender() {
    turkey.innerHTML = '';
    for(let i = 0; i < snames.length; i++) {
        let card = document.createElement('div');
        card.className = "ticket";
        if (tcosts[i] == 'Нет в наличии' && !cags[1].className.includes('nav')) {
            card.innerHTML = `<div><img class="pic" src="assets/totel${i + 1}.jpg" alt=""></div><div><div class="name">Отель ${tnames[i]}</div><br><div class="description">${fdescriptions[i]}</div><br><div class="city">Город: Стамбул</div><div class="Outof">Нет в наличии!</div><div class="date">${fdates[i]}</div></div>`;
        }
        else if (tcosts[i] === 'Нет в наличии' && cags[1].className.includes('nav')) {
            continue;
        }
        else {
            card.innerHTML = `<div><img class="pic" src="assets/totel${i + 1}.jpg" alt=""></div><div><div class="name">Отель ${tnames[i]}</div><br><div class="description">${fdescriptions[i]}</div><br><div class="city">Город: Стамбул</div><div class="cost">От ${tcosts[i]}₽ За ночь</div><div class="date">${fdates[i]}</div><button class="buy">Купить билет</button></div>`;
            let buttonbuy1 = card.querySelector('.buy');
            buttonbuy1.addEventListener('click', function() {
                cardcont.innerHTML += `<div>${tnames[i]}, Цена - ${tcosts[i]}₽</div>`


            })
        }

        turkey.append(card);
    }
}
francerender();
spainrender();
turkeyrender();
