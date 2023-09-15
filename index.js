localStorage.clear();

const basketUpdateButtons = document.getElementsByClassName('item--basketUpdateButton-button');

for (let i = 0; i < basketUpdateButtons.length; ++i) {
    const button = basketUpdateButtons[i];
    const connectedItem = button.attributes['connected-item'].value;

    button.addEventListener('click', (e) => {
        if (localStorage.getItem(connectedItem) === null) {
            localStorage.setItem(connectedItem, '1');
        } else {
            let itemCount = parseInt(localStorage.getItem(connectedItem));
            itemCount++;
            localStorage.setItem(connectedItem, itemCount.toString());
        }
    })
}

