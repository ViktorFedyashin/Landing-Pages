function headerBurger() {
    let headerList = document.querySelector('.header_list');
    headerList.classList.toggle('header_list-show');
}

const faders = document.querySelectorAll('.fade-slide');

const appearOptions = {
  threshold: 0.2,  // когда 20% блока видимо
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-slide-show');  // добавляем класс для анимации
      observer.unobserve(entry.target);    // больше не наблюдаем
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


const openModal = document.querySelector('.header_order-button');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// открыть модальное окно
openModal.addEventListener('click', () => {
  modal.classList.add('show');
});

// закрыть по кнопке "×"
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// закрыть при клике вне окна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
