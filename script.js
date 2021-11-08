let temperatura = document.querySelector('.temperatura')
const tempo = document.querySelector('.tempo')
const data = document.querySelector('.data')
const tempMax = document.querySelector('.temp-max p')
const tempMin = document.querySelector('.temp-min p')
const umidade = document.querySelector('.umidade')
const velocidade = document.querySelector('.velocidade')
const pressao = document.querySelector('.pressao')
const visibilidade = document.querySelector('.visibilidade')
const grau = document.querySelector('.grau')
const valor = document.querySelector('.valor')

const principal = 'http://api.openweathermap.org/data/2.5/weather?q='
const chamada = '&units=metric&lang=pt_br&appid='
const key = '8bf8c3ed814e971a5c1c5b665c457cca'

function fetchLista() {
	const url = `${principal}${valor.value}${chamada}${key}`

	fetch(url)
		.then(response => response.json())
		.then(response =>
			dadosTempo(response)
		)

	!valor.value === '' ? '' : limpar()
}

function dadosTempo(res) {
	temperatura.innerHTML = `${Math.ceil(res.main.temp)}<sup>°c</sup>`
	tempMax.innerHTML = `${Math.ceil(res.main.temp_max)}<sup>°c</sup>`
	tempMin.innerHTML = `${Math.ceil(res.main.temp_min)}<sup>°c</sup>`
	umidade.innerHTML = `${Math.ceil(res.main.humidity)}<sup> %</sup>`
	velocidade.innerHTML = `${Math.ceil(res.wind.speed)}<sup> km/h</sup>`
	pressao.innerHTML = `${Math.ceil(res.main.pressure)}<sup> mb</sup>`
	visibilidade.innerHTML = `${Math.ceil(res.visibility) / 1000}<sup> km</sup>`
	tempo.innerHTML = res.weather[0].description
}

function horaData() {
	const d = new Date()

	let dia = d.getDay()
	let mes = d.getMonth()
	let ano = d.getFullYear()


	const dataTempo = document.querySelector('.data')

	const arreyDias = ['Sunday', 'Monday', 'Third', 'fourth', 'Thursday', 'Friday', 'Saturday']
	const arreyMes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


	switch (dia) {
		case 0:
			dia = arreyDias[dia]
			break
		case 1:
			dia = arreyDias[dia]
			break
		case 2:
			dia = arreyDias[dia]
			break
		case 3:
			dia = arreyDias[dia]
			break
		case 4:
			dia = arreyDias[dia]
			break
		case 5:
			dia = arreyDias[dia]
			break
		case 6:
			dia = arreyDias[dia]
			break
	}

	switch (mes) {
		case 0:
			mes = arreyMes[mes]
			break
		case 1:
			mes = arreyMes[mes]
			break
		case 2:
			mes = arreyMes[mes]
			break
		case 3:
			mes = arreyMes[mes]
			break
		case 4:
			mes = arreyMes[mes]
			break
		case 5:
			mes = arreyMes[mes]
			break
		case 6:
			mes = arreyMes[mes]
			break
		case 7:
			mes = arreyMes[mes]
			break
		case 8:
			mes = arreyMes[mes]
			break
		case 9:
			mes = arreyMes[mes]
			break
		case 10:
			mes = arreyMes[mes]
			break
		case 11:
			mes = arreyMes[mes]
			break
	}
	dataTempo.innerHTML = `${dia}, ${mes.slice(0, 3)}, ${ano}`
}

function limpar() {
	temperatura.innerHTML = '0'
	tempMax.innerHTML = '0'
	tempMin.innerHTML = '0'
	tempMin.innerHTML = '0'
	velocidade.innerHTML = '0'
	umidade.innerHTML = '0'
	pressao.innerHTML = '0'
	visibilidade.innerHTML = '0'
	tempo.innerHTML = ''
}

horaData()

valor.addEventListener('keyup', fetchLista)