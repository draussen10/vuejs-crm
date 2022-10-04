export default {
	install(Vue, option) {
		Vue.prototype.$valute = function(currency, val) {
			if(val == 'Value') {
				return eval(`this.rates.${currency}`) ? eval(`this.rates.${currency}.Value`).toFixed(2) : 1
			} else if (val == 'Name') {
				return eval(`this.rates.${currency}`) ? eval(`this.rates.${currency}.Name`) : "Российский рубль"
			}
		}
	}
}