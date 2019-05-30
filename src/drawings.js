export default class Drawings {
    static data = undefined;

    static getData() {
        Drawings.data = {
            draws: [
                {
                    id: 'abc',
                    creator: 'Admin',
                    private: false,
                    date: '18.4.18',
                    time: '5',
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
                                { x: 70, y: 800 },
                                { x: 420, y: 700 },
                                { x: 0, y: 500 },
                            ],
                        },
                    ]
                },
                {
                    id: '123',
                    creator: 'Admin',
                    private: false,
                    date: '20.5.19',
                    time: '10',
                    content: [
                        {
                            width: 10,
                            color: '#0000ff',
                            coordinates: [
                                { x: 12, y: 13 },
                                { x: 17, y: 100 },
                                { x: 120, y: 151 },
                                { x: 12, y: 166 },
                            ],
                        },
                            {
                            width: 20,
                            color: '#ffaaff',
                            coordinates: [
                                { x: 12, y: 50 },
                                { x: 123, y: 321 },
                                { x: 564, y: 1 },
                                { x: 1, y: 543 },
                            ],
                        },
                        {
                            width: 5,
                            color: '#000000',
                            coordinates: [
                                { x: 500, y: 0 },
                                { x: 123, y: 654 },
                                { x: 0, y: 500 },
                            ],
                        },
                    ]
                },
                {
                    id: 'No longer a private drawing',
                    creator: 'Admin',
                    private: false,
                    date: '25.5.19',
                    time: '25',
                    content: [
                        {
                            width: 6,
                            color: '#ffaa00',
                            coordinates: [
                                { x: 12, y: 13 },
                                { x: 12, y: 14 },
                                { x: 12, y: 15 },
                                { x: 702, y: 166 },
                                { x: 100, y: 200 },
                                { x: 800, y: 500 },                                
                            ],
                        },
                            {
                            width: 50,
                            color: '#00ffff',
                            coordinates: [
                                { x: 10, y: 400 },
                                { x: 420, y: 700 },
                                { x: 690, y: 240 },
                            ],
                        },
                    ]
                },
                {
                    id: 'Not private',
                    creator: 'Admin',
                    private: false,
                    date: '29.5.19',
                    time: '66',
                    content: [
                        {
                            width: 50,
                            color: '#000000',
                            coordinates: [
                                { x: 1, y: 1 },
                                { x: 800, y: 800 },
                            ],
                        },
                            {
                            width: 20,
                            color: '#aabbcc',
                            coordinates: [
                                { x: 12, y: 50 },
                                { x: 120, y: 500 },
                            ],
                        },
                        {
                            width: 5,
                            color: '#eeddcc',
                            coordinates: [
                                { x: 435, y: 123 },
                                { x: 546, y: 755 },
                                { x: 50, y: 10 },
                            ],
                        },
                    ]
                },                
            ]
        };
    }
    
}