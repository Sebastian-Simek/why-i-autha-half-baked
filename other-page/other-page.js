import { logout, checkAuth } from '../fetch-utils.js';
// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout

const logOutBtn = document.getElementById('logout');

logOutBtn.addEventListener('click', async () => {
    await logout();
});

checkAuth();