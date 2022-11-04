'use strict';
//-----------------------VARIABLES----------------------------//
/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');

//-----------------------OBJETOS----------------------------//
//Objetos con cada gatito
const kittenData_1 = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_2 = {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Fiona",
    desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_3 = {
    image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    name: "Cielo",
    desc: "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//-----------------------FUNCIONES----------------------------//

//Para crear la función general de los gatos cogemos el ul (los li son los gatitos) y creamos el esqueleto con todos los elementos que lo contienen. Utilizamos las variables de forma neutra (sin contenido $(contenido)) para después cambiarlas con los datos que queramos. 

function renderKitten(kittenData) {
    const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
    return kitten;
}

//Bucle for...of: Creamos una nueva función renderKittenList(kittenDataList) que recibirá como parámetro el listado de gatitos que creamos en kittenDataList, y se utilizará la función renderKitten(kittenItem).


function renderKittenList(kittenDataList) {
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        listElement.innerHTML += renderKitten(kittenItem);
    }
}

//Esto quita el buscador
function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}

//Esto añade el buscador
function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}

//Esto es la función manejadora
function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm(); //aqui llaman a la función show
    } else {
        hideNewCatForm(); //aqui llaman a la función hiden
    }
}
//Adicionar nuevo gatito: hemos creado una función para añadir gatitos, lo hacemos cuando clickamos en añadir. Para eso hemos tenido que crear un addEventListener.

function addNewKitten(event) {
    event.preventDefault();
    const newKittenDataObject = {
        desc: inputDesc.value,
        photo: inputPhoto.value,
        name: inputName.value,
        race: inputRace.value,
    };
    
    if (inputDesc.value === "" && inputPhoto.value === "" && inputName.value === "" && inputRace.value === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        labelMesageError.innerHTML = '¡Mola! ¡Un nuevo gatito en Adalab!'; //colocamos el objeto con el nuevo gatito dentro del else porque lo que le estoy diciendo es que quiero que me añada un gatito si y solo si tienen información.
        kittenDataList.push(newKittenDataObject);
        inputDesc.value = "";
        inputPhoto.value = "";
        inputName.value = "";
        inputRace.value = "";
        renderKittenList(kittenDataList)
    }
}

//Cancelar la búsqueda de un gatito: hemos creado una función para cancelar, lo hacemos cuando clickamos en cancelar. Para eso hemos tenido que crear un addEventListener.

function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputRace.value = "";
}



//Filtrar por descripción
function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;
    listElement.innerHTML = "";
    /*for (const kittenItem of kittenDataList) {
        if (kittenItem.desc.includes(descrSearchText)) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }*/

    const kittenDataListFilter = kittenDataList.filter((kitten) => kitten.desc.includes === descrSearchText);
    listElement.innerHTML += renderKittenList(kittenDataListFilter);
}

//Mostrar el litado de gatitos en el HTML
renderKittenList(kittenDataList);


//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);






