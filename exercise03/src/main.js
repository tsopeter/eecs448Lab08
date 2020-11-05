let fileArray = ['images/IMG_4019.PNG'];
let resources = loadImages(fileArray);

document.addEventListener('DOMContentLoaded', () => {
	Promise.all(resources).then(() => {
		main();
	});
});

function main(){
	//
	//assign the image
	toElem(resources[0], document.getElementById('profile_img'));
	console.log('Hello World!');
}
