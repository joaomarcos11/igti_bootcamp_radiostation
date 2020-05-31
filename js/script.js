window.addEventListener('load', start);

function start() {
    const inputRange = document.querySelector('#inputRange');

    inputRange.addEventListener('input', handleInputHandleChange);
}

function handleInputHandleChange(event) {
    let currentFrequency = event.target.value;

    let inputFrequency = document.querySelector('#inputFrequency');
    inputFrequency.value = currentFrequency;

    showAlbumFromFrequency(currentFrequency);
}

function showAlbumFromFrequency(frequency) {
    let hasAlbum = false;
    let album = null;
    let divAlbum = document.querySelector('#divAlbum');
    
    for(let i = 0; i < pinkfloydAlbums.length; i++){
        let currentAlbum = pinkfloydAlbums[i];

        if(currentAlbum.id === frequency){
            hasAlbum = true;
            album = currentAlbum;
        }
    }

    if (hasAlbum) {
        renderAlbum(album);
    } else {
        divAlbum.textContent = 'Nenhum albúm encontrado';
    }
}

function renderAlbum(album) {
    divAlbum.innerHTML = '';

    const img = document.createElement('img');
    img.src = '../img/'+ album.img;

    const h2 = document.createElement('h2');
    h2.textContent = album.title;
    
    const p = document.createElement('p');
    p.textContent = album.description;

    divAlbum.appendChild(img);
    divAlbum.appendChild(h2);
    divAlbum.appendChild(p);
}