let fileArray = ['images/183.jpg', 'images/IMG_1963.JPG', 'images/IMG_4019.PNG', 'images/IMG_6060.jpg',
		 'images/IMG_6862.PNG', 'images/IMG_7425.PNG', 'images/IMG_7436.JPG', 'images/IMG_7440.JPG',
		  'imagesIMG_8659.PNG'];
let resources = loadImages(fileArray);

document.addEventListener('DOMContentLoaded', () => {
	Promise.all(resources).then(() => {
		main();
	});

});

function main(){

}

