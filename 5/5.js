const btn = document.querySelector('.btn')
const result = document.querySelector('p')



function showIMG(data) {
    if (data) {
        data.forEach((item) => {
            let img = document.createElement("img");
            img.setAttribute("src", item.download_url);
			result.appendChild(img)
            img.style.width = "300px"
            img.style.height = "300px"
			img.style.marginRight = "10px"
            
        })
    }
}


btn.addEventListener('click', (event) => {
	event.preventDefault
	result.innerText = ""
	let number = document.querySelector('#input1').value;
 	let limit = document.querySelector('#input2').value;
	
	 if ((number < 1 || number > 10) && (limit < 1 || limit > 10)){
		 result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10!';
	 } else if (number < 1 || number > 10){
		 result.innerHTML = 'Номер страницы вне диапазона от 1 до 10!';
	 }else if (limit < 1 || limit > 10){
		result.innerHTML = 'Лимит вне диапазона от 1 до 10!';
	 }
	 
	 else {
		 fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`)
		 .then((response) => {
			return response.json()
		 })
		 .then((data) => {
			localStorage.setItem("oldIMG", JSON.stringify(data));
			localStorage.setItem("number", number);
			localStorage.setItem("limit", limit);
			showIMG(data)
		})
		 .catch((error) => {
			console.log("error", error)
		});
	 }
	 
})


let data = localStorage.getItem("oldIMG");
number = localStorage.getItem("number");
limit = localStorage.getItem("limit	");

showIMG(JSON.parse(data))
