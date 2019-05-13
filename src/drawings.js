export default class Drawings {
    static data = undefined;

    static getData() {
        Drawings.data = {
            draws: [
                {
                    id: 'abc',
                    content: [
                        {
                            width: 20,
                            color: '#ff0000',
                            coordinates: [
                                { x: 12, y: 13 },
                                { x: 12, y: 14 },
                                { x: 12, y: 15 },
                                { x: 702, y: 166 },
                            ],
                        },
                            {
                            width: 5,
                            color: '#00ff00',
                            coordinates: [
                                { x: 12, y: 60 },
                            ],
                        },
                    ]
                },
                {
                    id: '123',
                    content: [
                        {
                            width: 10,
                            color: '#0000ff',
                            coordinates: [
                                { x: 12, y: 13 },
                                { x: 12, y: 14 },
                                { x: 12, y: 15 },
                                { x: 12, y: 166 },
                            ],
                        },
                            {
                            width: 20,
                            color: '#ffffff',
                            coordinates: [
                                { x: 12, y: 50 },
                            ],
                        },
                    ]
                },
            ]
        };
    }
    
}