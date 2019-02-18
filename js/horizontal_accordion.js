const horizontalitems = document.querySelectorAll(".horizontal-accordion-item");

for (var item of horizontalitems) {
  item.addEventListener("click", e => {
  
  var hCurItem = e.currentTarget;
  var hContent = hCurItem.querySelector('.horizontal-accordion-content');
  var ishClosedItem = hContent.classList.contains('horizontal-accordion-content-active');
  if (!ishClosedItem) {

    hCloseItemsAndRemoveActiveClass(horizontalitems);
    hOpenItem(hCurItem);

  } else {
    hCloseItemsAndRemoveActiveClass(horizontalitems);
  }

function hCloseItemsAndRemoveActiveClass(horizontalitems) {
  Array.from(horizontalitems).forEach(elem => {
    elem.querySelector('.horizontal-accordion-content').classList.remove('horizontal-accordion-content-active');
    elem.querySelector('.horizontal-accordion-head').classList.remove('horizontal-accordion-head-active');
  });
}

function hOpenItem(item) {
  var hContent = item.querySelector('.horizontal-accordion-content');
  var hTitle = item.querySelector('.horizontal-accordion-head');
  hContent.classList.add('horizontal-accordion-content-active');
  hTitle.classList.add('horizontal-accordion-head-active');
}

})

}