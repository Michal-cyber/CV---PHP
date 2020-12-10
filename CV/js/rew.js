 /**
  * SVG ANIMATION
  */

 const progress = document.querySelector('.progress'),
 textarea = document.querySelector('.svgAnim'),
 counter = document.querySelector('.counter');
 let pageWidth = window.innerWidth;

/**
* DASARRAY / OFFSET
*/
const pathLength = progress.getAttribute('r') * 2 * Math.PI,
 tweetLength = textarea.getAttribute('maxlength'),
 warningZone = Math.floor( tweetLength * (3/4) ),
 dangerZone = Math.floor( tweetLength - 5 );

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';

/**
* ON INPUT
*/

function HanldeCounter(len) {
    counter.textContent = tweetLength - len;
    counter.classList.toggle('danger', len >= tweetLength);

        if( (counter.textContent < 100 && counter.textContent > 10) && pageWidth > 580) {
            counter.style.right = '25px';
        }

        if(counter.textContent < 10 && pageWidth > 580) {
            counter.style.right = '29px';
        }

        if(counter.textContent >= 100 && pageWidth > 580) {
            counter.style.right = '21px';
        }

        if (pageWidth <= 580) {
            counter.style.right = '67px';
        }

        if (pageWidth <= 580 && (counter.textContent < 100 && counter.textContent > 10)) {
            counter.style.right = '73px';
        }

        if (pageWidth <= 580 && counter.textContent < 10) {
            counter.style.right = '77px';
        }
    
};
    


function HanldeColor(len) {
    progress.classList.toggle('warn', len > warningZone && len < dangerZone);
    progress.classList.toggle('danger', len >= dangerZone);
    progress.classList.toggle('tragedy', len == tweetLength);
   
};

function HandleProgress(len, per) {
        if(len <= tweetLength){
           let newOffset = pathLength - (pathLength * per) + 'px';
           progress.style.strokeDashoffset = newOffset;
           HanldeColor(len);
    }
}

textarea.addEventListener('input', function( event ) {

    let len = textarea.value.length,
    per = len / tweetLength;
    
    HanldeCounter(len);
    HandleProgress(len, per);
});
