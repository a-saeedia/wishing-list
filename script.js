function addWish() {
    const wishInput = document.getElementById('wish-input');
    const wishText = wishInput.value.trim();
    
    if (wishText) {
        const wishList = document.getElementById('wishes');
        const newWish = document.createElement('li');
        newWish.textContent = wishText;
        wishList.appendChild(newWish);
        wishInput.value = '';
    }
}
