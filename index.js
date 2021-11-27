// Transição do fade do menu
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.nav').classList.add("black");
  } else {
    document.querySelector('nav').classList.remove("black");
  }
}

// Áudio
var v = document.getElementsByTagName("audio")[0];
v.play();

const itens = [
  {
    name: 'Currículo',
    image: 'img/robots-img.png',
    selected: false
  },
  {
    name: 'Cursos',
    image: 'img/img-item/item-second-article1.jpg',
    selected: false
  },
  {
    name: 'Portfólio',
    image: 'img/img-item/item-third-article1.jpg',
    selected: false
  },
  {
    name: 'Favoritos',
    image: 'img/img-item/item-first-article2.jpg',
    selected: false
  },
];

function handelClick(itemName) {
  itens.forEach((currentItem) => {
    currentItem.selected = false;
    if (itemName === currentItem.name){
      document.getElementsByTagName('main')[0].style.backgroundImage = `linear-gradient( to right, black 25%,transparent), url(${currentItem.image})`;
      document.getElementsByTagName('main')[0].classList.remove("hidden");
      currentItem.selected = true;
    }
  })
  renderInfo();
}

const itensModel = function (itens) {
  return `
    <div name="item" onclick="handelClick('${itens.name}')" class="item">
      <a href="#sec-title"><img src="${itens.image}" /></a>
      <figcaption>${itens.name}</figcaption>
    </div>`;
}

function renderItens () {
     const $itemTemplate = document.querySelector('.menu2');
     $itemTemplate.innerHTML = itens.map((iten) => {
      return itensModel(iten);
     }).join('');
}
renderItens();

function closeInfo() {
  document.getElementsByTagName('main')[0].classList.add("hidden");
  renderInfo();
}

const info = function (itens) {
  if (itens.selected == true) {
    return `
    <button class="x" onclick="closeInfo()">X</button>
    <div class="div-main">
      <h4>Série</h4>
      <h1>${itens.name}</h1>
      <h4>3º Temporada <span>(Semestre)</span></h4>
      <p>
        Após largar tudo para se dedicar ao antigo sonho de ser
        programador, André inicía na universidade aos 34 anos(2019)
        e mergulha de vez no mundo da tecnologia.
      </p>
    </div>`;
  }
}

function renderInfo() {
  const $infoTemplate = document.querySelector('.info');
  $infoTemplate.innerHTML = itens.map((iten) => {
    return info(iten);
  }).join('');
}
