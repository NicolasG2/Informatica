const materias = [
    {
        id: 1,
        nome: "Linguagem de Programação",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/lp.jpg",
        botao: "",
    },

    {
        id: 2,
        nome: "Algoritmos",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/algoritmos.jpeg",
        botao: "",
    },

    {
        id: 3,
        nome: "Arquitetura e organização de computadores",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/aoc.png",
        botao: "",
    },

    {
        id: 4,
        nome: "Orientação a Objetos",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/oo.png",
        botao: "",
    },

    {
        id: 5,
        nome: "Banco de Dados",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/bd.jpg",
        botao: "",
    },

    {
        id: 6,
        nome: "Engenharia de Software I",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/es1.jpeg",
        botao: "",
    },
    {
        id: 7,
        nome: "Desenvolvimento Web",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/web.jpg",
        botao: "",
    },

    {
        id: 8,
        nome: "Engenharia de Software II",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/es2.png",
        botao: "",
    },

    {
        id: 9,
        nome: "Introdução a Redes",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/redes.jpg",
        botao: "",
    },

    {
        id: 10,
        nome: "Tópicos Avançados em TI",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/tati.jpg",
        botao: "",
    },

    {
        id: 11,
        nome: "Metodologia Científica",
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi fugiat sed optio placeat beatae illum veniam pariatur reprehenderit esse eius, aliquid quia non architecto debitis ratione enim modi ea.",
        imgURL: "./img/metodologia.png",
        botao: "",
    },
];

let container = document.querySelector(".container");
let botao_trocar = document.querySelector(".botao-trocar");

const criacaoMaterias = () => {
    materias.forEach((materia) => {
        let card = `   
              <div class="card">
                  <img class="card-img" src=${materia.imgURL} /> 
                  <h2 class="card-nome"> ${materia.nome} </h2>
                  <p class="card-ementa"> ${materia.ementa} </p>
                  <a class="card-botao" idMateria="${materia.id}">Selecionar matéria</a>
              </div>
          `;
        container.innerHTML += card;
    });
};

window.onload = () => {
    criacaoMaterias();

    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        console.log(card);

        card.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();
            const idMateria = card.lastElementChild.getAttribute("idMateria");
            const nomeMateria = card.querySelector(".card-nome").innerHTML;
        
            const materiaSelecionada = {
                idMateria: idMateria,
                nome: nomeMateria,
            };
        
            sessionStorage.setItem("materiaSelecionada", JSON.stringify(materiaSelecionada));
        
            console.log(materiaSelecionada.idMateria, materiaSelecionada.nome);
        });
        
        botao_trocar.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "./cadastro.html";
        });
    });
};