if (window.location.pathname.includes("send.html")) {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('email-display').textContent = email;
    } else {
        document.getElementById('email-display').textContent = "Email not found";
    }

    function dismissMessage() {
        window.location.href = 'index.html';
    }
} else {
    const input = document.getElementById('email-input');
    const errorText = document.getElementById("error-text");

    input.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            input.classList.add('error');
            showElement();
        } else {
            input.classList.remove('error');
            hideElement();
        }
    });

    function showElement() {
        errorText.removeAttribute("hidden");
    }

    function hideElement() {
        errorText.setAttribute("hidden", true);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const emailInput = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput)) {
            showElement();
            input.classList.add('error');
            return;
        }

        localStorage.setItem('email', emailInput);
        window.location.href = 'send.html';
    }
}
