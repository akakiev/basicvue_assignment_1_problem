const app = Vue.createApp({
data() {
    return {
        name: 'Serhii',
        age: 37,
        imgLink: 'https://www.becomingminimalist.com/wp-content/uploads/2019/09/how-to-be-happy.jpg',
    };
},
methods: {
    favNumber(){
        return Math.random();
    }
}
});
app.mount('#assignment');