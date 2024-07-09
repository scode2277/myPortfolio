document.addEventListener("DOMContentLoaded", function () {
    const colors = ["#115cc9", "#f5e942", "#ea3323", "#43a047"];
    const dynamicTextElement = document.getElementById("dynamicText");
    const text = dynamicTextElement.textContent;

    dynamicTextElement.innerHTML = ""; // Clear the current content

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        const colorIndex = index % colors.length;
        span.style.color = colors[colorIndex];
        span.textContent = char;
        dynamicTextElement.appendChild(span);
    });
});

document.getElementById("buttonIndex").addEventListener("click", function () {
    window.location.href = 'level1.html';
});
