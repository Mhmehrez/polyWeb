document.addEventListener("DOMContentLoaded", () => {
    const videos = {
        "University": "Videos/BengaliSignLang/university.mp4",
        "Office": "Videos/BengaliSignLang/office.mp4",
        "School": "Videos/BengaliSignLang/school.mp4",
        "bread": "Videos/BengaliSignLang/bread.mp4",
        "food": "Videos/BengaliSignLang/food.mp4",
        "grape": "Videos/BengaliSignLang/grape.mp4",
        "jackfruit": "Videos/BengaliSignLang/jackfruit.mp4",
        "milk": "Videos/BengaliSignLang/milk.mp4",
        "papaya": "Videos/BengaliSignLang/papaya.mp4",
        "rice": "Videos/BengaliSignLang/rice.mp4",
        "sweet": "Videos/BengaliSignLang/sweet.mp4",
        "apple": "Videos/BengaliSignLang/apple.mp4",
        "banana": "Videos/BengaliSignLang/banana.mp4",
        "chicken": "Videos/BengaliSignLang/chicken.mp4",
        "coffee": "Videos/BengaliSignLang/coffee.mp4",
        "dal": "Videos/BengaliSignLang/dal.mp4",
        "fish": "Videos/BengaliSignLang/fish.mp4",
        "mango": "Videos/BengaliSignLang/mango.mp4",
        "meat": "Videos/BengaliSignLang/meat.mp4",
        "orange": "Videos/BengaliSignLang/orange.mp4",
        "tea": "Videos/BengaliSignLang/tea.mp4",
        "vegetable": "Videos/BengaliSignLang/vegetable.mp4",
        "water": "Videos/BengaliSignLang/water.mp4",
        "College": "Videos/BengaliSignLang/college.mp4"
    };

    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");
    const videoListContainer = document.querySelector(".content");
    const collapsibleButton = document.querySelector(".collapsible");
    const imagePlaceholder = document.getElementById("image-placeholder");


    videoListContainer.style.display = "none";
    videoPlayer.style.display = "none";


    collapsibleButton.addEventListener("click", () => {
        if (videoListContainer.style.display === "none") {
            videoListContainer.style.display = "block";
            collapsibleButton.textContent = "Hide Video Titles";
        } else {
            videoListContainer.style.display = "none";
            collapsibleButton.textContent = "Video Titles";
        }
    });


    Object.entries(videos).forEach(([title, path]) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.textContent = title;
        videoItem.dataset.path = path;

        videoItem.addEventListener("click", () => {
            changeVideo(title, path);
        });

        videoListContainer.appendChild(videoItem);
    });


    function changeVideo(title, videoPath) {
        videoSource.src = videoPath;
        videoPlayer.load();
        videoPlayer.play();


        imagePlaceholder.style.display = "none";
        videoPlayer.style.display = "block";


        collapsibleButton.textContent = `${title}`;
        videoListContainer.style.display = "none";
        console.log(`Now playing: ${title} (${videoPath})`);
    }
});
