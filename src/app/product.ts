export class Product {
    id: number;
    name: string;
    price: number;
    opis: string;
    imageUrl: string;
    category: string;

    constructor(obj?: any) {
        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.opis = obj.opis;
        this.imageUrl = obj.imageUrl;
        this.category = obj.category;
    }
}
