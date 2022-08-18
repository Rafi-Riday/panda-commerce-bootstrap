// challange
// 2
const h2Tags = document.getElementsByTagName('h2');
for (const h2Tag of h2Tags) {
    h2Tag.style.color = 'lightblue';
}
// 3
document.getElementById('backpack').style.backgroundColor = 'tomato';
// 4
const cardClass = document.getElementsByClassName('card');
for (const card of cardClass) {
    card.style.borderRadius = '30px';
}
// 5
const pandaBtnDangerAll = document.querySelectorAll('.btn.panda-btn-danger');
for (const pandaBtnDanger of pandaBtnDangerAll) {
    pandaBtnDanger.addEventListener('click', function () {
        console.log('Panda Button Danger clicked');
    });
}
// 6
const buyNowAll = document.querySelectorAll('.buy-now');
for (const buyNow of buyNowAll) {
    buyNow.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
// 7