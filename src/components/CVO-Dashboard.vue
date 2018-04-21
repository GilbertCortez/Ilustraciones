<template>
    </div>
<q-tabs color="blue" align="center">   
    <q-tab slot="title" label="ALL" name="tab-1" icon="list" />
    <q-tab  slot="title"label="VACCINATION FEE"  name="tab-2" icon="injection" />  
    <q-tab slot="title" label="ADOPTION FEE" name="tab-3" icon="pan tool" />  
    <q-tab slot="title" label="REDEMPTION FEE" name="tab-4" icon="close" />  
    
<q-tab-pane name="tab-1">
<div>
  <q-btn  round  color="primary"  @click="$refs.addEmployee.open()" class="fixed"  style="right: 50%; bottom: 18px" >  
  <q-icon name="add" /> 
  </q-btn>  
  <q-modal ref="addEmployee" minimized >
      <q-toolbar color="primary">
        <q-toolbar-title>
          Add New Employee
        </q-toolbar-title>
        <q-btn @click="$refs.addEmployee.close()" round small flat>
          <q-icon name="close" />
        </q-btn>
      </q-toolbar>
      <div class="layout-padding">
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
       <q-btn color="primary" @click="$refs.addEmployee.close();employeeFormSubmit();">Submit</q-btn>
       <q-btn color="black" @click="employeeFormClear">Clear</q-btn>
       <q-btn color="black" @click="trylang">trylang</q-btn>
      </center>
  </div>
      </div>
      
    </q-modal>
    <vue-good-table
      :columns="columnsForAll"
      :rows="rowsForAll"
      :paginate="true"
      :lineNumbers="true"
      :globalSearch="true">
      <template slot="table-row" slot-scope="props">
        <td class="fancy">{{props.row.firstName}}</td>
        <td class="fancy">{{props.row.middleName}}</td>
        <td class="fancy">{{props.row.lastName}}</td>
        <td class="fancy">{{props.row.email}}</td>
         <td class="fancy"> <q-checkbox  v-model="unchecked" value="true" checked-icon="sentiment very satisfied"  unchecked-icon="sentiment very dissatisfied" /></td>
    <td class="fancy"><q-btn icon="visibility" color="primary" @click="$refs.viewEmployeeDetails.open()"></q-btn><q-btn icon="create" color="secondary"></q-btn></td>
       
       
        <q-modal ref="viewEmployeeDetails" minimized >
            <q-toolbar color="primary">
              <q-toolbar-title>
                {{props.row.firstName}}
              </q-toolbar-title>
              <q-btn @click="$refs.viewEmployeeDetails.close()" round small flat>
                <q-icon name="close" />
              </q-btn>
            </q-toolbar>
            <div class="layout-padding">
              
            </div>
            
          </q-modal>

        
  </template>
  
</vue-good-table>

  </div>

  
    </q-tab-pane>  

    <q-tab-pane  name="tab-2">
    
      </q-tab-pane> 

    <q-tab-pane name="tab-3">Tab Three</q-tab-pane> 
    <q-tab-pane name="tab-4">Tab Four</q-tab-pane> 
  </q-tabs>



   
</template>
<script>
import { Toast } from 'quasar'
export default {
  mounted () {
    this.rowsForAll = this.$dbCon.services.employee.data
    this.$dbCon.services.employee.onDataChange(data => {
      this.rowsForAll = data
    })
  },
  name: 'test',
  data () {
    return {
      employeeForm: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        idPicture: ''
      },
      columnsForAll: [
        {
          label: 'First Name',
          field: 'name',
          filterable: true
        },
        {
          label: 'Middle Name',
          filterable: true
        },
        {
          label: 'Last Name',
          filterable: true
        },
        {
          label: 'Email',
          filterable: true
        },
        {
          label: 'Active',
          filterable: true
        },
        {
          label: 'Actions',
          filterable: true
        }
      ],
      rowsForAll: []
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



