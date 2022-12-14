let modal = document.querySelector('#react-modal-root');
// let buttons = document.querySelectorAll('.btn.btn-base.btn-small--mobile.btn-primary.cm-button--min-width, .logmodal');
let close_button = document.querySelector('.cm-link--white-dark.lh--0');

function addListeners() {
	// for (let i = 0, len = buttons.length; i < len; i++) {
	// 	// buttons[i].addEventListener('click', function(){
	// 	//     modal.style.display = 'block';
	// 	// });
	// 	if (!buttons[i].classList.contains('no-login')) {
	// 		addEventHandler(buttons[i], 'click', showLoginModal)
	// 	}
	// }

	addEventHandler(close_button, 'click', closeLoginModal)

	// close_button.addEventListener('click', function(){
	//     modal.style.display = 'none';
	// });
}

function addEventHandler(elem, eventType, handler) {
	if (elem.addEventListener)
		elem.addEventListener(eventType, handler, false);
	else if (elem.attachEvent)
		elem.attachEvent('on' + eventType, handler);
}

function showLoginModal(event) {
	if (event.target.classList.contains('no-login'))
		return;
	modal.style.display = 'block';
}

function closeLoginModal() {
	modal.style.display = 'none';
}

addListeners();

window.onload = addListeners;
jQuery(document).ready(function () {
	jQuery(".openmod").on("click", function () {
		jQuery('#react-modal-rootywo').css('display', 'block')
	});
	jQuery(".pos--abs.z--9999.p--base, a.cm-link--white-dark.lh--0.no-button").on("click", function () {
		jQuery('#react-modal-rootywo').css('display', 'none');
		jQuery('div#react-modal-root').css('display', 'none');
	});
	jQuery("a.cm-link--white-dark.opit").on("click", function () {
		if (jQuery('.m-t--small.none').hasClass('myClass')) {
			jQuery(".m-t--small.none").removeClass('myClass');
			jQuery(this).removeClass('myClass');
			jQuery('a.cm-link--white-dark.opit span.f--small.fw--medium.lh--copy').text('Show more');
		} else {
			jQuery(".m-t--small.none").addClass('myClass');
			jQuery(this).addClass('myClass');
			jQuery('a.cm-link--white-dark.opit span.f--small.fw--medium.lh--copy').text('Show less');
		}
	});

	jQuery("form.ant-form.ant-form-horizontal.one button#login-submit-button").on("click", function (event) {
		event.preventDefault();
		jQuery(".errinp").addClass('ant-form-item-has-error');
	});
	jQuery("input#Email").keyup(function () {
		var email = jQuery(this).val();
		console.log(email);
		var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (pattern.test(email)) {
			jQuery(this).closest(".errinp").removeClass('ant-form-item-has-error');
			console.log("ok");
		} else {
			jQuery(this).closest(".errinp").addClass('ant-form-item-has-error');
			console.log("no");
		}
	})
	if ($(".wow").length) {
		new WOW().init();
	};
	jQuery("button#RememberMe").on("click", function () {
		jQuery(this).toggleClass('ant-switch-checked');
	});
})
