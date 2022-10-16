window.addEventListener('load', () => {
    const nodes = document.querySelectorAll('.ripple');
    for (let i = 0; i < nodes.length; i++) {
        let letters = nodes[i].innerText.split('').join('</span><span>');
        letters = letters.split(' ').join('&nbsp;');
        nodes[i].innerHTML = `<span>${letters}</span>`;

        const children = nodes[i].childNodes;
        for (let j = 0; j < children.length; j++) {
            children[j].style.animationDelay = (j / 10) + 's';
        }
    }
})