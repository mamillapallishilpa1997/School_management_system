let notice_cards = document.querySelectorAll(".notice-card");
let imageModal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImg");
let closeBtn = document.querySelector(".close");
console.log(notice_cards);
console.log(closeBtn);

notice_cards.forEach(card =>{
    card.addEventListener('click', function(){
        const img = card.querySelector("img");
        imageModal.style.display = "block";
        modalImg.src = img.src;
    })
})

closeBtn.addEventListener('click', function(){
    imageModal.style.display = "none";
})

imageModal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});