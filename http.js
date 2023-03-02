const options ={
     methods :'GET',
	 headers :{
		'X-RapidAPI-Key': '0c8bc1da8emsh019e1b29b9f7960p139134jsnbf6c06f39760',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	 }
};
fetch('https://dark-sky.p.rapidapi.com/12,17?units=auto&lang=en',options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));