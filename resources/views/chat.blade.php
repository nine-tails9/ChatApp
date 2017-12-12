<!DOCTYPE html>
<html>
<head>
	<title>Hey There</title>
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>

	<div id="app">
		<h1>ChatRoom</h1>

		<chat-log :messages="messages"></chat-log>
		<chat-composer v-on:sent="addmessage"></chat-composer>
	</div>


	<script type="text/javascript" src="js/app.js"></script>

</body>
</html>