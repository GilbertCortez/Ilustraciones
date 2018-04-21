<template>

  <div>
      <div>

          <div class="layout-padding row">
  
      <q-card v-for="art in myartworks" :key="art._id" style="width: 250px;height: 250px">
        
        <q-card-main >
          <center><q-btn @click="openModal(art.photo);$refs.viewArtwork.open();"><img src="~assets/uploads/sample.jpg" width="100%"></q-btn></center>
          <center><h4><font style="font-family:mistral">#{{art.description}}</font></h4></center>
        </q-card-main>
        

      
      </q-card>
      </q-btn>
    </div>
   <q-modal ref="viewArtwork" minimized>
      <q-toolbar color="black">
        <q-toolbar-title>
        
        </q-toolbar-title>
        <q-btn @click="$refs.viewArtwork.close();" round small flat>
            <q-icon name="close" />
        </q-btn>
      </q-toolbar>

      <div class="layout-padding">
      <img :src="this.modalDescription" />
      </div>
      
    </q-modal>
      </div>
      <div>
       <q-btn large round  color="black"  @click="$refs.addArtwork.open()" class="fixed"  style="right: 20px; bottom: 18px" >  
  <q-icon name="add" /> 
  </q-btn>  

  <q-modal ref="addArtwork" minimized >
      <q-toolbar color="black">
        <q-toolbar-title>
          Add Artwork
        </q-toolbar-title>
        <q-btn @click="$refs.addArtwork.close();$refs.stepper.previous();$refs.stepper.previous();clearDescription();" round small flat>
            <q-icon name="close" />
        </q-btn>
      </q-toolbar>

      <div class="layout-padding">
        <div>
        <!-- FORM HERE -->
        <q-stepper ref="stepper" color="black">  
        <!-- Step: -->  <q-step default title="Artwork Details" subtitle="What's your artwork?">
            <q-field   label="Caption"><q-input type="text" v-model="description" /></q-field>
                            <q-stepper-navigation>       
                                <q-btn @click="$refs.stepper.next()">Next</q-btn>  
                            </q-stepper-navigation>
                        </q-step>
        <!-- Step: -->  <q-step title="Artwork Photo" subtitle="What does your artwork look like?">
               <q-field  icon="picture"  label="Picture of your artwork"   > 
        <q-input type="file" v-model="picture" />
      </q-field>
                             <q-stepper-navigation>       
                                 <q-btn flat @click="$refs.stepper.previous()">Back</q-btn>
                                <q-btn @click="$refs.stepper.next()">Next</q-btn>  
                            </q-stepper-navigation>
                        </q-step>
        <!-- Step: -->  <q-step title="Review & Submit" subtitle="Clarify everything before uploading.">
           <center>  <q-card style="width: 250px;height: 250px">
        <q-card-main>
          <img src="~assets/uploads/sample.jpg" width="100%">
        </q-card-main>
      </q-card></center>
      <center>CAPTION: "{{this.description}}"</center>
      <br>
                            <center><q-btn color="black" @click="$refs.addArtwork.close();$refs.stepper.previous();$refs.stepper.previous();submitArtwork();">Upload</q-btn></center>  
                        </q-step>
        
        </q-stepper>
        
        </div>
      </div>
      
    </q-modal>

  </div>
  </div>
</template>
<script>
import { Toast } from 'quasar'
export default {
  mounted () {
    this.myartworks = this.$dbCon.services.artworks.data
    this.$dbCon.services.artworks.onDataChange(data => {
      this.myartworks = data
    })
  },
  data () {
    return {
      modalDescription: 'this is modal desc',
      myartworks: [],
      description: '',
      owner: ''
    }
  },
  methods: {
    openModal (x) {
      this.modalDescription = x
    },
    clearDescription () {
      this.description = ''
    },
    submitArtwork () {
      let submitArtwork = {
        owner: 'gilbertcortez',
        description: this.description,
        photo: '~assets/uploads/sample.jpg'
      }
      this.$dbCon.services.artworks.create(submitArtwork)
      Toast.create({
        html: 'New Artwork Uploaded.',
        bgColor: 'black'
      })
      this.clearDescription()
    }
  }
}
</script>