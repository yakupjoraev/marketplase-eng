let modal = document.querySelector('#react-modal-root');
let buttons = document.querySelectorAll('.btn.btn-base.btn-small--mobile.btn-primary.cm-button--min-width, .cm-link--primary, .btn.btn-large.btn-medium--tablet.btn-primary.cm-button--min-width, a:not(.no-button), button');
let close_button = document.querySelector('.cm-link--white-dark.lh--0');

function addListeners() {
    for (let i = 0, len = buttons.length; i < len; i++) {
        // buttons[i].addEventListener('click', function(){
        //     modal.style.display = 'block';
        // });
        addEventHandler(buttons[i], 'click', showLoginModal)
    }

    addEventHandler(close_button, 'click', closeLoginModal)

    // close_button.addEventListener('click', function(){
    //     modal.style.display = 'none';
    // });
}

function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener)
     elem.addEventListener (eventType,handler,false);
 else if (elem.attachEvent)
     elem.attachEvent ('on'+eventType,handler); 
}

function showLoginModal() {
    modal.style.display = 'block';
}

function closeLoginModal(){
    modal.style.display = 'none';
}

addListeners();

window.onload = addListeners;
