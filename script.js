<script>
var slider = document.querySelector('.slider');
var sliderItems = document.querySelectorAll('.slider-item');
var currentIndex = 0;
var itemWidth = sliderItems[0].offsetWidth;
var totalItems = sliderItems.length;

function slideNext() {
  if (currentIndex === totalItems - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
}

function slidePrev() {
  if (currentIndex === 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex--;
  }
  updateSlider();
}

function updateSlider() {
  var translateXValue = -currentIndex * itemWidth;
  slider.style.transform = `translateX(${translateXValue}px)`;
}
</script>