const btn = document.querySelector('.btn')
const result = document.querySelector('p')


btn.addEventListener('click', () => {

	let width = document.querySelector('#input1').value;
 	let height = document.querySelector('#input2').value;
	
	 if (width < 100 || width > 300 || height < 100 || height > 300){
		 result.innerHTML = 'Одно из чисел вне диапазона от 100 до 300!';
	 } else {
		 fetch(`https://picsum.photos/${width}/${height}`)
		 .then((response) => {
			let resultIMG = document.createElement('img')
			resultIMG.setAttribute('src',response.url)
			result.innerHTML = 'Результат:'
			result.appendChild(resultIMG)
		
		 })
		 .catch((error) => {
			console.log("error", error)
		});
	 }
})