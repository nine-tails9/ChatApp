<template lang="html">
	<div>
    <div class="container">
	<div class="panel panel-default">
		  
			 <div class="panel-body">
		    	{{ message.message }}
		  	</div>
		  	
		  	<div class="panel-footer"><small>Sent By {{ message.author }}</small></div>
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