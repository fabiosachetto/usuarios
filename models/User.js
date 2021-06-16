//Programação Orientada a Objetos

//Toda classe inicia com letra maiúscula.
class User {

    //Método construtor (É quando inicia a classe ou instancia ela)
    constructor(name, gender, birth, country, email, password, photo, admin){

        //this.name é um atributo
        //name é uma variável/parâmetro
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.country = country;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.admin = admin;
    }

}