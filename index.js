const mark_all = document.querySelector('.mark-all');
const unread = document.querySelectorAll('.unread');
const unread_count = document.querySelector('.notification-unread');

mark_all.addEventListener('click', (e) => {
  for(v of unread){
    v.classList.remove('unread');
  }
  unread_count.textContent = 0;
})
