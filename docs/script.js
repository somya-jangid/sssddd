document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.querySelector('.typing-effect');
    const text = 'Welcome to our ChatGPT-inspired site!';
    let index = 0;
    function type() {
        if (index < text.length) {
            typingEffect.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});