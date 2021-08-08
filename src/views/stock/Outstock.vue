<template>
  <v-data-table
    :headers="headers"
    :items="stocks"
    sort-by="categories"
    class="elevation-0"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>STOCK IN</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
       
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      
      </v-btn>
    
    </template>
    
  </v-data-table>
  

</template>
<script>
  export default {
    data: () => ({
     
      dialogDelete: false,
      headers: [
        {
          text: 'Stock Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Category', value: 'category' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Price Per Stock', value: 'price' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      stocks: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        category: '',
        quantity: 0,
        price: 0
      },
      defaultItem: {
        name: '',
        category: '',
        quantity: 0,
        price: 0
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {

      initialize () {
        this.$http.get('http://localhost:8000/stocks/dispatch/out').then((response)=>{
        this.stocks = response.data
      }).catch((error)=>{
        console.log(error)

      })
      },

      editItem (item) {
        this.editedIndex = this.stocks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.stocks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        const id = this.editedItem.id
        this.$http.post(`http://localhost:8000/stocks/dispatch/out/destroy/${id}`).then((response) => {
            console.log(response,'id')

            if(response){
              this.closeDelete()
              this.initialize()
            }
            
          }).catch((error)=> {
            console.log(error)
          })
        //
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
  }
</script>