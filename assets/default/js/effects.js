// -----------------------------------------------

// JavaScript function to create and add the watermark
function addDemoWatermark() {
    var watermark = document.createElement('div');
    watermark.id = 'demo-watermark';
    watermark.textContent = 'Yasir Akhtar';
    document.body.appendChild(watermark);
}

addDemoWatermark();

//---------------------------------------------------

// Create and add the canvas element dynamically
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1000';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const confettiCount = 60;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * confettiCount + 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 30 - 15,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((confetto, index) => {
        confetto.tiltAngle += confetto.tiltAngleIncremental;
        confetto.y += (Math.cos(confetto.d) + 1 + confetto.r / 2) / 2;
        confetto.tilt = Math.sin(confetto.tiltAngle - index / 3) * 15;

        if (confetto.y > canvas.height) {
            confetto.y = -10;
            confetto.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.lineWidth = confetto.r / 2;
        ctx.strokeStyle = confetto.color;
        ctx.moveTo(confetto.x + confetto.tilt + confetto.r, confetto.y);
        ctx.lineTo(confetto.x + confetto.tilt, confetto.y + confetto.r);
        ctx.stroke();
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();