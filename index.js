// console.log('connected');

const cards = document.querySelectorAll('.card')
// console.log(cards) ;
let titleCounter = 1;
let totalPrice = 0;
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(card);
    card.addEventListener('click', function () {
        //   console.log('clicked') ;

        const title = card.querySelector('h3').innerText;
        // console.log(title) ;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(price) ;

        const titleContainer = document.getElementById('title-container') ;
        
        const p = document.createElement('p') ;
        p.innerText = titleCounter + " " + title ;
        titleContainer.appendChild(p);
        titleCounter++ ;

        totalPrice+=price ;
        // console.log(totalPrice) ;

        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2) ;
    });
}


const btn = document.getElementById('apply-btn') ;

btn.addEventListener('click', function(){
    // console.log('clicked') ;

    // get the value from input
    const couponElement = document.getElementById('input-field').value ;
    const couponCode = couponElement.split(' ').join('').toUpperCase(); 
    console.log(couponCode) ;

    if(totalPrice >= 200){
        if(couponCode == 'SELL200'){
            const discountElement = document.getElementById('discountPrice') ;
            // console.log(discountElement) ;
            const discountAmount = totalPrice * 0.2 ;
            discountElement.innerText = discountAmount.toFixed(2) ;

            const restTotal = totalPrice - discountAmount ;
            const total = document.getElementById('total') ;
            total.innerText = restTotal.toFixed(2) ;
            document.getElementById('input-field').value ='' ;
            
        }
        else{
            alert('Invalid Coupon Code') ;
            document.getElementById('input-field').value ='' ;
        }
    }
    else{
        alert('Please spend 200 or more than of it') ;
        document.getElementById('input-field').value ='' ;
    }
});