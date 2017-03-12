var list = document.getElementById('list'),
    listElements = document.getElementsByTagName('li'),
    removeButton = document.getElementById('remove'),
    addButton = document.getElementById('add');

addButton.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + listElements.length + '</li>';
});

removeButton.addEventListener('click', function() {
  list.removeChild(listElements[listElements.length - 1]);
});