document.addEventListener('DOMContentLoaded', () => {
  var filterTrigger = document.getElementById('card-image');
  if (filterTrigger) {
    filterTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      resizeFilter();
    })
    filterTrigger.addEventListener('mouseover', (e) => {
      e.preventDefault();
      resizeFilter();
    })
  }
  function resizeFilter() {
    var source = document.querySelector('#card-image img');
    var filter = document.getElementById('filter');
    filter.style.top = source.y + "px";
    filter.style.width = source.width + "px";
    filter.style.height = source.height + "px";
  }
})