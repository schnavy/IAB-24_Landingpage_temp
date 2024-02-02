document.addEventListener('DOMContentLoaded', function() {
    let videos = document.querySelectorAll('.mobile video');
    let currentVideo = 0;

    videos[currentVideo].style.display = 'block'; // Show the first video
    videos[currentVideo].play(); // Start playing the first video

    function playNextVideo() {
        videos[currentVideo].style.display = 'none'; // Hide the current video
        currentVideo = (currentVideo + 1) % videos.length; // Move to the next video, loop back to first at the end
        videos[currentVideo].style.display = 'block'; // Show the next video
        videos[currentVideo].play(); // Play the next video
    }

    videos.forEach((video, index) => {
        video.onended = playNextVideo; // When a video ends, play the next one
    });
});
