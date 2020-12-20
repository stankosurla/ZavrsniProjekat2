import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryLibrary implements InMemoryDbService {
    createDb() {
        const proizvodi = [
            {
                id: 1,
                name: 'Table',
                price: 40000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-table.jpg',
                category: 'living-room'
            },
            {
                id: 2,
                name: 'Sofa',
                price: 40000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-sofa.jpg',
                category: 'living-room'
            },
            {
                id: 3,
                name: 'Chair',
                price: 5000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-chair.jpg',
                category: 'living-room'
            },
            {
                id: 4,
                name: 'Armchair',
                price: 9000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-armchair.jpg',
                category: 'living-room'
            },
            {
                id: 5,
                name: 'Cosy couch',
                price: 350000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-cosy-couch.jpg',
                category: 'living-room'
            },
            {
                id: 6,
                name: 'Pillow',
                price: 1125,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/living-room/living-room-pillow.jpg',
                category: 'living-room'
            },
            {
                id: 7,
                name: 'Kitchen',
                price: 89000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/kitchen/kitchen-kitchen.jpg',
                category: 'kitchen'
            },
            {
                id: 8,
                name: 'Bar stool',
                price: 3000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/kitchen/kitchen-bar-stool.jpg',
                category: 'kitchen'
            },
            {
                id: 9,
                name: 'Dining table',
                price: 50000,
                opis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis, recusandae asperiores! Odio aut maiores pariaturs',
                imageUrl: 'assets/kitchen/kitchen-dining-table.jpg',
                category: 'kitchen'
            }
        ];
        return { proizvodi };
    }



}