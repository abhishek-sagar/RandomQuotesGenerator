const xhr = new XMLHttpRequest();




const quote = function() {
    xhr.open('GET', 'https://talaikis.com/api/quotes/random/', true);

    xhr.onload = function() {
        if(this.status === 200) {
            var response = JSON.parse(this.responseText);

            console.log(response);
            const content = document.querySelector('.card-content');
            const heading = document.querySelector('.u-margin-top-none');
            const author = document.querySelector('.author');
            const text = document.querySelector('.quote');


            text.innerHTML = response.quote;
            console.log(text.children);

            author.innerHTML = `-${response.author}`;

        }
        
    }

    xhr.send();
}

document.addEventListener('DOMContentLoaded', quote);

document.querySelector('.btn-small').addEventListener('click', quote);
