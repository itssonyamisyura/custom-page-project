import Customizator from "./customizator";

window.addEventListener('DOMContentLoaded', () => {
    const panel = new Customizator();
    panel.render();
});





// экземпляр класса new Customizator() помещаем в переменную panel --> в panel лежат свойства(например render)