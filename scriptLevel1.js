document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.containerLevel1').style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.containerLevel1').style.display = 'block';
});