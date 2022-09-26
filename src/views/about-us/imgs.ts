const one = require('../../assets/images/about-us/1.jpg')
const two = require('../../assets/images/about-us/2.jpg')
const three = require('../../assets/images/about-us/3.jpg')
const four = require('../../assets/images/about-us/4.jpeg')

const imgList = [
  {
    description: 'ET003 ANDET004',
    src: one,
    title: 'WELCOME TO OTTA HOME .',
    text: 'Hey there, we are  OTTA HOME,  a company specialized in the home decoration, home furniture, home  accessories. Our goal  is always: create unique products, with competitive pricing for a timely delivery.',
  }, 
  {
    description: 'FS003AP-HIGH',
    src: [two, three],
    imgleft: true,
    title: 'Beautiful Life',
    text: 'We believe that our mindset directly impacts how we experience the present moment: what we do, what we feel. Every day is a beautiful day. Using some beautiful things to fill in the life , then there will be a colorful and beautiful  life like flowers.'
  }, 
  {
    description: 'VASE004',
    src: four,
    text: 'We provide a full range of services to our customers, taking care of everything, from product  design, procurement, manufacturing and packing, transportation . We provide our  customers with the appropriate solutions for their products needs.'
  }
]

export {
  imgList
}
