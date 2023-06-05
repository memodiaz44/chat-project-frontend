import React, { useState, useEffect } from 'react';

function Chat() {
  const [count, setCount] = useState(0);
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  let timeoutId = null;

  const startCountdown = () => {
    setCount(5); // Initialize count to 5

    clearTimeout(timeoutId); // Clear any existing timeout
    timeoutId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1; // Decrement the count if it's greater than 0
        } else {
          clearInterval(timeoutId); // Clear the interval when the countdown reaches 0
          return prevCount; // Return the current count when it's 0
        }
      });
    }, 1000); // Change the interval duration as needed (e.g., 1000ms = 1 second)

    // Additional logic if needed
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (!isCountdownStarted && inputValue !== '') {
      setIsCountdownStarted(true);
      startCountdown();
    }

    // Handle the input change
    // ...
  };

  const stopCountdown = () => {
    clearInterval(timeoutId); // Clear the interval
    setCount(0); // Reset the countdown to 0
  };

  useEffect(() => {
    return () => {
      clearInterval(timeoutId); // Clean up the interval when the component unmounts
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" onChange={handleInputChange} />
      <button onClick={stopCountdown}>Stop</button>
    </div>
  );
}

export default Chat;
