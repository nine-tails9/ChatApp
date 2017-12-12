
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/ExampleComponent.vue'));

Vue.component('chat-message', require('./components/Chatmessage.vue'));

Vue.component('chat-log', require('./components/Chatlog.vue'));

Vue.component('chat-composer', require('./components/Chatcomposer.vue'));

const app = new Vue({
    el: '#app',

    data: {

    		messages: []
    	
    },
    methods:{

    	addmessage(Message){

            this.messages.push(Message);

    		axios.post('/messages', Message).then(response =>{

            });
    	}
    },

    created(){

        axios.get('/messages').then(response =>{

            this.messages = response.data;
            console.log(response);
        });
    }
});
