const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const container = document.querySelector("[name=\"container\"]");
const CLASSNAME_HIDDEN = 'hidden';
const USERNAME_KEY = 'username';
const username_value = localStorage.getItem(USERNAME_KEY);
const loginObj = {
    storeUserName() {
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
    },
    setGreetingMessege() {
        const greeting_username = localStorage.getItem(USERNAME_KEY);
        this.setLoginForm(false);
        greeting.innerText = `Hello! ${greeting_username}`;
    },
    setLoginForm(a) {
        loginForm.classList.toggle(CLASSNAME_HIDDEN, !a);
        container.classList.toggle(CLASSNAME_HIDDEN, a);
    },
    login() {
        if (username_value === null) {

            this.setLoginForm(true);

            loginForm.addEventListener("submit", event => {
                event.preventDefault();
                loginObj.storeUserName();
                loginObj.setGreetingMessege();
            });
            return;
        }
        this.setGreetingMessege(); 
    }
}

loginObj.login();

