document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The only way to achieve the impossible is to believe it is possible.",
        "Start where you are. Use what you have. Do what you can.",
        "Don't watch the clock; do what it does. Keep going.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "Believe you can and you're halfway there."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('inspiration-quote').innerText = randomQuote;
});