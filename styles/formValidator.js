class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) {
            console.error(`Form with ID ${formId} not found.`);
            return;
        }

        this.nameField = this.form.querySelector('input[name="name"]');
        this.emailField = this.form.querySelector('input[name="email"]');
        this.messageField = this.form.querySelector('textarea[name="message"]');
        this.errorBlocks = {
            name: document.getElementById('name_err'),
            email: document.getElementById('email_err'),
            message: document.getElementById('message_err')
        };

        if (Object.values(this.errorBlocks).some(el => !el)) {
            console.error('One or more error blocks not found.');
        }

        this.form.addEventListener('submit', (e) => this.validateForm(e));
    }

    async validateForm(e) {
        e.preventDefault();

        const nameValid = this.validateName();
        const emailValid = this.validateEmail();
        const messageValid = this.validateMessage();

        if (nameValid && emailValid && messageValid) {
            const data = {
                name: this.nameField.value.trim(),
                email: this.emailField.value.trim(),
                message: this.messageField.value.trim()
            };

            try {
                const baseURI = `${window.location.protocol}//${window.location.host}`;
                const response = await this.postData(baseURI + '/contact_me.php', data);
                console.log(response);
                if (response.success) {
                    console.log('Form submitted successfully!');
                    this.form.reset();
                    this.clearErrors();
                } else {
                    this.handleErrors(response.errors);
                }
            } catch (error) {
                this.showGeneralError('An error occurred while submitting the form. Please try again.');
            }
        }
    }

    validateName() {
        const name = this.nameField.value.trim();
        if (name === '') {
            this.showError('name', 'Name is required.');
            return false;
        } else {
            this.showSuccess('name');
            return true;
        }
    }

    validateEmail() {
        const email = this.emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            this.showError('email', 'Email is required.');
            return false;
        } else if (!emailRegex.test(email)) {
            this.showError('email', 'Email is not valid.');
            return false;
        } else {
            this.showSuccess('email');
            return true;
        }
    }

    validateMessage() {
        const message = this.messageField.value.trim();
        if (message === '') {
            this.showError('message', 'Message is required.');
            return false;
        } else {
            this.showSuccess('message');
            return true;
        }
    }

    showError(field, message) {
        const errorBlock = this.errorBlocks[field];
        if (errorBlock) {
            errorBlock.innerText = message;
            errorBlock.style.display = 'block';
        }
        const fieldElement = this.form.querySelector(`[name="${field}"]`);
        if (fieldElement) {
            fieldElement.classList.add('border-red-500');
        }
    }

    showSuccess(field) {
        const errorBlock = this.errorBlocks[field];
        if (errorBlock) {
            errorBlock.innerText = '';
            errorBlock.style.display = 'none';
        }
        const fieldElement = this.form.querySelector(`[name="${field}"]`);
        if (fieldElement) {
            fieldElement.classList.remove('border-red-500');
        }
    }

    clearErrors() {
        for (const [field, errorBlock] of Object.entries(this.errorBlocks)) {
            if (errorBlock) {
                errorBlock.innerText = '';
                errorBlock.style.display = 'none';
            }
            const fieldElement = this.form.querySelector(`[name="${field}"]`);
            if (fieldElement) {
                fieldElement.classList.remove('border-red-500');
            }
        }
    }

    async postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    handleErrors(errors) {
        this.clearErrors();
        for (const [field, message] of Object.entries(errors)) {
            this.showError(field, message);
        }
    }

    showGeneralError(message) {
        console.error(message);
        // You can optionally add a general error display element here if needed
    }
}
