document.addEventListener("DOMContentLoaded", function () {
    let rightToLeftButton = document.getElementById("RightToLeft");
    let leftToRightButton = document.getElementById("LeftToRight");
    let slide = document.getElementById("slide");
    let topElement = document.querySelector(".top");

    function animate(element, properties, duration) {
        let start = performance.now();
        let initialStyles = {};
        
        for (let prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                initialStyles[prop] = window.getComputedStyle(element)[prop];
            }
        }
        
        function step(timestamp) {
            let progress = (timestamp - start) / duration;
            if (progress < 1) {
                for (let prop in properties) {
                    if (properties.hasOwnProperty(prop)) {
                        let initial = parseFloat(initialStyles[prop]);
                        let target = parseFloat(properties[prop]);
                        let value = initial + (target - initial) * progress;
                        element.style[prop] = value + (isNaN(target) ? '' : 'px');
                    }
                }
                requestAnimationFrame(step);
            } else {
                for (let prop in properties) {
                    if (properties.hasOwnProperty(prop)) {
                        element.style[prop] = properties[prop];
                    }
                }
            }
        }
        
        requestAnimationFrame(step);
    }

    rightToLeftButton.addEventListener("click", function () {
        animate(slide, { marginLeft: "0%" }, 500);
        animate(topElement, { marginLeft: "100%" }, 500);
    });

    leftToRightButton.addEventListener("click", function () {
        animate(slide, { marginLeft: "50%" }, 500);
        animate(topElement, { marginLeft: "0%" }, 500);
    });
});
