<template>
  <form class="appointment-form" @submit.prevent="sendEmail">
    <label class="appointment-label">Online Appointment</label>
    <input v-model="phoneNumber" type="tel" placeholder="Phone Number" class="appointment-phone" required/>
    <input v-model="postcode" type="text" pattern="[0-9]{4}" placeholder="Postcode" class="appointment-postcode" required/>
    <select v-model="services" class="appointment-services" required>
      <option value="service1">Service 1</option>
      <option value="service2">Service 2</option>
      <option value="service3">Service 3</option>
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
      services: 'service1'
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
      this.services = 'service1'
    }
  }
})
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
