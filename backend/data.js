import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Ravindu',
            email:'admin@aquam.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Ravindu_M',
            email:'ravi@aqua.com',
            password:bcrypt.hashSync('1236', 8),
            isAdmin: false,
        },
    ],
    products: [
       {
        name: 'zebra',
        category: 'zebra',
        image: 'images/a.jpg',
        countInStock: 2000,
        seller: 'Ravindu',
        size: '5cm'
       }, 
       {
        name: 'zebra yellow',
        category: 'zebra',
        image: 'images/b.jpg',
        countInStock: 2000,
        seller: 'Ravindu',
        size: '5cm'
       }, 
       {
        name: 'zebra purple',
        category: 'zebra',
        image: 'images/p6.jpg',
        countInStock: 2000,
        seller: 'Ravindu',
        size: '5cm'
       }, 
    ],
};
export default data;