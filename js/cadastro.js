window.addEventListener("load", () => {

    const objObrigatorio = `<div class="campo-obrigatorio">
                                <img src="../img/erro.png">
                                <small> * Campo obrigatório  </small>
                            </div>`;

    let form = document.querySelector("form");

    const checkInputs = (nome, matricula, email, telefone, endereco, data) => {
        let control = true;

        if (nome.value.trim() === "") {
            nome.classList.add("erro");
            control = false;

            nome.parentElement.innerHTML += objObrigatorio;
        }

        if (matricula.value.trim() === "") {
            matricula.classList.add("erro");
            control = false;

            matricula.parentElement.innerHTML += objObrigatorio;
        }

        if (email.value.trim() === "") {
            email.classList.add("erro");
            control = false;

            email.parentElement.innerHTML += objObrigatorio;
        }

        if (telefone.value.trim() === "") {
            telefone.classList.add("erro");
            control = false;

            telefone.parentElement.innerHTML += objObrigatorio;
        }

        if (endereco.value.trim() === "") {
            endereco.classList.add("erro");
            control = false;

            endereco.parentElement.innerHTML += objObrigatorio;
        }

        if (data.value.trim() === "") {
            data.classList.add("erro");
            control = false;

            data.parentElement.innerHTML += objObrigatorio;
        }

        return control;
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let nome = document.querySelector("#nome");
        let matricula = document.querySelector("#matricula");
        let email = document.querySelector("#email");
        let telefone = document.querySelector("#telefone");
        let endereco = document.querySelector("#endereco");
        let data = document.querySelector("#data");

        if (!checkInputs(nome, matricula, email, telefone, endereco, data)) {
            event.preventDefault();
            alert("Os campos são obrigatórios");
        } else {
            let materiaSelecionadaJSON = sessionStorage.getItem("materiaSelecionada");
            let materiaSelecionada = JSON.parse(materiaSelecionadaJSON);
         

            if (materiaSelecionada !== null && typeof materiaSelecionada === "object") {             
                const cadastro = {
                    nome: nome.value,
                    matricula: matricula.value,
                    email: email.value,
                    telefone: telefone.value,
                    endereco: endereco.value,
                    data: data.value,
                    materia: materiaSelecionada
                };

                const cadastroJSON = JSON.stringify(cadastro);
                console.log(cadastroJSON);
            }
        }
    });
});