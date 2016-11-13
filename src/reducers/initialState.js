
export default {
    // scenarios: [],
    auth:{
    authenticated : false,
    user : {}
    },
    //waypoint
    waypoint : {
        waypointName: 'Danielville, Samtucky',
        coords: {
            lat: 40.712784,
            lng: -74.005941
        },
        links: [
            'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
        ],
        text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
        pointsOfInterest: [
            {
                poiName: 'El Danieleo Dictador',
                clues: [
                    {
                        waypoint: "DanielTown, Richardington",
                        poiName: "Sir Daniel's Iron Hammer",
                        links: [
                            'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                        ],
                        text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                    }, {
                        waypoint: "DanielTown, Richardington",
                        poiName: "Sir Daniel's Iron Hammer",
                        links: [
                            'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                        ],
                        text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                    }
                ],
                links: [
                    'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                ],
                text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
            }
        ],
        falseRoute: [
            {
                falseRouteName: 'So Long Sammi Hearth Stone',
                coords: {
                    lat: 38.975531,
                    lng: -85.579298
                },
                links: [
                    'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                ],
                text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
            }, {
                falseRouteName: 'Coders Grave of Danielopolis',
                coords: {
                    lat: 39.904211,
                    lng: 116.407395
                },
                links: [
                    'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                ],
                text: 'The mass grave sites where Daniel the Designing Dictator had the victims of his iron ruled tossed away.'
            }
        ]
    },
    //WayPoint

    //pointOfInterest
    pointOfInterest : {
        poiName: 'El Danieleo Dictador',
        clues: [
            {
                waypoint: "DanielTown, Richardington",
                poiName: "Sir Daniel's Iron Hammer",
                links: [
                    'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                ],
                text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
            }, {
                waypoint: "DanielTown, Richardington",
                poiName: "Sir Daniel's Iron Hammer",
                links: [
                    'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                ],
                text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
            }
        ],
        links: [
            'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
        ],
        text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
    },
    //pointOfInterest

    //clue
    clue : {
        waypoint: "DanielTown, Richardington",
        poiName: "Sir Daniel's Iron Hammer",
        links: [
            'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
        ],
        text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
    },
    //clue

    //scenario

    scenario : {
        _id:'1',
        scenarioName: "Long March of Daniel the Designing Dictator",
        scenarioAuthor: 'Joshua Maddox',
        waypoints: [
            {
                waypointName: 'Danielville, Samtucky',
                coords: {
                    lat: 40.712784,
                    lng: -74.005941
                },
                links: [
                    'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                ],
                text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                pointsOfInterest: [
                    {
                        poiName: 'El Danieleo Dictador',
                        clues: [
                            {
                                waypoint: "DanielTown, Richardington",
                                poiName: "Sir Daniel's Iron Hammer",
                                links: [
                                    'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                ],
                                text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                            }, {
                                waypoint: "DanielTown, Richardington",
                                poiName: "Sir Daniel's Iron Hammer",
                                links: [
                                    'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                ],
                                text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                            }
                        ],
                        links: [
                            'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                        ],
                        text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                    }
                ],
                falseRoute: [
                    {
                        falseRouteName: 'So Long Sammi Hearth Stone',
                        coords: {
                            lat: 38.975531,
                            lng: -85.579298
                        },
                        links: [
                            'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                        ],
                        text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                    }, {
                        falseRouteName: 'Coders Grave of Danielopolis',
                        coords: {
                            lat: 39.904211,
                            lng: 116.407395
                        },
                        links: [
                            'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                        ],
                        text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                    }
                ]
            }
        ],
        vouchers: 11
    },
    scenarios : [
        {
            _id: '1',
            scenarioName: "Long March of Daniel the Designing Dictator",
            scenarioAuthor: 'Joshua Maddox',
            waypoints: [
                {
                    _id: '1',
                    waypointName: 'Danielville, Samtucky',
                    coords: {
                        lat: 40.712784,
                        lng: -74.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }, {
                    _id: '2',
                    waypointName: 'Beijing,China',
                    coords: {
                        lat: 42.712784,
                        lng: -75.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }, {
                    _id: '3',
                    waypointName: 'Chicago,USA',
                    coords: {
                        lat: 39.712784,
                        lng: -73.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }
            ],
            vouchers: 11
        }, {
            _id: '2',
            scenarioName: "Saving the Panda",
            scenarioAuthor: 'Joshua Maddox',
            waypoints: [
                {
                    _id: '1',
                    waypointName: 'Danielville, Samtucky',
                    coords: {
                        lat: 40.712784,
                        lng: -74.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }
            ],
            vouchers: 11
        }, {
            _id: '3',
            scenarioName: "Silk Road",
            scenarioAuthor: 'Joshua Maddox',
            waypoints: [
                {
                    _id: '1',
                    waypointName: 'Danielville, Samtucky',
                    coords: {
                        lat: 40.712784,
                        lng: -74.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }
            ],
            vouchers: 11
        }, {
            _id: '4',
            scenarioName: "Back to Future",
            scenarioAuthor: 'Joshua Maddox',
            waypoints: [
                {
                    _id: '1',
                    waypointName: 'Danielville, Samtucky',
                    coords: {
                        lat: 40.712784,
                        lng: -74.005941
                    },
                    links: [
                        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                    ],
                    text: 'Bacon ipsum dolor amet pork loin spare ribs corned beef pork chop drumstick ham hock pancetta ribeye filet mignon. Rump shank tenderloin meatloaf meatball t-bone. Tail boudin porchetta kielbasa. Bresaola corned beef strip steak, bacon sirloin pork belly short loin shankle chuck pork ground round fatback ball tip pork loin tri-tip',
                    pointsOfInterest: [
                        {
                            _id: '1',
                            poiName: 'El Danieleo Dictador',
                            clues: [
                                {
                                    _id: '1',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }, {
                                    _id: '2',
                                    waypoint: "DanielTown, Richardington",
                                    poiName: "Sir Daniel's Iron Hammer",
                                    links: [
                                        'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                                    ],
                                    text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
                                }
                            ],
                            links: [
                                'http://feelgrafix.com/data/landscape/landscape-17.jpg', 'http://feelgrafix.com/data/landscape/landscape-3.jpg'
                            ],
                            text: 'Also known as "Daniel the Dictator", the El Danieleo Dictador was the presidential palace where daniel tortured developers and, through shouts and hard labor, killed over 4,000 coders'
                        }
                    ],
                    falseRoute: [
                        {
                            _id: '1',
                            falseRouteName: 'So Long Sammi Hearth Stone',
                            coords: {
                                lat: 38.975531,
                                lng: -85.579298
                            },
                            links: [
                                'http://ixlmasonry.com/wp-content/uploads/2016/02/Centre-Hearth-Stone-shown-in-Summer-Wheat-Travertine-finish.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: "The So Long Sammi Hearth Stone was set by the Late Richard of CodingDale after Sammi was struck down by Daniels Iron Hammer. Sammi was reported struck for pulling when she should've fetched"
                        }, {
                            _id: '2',
                            falseRouteName: 'Coders Grave of Danielopolis',
                            coords: {
                                lat: 39.904211,
                                lng: 116.407395
                            },
                            links: [
                                'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'http://feelgrafix.com/data/landscape/landscape-1.jpg'
                            ],
                            text: 'The mass grave sites where Daniel the Designing Dictator had the victums of his iron ruled tossed away.'
                        }
                    ]
                }
            ],
            vouchers: 11
        }
    ]
}
