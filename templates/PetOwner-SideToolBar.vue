
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



