kofiWidgetOverlay.draw('polarwtf', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': 'rgba(0, 0, 0, 0.25)',
    'floating-chat.donateButton.text-color': '#ffffff',
    'floating-chat.donateButton.backdrop-filter': 'blur(15px)',
    'floating-chat.donateButton.box-shadow': '0 1px 2px 0 #ffffff40'
});

const text = "@polar.wtf"
const zeroWidthSpace = "\u200B"
let typewriter = document.getElementById("typewriter")
let i = 0;

function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i)
        document.title += text.charAt(i)
        ++i
        setTimeout(type, 100)
    } else {
        setTimeout(deleteText, 500)
    }
}

function deleteText() {
    if (i > 0) {
        --i
        typewriter.textContent = text.slice(0, i) || zeroWidthSpace
        document.title = text.slice(0, i) || zeroWidthSpace
        setTimeout(deleteText, 100)
    } else {
        type()
    }
}

type()