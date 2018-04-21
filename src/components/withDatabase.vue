<template>
  <div class="row">
    <q-toolbar color="primary">
      <q-toolbar-title>
        Store ni Juan v100
      </q-toolbar-title>
      <q-btn round small>
        <q-icon name="add" @click="$refs.addItemModal.open()"/>
      </q-btn>
      <q-btn round small @click="$refs.cartModal.open()">
        <q-icon name="shopping cart" />
        <q-chip v-show="cart.length" small floating color="negative">{{cart.length}}</q-chip>
      </q-btn>
    </q-toolbar>

    <h1>Items</h1>
    <div class="layout-padding row">
      <q-card v-for="item in items" :key="item._id" style="width: 200px;">
        <q-card-title>
          {{item.name}}
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          {{item.price}}
        </q-card-main>
        <q-card-actions>
          <div class="col">
            <q-btn @click="pushToCart(item)" class="pull-right" round color="secondary" small icon="add shopping cart"></q-btn>
          </div>
        </q-card-actions>
      </q-card>
      
    </div>


    <h1>My Orders</h1>
    <div class="layout-padding row">
      <q-card v-for="order in myOrders" :key="order._id" style="width: 200px;">
        <q-card-title>
          {{order.client}}
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          {{order.items.length}} Items
        </q-card-main>
        <q-card-actions>
          <div class="col">
            <!-- <q-btn @click="pushToCart(item)" class="pull-right" round color="secondary" small icon="add shopping cart"></q-btn> -->
          </div>
        </q-card-actions>
      </q-card>
    </div>
  <q-modal ref="addItemModal" minimized >
      <q-toolbar color="primary">
        <q-toolbar-title>
          Add Item
        </q-toolbar-title>
        <q-btn @click="$refs.addItemModal.close()" round small flat>
          <q-icon name="close" />
        </q-btn>
      </q-toolbar>
      <div class="layout-padding">
        
        <q-field  icon="list" > 
        <q-input  v-model="itemsForm.name"   /> 
      </q-field>
      <br>
      <q-field icon="local atm"> 
        <q-input type="number" v-model="itemsForm.price" /> 
      </q-field>
        <q-btn color="primary" @click="addItem();$refs.addItemModal.close()">Add</q-btn>
      </div>
      
    </q-modal>
    <q-modal ref="cartModal" minimized >
      <q-toolbar color="primary">
        <q-toolbar-title>
          Cart
        </q-toolbar-title>
        <q-btn @click="$refs.cartModal.close()" round small flat>
          <q-icon name="close" />
        </q-btn>
      </q-toolbar>
      <div class="layout-padding row">
        <div class="col">
          {{cart.length ? '': '--- No items found ---'}}
          <ul>
            <li v-for="(i, index) in cart" :key="index">
              {{i.name}} - {{i.price}}Php
              <q-btn @click="removeFromCart(index)" icon="delete" color="negative" round small flat />
            </li>
          </ul>
          <div class="col">
            <h5>Total: {{cartTotal}}</h5>
            <q-btn v-if="cart.length" @click="placeOrder" small color="amber" class="pull-right">
              Place Order
            </q-btn>
          </div>
        </div>
        
      </div>
      
    </q-modal>
  </div>
</template>
<script>
import {Toast} from 'quasar'
export default {
  mounted () {
    this.myOrders = this.$dbCon.services.orders.data
    this.items = this.$dbCon.services.items.data
    this.$dbCon.services.orders.onDataChange(updatedOrders => {
      this.myOrders = updatedOrders
    })
    this.$dbCon.services.items.onDataChange(item => {
      this.items = item
    })
  },
  data () {
    return {
      myOrders: [],
      clientName: 'Juan dela Cruz',
      itemsForm: {
        name: '',
        price: ''
      },
      items: [],
      cart: []
    }
  },
  computed: {
    cartTotal () {
      let total = 0
      for (let item of this.cart) {
        total += item.price
      }
      return total
    }
  },
  methods: {
    pushToCart (i) {
      Toast.create.positive(`${i.name} - ${i.price} added to cart`)
      this.cart.push(i)
    },
    addItem () {
      let addNewItem = {
        name: this.itemsForm.name,
        price: this.itemsForm.price
      }
      this.$dbCon.services.items.create(addNewItem)
      Toast.create.positive(`${this.itemsForm.name}(${this.itemsForm.price} php) is added!`)
      this.itemsForm.name = ''
      this.itemsForm.price = ''
    },
    removeFromCart (i) {
      this.cart.splice(i, 1)
    },
    placeOrder () {
      let order = {
        client: this.clientName,
        items: this.cart
      }
      console.log(order)
      this.$dbCon.services.orders.create(order)
    }
  }
}
</script>