<template>
  <form class="appointment-form" @submit.prevent="sendEmail">
    <label class="appointment-label">Online Appointment</label>
    <input v-model="phoneNumber" type="tel" placeholder="Phone Number" class="appointment-phone" required/>
    <input v-model="postcode" type="text" pattern="[0-9]{4}" placeholder="Postcode" class="appointment-postcode" required/>
    <select v-model="services" class="appointment-services" required>
      <option value="housekeeping">Housekeeping</option>
      <option value="window-cleaning">Window Cleaning</option>
      <option value="grout-cleaning">Grout Cleaning</option>
      <option value="commercial-cleaning">Commercial Cleaning</option>
      <option value="wall-cleaning">Wall Cleaning</option>
      <option value="oven-cleaning">Kitchen Cleaning</option>
    </select>
    <button type="submit" class="submit-button orange-button">Submit Now</button>
  </form>
</template>

<script lang="ts">
import axios from 'axios'
import Appointment from '@/types/Appointment'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      phoneNumber: '',
      postcode: '',
      services: 'housekeeping'
    } as Appointment
  },
  methods: {
    sendEmail() {
      const emailData: Appointment = {
        phoneNumber: this.phoneNumber,
        postcode: this.postcode,
        services: this.services
      }

      // Make an HTTP request to your server-side email endpoint
      axios.post('https://hole-crew-email.fly.dev/api/send-email', emailData)
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
      this.services = 'housekeeping'
    }
  }
})
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .appointment-form{
    z-index: 0;
    color: white;
    background-color: $hole-crew-navy;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 20px;
    padding: 50px;
    justify-content: space-between;
    display: flex;
    border-radius: 20px;
    max-width: 1000px;
    margin: 100px auto 0;

    label{
      font-weight: 500;
      font-size: 14px;
      text-align: left;
      max-width: 70px;
    }

    input,
    select{
      padding: 5px 10px;
      border-radius: 4px;
      border: none;
    }
    select{
      padding-left: 7px;
    }

    .submit-button{
      margin-left: 0;
      padding: 5px 40px;
    }
  }
  @media only screen and (max-width: 999px){
    form.appointment-form{
      max-width: 390px;
      position: relative;
      z-index: 0;
      flex-direction: column;
      padding: 30px;
      label{
        max-width: 100%;
        margin-bottom: 20px;
      }
      input, select{
        margin-bottom: 15px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    form.appointment-form{
      max-width: calc(80vw - 50px);
    }
  }

</style>
