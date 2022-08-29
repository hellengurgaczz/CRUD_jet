export class Product {
    id?: number;
    product_name?: string;
    product_image: string = '';
    product_desc: string = 'Sem descrição';
    inventory?: number;
    status: boolean = true;
    price?: number;
}