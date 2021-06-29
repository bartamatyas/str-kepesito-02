const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {
    const sectionElements = document.querySelectorAll('#container');
for (let i = 0; i < sectionElements.length; i++) {
    sectionElements[i].setAttribute('Ezt a könyvet már olvastad: ', sectionElements[i].innerHTML);
   }

function configStyle() {
    const elements = document.querySelector('section').forEach( element => {
        element.style.border = '3px red',

     elements = document.querySelector('div').forEach( element => {
        element.style.display = 'flex',

     elements = document.querySelector('p').forEach( element => {
        element.style.color = 'red';
        element.style.align = 'center';}

    
export { listMyBooks, configStyle };
