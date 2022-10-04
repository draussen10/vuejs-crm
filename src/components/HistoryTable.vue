<template>
	<table>
		<thead>
		<tr>
			<th>#</th>
			<th>Сумма</th>
			<th>Дата</th>
			<th>Категория</th>
			<th>Тип</th>
			<th>Открыть</th>
		</tr>
		</thead>

		<tbody>
		<tr v-for="(record, idx) of records" :key="record.id">
			<td>{{ (page - 1) * pageCount + idx + 1 }}</td>
			<td>{{ record.amount | currency }}</td>
			<td>{{ record.date | date('datetime') }}</td>
			<td>{{ record.categoryName }}</td>
			<td>
				<span class="white-text badge" :class="record.typeClass">{{ record.typeName }}</span>
			</td>
			<td>
				<button 
					class="btn-small btn" 
					@click="$router.push(`/detail/${record.id}`)"
				>
					<i class="material-icons">open_in_new</i>
				</button>
			</td>
		</tr>
		</tbody>
	</table>
</template>

<script>

export default {
	props: {
		records: {
			required: true,
			type: Array
		},
		page:{
			required: true,
			type: Number
		},
		pageCount:{
			required: true,
			type: Number
		}
	}
}
</script>