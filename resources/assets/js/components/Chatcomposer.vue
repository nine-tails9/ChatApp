<template lang="html">
    <div>
    <div class="container">
        <div class="input-group">
          
          <input type="text" @keyup.enter = "send" v-model = "messagetext" class="form-control" aria-label="..." placeholder="Start Typing........">

          <div class="input-group-btn">
                <button class="btn btn-primary" @click="send">Send</button>
          </div>
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        data(){

        	return{

        		messagetext: ""


        	}


        },

        methods: {

            send(){


                this.$emit('sent', {

                    message: this.messagetext,
                    author: "Deepanshu"

                });


                this.messagetext = "";


            }
        }

        



    }
</script>

<style>
	

</style>