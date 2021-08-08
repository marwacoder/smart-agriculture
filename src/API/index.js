import axios from 'axios';



export const login = (data) => {
    this.$store.dispatch('authStart')
    axios.post('/login', data).then(response => {
        this.$store.dispatch('authSuccess', response
        .data)  
    }).catch(error => {
        this.$store.dispatch('authError',error)
    })
}
