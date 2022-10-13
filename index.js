const removeBtn = document.getElementById('remove-btn')
const submitBtn = document.getElementById('butmit-btn')
const resetBtn = document.getElementById('reset-btn')
const screen = document.getElementById('screen');

let theme = 'dark';
let screenContent = '';

const ToggleTheme = () => {
    let docstyle = document.documentElement.style;
    if (theme == 'dark') {
        docstyle.setProperty('--background: hsl(222, 26%, 31%);');
        docstyle.setProperty('--text: hsl(221, 14%, 31%);');
        docstyle.setProperty('--text2: hsl(0, 0%, 100%);');
        docstyle.setProperty('--content-background: hsl(223, 31%, 20%);');
        docstyle.setProperty('--screen-background: hsl(224, 36%, 15%);');
        docstyle.setProperty('--keys: hsl(30, 25%, 89%);');
        docstyle.setProperty('--keys-shadow: hsl(28, 16%, 65%);');
        docstyle.setProperty('--keys-toggle: hsl(0, 0%, 100%);');
        docstyle.setProperty('--submit: hsl(6, 63%, 50%);');
        docstyle.setProperty('--submit-shadow: hsl(6, 70%, 34%);');
        docstyle.setProperty('--submit-toggle: hsl(6, 93%, 67%);');
        docstyle.setProperty('--remove: hsl(225, 21%, 49%);');
        docstyle.setProperty('--remove-shadow: hsl(224, 28%, 35%);');
        docstyle.setProperty('--remove-toggle: hsl(229, 100%, 82%);');
    } else if (theme == 'light') {

    } else if (theme == 'purple') {

    }
}

function keyPress(value) {
    screenContent = screenContent + value;

    screen.innerHTML = screenContent;
}

function reset() {
    screenContent = '';

    screen.innerHTML = '';
}

function remove() {
    screenContent = screenContent.slice(0,-1);

    screen.innerHTML = screenContent;
}

keyPress('');