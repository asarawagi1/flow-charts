const internshipCanvas = document.getElementById('internshipFlowchartCanvas');
const internshipCtx = internshipCanvas.getContext('2d');

// Draw flowchart shapes and connections
drawRectangle(300, 50, 200, 50, 'Start');
drawRectangle(300, 150, 200, 50, 'Intern Training');
drawRectangle(300, 250, 200, 50, 'Assign Tasks');
drawRectangle(300, 350, 200, 50, 'Review Progress');
drawRectangle(300, 450, 200, 50, 'End');

// Draw arrows
drawArrow(400, 100, 400, 150);
drawArrow(400, 200, 400, 250);
drawArrow(400, 300, 400, 350);
