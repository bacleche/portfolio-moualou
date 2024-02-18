<template>
    <section class="py-5">
      <div class="container px-5">
        <!-- Contact form-->
        <div class="bg-light rounded-4 py-5 px-4 px-md-5">
          <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
            <h1 class="fw-bolder">Get in touch</h1>
            <p class="lead fw-normal text-muted mb-0">Let's work together!</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-8 col-xl-6">
              <form id="contactForm" @submit.prevent="submitForm">
                <!-- Name input -->
                <div class="form-floating mb-3">
                  <input v-model="formData.name" class="form-control" id="name" type="text" placeholder="Enter your name..." :class="{ 'is-invalid': formErrors.name }" />
                  <label for="name">Full name</label>
                  <div class="invalid-feedback">A name is required.</div>
                </div>
                <!-- Email address input -->
                <div class="form-floating mb-3">
                  <input v-model="formData.email" class="form-control" id="email" type="email" placeholder="name@example.com" :class="{ 'is-invalid': formErrors.email }" />
                  <label for="email">Email address</label>
                  <div class="invalid-feedback" v-if="formErrors.email">
                    {{ formErrors.email === 'required' ? 'An email is required.' : 'Email is not valid.' }}
                  </div>
                </div>
                <!-- Phone number input -->
                <div class="form-floating mb-3">
                  <input v-model="formData.phone" class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" :class="{ 'is-invalid': formErrors.phone }" />
                  <label for="phone">Phone number</label>
                  <div class="invalid-feedback">A phone number is required.</div>
                </div>
                <!-- Message input -->
                <div class="form-floating mb-3">
                  <textarea v-model="formData.message" class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" :class="{ 'is-invalid': formErrors.message }"></textarea>
                  <label for="message">Message</label>
                  <div class="invalid-feedback">A message is required.</div>
                </div>
                <!-- Submit success message -->
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                <!-- Submit error message -->
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <!-- Submit Button -->
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg" id="submitButton" type="submit" :disabled="isSubmitting">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactComponents',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
        formErrors: {},
        isSubmitting: false,
      };
    },
    methods: {
        async submitForm() {
  this.resetErrorMessages();

  if (this.validateForm()) {
    try {
      this.isSubmitting = true;
      // Remplacez 'API_ENDPOINT' par l'URL de votre endpoint côté serveur
      await this.$axios.post('API_ENDPOINT', this.formData);
      document.getElementById('submitSuccessMessage').classList.remove('d-none');
    } catch (error) {
      console.error('Error submitting form:', error);
      document.getElementById('submitErrorMessage').classList.remove('d-none');
    } finally {
      this.isSubmitting = false;
    }
  }
},

      validateForm() {
  this.formErrors = {};

  if (!this.formData.name.trim()) {
    this.formErrors['name'] = 'required';
  }

  if (!this.formData.email.trim()) {
    this.formErrors['email'] = 'required';
  } else if (!this.isValidEmail(this.formData.email.trim())) {
    this.formErrors['email'] = 'email';
  }

  if (!this.formData.phone.trim()) {
    this.formErrors['phone'] = 'required';
  }

  if (!this.formData.message.trim()) {
    this.formErrors['message'] = 'required';
  }

  return Object.keys(this.formErrors).length === 0;
},

      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      resetErrorMessages() {
        document.getElementById('submitSuccessMessage').classList.add('d-none');
        document.getElementById('submitErrorMessage').classList.add('d-none');
      },
    },
  };
  </script>
  