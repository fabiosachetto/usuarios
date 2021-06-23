class UserController {

    constructor(formId){

        //getElementById serve para pegar o ID da tag HTML q vai ser manipulado.
        this.formEl = document.getElementById(formId);

    }

    //Criando o método onSubmit
    onSubmit(){
        
        //addEventListener pega o evento q o botão vai realizar.
        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            this.getValues();
        });

    }

    //Criando o método getValues
    getValues(){

        //Criando variável/obejto no caso JSon usando let, pois não precisa ter no escopo global, só vai usar aqui dentro.
        let user = {};

        this.formEl.elements.forEach(function (field, index){

            if (field.name == "gender") {
    
                if (field.checked) {
                    user[field.name] = field.value;
                }
    
            } else {
    
                user[field.name] = field.value;
    
            }
    
        });
        
        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
        
    }

    //Criando o método addLine
    addLine(dataUser, tableId){

        console.log(dataUser);
        
        //Criando um template string
        document.getElementById(tableId).innerHTML = `
    
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
    
    }

}