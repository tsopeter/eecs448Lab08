document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    //init
    console.log("Hello World!");

    //sample text
    let s = document.getElementById('sample');

    //comparison function
    let comp = (lowerBound, upperBound) => {
        return ((i) => {
            if (i >= lowerBound && i <= upperBound) {
                return true;
            }
            return false;
        });
    };

    let rgbComp = comp(0, 255);
    let widthComp = comp(0, 100);

    //setup event listeners
    document.getElementById('border_input').addEventListener('click', () => {
        //get document objs
        let r = document.getElementById('border_r').value;
        let g = document.getElementById('border_g').value;
        let b = document.getElementById('border_b').value;
        let w = document.getElementById('border_width').value;

        //compare the bounds
        if (!(rgbComp(r) && rgbComp(g) && rgbComp(b) && widthComp(w))) {
            alert('Invalid parameters!');
            return;
        }

        //set the border style
        s.style.borderColor = 'rgb(' + r + ',' + g + ',' + b + ', 1)';
        s.style.borderWidth = w;

    });

    document.getElementById('background_input').addEventListener('click', () => {
        //get document objs
        let r = document.getElementById('background_r').value;
        let g = document.getElementById('background_g').value;
        let b = document.getElementById('background_b').value;

        //compare the bounds
        if (!(rgbComp(r) && rgbComp(g) && rgbComp(b))) {
            alert('Invalid parameters!');
            return;
        }

        //set the background style
        s.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ', 1)';
    });
}