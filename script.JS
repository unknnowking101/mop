document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const filesList = document.getElementById('files');
    const audioPlayer = document.getElementById('audioPlayer');
    const videoPlayer = document.getElementById('videoPlayer');
    const player = document.getElementById('player');

    uploadButton.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            filesList.appendChild(listItem);

            if (file.type.includes('audio')) {
                audioPlayer.src = URL.createObjectURL(file);
                player.style.display = 'block';
                audioPlayer.style.display = 'block';
                videoPlayer.style.display = 'none';
            } else if (file.type.includes('video')) {
                videoPlayer.src = URL.createObjectURL(file);
                player.style.display = 'block';
                audioPlayer.style.display = 'none';
                videoPlayer.style.display = 'block';
            } else {
                alert('Unsupported file type. Please upload an MP3 or MP4 file.');
            }
        }
    });
});
