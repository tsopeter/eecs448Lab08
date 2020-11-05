let fileArray = [];
let resources = loadImages(fileArray);

document.addEventListener('DOMContentLoaded', () => {
	Promise.all(resources).then(() => {
		main();
	});

});

function main(){

}

