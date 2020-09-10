function submitMessage() {
	var result = document.getElementById('result');
	var message = document.getElementById('message').value;
	var error = document.getElementById('error');

	if (message == '') {
		error.style.display = ' block';
		setTimeout(clearError, 3000);
		return false;
	} else {
		error.style.display = ' none';
		result.innerHTML = message.toUpperCase();
		clearMessage();
		return true;
	}
}

function clearError() {
	var error = document.getElementById('error');
	error.style.display = ' none';
}

function clearMessage() {
	var message = document.getElementById('message');
	message.value = '';
}