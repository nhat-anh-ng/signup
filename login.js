const signUpButton = document.getElementById('signUp'); /*returns an Element object representing the element whose id property matches the specified string.*/
const signInButton = document.getElementById('signIn'); /*you can use querySelector() to find the element using any selector.*/
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => { /*sets up a function that will be called whenever the specified event is delivered to the target.*/
    container.classList.add("right-panel-active"); /*is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.*/
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

