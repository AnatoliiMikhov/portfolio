document.addEventListener('DOMContentLoaded', () => {

	try {
		const hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu'),
			closeBtn = document.querySelector('.menu__close');

		hamburger.addEventListener('click', () => {
			menu.classList.add('active');
		});

		closeBtn.addEventListener('click', () => {
			menu.classList.remove('active');
		});
	} catch (error) {
		console.log(error);
	}


	// progress rating
	try {
		const percents = document.querySelectorAll('.progress-item__percent'),
			lines = document.querySelectorAll('.progress-item__inner');

		percents.forEach((item, i) => {
			lines[i].style.width = item.innerHTML;
		});
	} catch (error) {
		console.log(error.message);
	}

	// send form data
	try {
		const form = document.querySelector('#contact-form');
		// const inputs = document.querySelectorAll('input');
		// const textarea = document.querySelector('textarea');

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const formData = new FormData(form);
			try {
				fetch('mailer/smart.php', {
					method: 'POST',
					body: formData
				}).then(() => {
					console.log('data sended');
					/* inputs.forEach(field => {
						field.value = '';
					});
					textarea.value = ''; */
					form.reset();
				})
			} catch (error) {
				console.log(error);
			}
		});
	} catch (error) {
		console.log(error);
	}


});
