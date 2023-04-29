const loginForm = document.querySelector("#login-form");
const loginGreeting = loginForm.querySelector(".login-greeting");
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
        // this.setLoginForm(false);
        greeting.innerText = `Hello! ${greeting_username}`;
        setTimeout(() => container.classList.add('fade-in'), 500);
    },

    setLoginForm(a) {
        loginForm.classList.toggle(CLASSNAME_HIDDEN, !a);
        container.classList.toggle(CLASSNAME_HIDDEN, a);
    },

    login() {
        if (username_value === null) {
            
            this.setLoginForm(true);
            
            //로그인 인사말 순차 출력
            loginGreeting.innerHTML = [...loginGreeting.innerText].map(v => `<span>${v}</span>`).join('');
            const arr = loginGreeting.querySelectorAll('span');
            arr.forEach((v,i) => setTimeout(()=>v.classList.add('fade-in'), (i+1) * 120));
            
            //아이디 입력창 출력
            setTimeout(() => loginInput.classList.add('login-input-appear'), arr.length * 150);
            setTimeout(() => loginInput.focus(), arr.length * 200);

            loginForm.addEventListener("submit", event => {
                event.preventDefault();
                loginInput.classList.remove('login-input-appear');
                loginObj.storeUserName();
                loginObj.setGreetingMessege();
            });
            return;
        }
        this.setGreetingMessege(); 
    }
}

loginObj.login();

