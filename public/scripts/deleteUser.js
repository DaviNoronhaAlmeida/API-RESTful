import renderTable from "./showTable.js";
import { block } from './blockScreen.js';

export default async function deleteUser() {

    block()
    
    const parent = this.parentNode;
    const id = parseInt(parent.id) + 1;
    
    await fetch(`http://192.168.18.153:8000/usuarios/${id}`, {
        method: 'DELETE'
    });

    renderTable();

};