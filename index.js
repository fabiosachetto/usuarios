var fields = document.querySelectorAll("#form-user-create [name]");

//Criando um objeto (no caso é um JSon)
var user = {  };

function addLine(dataUser){
    
    //Criando um template string
    var tr = document.createElement("tr");

    tr.innerHTML = `

        <tr>
            <td>
                <img src="dist/img/user1-128x128.png" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    
    `;

    document.getElementById("table-users").appendChild(tr);

}

//getElementById serve para pegar o ID da tag HTML q vai ser manipulado. addEventListener pega o evento q o botão vai realizar.
document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function (field, index){

        if (field.name == "gender") {

            if (field.checked) {
                user[field.name] = field.value;
            }

        } else {

            user[field.name] = field.value;

        }

    });

    addLine(user);

});