(() => {

const modalOpen = document.getElementById('modal-open')
modalOpen.addEventListener('click', () => {
    reducer('MODAL OPEN')
})

const modalClose = document.getElementById('modal-close')

const sendHome = () => window.location.assign(`${window.location.origin}`);

const reducer = (action) => {
    switch(action) {
        case 'MODAL OPEN':
            console.log('Modal Open')
            videoPlayer()
            break;
        case 'MODAL CLOSE':
            console.log('Modal Closed')
            break;
        case 'SEND HOME':
            sendHome();
            break;
    }
}

const videoPlayer = () => {
    /* VIMEO MODAL */
    const options = {
        id: 187136326,
        loop: false,
        autoplay: true,
        byline: false,
        portrait: false,
        title: false
    };

    const playerContainer = document.getElementById('vimeo-player');

    const player = new Vimeo.Player(playerContainer, options);

    player.setVolume(0.5);

    player.on('play', () => {
        console.log('played the video!');
    });

    player.ready().then(() => {
        console.log('[v-player] Video ready');
    });

    player.on('ended', () => {
        console.log('video ended')
        // close video when ended
        reducer('SEND HOME');
    });

    modalClose.addEventListener('click', () => {
        reducer('MODAL CLOSE')
        player.unload();
    });
}

})();
