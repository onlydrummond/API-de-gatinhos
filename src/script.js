let generate_kitty = document.querySelector('.generate_kitty');

generate_kitty.addEventListener('click', fetchPics);

function fetchPics() {
    let gatinhosImgDiv = document.querySelector("gatinhosImgDiv")

    fetch('https://api.thecatapi.com/v1/images/search') 
    .then(response => response.json())
    .then(data => { let gatinhosImgUrl = data[0].url

        let gatinhosImgEl = document.createElement("img")

        gatinhosImgEl.setAttribute('src', `${gatinhosImgUrl}`)
        gatinhosImgEl.classList.add("gatinhosImgDiv");

        let gatinhosImgDiv = document.querySelector(".gatinhosImgDiv");
        gatinhosImgDiv.replaceWith(gatinhosImgEl);
     })

    .catch((err) = console.log(error))
}
