const items = document.querySelectorAll(".accordion-item");

for (const item of items) {
  item.addEventListener("click", verticalAccoOpening)
}

function verticalAccoOpening(e) {
  const curItem = e.currentTarget;
  const content = curItem.querySelector('.accordion-content');
  const isClosedItem = content.classList.contains('accordion-content-active');
  if (!isClosedItem) {

    closeItemsAndRemoveActiveClass(items);
    openItem(curItem);

  } else {
    closeItemsAndRemoveActiveClass(items);
  }
}

function closeItemsAndRemoveActiveClass(items) {
  Array.from(items).forEach(elem => {
    elem.querySelector('.accordion-content').classList.remove('accordion-content-active');
    elem.querySelector('.icon').classList.remove('icon-active');
  });
}

function openItem(item) {
  const content = item.querySelector('.accordion-content');
  const arrow = item.querySelector('.icon');
  content.classList.add('accordion-content-active');
  arrow.classList.add('icon-active');
}