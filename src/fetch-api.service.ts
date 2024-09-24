import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor() {}

  getShirts() {
    return [
      {
        name: 'Casual Cotton Shirt',
        price: '₹999',
        // imageUrl: 'assets/shirt1.jpg',
        productUrl: 'https://www.amazon.in',
      },
      {
        name: 'Formal White Shirt',
        price: '₹1,299',
        // imageUrl: 'assets/shirt2.jpg',
        productUrl: 'https://www.flipkart.com',
      },
      {
        name: 'Summer Printed Shirt',
        price: '₹899',
        // imageUrl: 'assets/shirt3.jpg',
        productUrl: 'https://www.amazon.in',
      },
    ];
  }
}
