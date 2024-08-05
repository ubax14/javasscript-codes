const $ = (selector) =>{
    return document.querySelector(selector);
};

const $second = $('.second-hand');
const $min = $('.min-hand');
const $hour = $('.hour-hand');
function update(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsdeg =
    ((seconds/60)*360)+90;
     $second.style.transform =`rotate(${secondsdeg})deg`;
    const mins = now.getMinutes();
    const minsdeg =
    ((mins/60)*360)+((seconds/60)*6)+90;
    $mins.style.transform = `rotate(${minsdeg})deg`;
    const hour= now.getHours();
    const hourdeg =((hour/12)*360)+((mins/60)*30)+90;
    $hour.style.transform = `rotate(${hourdeg})deg`;
    
}

    setInterval(update,900);
    update();
