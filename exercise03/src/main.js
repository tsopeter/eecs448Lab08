let fileArray = ['images/200px-RED_ZONE.png'];
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
