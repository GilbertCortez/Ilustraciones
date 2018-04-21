<template>
  <div>
       <q-field  icon="cloud"  label="First Name"  :error="mailHasError"  error-label="We need a valid email"   > 
        <q-input  v-model="employeeForm.firstName"   /> 
      </q-field>
         <q-field  icon="cloud"  label="Middle Name"  :error="mailHasError"  error-label="We need a valid email"   > 
        <q-input  v-model="employeeForm.middleName"   /> 
      </q-field>
         <q-field  icon="cloud"  label="Last Name"  :error="mailHasError"  error-label="We need a valid email"   > 
        <q-input  v-model="employeeForm.lastName"   /> 
      </q-field>
      <q-field  icon="cloud"  label="Email"   :error="mailHasError"  error-label="We need a valid email"  > 
        <q-input type="email" v-model="employeeForm.email" /> 
      </q-field>
       <q-field  icon="cloud"  label="Password"   :error="mailHasError"  error-label="We need a valid email"  > 
        <q-input type="password" v-model="employeeForm.password" /> 
      </q-field>
      <q-field  icon="cloud"  label="ID Picture"   :error="mailHasError"  error-label="We need a valid email"  > 
        <q-input type="file" v-model="employeeForm.idPicture" /> 
      </q-field>
      <center>
       <q-btn color="primary" @click="employeeFormSubmit">Submit</q-btn>
       <q-btn color="black" @click="employeeFormClear">Clear</q-btn>
       <q-btn color="black" @click="trylang">trylang</q-btn>
      </center>
  </div>
</template>
<script>
import { Toast } from 'quasar'
export default {
  data () {
    return {
      employeeForm: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        idPicture: ''
      }
    }
  },
  methods: {
    employeeFormSubmit () {
      // VALIDATES REQUIRED FIELD
      var canBeSubmit = true
      if (this.employeeForm.firstName.trim() === '') {
        Toast.create.negative('First Name is Required.')
        canBeSubmit = false
      }
      if (this.employeeForm.lastName.trim() === '') {
        Toast.create.negative('Last Name is Required.')
        canBeSubmit = false
      }
      if (this.employeeForm.email.trim() === '') {
        Toast.create.negative('Email is Required.')
        canBeSubmit = false
      }
      if (this.employeeForm.password.trim() === '') {
        Toast.create.negative('Password is Required.')
        canBeSubmit = false
      }
      // IF THERE'S NO PROBLEM, SAVE THE DATA IN THE DB
      if (canBeSubmit === true) {
        let submitEmployeeForm = {
          firstName: this.employeeForm.firstName,
          middleName: this.employeeForm.middleName,
          lastName: this.employeeForm.lastName,
          email: this.employeeForm.email,
          password: this.employeeForm.password,
          idPicture: this.employeeForm.idPicture
        }
        alert()
        this.$dbCon.services.employee.create(submitEmployeeForm)
        Toast.create.positive('New employee information saved.')
        this.employeeFormClear(2)
      }
      else {
        Toast.create.negative('Please review fields again.')
        canBeSubmit = true
      }
    },
    employeeFormClear (x) {
      this.employeeForm.firstName = ''
      this.employeeForm.middleName = ''
      this.employeeForm.lastName = ''
      this.employeeForm.email = ''
      this.employeeForm.password = ''
      if (!(x === 2)) {
        Toast.create('Fields cleared.')
      }
    }
  }
}
</script>