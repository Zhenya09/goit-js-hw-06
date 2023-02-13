let categories = document.querySelectorAll('.item')
console.log(`Number of categories ${categories.length}`);
categories.forEach(item => {
    console.log(`Categoru: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})