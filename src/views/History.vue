<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

		<Loader v-if="loading"></Loader>

		<p class="center" v-else-if="!records.length">Записей пока нет. <router-link to="/record">Добавить новую запись</router-link></p>

    <section v-else>
			<HistoryTable 
			:records="items"
			:page="page"
			:pageCount="pageSize"
		></HistoryTable>
    </section>
	
		<Paginate
			v-model="page"
			:page-count="pageCount"
			:click-handler="changePageHandler"
			:prev-text="'Назад'"
			:next-text="'Вперед'"
			:container-class="'pagination'"
			:page-class="'waves-effect'"
		>

		</Paginate>

  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin'
import HistoryTable from '@/components/HistoryTable.vue'

export default {
	name: 'history',
	metaInfo: {
		title: 'История',
		titleTemplate: '%s | CRM Расходы'
	},
	mixins: [paginationMixin],
	data: () => ({
		loading: true,
		records: []
	}),
	async mounted() {
		this.records = await this.$store.dispatch('fetchRecords')
		const categories = await this.$store.dispatch('fetchCategories')
		
		this.setupPagination(this.records.map(record => {
			return {
				...record, 
				categoryName: categories.find(c => c.id === record.categoryId).title,
				typeClass: record.type === 'income' ? 'green' : 'red',
				typeName: record.type === 'income' ? 'Доход' : 'Расход',
			}
		}))

		this.loading = false
	},
	components: {
		HistoryTable
	}
}
</script>
