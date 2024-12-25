window.onload = function () {
    var NOO = document.querySelector('#No');
    var SI = document.querySelector('#SI');
    var videoDiv = document.querySelector('#videoDiv');
    var titulo = document.querySelector('#titulo');
    var botones = document.querySelector('#botones');
    NOO.addEventListener('click', function () {
        var randomTop = Math.floor(Math.random() * (window.innerHeight - NOO.offsetHeight));
        var randomLeft = Math.floor(Math.random() * (window.innerWidth - NOO.offsetWidth));
        NOO.style.position = 'absolute';
        NOO.style.top = randomTop + 'px';
        NOO.style.left = randomLeft + 'px';
    });
    SI.addEventListener('click', function () {
        videoDiv.style.display = 'block';
        titulo.style.display = 'none';
        botones.style.display = 'none';
    });
    const emojiList = ['💘', '💞', '💖', '💕', '❤️‍🩹', '💝', '💗'];
    const emojiCount = 100;
    const body = document.body;
    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
        body.appendChild(emoji);
        emoji.style.top = `${Math.random() * window.innerHeight}px`;
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
    }
    const emojis = document.querySelectorAll('.emoji');
    function moveRandom(emoji) {
        const randomTop = Math.random() * window.innerHeight;
        const randomLeft = Math.random() * window.innerWidth;
        emoji.style.top = `${randomTop}px`;
        emoji.style.left = `${randomLeft}px`;
    }
    function moveAllEmojis() {
        emojis.forEach((emoji) => moveRandom(emoji));
    }
    setInterval(moveAllEmojis, 2000);
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
};
