<template>
  <!-- LAYOUT FOR THE SIDE NAV BAR -->
  <q-layout ref="layout" view="2Hh Lpr fff" :left-class="{'bg-grey-2': true}">
  <!-- MAIN TOOLBAR(HEADER) -->
  <q-toolbar slot="header" color="black">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title>
        ILUSTRACIONES
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

      <q-side-link item to="/ilustraciones/newsfeed">
        <q-item >
          <q-item-side icon="web" />
          <q-item-main label="News Feed" />
        </q-item>
        </q-side-link>
      
       <q-side-link item to="/ilustraciones/myartworks">
        <q-item >
          <q-item-side icon="picture in picture" />
          <q-item-main label="My Artworks" />
        </q-item>
        </q-side-link>

       <q-side-link item to="/ilustraciones/bidding">
        <q-item >
          <q-item-side icon="thumbs up down" />
          <q-item-main label="Bidding" />
        </q-item>
        </q-side-link>

         <q-side-link item to="/ilustraciones/transaction">
        <q-item >
          <q-item-side icon="supervisor account" />
          <q-item-main label="Transactions" />
        </q-item>
        </q-side-link>

      <q-side-link item to="/login">
        <q-item>
          <q-item-side icon="clear" />
          <q-item-main label="Logout" />
        </q-item>
      </q-side-link>

    </q-list>
    </div>
<router-view class="test" v-transition="test" transition-mode="out-in"></router-view>
    
  </q-layout>
</template>


