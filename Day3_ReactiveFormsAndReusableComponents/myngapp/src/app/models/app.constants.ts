import {Customer, Order} from './app.models'

export const Products = [
    {ProductId:101, ProductName:'Laptop', Price:20000, Category:'ECT'},
    {ProductId:102, ProductName:'Iron', Price:2000, Category:'ECL'},
    {ProductId:103, ProductName:'Lays', Price:20, Category:'FOD'}
];

export const Categories = [
    'ECT', 'ECL', 'FOD'
];

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(11, 'John', 'Mumbai', 'john@abc.com', '1234561234'));
Customers.push(new Customer(21, 'Jim', 'Pune', 'jim@abc.com', '3216549871'));
Customers.push(new Customer(31, 'Aron', 'Delhi', 'aron@abc.com', '9875641231'));
Customers.push(new Customer(41, 'Dean', 'Mumbai', 'dean@abc.com', '9998887773'));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(1, 'Mouse', new Date(2020,1,7), 11, 5, 500));
Orders.push(new Order(1, 'Keyboard', new Date(2020,2,1), 21, 2, 1000));
Orders.push(new Order(1, 'Monitor', new Date(2020,3,9), 31, 2, 5000));
Orders.push(new Order(1, 'USB', new Date(2020,2,11), 41, 5, 1000));
Orders.push(new Order(1, 'MotherBoard', new Date(2020,4,7), 11, 3, 3000));
Orders.push(new Order(1, 'HDD', new Date(2020,1,21), 21, 1, 2000));
Orders.push(new Order(1, 'Speakers', new Date(2020,3,17), 31, 4, 4000));