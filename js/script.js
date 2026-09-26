/* ABOUT ME 열기와 닫기 */
const aboutButton = document.querySelector(".about-button");
const aboutDetail = document.querySelector(".about-detail");

aboutButton.addEventListener("click", function () {
    const isOpen = aboutButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        aboutDetail.hidden = true;
        aboutButton.setAttribute("aria-expanded", "false");
        aboutButton.textContent = "ABOUT ME +";
    } else {
        aboutDetail.hidden = false;
        aboutButton.setAttribute("aria-expanded", "true");
        aboutButton.textContent = "CLOSE ABOUT −";
    }
});


/* K-MOVE NOTE ARCHIVE */
const archiveButton = document.querySelector(".kmove-archive-button");
const photoModal = document.querySelector(".photo-modal");
const photoModalClose = document.querySelector(".photo-modal-close");
const photoModalPrev = document.querySelector(".photo-modal-prev");
const photoModalNext = document.querySelector(".photo-modal-next");
const photoModalImage = document.querySelector(".photo-modal-image");
const photoModalCount = document.querySelector(".photo-modal-count");

const kmoveNotes = [
    "kmove-start-note-01.jpg",
    "kmove-start-note-02.jpg",
    "kmove-start-note-03.jpg",
    "kmove-start-note-04.jpg",
    "kmove-start-note-05.jpg",
    "kmove-start-note-06.jpg",
    "kmove-start-note-07.jpg",
    "kmove-start-note-08.jpg",
    "kmove-start-note-09.jpg",
    "kmove-start-note-10.jpg",
    "kmove-start-note-11.jpg",
    "kmove-start-note-12.jpg",
    "kmove-start-note-13.jpg"
];

let currentPhotoIndex = 0;

function showPhoto() {
    photoModalImage.src = "images/kmove/2026-08-09-early-learning/notes/" + kmoveNotes[currentPhotoIndex];
    photoModalImage.alt = "K-MOVEの学習ノート " + (currentPhotoIndex + 1);
    photoModalCount.textContent = (currentPhotoIndex + 1) + " / " + kmoveNotes.length;
}

archiveButton.addEventListener("click", function () {
    currentPhotoIndex = 0;
    showPhoto();
    photoModal.hidden = false;
    archiveButton.setAttribute("aria-expanded", "true");
});

photoModalClose.addEventListener("click", function () {
    photoModal.hidden = true;
    archiveButton.setAttribute("aria-expanded", "false");
});

function showNextPhoto() {
    currentPhotoIndex = currentPhotoIndex + 1;

    if (currentPhotoIndex === kmoveNotes.length) {
        currentPhotoIndex = 0;
    }

    showPhoto();
}

function showPreviousPhoto() {
    currentPhotoIndex = currentPhotoIndex - 1;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = kmoveNotes.length - 1;
    }

    showPhoto();
}

photoModalNext.addEventListener("click", function () {
    showNextPhoto();
});

photoModalPrev.addEventListener("click", function () {
    showPreviousPhoto();
});


/* SKATEBOARDING STORY */
const skateStoryButton = document.querySelector(".skate-story-button");
const skatePhotoModal = document.querySelector("#skate-photo-modal");
const skateModalClose = document.querySelector(".skate-modal-close");
const skateModalPrev = document.querySelector(".skate-modal-prev");
const skateModalNext = document.querySelector(".skate-modal-next");
const skateModalImage = document.querySelector(".skate-modal-image");
const skateModalCount = document.querySelector(".skate-modal-count");

const skateContestPhotos = [
    "asbc_01.png",
    "asbc_02.jpg",
    "asbc_03.jpg",
    "asbc_04.jpg",
    "asbc_05.jpg",
    "asbc_06.jpg",
    "asbc_07.jpg"
];

let skatePhotoIndex = 0;

function showSkatePhoto() {
    skateModalImage.src = "images/experience/skateboarding/2024-asbc/contest/" + skateContestPhotos[skatePhotoIndex];
    skateModalImage.alt = "2024 ASBC " + (skatePhotoIndex + 1);
    skateModalCount.textContent = (skatePhotoIndex + 1) + " / " + skateContestPhotos.length;
}

skateStoryButton.addEventListener("click", function () {
    skatePhotoIndex = 0;
    showSkatePhoto();
    skatePhotoModal.hidden = false;
    skateStoryButton.setAttribute("aria-expanded", "true");
});

skateModalClose.addEventListener("click", function () {
    skatePhotoModal.hidden = true;
    skateStoryButton.setAttribute("aria-expanded", "false");
});

function showNextSkatePhoto() {
    skatePhotoIndex = skatePhotoIndex + 1;

    if (skatePhotoIndex === skateContestPhotos.length) {
        skatePhotoIndex = 0;
    }

    showSkatePhoto();
}

function showPreviousSkatePhoto() {
    skatePhotoIndex = skatePhotoIndex - 1;

    if (skatePhotoIndex < 0) {
        skatePhotoIndex = skateContestPhotos.length - 1;
    }

    showSkatePhoto();
}

skateModalNext.addEventListener("click", function () {
    showNextSkatePhoto();
});

skateModalPrev.addEventListener("click", function () {
    showPreviousSkatePhoto();
});

/* Gallery가 열려 있을 때 키보드로 사진 이동 또는 닫기 */
document.addEventListener("keydown", function (event) {
    if (photoModal.hidden && skatePhotoModal.hidden) {
        return;
    }

    if (event.key === "Escape") {
        photoModal.hidden = true;
        archiveButton.setAttribute("aria-expanded", "false");
        skatePhotoModal.hidden = true;
        skateStoryButton.setAttribute("aria-expanded", "false");
    } else if (event.key === "ArrowRight") {
        if (photoModal.hidden === false) {
            showNextPhoto();
        }

        if (skatePhotoModal.hidden === false) {
            showNextSkatePhoto();
        }
    } else if (event.key === "ArrowLeft") {
        if (photoModal.hidden === false) {
            showPreviousPhoto();
        }

        if (skatePhotoModal.hidden === false) {
            showPreviousSkatePhoto();
        }
    }
});
