document.addEventListener('DOMContentLoaded', function() {

    const videoButtons = document.querySelectorAll('.video-btn');

    

    videoButtons.forEach(button => {

        button.addEventListener('click', function() {

            const videoSrc = this.getAttribute('data-src');

            const video = document.createElement('video');

            video.src = videoSrc;

            video.controls = true;

            video.autoplay = true;

            video.style.maxWidth = '100%';

            video.style.borderRadius = '8px';

            video.style.marginTop = '20px';

            this.parentNode.appendChild(video);

        });

    });

});