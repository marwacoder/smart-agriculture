<template>
  <v-form
  >
  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="quantity"
                      label="Quantity to dispatch"
                    ></v-text-field>
                  </v-col>
   
     <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                  
                  <v-select
          v-model="stocks"
          :items="items.stocks"
          item-text="name"
          item-value="abbr"
          label="Stock to dispatch"
          persistent-hint
          return-object
          single-line
        ></v-select>
                  </v-col>
<v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                  
                  <v-select
          v-model="drivers"
          :items="items.drivers"
          item-text="regNo"
          item-value="abbr"
          label="Driver Plate Number"
          persistent-hint
          return-object
          single-line
        ></v-select>
                  </v-col>
    
   
    <v-btn
      color="green"
      @click="dispatch"
    >
      DISPATCH
    </v-btn>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      driverId: '',
      id: '',
      quantity: '',
      name: '',
      email: '',
      items: {stocks: [], drivers: []},
      drivers: null,
      stocks: null,
    }),

    created (){
      this.getDrivers()
      this.getStocks()
    },
  
    methods: {
      getStocks (){
        this.$http.get('http://localhost:8000/stocks').then((response)=>{
        this.items.stocks = response.data
        console.log(response,'resssss')
      }).catch((error)=>{
        console.log(error)

      })
      },
      getDrivers (){
        this.$http.get('http://localhost:8000/stocks/driver/getAll').then((response)=>{
        this.items.drivers = response.data
      }).catch((error)=>{
        console.log(error)

      })
      },

      dispatch (){
        
        console.log(this.drivers.id, 'hhhhhhhh')
        this.$http.post('http://localhost:8000/stocks/dispatch/out',{
          quantity: this.quantity,
          driverId: this.drivers.id,
          id: this.stocks.id
        }).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)

      })
      }


      }
    
  }
</script>