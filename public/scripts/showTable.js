import edit from './editUser.js'
import deleteUser from './deleteUser.js';
import { block, unblock } from './blockScreen.js';

export default async function renderTable() {

    block();

    const a = await fetch(`http://192.168.18.153:8000/usuarios`)
    const users = await a.json();
    
    document.querySelector('tbody').innerHTML = "";

    for(let i = 0; i < users.users.length; i++) {

        if(users.users[i].delete === false) {
    
            document.querySelector('tbody').innerHTML += 
            `<tr>
                <td>${users.users[i].id}</td>
                <td>${users.users[i].nome}</td>
                <td>${users.users[i].email}</td>
                <td id="${i}">
                    <svg class="edit" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </td>
                <td id="${i}">
                    <svg class="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </td>
            </tr>`;
        };
        
    };

    let editBtn = document.querySelectorAll('.edit')
    for(let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', edit);
    };

    let deleteBtn = document.querySelectorAll('.delete')
    for(let i = 0; i < editBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteUser);
    };

    unblock();
    
};
