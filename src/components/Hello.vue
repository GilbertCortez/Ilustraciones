<template>
  <q-layout
    ref="layout"
    view="2Hh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" color="black">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Moments
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

    <div slot="left">
    <q-list no-border link inset-delimiter>

      <q-side-link item to="/shopping">
        <q-item >
          <q-item-side icon="web" />
          <q-item-main label="Dashboard" />
        </q-item>
        </q-side-link>

      <q-side-link item to="/shopping">
        <q-item>
          <q-item-side icon="view list" />
          <q-item-main label="Events" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/shopping">
        <q-item>
          <q-item-side icon="supervisor account" />
          <q-item-main label="Accounts" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/shopping">
        <q-item>
          <q-item-side icon="perm contact calendar" />
          <q-item-main label="Profile" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/shopping"> 
        <q-item>
          <q-item-side icon="help" />
          <q-item-main label="Help" />
        </q-item>
      </q-side-link>

      <q-side-link item to="/logout">
        <q-item>
          <q-item-side icon="clear" />
          <q-item-main label="Logout" />
        </q-item>
      </q-side-link>

    </q-list>
    </div>
<q-tabs color="black" align="center">   
    <q-tab slot="title" label="create event" name="tab-1" icon="add circle" />
    <q-tab  slot="title"label="Upcoming events"  name="tab-2" icon="sort" />  
    <q-tab slot="title" label="Recent events" name="tab-3" icon="reply" />  
    <q-tab slot="title" label="Cancelled events" name="tab-4" icon="block" />  
    

    <q-tab-pane name="tab-1">
<q-stepper ref="stepper" color="black">  
  <q-step default title="Instructions" >  
    <q-list> 
       <q-collapsible opened icon="looks one" label="Provide all event information">    
         <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> 
          </q-collapsible>  
          <q-collapsible icon="looks two" label="Search and add Items and Services">    
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> 
             </q-collapsible> 
              <q-collapsible icon="looks 3" label="Finalize">  
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> 
                   </q-collapsible>
                    </q-list>
     </q-step>
   <q-step default title="Step 1" subtitle="Provide"> 
         <q-field  icon="check circle"  label="Event Name"    ><q-input type="text" v-model="model" /></q-field>
         <q-field  icon="check circle"  label="Event Location"><q-input type="text" v-model="model" /></q-field>
         <q-field  icon="check circle"  label="Estimated Number Of Guest"><q-input type="text" v-model="model" /></q-field>
         <q-field  icon="check circle"  label="Event Date and Time"><q-datetime-range color="black" type="datetime"  v-model="range"  :min="min"  :max="max" /></q-field>
         
         
       </q-step>
   <q-step title="Step 2" subtitle="Search & Add">...</q-step>
   <q-step title="Step 3" subtitle="Finalize">...</q-step>
   
 <q-stepper-navigation>  
     <q-btn flat @click="$refs.stepper.previous()">Back</q-btn> 
        <q-btn @click="$refs.stepper.next()">Next</q-btn>  </q-stepper-navigation> 
        </q-stepper>
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
  data () {
    return {
    }
  }
}
</script>


