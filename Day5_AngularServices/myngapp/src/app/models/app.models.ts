export class Customer{
    constructor(
        public CustomerId: number,
        public CustomerName: string,
        public City: string,
        public Email: string,
        public ContactNumber: string
    ){}
}

export class Order{
    constructor(
        public OrderId: number,
        public OrderName: string,
        public Date: Date,
        public CustomerId: number,
        public OrderQty: number,
        public Amount: number,
    ){}
}