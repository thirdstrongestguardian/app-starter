<template>
	<div class="example">{{ msg }}</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<style>
.example {
	background-color: red;
}
</style>