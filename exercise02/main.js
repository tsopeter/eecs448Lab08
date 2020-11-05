let fileArray = ['images/183.jpg', 'images/IMG_1963.JPG', 'images/IMG_4019.PNG', 'images/IMG_6060.jpg',
		 'images/IMG_6862.PNG', 'images/IMG_7425.PNG', 'images/IMG_7436.JPG', 'images/IMG_7440.JPG',
		  'images/IMG_8659.PNG'];
let resources = loadImages(fileArray);

let idxs = 0;

document.addEventListener('DOMContentLoaded', () => {
	Promise.all(resources).then(() => {
		main();
	});

});

function main(){
	let imgElem = document.getElementById('slideshow');
	//
	//draw the first element first
	toElem(resources[idxs], imgElem);
	document.getElementById('image_file').innerText = fileArray[idxs];
	
	//
	//add button event listeners
	document.getElementById('left').addEventListener('click', () => {
		idxs--;
		if(idxs < 0){
			idxs = resources.length - 1;
		}
		toElem(resources[idxs], imgElem);
		document.getElementById('image_file').innerText = fileArray[idxs];
	});
	
	document.getElementById('right').addEventListener('click', () => {
		idxs++;
		if(idxs >= resources.length){
			idxs = 0;
		}
		toElem(resources[idxs], imgElem);
		document.getElementById('image_file').innerText = fileArray[idxs];
	});

}

