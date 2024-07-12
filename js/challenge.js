document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const pauseButton = document.getElementById('pause');
    let isPaused = false;
    let interval;
  
    // Timer function
    function startTimer() {
      interval = setInterval(() => {
        if (!isPaused) {
          counter.innerText = parseInt(counter.innerText) + 1;
        }
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(interval);
    }
  
    // Initialize the timer
    startTimer();
  
    // Plus and Minus Buttons
    document.getElementById('minus').addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    document.getElementById('plus').addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    // Like Button
    document.getElementById('heart').addEventListener('click', () => {
      const likesList = document.querySelector('.likes');
      const currentCount = counter.innerText;
      let existingLike = document.querySelector(`[data-num="${currentCount}"]`);
      
      if (existingLike) {
        let likeCount = existingLike.querySelector('span');
        likeCount.innerText = parseInt(likeCount.innerText) + 1;
      } else {
        let newLike = document.createElement('li');
        newLike.setAttribute('data-num', currentCount);
        newLike.innerHTML = `${currentCount} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Pause Button
    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseButton.innerText = isPaused ? 'resume' : 'pause';
      document.querySelectorAll('button').forEach(btn => {
        if (btn.id !== 'pause') btn.disabled = isPaused;
      });
    });
  
    // Comment Box
    document.getElementById('comment-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
      
      if (commentText !== '') {
        const commentDiv = document.querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.innerText = commentText;
        commentDiv.appendChild(newComment);
        commentInput.value = '';
      }
    });
  });
  
  