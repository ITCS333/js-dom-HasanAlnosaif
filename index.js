function changeHeadingText() {
  document.getElementById('main-heading').textContent = 'DOM Manipulation Challenge';
}

function changeBoxColor() {
  document.getElementById('box-to-modify').style.backgroundColor = 'lightblue';
}

function addNewItem() {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  newItem.classList.add('item');
  document.getElementById('item-list').appendChild(newItem);
}

function highlightParagraph() {
  document.querySelector('.content-para').classList.add('highlight');
}

function removeElement() {
  document.getElementById('to-be-removed').remove();
}

// Do not edit the lines below.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

