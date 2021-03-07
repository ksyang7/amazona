import bcrypt from 'bcryptjs';
const data = {
    user:[
        {
            name:'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
        ],
    products:[
        {
            _id:'1',
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brnad:'Nike',
            rating:4.5,
            numReviews: 10,
            description:'high quility product'
        },
        {
            _id:'2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brnad:'Adidas',
            rating:4.0,
            numReviews: 10,
            description:'high quility product'
        },
        {
            _id:'3',
            name: 'Lacost Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brnad:'Lacost',
            rating:4.8,
            numReviews: 17,
            description:'high quility product'
        },
        {
            _id:'4',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brnad:'Puma',
            rating:4.5,
            numReviews: 15,
            description:'high quility product'
        },
        {
            _id:'5',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brnad:'Puma',
            rating:4.5,
            numReviews: 10,
            description:'high quility product'
        },
        {
            _id:'6',
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brnad:'Adidas',
            rating:4.5,
            numReviews: 15,
            description:'high quility product'
        },
       
    ]
}
export default data;