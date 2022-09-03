import renderTable from './showTable.js';
import createUser from './createUser.js';

window.addEventListener('load', renderTable);
document.querySelector('#register').addEventListener('click', createUser);

document.querySelector('#close').addEventListener('click', close);
function close() {
    document.querySelector('.modal').style.display = "none";
    document.querySelector('#modalRegister').style.display = 'none';
};
