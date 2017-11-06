<template>
	<div>
		{{title}} <br/>
		{{processTitle}} <br/>
		{{count}} <br/>
	</div>
</template>

<script>
	import {COUNT_UP, COUNT_DOWN, SET_COUNT_START} from '../actions/types/Test'

	export default {
		data() {
			return {
				title: '',
				processTitle: 'upping...',
				start: 0
			}
		},

		created() {
			let countStart = this.$store.state.route.params.start || 0;
			this.$store.commit(SET_COUNT_START, {value: countStart});
			this.title = 'Default count = ' + countStart;
			setInterval(() => {
				if (this.start != 10) {
					this.processTitle = 'upping...';
					this.$store.commit(COUNT_UP);
					this.start ++;
				}
				if (this.start == 10) {
					this.processTitle = 'downing...';
					this.$store.commit(COUNT_DOWN);
					if (this.$store.state.count == 0) {
						this.start = 0;
					}
				}
			}, 1000)
		},
		
		computed: {
			count() {
				return this.$store.state.count
			}
		}
	}
</script>