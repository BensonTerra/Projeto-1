// Get all the necessary elements
const door = document.querySelector(".door");
const lock = document.querySelector(".lock");
const key = document.querySelector(".key");

// Add event listener to the door
door.addEventListener("click", () => {
  // Check if the lock is open
  if (lock.classList.contains("open")) {
    alert("You escaped!");
  } else {
    alert("The door is locked!");
  }
});

// Add event listener to the lock
lock.addEventListener("click", () => {
  // Check if the key is visible
  if (key.style.display === "block") {
    // Unlock the lock
    lock.classList.add("open");
    alert("You unlocked the lock!");
  } else {
    alert("You need to find the key first!");
  }
});

// Add event listener to the clue
const clue = document.querySelector(".clue");
clue.addEventListener("click", () => {
  alert("The clue says: Look behind the puzzle!");
});

// Add event listener to the puzzle
const puzzle = document.querySelector(".puzzle");
puzzle.addEventListener("click", () => {
  // Show the key
  key.style.display = "block";
  alert("You found the key!");
});
