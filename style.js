window.mapStyle = {
    "version": 8,
    "name": "Dark",
    "transition": {
      "duration": 0,
      "delay": 0
    },
    "metadata": {
        "mapbox:groups": {
            "1444855829844.9736": {
                "name": "Aeroways",
                "collapsed": true
            },
            "1444855878987.3848": {
                "name": "Landuses",
                "collapsed": true
            },
            "1444855808224.0002": {
                "name": "Bridges",
                "collapsed": true
            },
            "1444855728283.4546": {
                "name": "Place labels",
                "collapsed": true
            },
            "1444855743302.092": {
                "name": "POI labels",
                "collapsed": true
            },
            "1444855823615.3472": {
                "name": "Tunnels",
                "collapsed": true
            },
            "1444855712732.9983": {
                "name": "State labels",
                "collapsed": true
            },
            "1444855871001.7312": {
                "name": "Hillshades",
                "collapsed": true
            },
            "1444855787203.2078": {
                "name": "Waterway labels",
                "collapsed": true
            },
            "1444855767413.334": {
                "name": "Road labels",
                "collapsed": true
            },
            "1444855862406.4956": {
                "name": "Buildings",
                "collapsed": true
            },
            "1444855720231.1272": {
                "name": "Marine labels",
                "collapsed": true
            },
            "1444855816509.7878": {
                "name": "Roads",
                "collapsed": true
            },
            "1444855707128.6584": {
                "name": "Country labels",
                "collapsed": true
            },
            "1444855886145.2253": {
                "name": "Landcovers",
                "collapsed": true
            },
            "1444855797854.0842": {
                "name": "Admin boundaries",
                "collapsed": true
            },
            "1444855733376.9668": {
                "name": "Water labels",
                "collapsed": true
            },
            "1444855857485.0151": {
                "name": "Water",
                "collapsed": true
            }
        }
    },
    "center": [
        -17.87934832603912,
        -1.1368683772161603e-13
    ],
    "zoom": 1.4008793229149985,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "mapbox": {
            "url": "mapbox://mapbox.mapbox-streets-v6",
            "type": "vector"
        },
        "mapbox://mapbox.mapbox-terrain-v2": {
            "url": "mapbox://mapbox.mapbox-terrain-v2",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/mateogianolio/cikbappzb006hb8m9mp9ablwi",
    "glyphs": "mapbox://fonts/mateogianolio/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#111"
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
            "paint": {
                "fill-color": "#000",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855886145.2253"
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
            "paint": {
                "fill-color": "#131313",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855886145.2253"
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
            "paint": {
                "fill-color": "#1a1a1a",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855886145.2253"
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
            "paint": {
                "fill-color": "#1c1c1c",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855886145.2253"
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
            "paint": {
                "fill-color": "#232323",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855886145.2253"
            },
            "interactive": true
        },
        {
            "id": "landuse_industrial",
            "type": "fill",
            "source": "mapbox",
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
            "paint": {
                "fill-color": "#000",
                "fill-opacity": 0.5
            },
            "metadata": {
                "mapbox:group": "1444855878987.3848"
            },
            "interactive": true
        },
        {
            "id": "landuse_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "park"
            ],
            "paint": {
                "fill-color": "#1b1b1b"
            },
            "metadata": {
                "mapbox:group": "1444855878987.3848"
            },
            "interactive": true
        },
        {
            "id": "landuse_wood",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "wood"
            ],
            "paint": {
                "fill-color": "#1f1f1f"
            },
            "metadata": {
                "mapbox:group": "1444855878987.3848"
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
            "paint": {
                "fill-color": "#000",
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
                "mapbox:group": "1444855871001.7312"
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
            "paint": {
                "fill-color": "#000",
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
                "mapbox:group": "1444855871001.7312"
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
            "paint": {
                "fill-color": "#999999",
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
                "mapbox:group": "1444855871001.7312"
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
            "paint": {
                "fill-color": "#999999",
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
                "mapbox:group": "1444855871001.7312"
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
                "mapbox:group": "1444855871001.7312"
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
                "mapbox:group": "1444855871001.7312"
            },
            "interactive": true
        },
        {
            "id": "building",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "building",
            "minzoom": 15,
            "paint": {
                "fill-outline-color": "#444444",
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
                "fill-color": "#383838"
            },
            "metadata": {
                "mapbox:group": "1444855862406.4956"
            },
            "interactive": true
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "mapbox",
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
                "line-color": "#2c2c2c",
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
                "mapbox:group": "1444855857485.0151"
            },
            "interactive": true
        },
        {
            "id": "waterway_stream",
            "type": "line",
            "source": "mapbox",
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
                "line-color": "#2c2c2c",
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
                "mapbox:group": "1444855857485.0151"
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "water",
            "paint": {
                "fill-color": "#2c2c2c"
            },
            "metadata": {
                "mapbox:group": "1444855857485.0151"
            },
            "interactive": true
        },
        {
            "interactive": true,
            "layout": {
                "line-join": "miter",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855829844.9736"
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
                    "type",
                    "runway"
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "aeroway_runway",
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
                "line-color": "#000",
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
            "source-layer": "aeroway"
        },
        {
            "interactive": true,
            "layout": {
                "line-join": "miter"
            },
            "metadata": {
                "mapbox:group": "1444855829844.9736"
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
                    "type",
                    "taxiway"
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "aeroway_taxiway",
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
                "line-color": "#3c3c3c"
            },
            "source-layer": "aeroway"
        },
        {
            "id": "tunnel_minor",
            "type": "line",
            "source": "mapbox",
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
                "line-color": "#484848",
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
                "mapbox:group": "1444855823615.3472"
            },
            "interactive": true
        },
        {
            "id": "tunnel_major",
            "type": "line",
            "source": "mapbox",
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
                "line-color": "#484848",
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
                "mapbox:group": "1444855823615.3472"
            },
            "interactive": true
        },
        {
            "id": "road-path",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "filter": [
                "==",
                "class",
                "path"
            ],
            "paint": {
                "line-color": "#484848",
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
                "mapbox:group": "1444855816509.7878"
            },
            "interactive": true
        },
        {
            "interactive": true,
            "minzoom": 11,
            "metadata": {
                "mapbox:group": "1444855816509.7878"
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
            "source": "mapbox",
            "id": "road-street-low-zoom",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
            "filter": [
                "in",
                "class",
                "service",
                "driveway"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-service-driveway",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
            "filter": [
                "==",
                "class",
                "motorway_link"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-motorway_link",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
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
            "source": "mapbox",
            "id": "road-street_limited",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "minzoom": 14,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
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
            "source": "mapbox",
            "id": "road-street",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
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
                    "main"
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-main",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
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
            "type": "line",
            "source": "mapbox",
            "id": "road-trunk",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
            "filter": [
                "==",
                "class",
                "motorway"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-motorway",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "minzoom": 13,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-rail",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "interactive": true,
            "minzoom": 13,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter",
                "visibility": "visible"
            },
            "metadata": {
                "mapbox:group": "1444855816509.7878"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road-rail-tracks",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "road"
        },
        {
            "id": "bridge_minor_case",
            "type": "line",
            "source": "mapbox",
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
                "line-color": "#111",
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
                "mapbox:group": "1444855808224.0002"
            },
            "interactive": true
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "==",
                "class",
                "path"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-path",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 11,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
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
            "source": "mapbox",
            "id": "bridge-street-low-zoom",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 10,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
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
            "source": "mapbox",
            "id": "bridge-motorway_link",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
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
            "source": "mapbox",
            "id": "bridge-street_limited",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "==",
                "class",
                "street"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-street",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
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
            "type": "line",
            "source": "mapbox",
            "id": "bridge-main",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
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
            "type": "line",
            "source": "mapbox",
            "id": "bridge-trunk",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "==",
                "class",
                "motorway"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-motorway",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 13,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-rail",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-rail-tracks",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "minzoom": 14,
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-round-limit": 2
            },
            "metadata": {
                "mapbox:group": "1444855808224.0002"
            },
            "filter": [
                "==",
                "class",
                "aerialway"
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge-rail-tracks_copy",
            "paint": {
                "line-color": "#484848",
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
            "source-layer": "bridge"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "bevel"
            },
            "metadata": {
                "mapbox:group": "1444855797854.0842"
            },
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
            "type": "line",
            "source": "mapbox",
            "id": "admin-3-4-boundaries-bg",
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
                "line-opacity": 0.2,
                "line-color": "#000"
            },
            "source-layer": "admin"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "miter"
            },
            "metadata": {
                "mapbox:group": "1444855797854.0842"
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
                    2
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "admin-2-boundaries-bg",
            "paint": {
                "line-color": "#000000",
                "line-opacity": 0.2,
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
            "source-layer": "admin"
        },
        {
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "miter"
            },
            "metadata": {
                "mapbox:group": "1444855797854.0842"
            },
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
            "type": "line",
            "source": "mapbox",
            "id": "admin-3-4-boundaries",
            "paint": {
                "line-color": "#797979",
                "line-opacity": 0.2,
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
            "source-layer": "admin"
        },
        {
            "interactive": true,
            "minzoom": 1,
            "layout": {
                "visibility": "visible",
                "line-join": "round",
                "line-cap": "round"
            },
            "metadata": {
                "mapbox:group": "1444855797854.0842"
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
            "source": "mapbox",
            "id": "admin-2-boundaries",
            "paint": {
                "line-color": "#5f5f5f",
                "line-opacity": 0.2,
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
            "source-layer": "admin"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855787203.2078"
            },
            "filter": [
                "==",
                "class",
                "river"
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "waterway-label",
            "paint": {
                "text-color": "#929292",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "waterway_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855767413.334"
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
            "source": "mapbox",
            "id": "road-label-sm",
            "paint": {
                "text-halo-color": "#000",
                "text-halo-width": 2,
                "text-color": "#929292",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "road_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855767413.334"
            },
            "filter": [
                "in",
                "class",
                "street",
                "street_limited"
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "road-label-med",
            "paint": {
                "text-halo-color": "#000",
                "text-halo-width": 2,
                "text-color": "#929292",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "road_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855767413.334"
            },
            "filter": [
                "in",
                "class",
                "motorway",
                "main"
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "road-label-large",
            "paint": {
                "text-halo-color": "#000",
                "text-halo-width": 2,
                "text-color": "#929292",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "road_label"
        },
        {
            "interactive": true,
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
                            10,
                            "{name_en}"
                        ],
                        [
                            13,
                            ""
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
            "metadata": {
                "mapbox:group": "1444855743302.092"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "airport-label",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "poi_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855743302.092"
            },
            "filter": [
                "all",
                [
                    "==",
                    "scalerank",
                    1
                ],
                [
                    "==",
                    "maki",
                    "park"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "poi-parks-scalerank1",
            "paint": {
                "text-color": "#c2c2c2",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "poi_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855743302.092"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "poi-scalerank1",
            "paint": {
                "text-color": "#b7b8b7",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "poi_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855733376.9668"
            },
            "type": "symbol",
            "source": "mapbox",
            "id": "water-label",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#969696"
                        ],
                        [
                            20,
                            "#969696"
                        ]
                    ]
                },
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "water_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_neighborhood",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
            "minzoom": 8,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_other",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_small_s",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_small_n",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_medium_s",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_medium_n",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_large_s",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855728283.4546"
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
            "source": "mapbox",
            "id": "place_label_city_large_n",
            "paint": {
                "text-color": "#999999",
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
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
                    "labelrank",
                    4,
                    5,
                    6
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_point_other",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_point_3",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_point_2",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_point_1",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
            },
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
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_line_other",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
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
                    "labelrank",
                    3
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_line_3",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
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
                    "labelrank",
                    2
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_line_2",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
            "metadata": {
                "mapbox:group": "1444855720231.1272"
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
                    "labelrank",
                    1
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "marine_label_line_1",
            "paint": {
                "text-color": "#999999",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "marine_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855712732.9983"
            },
            "maxzoom": 7,
            "filter": [
                ">=",
                "area",
                80000
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "state-label-lg",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#969696"
                        ],
                        [
                            20,
                            "#969696"
                        ]
                    ]
                },
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "state_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855707128.6584"
            },
            "maxzoom": 10,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "type": "symbol",
            "source": "mapbox",
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "country_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855707128.6584"
            },
            "maxzoom": 8,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "type": "symbol",
            "source": "mapbox",
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "country_label"
        },
        {
            "interactive": true,
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
                "mapbox:group": "1444855707128.6584"
            },
            "maxzoom": 12,
            "filter": [
                "in",
                "scalerank",
                1,
                2
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "country-label-lg",
            "paint": {
                "text-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#666"
                        ],
                        [
                            10,
                            "#999"
                        ]
                    ]
                },
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "source-layer": "country_label"
        }
    ],
    "created": "2016-02-06T15:48:44.633Z",
    "id": "cikbappzb006hb8m9mp9ablwi",
    "modified": "2016-02-06T15:51:55.711Z",
    "owner": "mateogianolio",
    "draft": false
}
