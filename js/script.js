/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Я уею!"
    ]
};

const advertisement = document.getElementsByClassName("promo__adv");

advertisement[0].remove();

const genreOfMoovie = document.getElementsByClassName("promo__genre");
genreOfMoovie[0].innerHTML = "ДРАМА";

const changeBG = document.querySelector('.promo__bg');
changeBG.style.backgroundImage = 'url("img/bg.jpg")';

const getPromoInteractiv = document.querySelector('.promo__interactive-list');

getPromoInteractiv.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film,i) => {
    getPromoInteractiv.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
    </li>
    `;
});

const getValueFromInput
