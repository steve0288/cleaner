<template>
  <form class="appointment-form">
    <label class="appointment-label">Online Appointment</label>
    <input type="tel" placeholder="Phone Number" class="appointment-phone" required/>
    <input type="text" pattern="[0-9]{4}" placeholder="Postcode" class="appointment-postcode" required/>
    <input type="text" placeholder="Services" class="appointment-services" required/>
    <button type="submit" class="submit-button orange-button">Submit Now</button>
  </form>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      phoneNumber: '',
      postcode: '',
      services: ''
    }
  },
  methods: {
    sendEmail() {
      const emailData = {
        phoneNumber: this.phoneNumber,
        postcode: this.postcode,
        services: this.services
      }

      // Make an HTTP request to your server-side email endpoint
      axios.post('/api/send-email', emailData)
        .then(response => {
          // Email sent successfully, handle any response if needed
          console.log('Email sent successfully')
        })
        .catch(error => {
          // Handle any error occurred during the email sending
          console.error('Error sending email:', error)
        })

      // Reset form fields
      this.phoneNumber = ''
      this.postcode = ''
      this.services = ''
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .appointment-form{
    margin-top: 100px;
    color: white;
    background-color: $hole-crew-navy;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 20px;
    padding: 50px;
    justify-content: space-between;
    display: flex;
    border-radius: 20px;

    label{
      font-weight: 500;
      font-size: 14px;
      text-align: left;
      max-width: 70px;
    }

    input{
      padding: 5px 10px;
      border-radius: 4px;
      border: none;
    }
    .submit-button{
      margin-left: 0;
      padding: 5px 40px;
    }
  }
</style>
