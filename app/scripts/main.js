(() => {

const modalOpen = document.getElementById('modal-open')
modalOpen.addEventListener('click', () => {
    reducer('MODAL OPEN')
})

const modalClose = document.getElementById('modal-close')


const reducer = (action) => {
    switch(action) {
        case 'MODAL OPEN':
            console.log('Modal Open')
            videoPlayer()
            break;
        case 'MODAL CLOSE':
            console.log('Modal Closed')
            break;
    }
}

const videoPlayer = () => {
    /* VIMEO MODAL */
    const options = {
        id: 187136326,
        loop: false,
        autoplay: false,
        byline: false,
        portrait: false,
        title: false
    };

    const playerLoader = document.getElementById('player-loader');

    const player = new Vimeo.Player('vimeo-player', options);

    player.setVolume(0);

    player.on('play', () => {
        console.log('played the video!');
    });

    player.ready().then(() => {
        console.log('[v-player] Video ready')
    });


    player.on('ended', data => {
        console.log('video ended')
        // close video when ended
    });

    modalClose.addEventListener('click', () => {
        reducer('MODAL CLOSE')
        player.unload()
    });
}

})();
