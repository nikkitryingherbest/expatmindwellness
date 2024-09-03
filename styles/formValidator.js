class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.nameField = this.form.querySelector('input[name="name"]');
        this.emailField = this.form.querySelector('input[name="email"]');
        this.messageField = this.form.querySelector('textarea[name="message"]');
        this.errorBlock = document.getElementById('contact_me_error');
 
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
                const fullURL = window.location.href;
                const baseURI = `${window.location.protocol}//${window.location.host}`;

                const response = await this.postData(baseURI + '/contact_me.php', data);
                console.log(response);
                if (response.success) {
                    console.log('Form submitted successfully!');
                    this.form.reset();
                    this.clearErrors();
                } else {
                    console.log(response);
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
            this.showError(this.nameField, 'Name is required.');
            return false;
        } else {
            this.showSuccess(this.nameField);
            return true;
        }
    }
 
    validateEmail() {
        const email = this.emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (email === '') {
            this.showError(this.emailField, 'Email is required.');
            return false;
        } else if (!emailRegex.test(email)) {
            this.showError(this.emailField, 'Email is not valid.');
            return false;
        } else {
            this.showSuccess(this.emailField);
            return true;
        }
    }
 
    validateMessage() {
        const message = this.messageField.value.trim();
        if (message === '') {
            this.showError(this.messageField, 'Message is required.');
            return false;
        } else {
            this.showSuccess(this.messageField);
            return true;
        }
    }
 
    showError(input, message) {
        console.log(input);
        // const formControl = input.parentElement;
        // formControl.className = 'form-control error';
        // const small = formControl.querySelector('small');
        // small.innerText = message;
    }
 
    showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
 
    clearErrors() {
        const formControls = this.form.querySelectorAll('.form-control');
        formControls.forEach((control) => {
            control.className = 'form-control';
        });
        this.errorBlock.innerText = '';
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
            const input = this.form.querySelector(`[name="${field}_err"]`);
            if (input) {
                this.showError(input, message);
            } else {
                this.showGeneralError(message);
            }
        }
    }
 
    showGeneralError(message) {
        this.errorBlock.innerText = message;
    }
}
 
 