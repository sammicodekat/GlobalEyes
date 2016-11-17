export default {
    // scenarios: [],
    auth : {
        authenticated: false,
        user: {}
    },
    //waypoint
    waypoint : {
        "_id": "582d379074af9b001166bc3c",
        "waypointName": "Rome, Italy",
        "links": "http://www.206tours.com/images/italy/rome/st-peters-square-italy1b.jpg",
        "text": "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew.",
        "coords": {
            "lat": 41.8724111,
            "lng": 12.48022489999994
        },
        "__v": 0,
        "falseRoute": [
            {
                "name": "Berlin, Germany",
                "coords":{
                    "lat": 52.52000659999999,
                    "lng": 13.404953999999975
                         },
           "text": 'This is Berlin',
                "link":'http://www.planetware.com/photos-large/D/east-berlin-former-0.jpg'
            }, {
                "name": "Barcelona, Spain",
                "coords":{
                     "lat": 41.3850639,
                     "lng": 2.1734034999999494
                         },
                "text":'This is Barcelona',
                "link":'http://www.planetware.com/photos-large/D/east-berlin-former-0.jpg'
            }
        ],
        "pointsOfInterest": [
            {
                "_id": "582d34f374af9b001166bc3a",
                "poiName": "Trevi Fountain, Piazza di Trevi, Rome, Metropolitan City of Rome, Italy",
                "links": "https://en.wikipedia.org/wiki/Trevi_Fountain#/media/File:Panorama_of_Trevi_fountain_2015.jpg",
                "text": "The fountain at the junction of three roads marks the terminal point of the \"modern\" Acqua Vergine, the revived Aqua Virgo, one of the aqueducts that supplied water to ancient Rome. In 19 BC, supposedly with the help of a virgin, Roman technicians located a source of pure water some 13 km (8.1 mi) from the city. (This scene is presented on the present fountain's façade.) However, the eventual indirect route of the aqueduct made its length some 22 km (14 mi). This Aqua Virgo led the water into the Baths of Agrippa. It served Rome for more than 400 years.",
                "__v": 0
            }, {
                "_id": "582d378c74af9b001166bc3b",
                "poiName": "Colosseum, Piazza del Colosseo, Rome, Metropolitan City of Rome, Italy",
                "links": "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
                "text": "The Colosseum or Coliseum (/kɒləˈsiːəm/ kol-ə-SEE-əm), also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [amfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name (Flavius).\n\nThe Colosseum could hold, it is estimated, between 50,000 and 80,000 spectators, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
                "__v": 0,
                "clues": {
                    "links": "http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/mexico-mexico-city.jpg",
                    "text": "It has diverse landscape of mountains, deserts and jungles"
                }
            }
        ]
    },
    //WayPoint

    //pointOfInterest
    pointOfInterest : {
        "_id": "582d378c74af9b001166bc3b",
        "poiName": "Colosseum, Piazza del Colosseo, Rome, Metropolitan City of Rome, Italy",
        "links": "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
        "text": "The Colosseum or Coliseum (/kɒləˈsiːəm/ kol-ə-SEE-əm), also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [amfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name (Flavius).\n\nThe Colosseum could hold, it is estimated, between 50,000 and 80,000 spectators, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
        "__v": 0,
        "clues": {
            "links": "http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/mexico-mexico-city.jpg",
            "text": "It has diverse landscape of mountains, deserts and jungles"
        }
    },
    //pointOfInterest

    //clue
    clue : {
        waypoint: "DanielTown, Richardington",
        poiName: "Sir Daniel's Iron Hammer",
        links: [
            'http://i.imgur.com/5tj6S7O.jpg', 'http://i.imgur.com/a7fJPfn.jpg'
        ],
        text: 'Here marks the spot where the communist Daniel struck a developer for misplacing a semi-colon. With the infamous words "Work harder, Work Better or feel the hammer", Daniel built his first public facing App starting a long nightmarish reign'
    },
    //clue

    //scenario
    waypoints : [
        {
            "_id": "582d379074af9b001166bc3c",
            "waypointName": "Rome, Italy",
            "links": "http://www.206tours.com/images/italy/rome/st-peters-square-italy1b.jpg",
            "text": "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew.",
            "coords": {
                "lat": 41.8724111,
                "lng": 12.48022489999994
            },
            "__v": 0,
            "falseRoute": [
                {
                    "name": "Berlin, Germany",
                    "lat": 52.52000659999999,
                    "lng": 13.404953999999975
                }, {
                    "name": "Barcelona, Spain",
                    "lat": 41.3850639,
                    "lng": 2.1734034999999494
                }
            ],
            "pointsOfInterest": ["582d34f374af9b001166bc3a", "582d378c74af9b001166bc3b"]
        }, {
            "_id": "582d3e0e74af9b001166bc3f",
            "waypointName": "Merida, Mexico",
            "links": "http://media6.trover.com/T/55106e7eae8d8a620600f2c9/fixedw_large_4x.jpg",
            "text": "Mérida, the vibrant capital of the Mexican state of Yucatán, has a rich Mayan and colonial heritage. The city’s focal point is Plaza de la Independencia, bordered by the fortresslike Mérida Cathedral and white limestone Iglesia de la Tercera Orden, both colonial-era churches built using relics from ancient Mayan temples. The Casa de Montejo, a 16th-century mansion, is a landmark of colonial plateresque architecture.",
            "coords": {
                "lat": 20.9673702,
                "lng": -89.59258569999997
            },
            "__v": 0,
            "falseRoute": [
                {
                    "name": "San Juan, San José Province, Costa Rica",
                    "lat": 9.964000000000002,
                    "lng": -84.07752010000002
                }, {
                    "name": "San José, Toa Baja, Puerto Rico",
                    "lat": 18.403563,
                    "lng": -66.25159229999997
                }
            ],
            "pointsOfInterest": ["582d3b3874af9b001166bc3d", "582d3d4474af9b001166bc3e"]
        }, {
            "_id": "582d472274af9b001166bc41",
            "waypointName": "Agra, Uttar Pradesh, India",
            "links": "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Taj_Mahal_Gateway,_Agra,_Uttar_Pradesh,_India.jpg",
            "text": "Agra is a city in northern India’s Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan’s wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets.",
            "coords": {
                "lat": 27.1766701,
                "lng": 78.00807450000002
            },
            "__v": 0,
            "falseRoute": [
                {
                    "name": "Bangkok Thailand",
                    "lat": 13.7563309,
                    "lng": 100.50176510000006
                }, {
                    "name": "Korea, Seoul, South Korea",
                    "lat": 37.566535,
                    "lng": 126.97796919999996
                }
            ],
            "pointsOfInterest": ["582d46e174af9b001166bc40"]
        }, {
            "_id": "582d48cb74af9b001166bc43",
            "waypointName": "Ma'an Governorate, Jordan",
            "links": "http://i2.cdn.cnn.com/cnnnext/dam/assets/140304200509-jordan-5-horizontal-large-gallery.jpg",
            "text": "Jordan, an Arab nation on the east bank of the Jordan River, is defined by ancient monuments, nature reserves and seaside resorts. It’s home to the famed archaeological site of Petra, the Nabatean capital dating to around 300 B.C. Set in a narrow valley with tombs, temples and monuments carved into the surrounding pink sandstone cliffs, Petra earns its nickname, the \"Rose City.\"",
            "coords": {
                "lat": 30.1926789,
                "lng": 35.7249319
            },
            "__v": 0,
            "falseRoute": [
                {
                    "name": "Istanbul, İstanbul, Turkey",
                    "lat": 41.0082376,
                    "lng": 28.97835889999999
                }, {
                    "name": "Libiąż, Poland",
                    "lat": 50.1037928,
                    "lng": 19.315677400000027
                }
            ],
            "pointsOfInterest": ["582d48a274af9b001166bc42"]
        }
    ],
    scenario : {
        "_id": "582d07e9f1bf9000117be821",
        "scenarioName": "Mysterious 7",
        "scenarioAuthor": "DanDan",
        "__v": 0,
        "vouchers": 6,
        "waypoints": [
            {
                "_id": "582d379074af9b001166bc3c",
                "waypointName": "Rome, Italy",
                "links": "http://www.206tours.com/images/italy/rome/st-peters-square-italy1b.jpg",
                "text": "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew.",
                "coords": {
                    "lat": 41.8724111,
                    "lng": 12.48022489999994
                },
                "__v": 0,
                "falseRoute": [
                    {
                        "name": "Berlin, Germany",
                        "lat": 52.52000659999999,
                        "lng": 13.404953999999975
                    }, {
                        "name": "Barcelona, Spain",
                        "lat": 41.3850639,
                        "lng": 2.1734034999999494
                    }
                ],
                "pointsOfInterest": [
                    {
                        "_id": "582d34f374af9b001166bc3a",
                        "poiName": "Trevi Fountain, Piazza di Trevi, Rome, Metropolitan City of Rome, Italy",
                        "links": "https://en.wikipedia.org/wiki/Trevi_Fountain#/media/File:Panorama_of_Trevi_fountain_2015.jpg",
                        "text": "The fountain at the junction of three roads marks the terminal point of the \"modern\" Acqua Vergine, the revived Aqua Virgo, one of the aqueducts that supplied water to ancient Rome. In 19 BC, supposedly with the help of a virgin, Roman technicians located a source of pure water some 13 km (8.1 mi) from the city. (This scene is presented on the present fountain's façade.) However, the eventual indirect route of the aqueduct made its length some 22 km (14 mi). This Aqua Virgo led the water into the Baths of Agrippa. It served Rome for more than 400 years.",
                        "__v": 0
                    }, {
                        "_id": "582d378c74af9b001166bc3b",
                        "poiName": "Colosseum, Piazza del Colosseo, Rome, Metropolitan City of Rome, Italy",
                        "links": "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
                        "text": "The Colosseum or Coliseum (/kɒləˈsiːəm/ kol-ə-SEE-əm), also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [amfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name (Flavius).\n\nThe Colosseum could hold, it is estimated, between 50,000 and 80,000 spectators, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
                        "__v": 0,
                        "clues": {
                            "links": "http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/mexico-mexico-city.jpg",
                            "text": "It has diverse landscape of mountains, deserts and jungles"
                        }
                    }
                ]
            }, {
                "_id": "582d3e0e74af9b001166bc3f",
                "waypointName": "Merida, Mexico",
                "links": "http://media6.trover.com/T/55106e7eae8d8a620600f2c9/fixedw_large_4x.jpg",
                "text": "Mérida, the vibrant capital of the Mexican state of Yucatán, has a rich Mayan and colonial heritage. The city’s focal point is Plaza de la Independencia, bordered by the fortresslike Mérida Cathedral and white limestone Iglesia de la Tercera Orden, both colonial-era churches built using relics from ancient Mayan temples. The Casa de Montejo, a 16th-century mansion, is a landmark of colonial plateresque architecture.",
                "coords": {
                    "lat": 20.9673702,
                    "lng": -89.59258569999997
                },
                "__v": 0,
                "falseRoute": [
                    {
                        "name": "San Juan, San José Province, Costa Rica",
                        "lat": 9.964000000000002,
                        "lng": -84.07752010000002
                    }, {
                        "name": "San José, Toa Baja, Puerto Rico",
                        "lat": 18.403563,
                        "lng": -66.25159229999997
                    }
                ],
                "pointsOfInterest": [
                    {
                        "_id": "582d3b3874af9b001166bc3d",
                        "poiName": "Paseo de Montejo, Centro, Merida, Mexico",
                        "links": "http://www.visitmexico.com/work/models/VisitMexico30/WebPage/MRDA_Paseo_de_Montejo/photoEscudo_MRDA_Paseo_de_Montejo_paseomontejo.jpg",
                        "text": "Merida’s elegant tree-lined Paseo de Montejo is the city’s main boulevard and most fashionable district. Once a primarily residential area, the Paseo de Montejo in Merida has since been commercialized and many of the historic 19th century mansions that line the boulevard have been converted into restaurants, nightclubs, boutique hotels, shops, office buildings and museums. \n\nLocated northeast of the central plaza and architecturally reminiscent of Havana, Cuba, the area surrounding the Paseo de Montejo in Merida was developed during the henequen boom of the late 19th and early 20th century as plantation owners looking to move out of the city’s historic center built gorgeous mansions along this stretch of boulevard.",
                        "__v": 0
                    }, {
                        "_id": "582d3d4474af9b001166bc3e",
                        "poiName": "Chichén Itzá, Merida, Mexico",
                        "links": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chichen_itza.JPG",
                        "text": "Chichén Itzá is a world-famous complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid known as El Castillo dominates the 6.5-sq.-km. ancient city, which thrived from around 600 A.D. to the 1200s. Graphic stone carvings survive at structures like the ball court, Temple of the Warriors and the Wall of the Skulls. Nightly sound-and-light shows illuminate the buildings' sophisticated geometry.",
                        "__v": 0,
                        "clues": {
                            "text": "People think it's a temple, but it's really a grave"
                        }
                    }
                ]
            }, {
                "_id": "582d472274af9b001166bc41",
                "waypointName": "Agra, Uttar Pradesh, India",
                "links": "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Taj_Mahal_Gateway,_Agra,_Uttar_Pradesh,_India.jpg",
                "text": "Agra is a city in northern India’s Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan’s wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets.",
                "coords": {
                    "lat": 27.1766701,
                    "lng": 78.00807450000002
                },
                "__v": 0,
                "falseRoute": [
                    {
                        "name": "Bangkok Thailand",
                        "lat": 13.7563309,
                        "lng": 100.50176510000006
                    }, {
                        "name": "Korea, Seoul, South Korea",
                        "lat": 37.566535,
                        "lng": 126.97796919999996
                    }
                ],
                "pointsOfInterest": [
                    {
                        "_id": "582d46e174af9b001166bc40",
                        "poiName": "Taj Mahal, Dharmapuri, Tajganj, Agra, Uttar Pradesh, India",
                        "links": "http://www.tajmahal.org.uk/gifs/taj-mahal.jpeg",
                        "text": "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.",
                        "__v": 0,
                        "clues": {
                            "text": "It’s home to the famed archaeological site of Petra, the Nabatean capital dating to around 300 B.C. "
                        }
                    }
                ]
            }, {
                "_id": "582d48cb74af9b001166bc43",
                "waypointName": "Ma'an Governorate, Jordan",
                "links": "http://i2.cdn.cnn.com/cnnnext/dam/assets/140304200509-jordan-5-horizontal-large-gallery.jpg",
                "text": "Jordan, an Arab nation on the east bank of the Jordan River, is defined by ancient monuments, nature reserves and seaside resorts. It’s home to the famed archaeological site of Petra, the Nabatean capital dating to around 300 B.C. Set in a narrow valley with tombs, temples and monuments carved into the surrounding pink sandstone cliffs, Petra earns its nickname, the \"Rose City.\"",
                "coords": {
                    "lat": 30.1926789,
                    "lng": 35.7249319
                },
                "__v": 0,
                "falseRoute": [
                    {
                        "name": "Istanbul, İstanbul, Turkey",
                        "lat": 41.0082376,
                        "lng": 28.97835889999999
                    }, {
                        "name": "Libiąż, Poland",
                        "lat": 50.1037928,
                        "lng": 19.315677400000027
                    }
                ],
                "pointsOfInterest": [
                    {
                        "_id": "582d48a274af9b001166bc42",
                        "poiName": "Petra, Ma'an Governorate, Jordan",
                        "links": "https://i.ytimg.com/vi/j0Z6XkKryD4/maxresdefault.jpg",
                        "text": "Petra (Arabic: البتراء, Al-Batrāʾ; Ancient Greek: Πέτρα), originally known to the Nabataeans as Raqmu, is a historical and archaeological city in southern Jordan. The city is famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone out of which it is carved.\n\nEstablished possibly as early as 312 BC as the capital city of the Arab Nabataeans, it is a symbol of Jordan, as well as Jordan’s most-visited tourist attraction. The Nabateans were nomadic Arabs who benefited from the proximity of Petra to the regional trade routes, in becoming a major trading hub, thus enabling them to gather wealth. The Nabateans are also known for their great ability in constructing efficient water collecting methods in the barren deserts and their talent in carving structures into solid rocks. It lies on the slope of Jebel al-Madhbah (identified by some as the biblical Mount Hor) in a basin among the mountains which form the eastern flank of Arabah (Wadi Araba), the large valley running from the Dead Sea to the Gulf of Aqaba. Petra has been a UNESCO World Heritage Site since 1985.",
                        "__v": 0,
                        "clues": {
                            "text": "it's a long wall"
                        }
                    }
                ]
            }
        ]
    },
    scenarios : [
        {
            "_id": "582d07e9f1bf9000117be821",
            "scenarioName": "Mysterious 7",
            "scenarioAuthor": "DanDan",
            "__v": 0,
            "vouchers": 6,
            "waypoints": [
                {
                    "_id": "582d379074af9b001166bc3c",
                    "waypointName": "Rome, Italy",
                    "links": "http://www.206tours.com/images/italy/rome/st-peters-square-italy1b.jpg",
                    "text": "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew.",
                    "coords": {
                        "lat": 41.8724111,
                        "lng": 12.48022489999994
                    },
                    "__v": 0,
                    "falseRoute": [
                        {
                            "name": "Berlin, Germany",
                            "lat": 52.52000659999999,
                            "lng": 13.404953999999975
                        }, {
                            "name": "Barcelona, Spain",
                            "lat": 41.3850639,
                            "lng": 2.1734034999999494
                        }
                    ],
                    "pointsOfInterest": [
                        {
                            "_id": "582d34f374af9b001166bc3a",
                            "poiName": "Trevi Fountain, Piazza di Trevi, Rome, Metropolitan City of Rome, Italy",
                            "links": "https://en.wikipedia.org/wiki/Trevi_Fountain#/media/File:Panorama_of_Trevi_fountain_2015.jpg",
                            "text": "The fountain at the junction of three roads marks the terminal point of the \"modern\" Acqua Vergine, the revived Aqua Virgo, one of the aqueducts that supplied water to ancient Rome. In 19 BC, supposedly with the help of a virgin, Roman technicians located a source of pure water some 13 km (8.1 mi) from the city. (This scene is presented on the present fountain's façade.) However, the eventual indirect route of the aqueduct made its length some 22 km (14 mi). This Aqua Virgo led the water into the Baths of Agrippa. It served Rome for more than 400 years.",
                            "__v": 0
                        }, {
                            "_id": "582d378c74af9b001166bc3b",
                            "poiName": "Colosseum, Piazza del Colosseo, Rome, Metropolitan City of Rome, Italy",
                            "links": "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
                            "text": "The Colosseum or Coliseum (/kɒləˈsiːəm/ kol-ə-SEE-əm), also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [amfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name (Flavius).\n\nThe Colosseum could hold, it is estimated, between 50,000 and 80,000 spectators, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles (for only a short time as the hypogeum was soon filled in with mechanisms to support the other activities), animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
                            "__v": 0,
                            "clues": {
                                "links": "http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/mexico-mexico-city.jpg",
                                "text": "It has diverse landscape of mountains, deserts and jungles"
                            }
                        }
                    ]
                }, {
                    "_id": "582d3e0e74af9b001166bc3f",
                    "waypointName": "Merida, Mexico",
                    "links": "http://media6.trover.com/T/55106e7eae8d8a620600f2c9/fixedw_large_4x.jpg",
                    "text": "Mérida, the vibrant capital of the Mexican state of Yucatán, has a rich Mayan and colonial heritage. The city’s focal point is Plaza de la Independencia, bordered by the fortresslike Mérida Cathedral and white limestone Iglesia de la Tercera Orden, both colonial-era churches built using relics from ancient Mayan temples. The Casa de Montejo, a 16th-century mansion, is a landmark of colonial plateresque architecture.",
                    "coords": {
                        "lat": 20.9673702,
                        "lng": -89.59258569999997
                    },
                    "__v": 0,
                    "falseRoute": [
                        {
                            "name": "San Juan, San José Province, Costa Rica",
                            "lat": 9.964000000000002,
                            "lng": -84.07752010000002
                        }, {
                            "name": "San José, Toa Baja, Puerto Rico",
                            "lat": 18.403563,
                            "lng": -66.25159229999997
                        }
                    ],
                    "pointsOfInterest": [
                        {
                            "_id": "582d3b3874af9b001166bc3d",
                            "poiName": "Paseo de Montejo, Centro, Merida, Mexico",
                            "links": "http://www.visitmexico.com/work/models/VisitMexico30/WebPage/MRDA_Paseo_de_Montejo/photoEscudo_MRDA_Paseo_de_Montejo_paseomontejo.jpg",
                            "text": "Merida’s elegant tree-lined Paseo de Montejo is the city’s main boulevard and most fashionable district. Once a primarily residential area, the Paseo de Montejo in Merida has since been commercialized and many of the historic 19th century mansions that line the boulevard have been converted into restaurants, nightclubs, boutique hotels, shops, office buildings and museums. \n\nLocated northeast of the central plaza and architecturally reminiscent of Havana, Cuba, the area surrounding the Paseo de Montejo in Merida was developed during the henequen boom of the late 19th and early 20th century as plantation owners looking to move out of the city’s historic center built gorgeous mansions along this stretch of boulevard.",
                            "__v": 0
                        }, {
                            "_id": "582d3d4474af9b001166bc3e",
                            "poiName": "Chichén Itzá, Merida, Mexico",
                            "links": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chichen_itza.JPG",
                            "text": "Chichén Itzá is a world-famous complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid known as El Castillo dominates the 6.5-sq.-km. ancient city, which thrived from around 600 A.D. to the 1200s. Graphic stone carvings survive at structures like the ball court, Temple of the Warriors and the Wall of the Skulls. Nightly sound-and-light shows illuminate the buildings' sophisticated geometry.",
                            "__v": 0,
                            "clues": {
                                "text": "People think it's a temple, but it's really a grave"
                            }
                        }
                    ]
                }, {
                    "_id": "582d472274af9b001166bc41",
                    "waypointName": "Agra, Uttar Pradesh, India",
                    "links": "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Taj_Mahal_Gateway,_Agra,_Uttar_Pradesh,_India.jpg",
                    "text": "Agra is a city in northern India’s Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan’s wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets.",
                    "coords": {
                        "lat": 27.1766701,
                        "lng": 78.00807450000002
                    },
                    "__v": 0,
                    "falseRoute": [
                        {
                            "name": "Bangkok Thailand",
                            "lat": 13.7563309,
                            "lng": 100.50176510000006
                        }, {
                            "name": "Korea, Seoul, South Korea",
                            "lat": 37.566535,
                            "lng": 126.97796919999996
                        }
                    ],
                    "pointsOfInterest": [
                        {
                            "_id": "582d46e174af9b001166bc40",
                            "poiName": "Taj Mahal, Dharmapuri, Tajganj, Agra, Uttar Pradesh, India",
                            "links": "http://www.tajmahal.org.uk/gifs/taj-mahal.jpeg",
                            "text": "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.",
                            "__v": 0,
                            "clues": {
                                "text": "It’s home to the famed archaeological site of Petra, the Nabatean capital dating to around 300 B.C. "
                            }
                        }
                    ]
                }, {
                    "_id": "582d48cb74af9b001166bc43",
                    "waypointName": "Ma'an Governorate, Jordan",
                    "links": "http://i2.cdn.cnn.com/cnnnext/dam/assets/140304200509-jordan-5-horizontal-large-gallery.jpg",
                    "text": "Jordan, an Arab nation on the east bank of the Jordan River, is defined by ancient monuments, nature reserves and seaside resorts. It’s home to the famed archaeological site of Petra, the Nabatean capital dating to around 300 B.C. Set in a narrow valley with tombs, temples and monuments carved into the surrounding pink sandstone cliffs, Petra earns its nickname, the \"Rose City.\"",
                    "coords": {
                        "lat": 30.1926789,
                        "lng": 35.7249319
                    },
                    "__v": 0,
                    "falseRoute": [
                        {
                            "name": "Istanbul, İstanbul, Turkey",
                            "lat": 41.0082376,
                            "lng": 28.97835889999999
                        }, {
                            "name": "Libiąż, Poland",
                            "lat": 50.1037928,
                            "lng": 19.315677400000027
                        }
                    ],
                    "pointsOfInterest": [
                        {
                            "_id": "582d48a274af9b001166bc42",
                            "poiName": "Petra, Ma'an Governorate, Jordan",
                            "links": "https://i.ytimg.com/vi/j0Z6XkKryD4/maxresdefault.jpg",
                            "text": "Petra (Arabic: البتراء, Al-Batrāʾ; Ancient Greek: Πέτρα), originally known to the Nabataeans as Raqmu, is a historical and archaeological city in southern Jordan. The city is famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone out of which it is carved.\n\nEstablished possibly as early as 312 BC as the capital city of the Arab Nabataeans, it is a symbol of Jordan, as well as Jordan’s most-visited tourist attraction. The Nabateans were nomadic Arabs who benefited from the proximity of Petra to the regional trade routes, in becoming a major trading hub, thus enabling them to gather wealth. The Nabateans are also known for their great ability in constructing efficient water collecting methods in the barren deserts and their talent in carving structures into solid rocks. It lies on the slope of Jebel al-Madhbah (identified by some as the biblical Mount Hor) in a basin among the mountains which form the eastern flank of Arabah (Wadi Araba), the large valley running from the Dead Sea to the Gulf of Aqaba. Petra has been a UNESCO World Heritage Site since 1985.",
                            "__v": 0,
                            "clues": {
                                "text": "it's a long wall"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
