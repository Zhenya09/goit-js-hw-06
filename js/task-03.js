const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery')

const htmlMarkup = images.map((image) => `<li><img class = 'photo' src = '${image.url}' width = '333' alt = '${image.alt}'></li>`).join('')
list.insertAdjacentHTML('beforeend', htmlMarkup)
const photo = document.querySelectorAll('.photo')
list.style.display = 'flex'
list.style.gap = '35px'
list.style.padding = '40px'
list.style.justifyContent = 'center'
list.style.alignItems = 'center'
list.style.listStyleType = 'none'
list.style.borderRadius = '40px'
list.style.backgroundColor = 'red'
