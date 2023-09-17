interface Appointment {
  phoneNumber: string,
  postcode: string,
  services: 'housekeeping' | 'window-cleaning' | 'grout-cleaning' | 'commercial-cleaning' | 'wall-cleaning' | 'oven-cleaning'
}

export default Appointment
