const setColorMode = () => {
    console.log('setColorMode')
    console.log(localStorage.getItem('colorMode'))
    if (localStorage.getItem('colorMode') == 'dark'){
        setDarkMode();
    } 
    else{
        setLightMode(); 
    }
};

const setDarkMode = () => {
    document.body.classList.add('dark-mode');
}

const setLightMode = () => {
    document.body.classList.remove('dark-mode');
}

setColorMode();
const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click', checkMode);

function checkMode(){
    console.log('checkinng.....');
    if(colorSwitch.checked){
        console.log('dark on');
        darkModeOn();
    }
    else{
        console.log('dark off');
        darkModeOff();
    }
}

function darkModeOn(){
    
    // document.body.classList.add('dark-mode');
    localStorage.setItem('colorMode', 'dark');
    setDarkMode();
}

function darkModeOff(){
    
    // document.body.classList.remove('dark-mode');
    localStorage.setItem('colorMode', 'light');
    setLightMode();
}