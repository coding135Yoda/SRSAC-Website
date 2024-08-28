

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const leftStrip = document.querySelector(".left-strip");
const rightStrip = document.querySelector(".right-strip");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
let sliderNumber = 0; // Start at the first image
const length = images.length; // Include the duplicate image

const bottom = document.querySelector(".bottom");
for (let i = 0; i < length - 1; i++) { // Exclude the duplicate image in the navigation dots
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "black";

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = `translateX(-${i * 938}px)`;
        sliderNumber = i;
        button.style.backgroundColor = "black";
        restartTimer(); // Restart the timer on button click
    });
});

const changeColor = () => {
    resetBg();
    if (sliderNumber >= length - 1) {
        buttons[0].style.backgroundColor = 'black';
    } else {
        buttons[sliderNumber].style.backgroundColor = 'black';
    }
};

const nextSlide = () => {
    sliderNumber++;
    if (sliderNumber < length) {
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = `translateX(-${sliderNumber * 938}px)`;
    }
    if (sliderNumber === length - 1) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            sliderNumber = 0;
            changeColor(); // Ensure the color changes immediately
        }, 1000);
    } else {
        changeColor();
    }
};

const prevSlide = () => {
    if (sliderNumber === 0) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${(length - 1) * 938}px)`;
        sliderNumber = length - 1;
        setTimeout(() => {
            slider.style.transition = 'transform 1s ease';
            slider.style.transform = `translateX(-${sliderNumber * 938}px)`;
        }, 0);
    } else {
        sliderNumber--;
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = `translateX(-${sliderNumber * 938}px)`;
    }
    changeColor();
};

const addClickEvent = (element, callback) => {
    element.addEventListener('click', callback);
};

addClickEvent(right, () => {
    nextSlide();
    restartTimer(); // Restart the timer on right click
});
addClickEvent(rightStrip, () => {
    nextSlide();
    restartTimer(); // Restart the timer on right strip click
});
addClickEvent(left, () => {
    prevSlide();
    restartTimer(); // Restart the timer on left click
});
addClickEvent(leftStrip, () => {
    prevSlide();
    restartTimer(); // Restart the timer on left strip click
});

// Add the 3-second timer for automatic sliding
let slideInterval = setInterval(nextSlide, 3000);

const restartTimer = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
};


  