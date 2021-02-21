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
});
