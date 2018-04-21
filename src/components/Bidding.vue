<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
          <q-card-main >
          <center><q-btn ><img src="~assets/uploads/sample.jpg" width="100%"></q-btn></center>
          <center><h4><font style="font-family:mistral">#Painting</font></h4></center>
        </q-card-main>
     <center> <h5>Bidding for Artwork:"PAINTING"</h5></center>
      
      <q-chat-message
        v-for="(msg, index) in messages"
        :key="`reg-${index}`"
        :label="msg.label"
        :sent="msg.sent"
        :text-color="msg.textColor"
        :bg-color="msg.bgColor"
        :name="msg.name"
        :avatar="msg.avatar"
        :text="msg.text"
        :stamp="msg.stamp"
      />
      <br><br>
      <center>
        <table>
          <tr>
        <td><q-btn color="black">(+100php)</q-btn></td>
        <td><br><q-btn color="black">(+500php)</q-btn></td>
        <td><br><q-btn color="black">(+1000php)</q-btn></td>
          </tr>
        </table>
        </center>

     

    
    
       
      </q-chat-message>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      messages: [
        {
          label: 'Friday, 18th'
        },
        {
          name: 'Vladimir',
          text: ['Mine for 1000php?'],
          textColor: 'white',
          bgColor: 'black',
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['Mine for 1500php!'],
          sent: true,
          textColor: 'white',
          bgColor: 'black',
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        }
       
      ]
    }
  }
}
</script>