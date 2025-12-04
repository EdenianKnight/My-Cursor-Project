// Web Cursors Educational Website - JavaScript File
// by Edenian Knight

// ==========================================
// 1. CURSOR CHANGER FUNCTIONALITY
// ==========================================

// Get all cursor change buttons
const defaultBtn = document.getElementById('defaultBtn');
const pointerBtn = document.getElementById('pointerBtn');
const textBtn = document.getElementById('textBtn');
const crosshairBtn = document.getElementById('crosshairBtn');
const cursorStatus = document.getElementById('cursorStatus');

// Function to change cursor style
function changeCursor(cursorType, cursorName) {
    document.body.style.cursor = cursorType;
    cursorStatus.textContent = `Current Cursor: ${cursorName}`;
    
    // Add a fun animation to the status text
    cursorStatus.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cursorStatus.style.transform = 'scale(1)';
    }, 200);
}

// Add click event listeners to cursor buttons
defaultBtn.addEventListener('click', () => changeCursor('default', 'Default'));
pointerBtn.addEventListener('click', () => changeCursor('pointer', 'Pointer'));
textBtn.addEventListener('click', () => changeCursor('text', 'Text'));
crosshairBtn.addEventListener('click', () => changeCursor('crosshair', 'Crosshair'));

// ==========================================
// 2. CLICK COUNTER GAME
// ==========================================

const clickBox = document.getElementById('clickBox');
const clickCount = document.getElementById('clickCount');
const startGame = document.getElementById('startGame');
const gameStatus = document.getElementById('gameStatus');
const highScoreDisplay = document.getElementById('highScore');

let clicks = 0;
let gameActive = false;
let highScore = 0;

// Click box event listener
clickBox.addEventListener('click', () => {
    if (gameActive) {
        clicks++;
        clickCount.textContent = clicks;
        
        // Add bounce animation
        clickBox.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickBox.style.transform = 'scale(1)';
        }, 100);
    }
});

// Start game button
startGame.addEventListener('click', () => {
    if (!gameActive) {
        // Reset and start game
        clicks = 0;
        clickCount.textContent = clicks;
        gameActive = true;
        startGame.disabled = true;
        startGame.style.opacity = '0.5';
        
        let timeLeft = 10;
        gameStatus.textContent = `Time left: ${timeLeft} seconds - Click as fast as you can!`;
        gameStatus.style.color = '#4caf50';
        gameStatus.style.fontWeight = 'bold';
        
        // Countdown timer
        const timer = setInterval(() => {
            timeLeft--;
            gameStatus.textContent = `Time left: ${timeLeft} seconds - Click as fast as you can!`;
            
            if (timeLeft <= 3) {
                gameStatus.style.color = '#f44336';
            }
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                gameActive = false;
                startGame.disabled = false;
                startGame.style.opacity = '1';
                
                // Check for high score
                if (clicks > highScore) {
                    highScore = clicks;
                    highScoreDisplay.textContent = `High Score: ${highScore} 🏆`;
                    gameStatus.textContent = `🎉 Game Over! You clicked ${clicks} times - NEW HIGH SCORE! 🎉`;
                    gameStatus.style.color = '#ff9800';
                } else {
                    gameStatus.textContent = `Game Over! You clicked ${clicks} times. Try to beat your high score!`;
                    gameStatus.style.color = '#666';
                }
            }
        }, 1000);
    }
});

// ==========================================
// 3. TEXT INPUT CHARACTER COUNTER
// ==========================================

const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', (e) => {
    const length = e.target.value.length;
    charCount.textContent = `Characters typed: ${length}`;
    
    // Change color based on length
    if (length > 20) {
        charCount.style.color = '#4caf50';
    } else if (length > 10) {
        charCount.style.color = '#ff9800';
    } else {
        charCount.style.color = '#9c27b0';
    }
});

// ==========================================
// 4. ANIMATED LIST ITEMS
// ==========================================

const listItems = document.querySelectorAll('.cursorListItem');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0) scale(1)';
    });
    
    item.addEventListener('click', () => {
        // Add a click effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = 'translateX(0) scale(1)';
        }, 150);
    });
});

// ==========================================
// 5. FUN FACTS ROTATOR
// ==========================================

const funFactBox = document.getElementById('funFact');
const facts = [
    "Did you know? The first computer mouse was invented in 1964 by Douglas Engelbart, and it was made of wood! Today, we can customize cursors using CSS to make websites more fun and interactive.",
    "Fun Fact: The average person clicks their mouse over 25,000 times per day! That's a lot of clicking!",
    "Did you know? Early computer mice had three buttons, but today most mice have two buttons and a scroll wheel.",
    "Amazing Fact: The cursor is also called a 'pointer' because it points to things on your screen. Creative, right?",
    "Cool Fact: On touch screen devices, your finger becomes the cursor! That's why websites need to work well with both mouse and touch."
];

let currentFactIndex = 0;

funFactBox.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    const factText = funFactBox.querySelector('p');
    
    // Fade out
    funFactBox.style.opacity = '0.5';
    
    setTimeout(() => {
        factText.textContent = facts[currentFactIndex];
        // Fade in
        funFactBox.style.opacity = '1';
    }, 300);
});

funFactBox.addEventListener('mouseenter', () => {
    funFactBox.style.transform = 'scale(1.02)';
});

funFactBox.addEventListener('mouseleave', () => {
    funFactBox.style.transform = 'scale(1)';
});

// ==========================================
// 6. DISPLAY VISIT TIME
// ==========================================

const visitTime = document.getElementById('visitTime');
const now = new Date();
const timeString = now.toLocaleTimeString();
const dateString = now.toLocaleDateString();

visitTime.textContent = `You visited this page on ${dateString} at ${timeString}`;

// ==========================================
// 7. WELCOME MESSAGE
// ==========================================

// Show a welcome message when page loads
window.addEventListener('load', () => {
    console.log('🎉 Welcome to Web Cursors Educational Website!');
    console.log('💻 This page teaches you about cursors and inline CSS');
    console.log('🚀 Try all the interactive features!');
    
    // Optional: You can uncomment this to show an alert
    // alert('Welcome! 👋 Try the interactive cursor demo and click counter game!');
});

// ==========================================
// 8. SMOOTH SCROLL TO TOP ON LOGO CLICK
// ==========================================

const githubLogo = document.querySelector('footer img');

githubLogo.addEventListener('mouseenter', () => {
    githubLogo.style.transform = 'rotate(360deg) scale(1.2)';
});

githubLogo.addEventListener('mouseleave', () => {
    githubLogo.style.transform = 'rotate(0deg) scale(1)';
});

// ==========================================
// 9. BUTTON HOVER EFFECTS
// ==========================================

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});

// ==========================================
// 10. EASTER EGG - KONAMI CODE
// ==========================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>🎮</text></svg>") 16 0, auto';
        alert('🎮 Konami Code Activated! You found the secret cursor! 🎉');
        konamiCode = [];
    }
});

console.log('💡 Hint: Try entering the Konami Code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA');