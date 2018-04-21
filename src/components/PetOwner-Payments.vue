<template>
  <!-- LAYOUT FOR THE SIDE NAV BAR -->
  <q-layout ref="layout" view="2Hh Lpr fff" :left-class="{'bg-grey-2': true}">
  <!-- MAIN TOOLBAR(HEADER) -->
  <q-toolbar slot="header" color="blue">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title>
        City Veterinary Office
    </q-toolbar-title>

    <q-btn round>
      <q-icon name="lightbulb outline" />
    </q-btn>
    
    <q-btn round>
      <q-icon name="account circle" />
           
        <q-popover ref="popover">   
          <q-list separator link> 
            <q-item >    
              Profile
            </q-item>  
            <q-item >    
              Logout
            </q-item>  
          </q-list> 
        </q-popover>    
      </q-btn>

  </q-toolbar>
  <!-- END OF MAIN TOOLBAR(HEADER) -->
  <!-- SIDE TOOLBAR(LEFT) -->
    <div slot="left">
    <q-list no-border link inset-delimiter>

      <q-side-link item to="/petowner/dashboard">
        <q-item >
          <q-item-side icon="web" />
          <q-item-main label="Dashboard" />
        </q-item>
        </q-side-link>

      <q-side-link item to="/petwowner/announcements"> 
        <q-item>
          <q-item-side icon="priority high" />
          <q-item-main label="Announcements"  />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/mypets">
        <q-item>
          <q-item-side icon="view list" />
          <q-item-main label="My Pets" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/payments">
        <q-item>
          <q-item-side icon="local atm" />
          <q-item-main label="Payments" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/animaladoption">
        <q-item>
          <q-item-side icon="pan tool" />
          <q-item-main label="Animal Adoption" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/lostandfound"> 
        <q-item>
          <q-item-side icon="search" />
          <q-item-main label="Lost and Found" />
        </q-item>
      </q-side-link>
      

      <q-side-link item to="/petowner/help"> 
        <q-item>
          <q-item-side icon="help" />
          <q-item-main label="Help" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/profile"> 
        <q-item>
          <q-item-side icon="account circle" />
          <q-item-main label="Profile" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/petowner/login">
        <q-item>
          <q-item-side icon="clear" />
          <q-item-main label="Logout" />
        </q-item>
      </q-side-link>

    </q-list>
    </div>
<q-tabs color="blue" align="center">   
    <q-tab slot="title" label="ALL" name="tab-1" icon="list" />
    <q-tab  slot="title"label="VACCINATION FEE"  name="tab-2" icon="injection" />  
    <q-tab slot="title" label="ADOPTION FEE" name="tab-3" icon="pan tool" />  
    <q-tab slot="title" label="REDEMPTION FEE" name="tab-4" icon="close" />  
    
<q-tab-pane name="tab-1">
<div>
    <vue-good-table
      :columns="columnsForAll"
      :rows="rowsForAll"
      :paginate="true"
      :lineNumbers="true"
      :globalSearch="true"/>
  </div>
    </q-tab-pane>  

    <q-tab-pane  name="tab-2">
 
      </q-tab-pane> 

    <q-tab-pane name="tab-3">Tab Three</q-tab-pane> 
    <q-tab-pane name="tab-4">Tab Four</q-tab-pane> 
  </q-tabs>

    
  </q-layout>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      columnsForAll: [
        {
          label: 'Name',
          field: 'name',
          filterable: true
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          html: false,
          filterable: true
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          inputFormat: 'YYYYMMDD',
          outputFormat: 'MMM Do YY',
          filterable: true
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          html: false,
          filterable: true
        }
      ],
      rowsForAll: [
        {id: 1, name: 'John', age: 20, createdAt: '201-10-31:9:35 am', score: 0.03343}

      ]
    }
  }
}
</script>


