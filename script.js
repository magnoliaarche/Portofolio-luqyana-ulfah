document.addEventListener("DOMContentLoaded", function () {
    
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function () {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
});

// --- PENGATURAN POP-UP FOTO & VIDEO ---
var modalMedia = document.getElementById("popup-media");
var imgPopup = document.getElementById("gambar-popup");
var vidPopup = document.getElementById("video-popup");

function bukaFoto(sumber) {
    modalMedia.style.display = "flex";
    imgPopup.style.display = "block";
    vidPopup.style.display = "none";
    imgPopup.src = sumber;
}

function bukaVideo(sumber) {
    modalMedia.style.display = "flex";
    vidPopup.style.display = "block";
    imgPopup.style.display = "none";
    vidPopup.src = sumber;
    vidPopup.play();
}

function tutupMedia() {
    modalMedia.style.display = "none";
    vidPopup.pause();
    vidPopup.src = "";
    imgPopup.src = "";
}

window.addEventListener("click", function(event) {
    if (event.target === modalMedia) tutupMedia();
});
