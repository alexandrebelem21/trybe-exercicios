let btn = document.querySelector('#showornot');
let container = document.querySelector('.container');

btn.addEventListener('click', function () {
  if (container.style.display === 'block') {
    container.style.display = 'none';
  } else {
    container.style.display = 'block';
  }
});
