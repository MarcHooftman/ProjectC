const isLoggedIn = () => localStorage.getItem('user') != undefined;

export { isLoggedIn }