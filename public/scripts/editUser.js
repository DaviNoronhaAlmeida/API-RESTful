import renderTable from './showTable.js';
import { block, unblock } from './blockScreen.js';

let id;

export default async function edit() {

    block();

    document.querySelector('.modal').style.display = "block";
    document.querySelector('#modalEdit').style.display = 'block';

    const parent = this.parentNode;
    id = parseInt(parent.id) + 1;

    const userRaw = await fetch(`http://192.168.18.153:8000/usuarios/${id}`);
    const user = await userRaw.json();

    document.querySelector('#nameEdit').value = user.nome;
    document.querySelector('#emailEdit').value = user.email;

    unblock();
};

document.querySelector('#save').addEventListener('click', saveChanges);

async function saveChanges() {

    block();

    let nomeEdit = document.querySelector('#nameEdit').value;
    let emailEdit = document.querySelector('#emailEdit').value;

    if(nomeEdit === "") {
        document.getElementById('nameEdit').focus();
        alert("Nome inválido!");
        unblock();
        return false;
    }

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailEdit)) {
        document.getElementById('emailEdit').focus();
        alert('E-mail inválido!');
        unblock();
        return false;
    };

    await fetch(`http://192.168.18.153:8000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({"nome": nomeEdit, "email": emailEdit})
    });

    document.querySelector('.modal').style.display = "none";
    document.querySelector('#modalEdit').style.display = 'none';

    renderTable();

};