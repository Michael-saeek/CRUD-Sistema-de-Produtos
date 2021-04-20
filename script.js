class Produto {
    constructor(id, nome, preco, ano) {
        this.id = id
        this.nome = nome
        this.preco = preco
        this.ano = ano
    }
}

const listadeProdutos = []

class UserInterface {
    constructor() {
    }
    Create(produto) {
        const productTable = document.querySelector('.produto')
        const element = document.createElement('tr')
        element.innerHTML = `
        <td name="${produto.id}" >${produto.id}</td>
        <td name="${produto.nome}" >${produto.nome}</td>
        <td name="${produto.preco}" >${produto.preco}</td>
        <td name="${produto.ano}" >${produto.ano}</td>
        <td><button name="delete" class="buttonDelete">Delete</button></td>
        <td><button name="modificar" class="buttonModificar">Modificar</button></td>
        `;
        productTable.appendChild(element)   

         //Mensagem
        Swal.fire (
            'Otimo !',
            'Item Adicionado com Sucesso',
            'success'
        )
    }

    resetForm() {
        document.querySelector('#form').reset();
    }

    Update(e) {
        function AvisoModificacao() {
            Swal.fire (
                'Item Modificado !',
                '',
                'success' ) 
        } 
    
        if (e.name === 'modificar') {
            let IDitem = prompt('Indique o ID do item que você quer modificar')
            let itemaModificar = prompt(`O que precisa modificar? 
            Produto
            Preço
            Ano`)

            switch(itemaModificar) {
                case 'Produto': 
                    let prod = prompt('Indique o produto a modificar')
                    document.querySelectorAll('tr')[IDitem].firstElementChild.nextElementSibling.innerHTML = prod
                    AvisoModificacao()
                    break 

                case 'Preço':
                    let preç = prompt('Indique o preço certo')
                    document.querySelectorAll('tr')[IDitem].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = preç
                    AvisoModificacao()
                    break
                         
                case 'Ano':
                    let ano = prompt('Indique o ano correto')
                    document.querySelectorAll('tr')[IDitem].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = ano
                    AvisoModificacao()
                    break
                }
         
            }

        }

    Delete(e) {
        if (e.name === 'delete') {
            e.parentElement.parentElement.remove()

            //Mensagem
            Swal.fire (
                'Item Removido !',
                '',
                'success' )
        }
    }
}




// Manipulando o DOM ... DOM EVENTS
document.querySelector('#form').addEventListener('submit', function(e) { 
    let inputID = document.getElementById('id').value
    let inputProduto = document.querySelector("#nomeProduto").value 
    let inputPreco = document.querySelector("#preco").value
    let inputAno = document.querySelector("#ano").value
    const produto = new Produto(inputID, inputProduto, inputPreco, inputAno)
  e.preventDefault();

    const userInterface = new UserInterface();
    userInterface.Create(produto);
    userInterface.resetForm();

    listadeProdutos.push(produto)
    console.log(listadeProdutos)
})

document.querySelector('.produto').addEventListener("click", function(e) {
    console.log(e.target)
    const UI = new UserInterface()
    UI.Delete(e.target)
    UI.Update(e.target) 
})


