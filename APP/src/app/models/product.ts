import { Guid } from 'guid-typescript';

export class Product {
    id?: Guid;
    product_name: string = '';
    product_image: string = '';
    product_desc: string = '';
    inventory: number = 0;
    status?: boolean = true;
    price: number = 0;
}