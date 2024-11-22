const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', toggleMenu);


function toggleMenu(){
    let mobileMenu = document.getElementById('mobileMenu');
    let navWrapper = document.getElementById('navWrapper');
    if (navigation.style.display === 'block'){
        navigation.style.display = 'none';
        navWrapper.append(navigation);
    } 
    else{
        navigation.style.display = 'block';
        mobileMenu.append(navigation);
    }

    
}
