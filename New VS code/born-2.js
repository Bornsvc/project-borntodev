let slideIndex = 1


//start-function 1 ກົດເລື່ອນສະໄລ
function ກົດເລື່ອນສະໄລ(n) {
    showSlides(slideIndex += 1);
}
//end-function 1


//start-function 2
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides")
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    // slideIndex - 1 = 0 ເເປວ່າສະເເດງຮູບທີ່ 1
    // slideIndex + 0 = 1 ເເປວ່າສະເເດງຮູບທີ່ 2
    // slideIndex + 1 = 2 ເເປວ່າສະເເດງຮູບທີ່ 3
    slides[slideIndex-1].style.display = 'block'
}
        showSlides(slideIndex);   
//end-function 2




