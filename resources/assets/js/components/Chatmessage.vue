<template lang="html">
	<div>
    <div class="container">
	<div class="panel panel-default">
		  
			 <div class="panel-body">
		    	{{ message.Message }}
		  	</div>
		  	
		  	<div class="panel-footer"><small>Sent By {{ message.user.name }}</small></div>
		</div>
    </div>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

<style>
	

</style>