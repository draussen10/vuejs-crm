<template>
	<div class="col s12 m6 l4">
		<div class="card light-blue bill-card">
			<div class="card-content white-text">
				<span class="card-title">Счет в валюте</span>

				<p v-for="currency of currencies"
				:key="currency"
				class="currency-line">
					<span>
						{{ getCurrency(currency) | currency(currency) }}
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['rates'],
	data: () => ({
		currencies: ['RUB', 'USD', 'EUR']
	}),
	computed: {
		base() {
			return this.$store.getters.info.bill
		}
	},
	methods : {
		getCurrency(currency){
			return this.base / this.$valute(currency, 'Value')
		}
	}
}
</script>