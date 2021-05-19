const setBg = () => {
    const randColor = Math.floor(Math.random()*16777515).toString(16);
    document.body.style.backgroundColor = '#' + randColor;
    document.getElementById('color').innerHTML = '#' + randColor
}

var genNew = document.getElementById('genNew');
genNew.addEventListener('click', setBg);

setBg();