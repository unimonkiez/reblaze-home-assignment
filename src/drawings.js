export default class Drawings {
    static data = undefined;

    static getData() {
        Drawings.data = {
            draws: [
                {
                    id: 'abc',
                    content: [
                        {
                            color: '#ff0000',
                            data: [
                                { x: 12, y: 13 },
                                { x: 12, y: 14 },
                                { x: 12, y: 15 },
                                { x: 12, y: 16 },
                            ],
                        },
                            {
                            color: '#ff0000',
                            data: [
                                { x: 12, y: 17 },
                            ],
                        },
                    ]
                },
                {
                    id: '123',
                    content: [
                        {
                            color: '#ff0000',
                            data: [
                                { x: 12, y: 13 },
                                { x: 12, y: 14 },
                                { x: 12, y: 15 },
                                { x: 12, y: 16 },
                            ],
                        },
                            {
                            color: '#ff0000',
                            data: [
                                { x: 12, y: 17 },
                            ],
                        },
                    ]
                },
            ]
        };
    }
    
}