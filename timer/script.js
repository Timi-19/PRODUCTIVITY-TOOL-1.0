window.addEventListener('DOMContentLoaded', () => {
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    let time = 0;
    let interval;
  
    timer.addEventListener('click', () => {
      if (!interval) {
        interval = setInterval(updateTimer, 1000);
      } else {
        clearInterval(interval);
        interval = null;
      }

      
    });
    function updateTimer() {
      time++;
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
  
      timer.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }

    startButton.addEventListener('click', () => {
        if (!interval) {
          interval = setInterval(updateTimer, 1000);
        }
      });
    
      stopButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
      });
    
      resetButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
        time = 0;
        updateTimer();
      });
    
  });