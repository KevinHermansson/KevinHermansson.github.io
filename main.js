document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.getElementById('dark-mode-toggle');
	if (!toggleButton) {
		return;
	}

	function updateToggleButtonLabel() {
		const isDark = document.body.classList.contains('dark-mode');
		toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
		toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
	}

	toggleButton.addEventListener('click', function () {
		document.body.classList.toggle('dark-mode');
		updateToggleButtonLabel();
	});

	updateToggleButtonLabel();
});

