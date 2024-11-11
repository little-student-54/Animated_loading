const dots = document.querySelectorAll('.dot');

// Loop through each element and set the animation delay
dots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.3}s`;
});