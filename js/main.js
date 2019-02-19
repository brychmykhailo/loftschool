


const deliveryForm = document.getElementById('order-form');

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
            alert('okkkkkk');
        } else {
            alert('no');
        }
    })
}