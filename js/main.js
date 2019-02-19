


const deliveryForm = document.getElementById('order-form');
const deliveryFormModal = document.querySelector('.delivery__form__modal_bg');

deliveryForm.onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(deliveryForm);
    formData.append("to", "brychmykhailo@gmail.com");
    const request = new XMLHttpRequest();
    request.open("POST", "https://webdev-api.loftschool.com/sendmail");
    request.send(formData);
    console.log(request);
    request.addEventListener ("load", function() {
        const response = JSON.parse(request.response);
        if (request.status) {
            deliveryFormModal.style.display = 'flex';
            deliveryFormModal.querySelector('.delivery__form__modal-text').innerHTML = 'Отправлено';
            let body = document.querySelector('body');
            body.classList.add('body-fixed');
            setTimeout(function(){
                deliveryFormModal.style.display = 'none';
              }, 4000);
        } else {
            deliveryFormModal.style.display = 'flex';
            deliveryFormModal.querySelector('.delivery__form__modal-text').innerHTML = 'Не отправлено';
            let body = document.querySelector('body');
            body.classList.add('body-fixed');
            setTimeout(function(){
                deliveryFormModal.style.display = 'none';
              }, 4000);
        }
    })

    deliveryFormModal.querySelector('.delivery__form__modal-close').addEventListener("click", function() {
        deliveryFormModal.style.display = 'none';
        let body = document.querySelector('body');
        body.classList.remove('body-fixed');
    });
}



const reviewsItems = document.querySelectorAll('.reviews-item');

for (var reviewsItem of reviewsItems) {

    const reviewsName = reviewsItem.querySelector('.reviews-title').innerHTML;
    const reviewsText = reviewsItem.querySelector('.reviews-text').innerHTML;
  
    reviewsItem.querySelector('.reviews-btn').addEventListener("click", e => {
    e.preventDefault();

    document.querySelector('.reviews__modal-name').innerHTML = reviewsName;
    document.querySelector('.reviews__modal-text').innerHTML = reviewsText;
    document.querySelector('.reviews__modal_bg').style.display = 'flex';
    let body = document.querySelector('body');
    body.classList.add('body-fixed');
    
  });

  reviewsItem.querySelector('.reviews-btn-mob').addEventListener("click", e => {
    e.preventDefault();
    
    document.querySelector('.reviews__modal-name').innerHTML = reviewsName;
    document.querySelector('.reviews__modal-text').innerHTML = reviewsText;
    document.querySelector('.reviews__modal_bg').style.display = 'flex';
    let body = document.querySelector('body');
    body.classList.add('body-fixed');
  });

}

document.querySelector('.reviews__modal-btn').addEventListener("click", function(){
    document.querySelector('.reviews__modal_bg').style.display = 'none';
    let body = document.querySelector('body');
    body.classList.remove('body-fixed');
})