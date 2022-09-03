import renderTable from './showTable.js';
import { block, unblock } from './blockScreen.js';

export default async function createUser() {
    
    block();

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if(nome === "") {
        document.getElementById('name').focus();
        alert("Nome inválido!");
        unblock();
        return false;
    }

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        document.getElementById('email').focus();
        alert('E-mail inválido!');
        unblock();
        return false;
    };
    
    await fetch(`http://192.168.18.153:8000/usuarios`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({"nome": nome, "email": email})
    });
    
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";

    document.querySelector('.modal').style.display = "block";
    document.querySelector('#modalRegister').style.display = 'block';
    
    renderTable();
}