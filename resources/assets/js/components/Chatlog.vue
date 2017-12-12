<template lang="html">
    <div>
    <div class="container">
        <chat-message v-for = "message in messages" :message = "message"></chat-message>
    </div>
    </div>
</template>

<script>
    export default {
         props: ["messages"]

    }
</script>

<style>
	

</style>