<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

		<Loader v-if="loading" />

    <div  v-else class="row">
      
			<HomeBill
				:rates="currencies.Valute"
			/>

			<HomeCurrency
				:rates="currencies.Valute"
				:date="currencies.Date"
			/>
      
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill.vue'
import HomeCurrency from '@/components/HomeCurrency.vue'
export default {
  name: 'home',
	metaInfo: {
		title: 'Счет',
		titleTemplate: '%s | CRM Расходы'
	},
	data: () => ({
		loading: true,
		currencies: null
	}),
	async mounted() {
		this.currencies = await this.$store.dispatch('fetchCurrency')
		this.loading = false
	},
	methods: {
		async refresh(){
			this.loading = true
			this.currencies = await this.$store.dispatch('fetchCurrency')
			this.loading = false
		}
	},
	components: {
		HomeBill, HomeCurrency
	}
}
</script>
