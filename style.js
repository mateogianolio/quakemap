window.mapStyle = {
    "version": 8,
    "name": "Light",
    "transition": {
      "duration": 0,
      "delay": 0
    },
    "metadata": {
        "mapbox:groups": {
            "1444850762048.5845": {
                "name": "Water labels",
                "collapsed": true
            },
            "1444850923457.5469": {
                "name": "Water",
                "collapsed": true
            },
            "1444850900520.0022": {
                "name": "Tunnels",
                "collapsed": true
            },
            "1444850775955.1606": {
                "name": "POI labels",
                "collapsed": true
            },
            "1444850752066.192": {
                "name": "Place labels",
                "collapsed": true
            },
            "1444850948248.0754": {
                "name": "Hillshades",
                "collapsed": true
            },
            "1444850913245.3801": {
                "name": "Aeroways",
                "collapsed": true
            },
            "1444850808863.985": {
                "name": "Road labels",
                "collapsed": true
            },
            "1444850892815.3088": {
                "name": "Roads",
                "collapsed": true
            },
            "1444850928470.7239": {
                "name": "Buildings",
                "collapsed": true
            },
            "1444850885718.7302": {
                "name": "Bridges",
                "collapsed": true
            },
            "1444850963394.812": {
                "name": "Landuses",
                "collapsed": true
            },
            "1444850654682.7075": {
                "name": "Marine labels",
                "collapsed": true
            },
            "1444850820682.8682": {
                "name": "Admin boundaries",
                "collapsed": true
            },
            "1444850621704.1523": {
                "name": "Country/State labels",
                "collapsed": true
            },
            "1444850874198.7793": {
                "name": "Shields",
                "collapsed": true
            },
            "1444850853666.2222": {
                "name": "Waterway labels",
                "collapsed": true
            },
            "1444850978189.4492": {
                "name": "Landcovers",
                "collapsed": true
            }
        }
    },
    "sources": {
        "mapbox://mapbox.mapbox-streets-v6": {
            "url": "mapbox://mapbox.mapbox-streets-v6",
            "type": "vector"
        },
        "mapbox://mapbox.mapbox-terrain-v2": {
            "url": "mapbox://mapbox.mapbox-terrain-v2",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/mateogianolio/cik88q3qy00k99um6q4jyofwh",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#eee"
            },
            "interactive": true
        },
        {
            "id": "landcover_snow",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "landcover",
            "filter": [
                "==",
                "class",
                "snow"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850978189.4492"
            },
            "interactive": true
        },
        {
            "id": "landcover_crop",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "landcover",
            "filter": [
                "==",
                "class",
                "crop"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ececec",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850978189.4492"
            },
            "interactive": true
        },
        {
            "id": "landcover_grass",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "landcover",
            "filter": [
                "==",
                "class",
                "grass"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e5e5e5",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850978189.4492"
            },
            "interactive": true
        },
        {
            "id": "landcover_scrub",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "landcover",
            "filter": [
                "==",
                "class",
                "scrub"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e3e3e3",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850978189.4492"
            },
            "interactive": true
        },
        {
            "id": "landcover_wood",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "landcover",
            "filter": [
                "==",
                "class",
                "wood"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#dcdcdc",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850978189.4492"
            },
            "interactive": true
        },
        {
            "id": "landuse_industrial",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "landuse",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "==",
                    "class",
                    "industrial"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444850963394.812"
            },
            "interactive": true
        },
        {
            "id": "landuse_park",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "park"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e4e4e4"
            },
            "metadata": {
                "mapbox:group": "1444850963394.812"
            },
            "interactive": true
        },
        {
            "id": "landuse_wood",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "wood"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e0e0e0"
            },
            "metadata": {
                "mapbox:group": "1444850963394.812"
            },
            "interactive": true
        },
        {
            "id": "hillshade_highlight_bright",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                94
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.15
                        ],
                        [
                            17,
                            0.05
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "hillshade_highlight_med",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                90
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.15
                        ],
                        [
                            17,
                            0.05
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "hillshade_shadow_faint",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                89
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#666",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "hillshade_shadow_med",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                78
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#666",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "hillshade_shadow_dark",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                67
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#888888",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "hillshade_shadow_extreme",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-terrain-v2",
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                56
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#999",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.06
                        ],
                        [
                            17,
                            0.01
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850948248.0754"
            },
            "interactive": true
        },
        {
            "id": "building",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "building",
            "minzoom": 15,
            "paint": {
                "fill-outline-color": "#c0c0c0",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0
                        ],
                        [
                            16.5,
                            1
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-color": "#cbcbcb"
            },
            "metadata": {
                "mapbox:group": "1444850928470.7239"
            },
            "interactive": true
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "waterway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "river",
                    "canal"
                ]
            ],
            "paint": {
                "line-color": "#d6d6d6",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.25
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850923457.5469"
            },
            "interactive": true
        },
        {
            "id": "waterway_stream",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "waterway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "stream"
                ]
            ],
            "paint": {
                "line-color": "#d6d6d6",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0.75
                        ],
                        [
                            20,
                            4
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850923457.5469"
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#d6d6d6"
            },
            "metadata": {
                "mapbox:group": "1444850923457.5469"
            },
            "interactive": true
        },
        {
            "id": "aeroway_runway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "aeroway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "type",
                    "runway"
                ]
            ],
            "layout": {
                "line-join": "miter",
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "base": 1.15,
                    "stops": [
                        [
                            11,
                            3
                        ],
                        [
                            20,
                            32
                        ]
                    ]
                },
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            0.5
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850913245.3801"
            },
            "interactive": true
        },
        {
            "id": "aeroway_taxiway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "aeroway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "type",
                    "taxiway"
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-width": {
                    "base": 1.15,
                    "stops": [
                        [
                            10,
                            0.25
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-color": "#fff"
            },
            "metadata": {
                "mapbox:group": "1444850913245.3801"
            },
            "interactive": true
        },
        {
            "id": "tunnel_minor",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "tunnel",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway_link",
                    "street",
                    "street_limited",
                    "service",
                    "driveway",
                    "path"
                ]
            ],
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                },
                "line-dasharray": [
                    0.36,
                    0.18
                ]
            },
            "metadata": {
                "mapbox:group": "1444850900520.0022"
            },
            "interactive": true
        },
        {
            "id": "tunnel_major",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "tunnel",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway",
                    "main"
                ]
            ],
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    0.28,
                    0.14
                ]
            },
            "metadata": {
                "mapbox:group": "1444850900520.0022"
            },
            "interactive": true
        },
        {
            "id": "road-path",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "==",
                "class",
                "path"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-street-low-zoom",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "street",
                    "street_limited"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-service-driveway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "in",
                "class",
                "service",
                "driveway"
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-motorway_link",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "==",
                "class",
                "motorway_link"
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-street_limited",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "street_limited"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "minzoom": 14,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "street"
                ]
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "road-street",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.3
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "road",
            "interactive": true
        },
        {
            "id": "road-main",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "main"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-trunk",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "==",
                    "type",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "id": "road-motorway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road",
            "filter": [
                "==",
                "class",
                "motorway"
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "interactive": true
        },
        {
            "minzoom": 13,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "road-rail",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "road",
            "interactive": true
        },
        {
            "minzoom": 13,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444850892815.3088"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "road-rail-tracks",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "road",
            "interactive": true
        },
        {
            "id": "bridge_minor_case",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "bridge",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway_link",
                    "street",
                    "street_limited",
                    "service",
                    "driveway",
                    "path"
                ]
            ],
            "paint": {
                "line-color": "#eee",
                "line-width": {
                    "base": 1.6,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "interactive": true
        },
        {
            "id": "bridge-path",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "bridge",
            "filter": [
                "==",
                "class",
                "path"
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            15,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "interactive": true
        },
        {
            "minzoom": 11,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "maxzoom": 14.1,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "street",
                    "street_limited"
                ]
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-street-low-zoom",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "minzoom": 10,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ]
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-motorway_link",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "street_limited"
                ]
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-street_limited",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "==",
                "class",
                "street"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-street",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12.5,
                            0.5
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "id": "bridge-main",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "bridge",
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "!=",
                    "type",
                    "trunk"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "interactive": true
        },
        {
            "id": "bridge-trunk",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "bridge",
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "==",
                    "type",
                    "trunk"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            9,
                            1.25
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "interactive": true
        },
        {
            "id": "bridge-motorway",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "bridge",
            "filter": [
                "==",
                "class",
                "motorway"
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            9,
                            1.25
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "interactive": true
        },
        {
            "minzoom": 13,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-rail",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-rail-tracks",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444850885718.7302"
            },
            "filter": [
                "==",
                "class",
                "aerialway"
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "bridge-rail-tracks_copy",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            20,
                            1
                        ]
                    ]
                },
                "line-opacity": 1
            },
            "source-layer": "bridge",
            "interactive": true
        },
        {
            "id": "admin-3-4-boundaries-bg",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "admin",
            "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            12,
                            6
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            0
                        ],
                        [
                            5,
                            0.75
                        ]
                    ]
                },
                "line-color": "#fff"
            },
            "metadata": {
                "mapbox:group": "1444850820682.8682"
            },
            "interactive": true
        },
        {
            "id": "admin-2-boundaries-bg",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "admin",
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    "==",
                    "disputed",
                    2
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            4,
                            0.75
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            3.5
                        ],
                        [
                            10,
                            10
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850820682.8682"
            },
            "interactive": true
        },
        {
            "id": "admin-3-4-boundaries",
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "admin",
            "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#b5b5b5",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            12,
                            2
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            [
                                2,
                                0
                            ]
                        ],
                        [
                            5,
                            [
                                2,
                                2,
                                6,
                                2
                            ]
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850820682.8682"
            },
            "interactive": true
        },
        {
            "minzoom": 1,
            "layout": {
                "visibility": "visible",
                "line-join": "round",
                "line-cap": "round"
            },
            "metadata": {
                "mapbox:group": "1444850820682.8682"
            },
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    "==",
                    "disputed",
                    0
                ]
            ],
            "type": "line",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "admin-2-boundaries",
            "paint": {
                "line-color": "#c0c0c0",
                "line-opacity": 1,
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            },
            "source-layer": "admin",
            "interactive": true
        },
        {
            "id": "interstate-motorway_shields",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road_label",
            "filter": [
                "all",
                [
                    "in",
                    "shield",
                    "us-interstate",
                    "us-interstate-business",
                    "us-interstate-duplex"
                ],
                [
                    "<=",
                    "reflen",
                    6
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            15.95,
                            9
                        ],
                        [
                            16,
                            11
                        ]
                    ]
                },
                "icon-image": "default-4-small",
                "text-max-angle": 38,
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            200
                        ],
                        [
                            15,
                            600
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "none",
                "text-field": "{ref}",
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-color": "#929292",
                "text-halo-color": "#fff",
                "icon-color": "white",
                "icon-halo-width": 1,
                "icon-halo-color": "rgba(0, 0, 0, 1)"
            },
            "metadata": {
                "mapbox:group": "1444850874198.7793"
            },
            "interactive": true
        },
        {
            "minzoom": 12,
            "layout": {
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "visibility": "visible",
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850853666.2222"
            },
            "filter": [
                "==",
                "class",
                "river"
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "waterway-label",
            "paint": {
                "text-color": "#929292"
            },
            "source-layer": "waterway_label",
            "interactive": true
        },
        {
            "minzoom": 12,
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-transform": "none",
                "text-letter-spacing": 0,
                "text-padding": 0,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850808863.985"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "!in",
                    "class",
                    "motorway",
                    "main",
                    "street_limited",
                    "street"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "road-label-sm",
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 2,
                "text-color": "#929292"
            },
            "source-layer": "road_label",
            "interactive": true
        },
        {
            "id": "road-label-med",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road_label",
            "filter": [
                "in",
                "class",
                "street",
                "street_limited"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-transform": "none",
                "text-letter-spacing": 0,
                "text-padding": 0,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 2,
                "text-color": "#929292"
            },
            "metadata": {
                "mapbox:group": "1444850808863.985"
            },
            "interactive": true
        },
        {
            "id": "road-label-large",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "road_label",
            "filter": [
                "in",
                "class",
                "motorway",
                "main"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-transform": "none",
                "text-letter-spacing": 0,
                "text-padding": 0,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            8
                        ],
                        [
                            20,
                            17
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 2,
                "text-color": "#929292"
            },
            "metadata": {
                "mapbox:group": "1444850808863.985"
            },
            "interactive": true
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "poi_label",
            "filter": [
                "all",
                [
                    "in",
                    "maki",
                    "airport",
                    "heliport",
                    "rocket"
                ],
                [
                    "<=",
                    "scalerank",
                    2
                ]
            ],
            "layout": {
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "visibility": "visible",
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            ""
                        ],
                        [
                            13,
                            "{name_en}"
                        ]
                    ]
                },
                "text-max-width": 9,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            },
            "metadata": {
                "mapbox:group": "1444850775955.1606"
            },
            "interactive": true
        },
        {
            "id": "poi-parks-scalerank1",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "poi_label",
            "filter": [
                "all",
                [
                    "==",
                    "maki",
                    "park"
                ],
                [
                    "<=",
                    "scalerank",
                    1
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#4f4f4f",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            },
            "metadata": {
                "mapbox:group": "1444850775955.1606"
            },
            "interactive": true
        },
        {
            "id": "poi-scalerank1",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "poi_label",
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "rail-light",
                    "rail-metro",
                    "rail",
                    "airport",
                    "airfield",
                    "heliport",
                    "rocket",
                    "park",
                    "golf",
                    "cemetary",
                    "zoo",
                    "campsite",
                    "swimming",
                    "dog-park"
                ],
                [
                    "<=",
                    "scalerank",
                    1
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#5a5a5a",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            },
            "metadata": {
                "mapbox:group": "1444850775955.1606"
            },
            "interactive": true
        },
        {
            "id": "water-label",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "water_label",
            "minzoom": 5,
            "layout": {
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-max-width": 7,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#929292"
                        ],
                        [
                            20,
                            "#929292"
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850762048.5845"
            },
            "interactive": true
        },
        {
            "minzoom": 12,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 7,
                "text-letter-spacing": 0.1,
                "text-transform": "uppercase",
                "text-size": {
                    "stops": [
                        [
                            12,
                            10
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "type",
                    "suburb",
                    "neighbourhood"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_neighborhood",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0
                        ],
                        [
                            12,
                            0.66
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "minzoom": 8,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 15,
                "text-size": {
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            12,
                            13
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "type",
                    "town",
                    "village",
                    "hamlet"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_other",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "top"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-size": {
                    "stops": [
                        [
                            6,
                            11
                        ],
                        [
                            14,
                            19
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    ">",
                    "scalerank",
                    4
                ],
                [
                    "in",
                    "ldir",
                    "S",
                    "E",
                    "SE",
                    "SW"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_small_s",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "bottom"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-size": {
                    "stops": [
                        [
                            6,
                            11
                        ],
                        [
                            14,
                            19
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    ">",
                    "scalerank",
                    4
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "W",
                    "NW",
                    "NE"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_small_n",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "top"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-size": {
                    "stops": [
                        [
                            5,
                            11
                        ],
                        [
                            12,
                            19
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "<=",
                    "scalerank",
                    4
                ],
                [
                    ">",
                    "scalerank",
                    1
                ],
                [
                    "in",
                    "ldir",
                    "S",
                    "E",
                    "SE",
                    "SW"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_medium_s",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "bottom"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-size": {
                    "stops": [
                        [
                            5,
                            11
                        ],
                        [
                            12,
                            19
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "<=",
                    "scalerank",
                    4
                ],
                [
                    ">",
                    "scalerank",
                    1
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "W",
                    "NW",
                    "NE"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_medium_n",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 15,
                "text-transform": "none",
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "top"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                0.1
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "text-size": {
                    "stops": [
                        [
                            4,
                            11
                        ],
                        [
                            10,
                            20
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "<=",
                    "scalerank",
                    1
                ],
                [
                    "in",
                    "ldir",
                    "S",
                    "SE",
                    "SW",
                    "E"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_large_s",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 5,
                "text-transform": "none",
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "bottom"
                        ],
                        [
                            6,
                            "center"
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                0,
                                -0.2
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "symbol-avoid-edges": false,
                "text-size": {
                    "stops": [
                        [
                            4,
                            11
                        ],
                        [
                            10,
                            20
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850752066.192"
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    1
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "NE",
                    "NW",
                    "W"
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "place_label_city_large_n",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0
            },
            "source-layer": "place_label",
            "interactive": true
        },
        {
            "id": "marine_label_point_other",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "labelrank",
                    4,
                    5,
                    6
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "none",
                "symbol-placement": "point",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0.1,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666"
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_point_3",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "labelrank",
                    3
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "visible",
                "symbol-placement": "point",
                "text-field": "{name_en}",
                "text-line-height": 1.3,
                "text-letter-spacing": 0.1,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            13
                        ],
                        [
                            5,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_point_2",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "labelrank",
                    2
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "visible",
                "symbol-placement": "point",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            14
                        ],
                        [
                            5,
                            24
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_point_1",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-max-width": 4,
                "visibility": "visible",
                "symbol-placement": "point",
                "text-field": "{name_en}",
                "text-line-height": 1.5,
                "text-letter-spacing": 0.25,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            12
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_line_other",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "labelrank",
                    4,
                    5,
                    6
                ]
            ],
            "layout": {
                "text-max-width": 15,
                "visibility": "visible",
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_line_3",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "labelrank",
                    3
                ]
            ],
            "layout": {
                "text-max-width": 15,
                "visibility": "visible",
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            13
                        ],
                        [
                            5,
                            18
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_line_2",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "labelrank",
                    2
                ]
            ],
            "layout": {
                "text-max-width": 15,
                "visibility": "visible",
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            14
                        ],
                        [
                            5,
                            24
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "id": "marine_label_line_1",
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "source-layer": "marine_label",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-max-width": 15,
                "visibility": "visible",
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-line-height": 1.2,
                "text-letter-spacing": 0.4,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            25
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#666",
                "text-opacity": 0.25
            },
            "metadata": {
                "mapbox:group": "1444850654682.7075"
            },
            "interactive": true
        },
        {
            "minzoom": 3,
            "layout": {
                "text-transform": "uppercase",
                "visibility": "visible",
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            4,
                            "{name_en}"
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            9
                        ],
                        [
                            7,
                            18
                        ]
                    ]
                }
            },
            "metadata": {
                "mapbox:group": "1444850621704.1523"
            },
            "maxzoom": 7,
            "filter": [
                ">=",
                "area",
                80000
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "state-label-lg",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#929292"
                        ],
                        [
                            20,
                            "#929292"
                        ]
                    ]
                }
            },
            "source-layer": "state_label",
            "interactive": true
        },
        {
            "minzoom": 1,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 7,
                "text-size": {
                    "stops": [
                        [
                            3,
                            8
                        ],
                        [
                            9,
                            18
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850621704.1523"
            },
            "maxzoom": 10,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "country-label-sm",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#444"
                        ],
                        [
                            10,
                            "#888"
                        ]
                    ]
                },
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "country_label",
            "interactive": true
        },
        {
            "minzoom": 1,
            "layout": {
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{code}"
                        ],
                        [
                            2,
                            "{name_en}"
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 7,
                "text-size": {
                    "stops": [
                        [
                            2,
                            8
                        ],
                        [
                            7,
                            18
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850621704.1523"
            },
            "maxzoom": 8,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "country-label-md",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#444"
                        ],
                        [
                            10,
                            "#888"
                        ]
                    ]
                },
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "country_label",
            "interactive": true
        },
        {
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 6,
                "text-size": {
                    "stops": [
                        [
                            1,
                            9
                        ],
                        [
                            5,
                            18
                        ]
                    ],
                    "base": 0.9
                }
            },
            "metadata": {
                "mapbox:group": "1444850621704.1523"
            },
            "maxzoom": 12,
            "filter": [
                "in",
                "scalerank",
                1,
                2
            ],
            "type": "symbol",
            "source": "mapbox://mapbox.mapbox-streets-v6",
            "id": "country-label-lg",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#444"
                        ],
                        [
                            10,
                            "#888"
                        ]
                    ]
                },
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "country_label",
            "interactive": true
        }
    ],
    "created": "2016-02-04T12:29:44.712Z",
    "id": "cik88q3qy00k99um6q4jyofwh",
    "modified": "2016-02-04T12:29:44.712Z",
    "owner": "mateogianolio",
    "draft": false
}