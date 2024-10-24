const canvas = document.getElementById('flowchartCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a colored rectangle with text
function drawRectangle(x, y, width, height, text, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x, y, width, height);
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText(text, x + 10, y + 30);
}

// Function to draw an arrow
function drawArrow(fromX, fromY, toX, toY) {
    const headLength = 10; // Length of the arrow head
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    
    // Draw the main line
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Draw the arrow head
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
}

// Draw flowchart shapes and connections
drawRectangle(300, 50, 200, 50, 'Start', '#4CAF50'); // Green
drawRectangle(300, 150, 200, 50, 'Submit Application', '#2196F3'); // Blue
drawRectangle(300, 250, 200, 50, 'Review Application', '#FF9800'); // Orange
drawRectangle(300, 350, 200, 50, 'Interview', '#FFC107'); // Yellow
drawRectangle(300, 450, 200, 50, 'Offer', '#FF5722'); // Deep Orange
drawRectangle(300, 550, 200, 50, 'End', '#F44336'); // Red

// Draw arrows
drawArrow(400, 100, 400, 150);
drawArrow(400, 200, 400, 250);
drawArrow(400, 300, 400, 350);
drawArrow(400, 400, 400, 450);
