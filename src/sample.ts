const container = {
    color: "#17212b",
    opacity: 1.0,
    xRange: 1000,
    yRange: 1000,
}

const scene = [
    {
        x: [
            296.35681383199943,
            -207.66437175244175,
            -269.61168711366287,
            116.2704403094057,
        ],
        y: [259.592586529485, 236.58970541415937, 396.7555066017456, 400.55422176003225],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-0",
    },
    {
        x: [
            -207.66437175244175,
            -197.71371554533502,
            -252.3199634947169,
            -269.61168711366287,
        ],
        y: [
            236.58970541415937,
            -189.62049644472256,
            42.09995815564638,
            396.7555066017456,
        ],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-1",
    },
    {
        x: [
            -197.71371554533502,
            213.82772345063952,
            76.90144288688406,
            -252.3199634947169,
        ],
        y: [-189.62049644472256, -131.6587644174212, 71.0924005035601, 42.09995815564638],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-2",
    },
    {
        x: [213.82772345063952, 296.35681383199943, 116.2704403094057, 76.90144288688406],
        y: [-131.6587644174212, 259.592586529485, 400.55422176003225, 71.0924005035601],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-3",
    },
    {
        x: [
            213.82772345063952,
            -197.71371554533502,
            -207.66437175244175,
            296.35681383199943,
        ],
        y: [
            -131.6587644174212,
            -189.62049644472256,
            236.58970541415937,
            259.592586529485,
        ],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-4",
    },
    {
        x: [
            116.2704403094057,
            -269.61168711366287,
            -252.3199634947169,
            76.90144288688406,
        ],
        y: [400.55422176003225, 396.7555066017456, 42.09995815564638, 71.0924005035601],
        borderColor: "#607D8B",
        borderOpacity: 1,
        borderSize: 1,
        fillColor: "#607D8B",
        fillOpacity: 0,
        type: "polygon",
        id: "plane-5",
    },
    {
        x: [
            213.82772345063952,
            -197.71371554533502,
            -252.3199634947169,
            76.90144288688406,
        ],
        y: [-131.6587644174212, -189.62049644472256, 42.09995815564638, 71.0924005035601],
        fillColor: "#0e2845",
        fillOpacity: 0.5,
        borderColor: "#0e2845",
        borderOpacity: 1,
        borderSize: 1,
        type: "polygon",
        id: "xy-plane",
    },

    {
        x0: [76.90144288688406],
        y0: [71.0924005035601],
        x1: [-252.3199634947169],
        y1: [42.09995815564638],
        color: "#F44336",
        opacity: 1,
        size: 2,
        type: "lines",
        id: "x-edge",
    },
    {
        x0: [76.90144288688406],
        y0: [71.0924005035601],
        x1: [213.82772345063952],
        y1: [-131.6587644174212],
        color: "#2196F3",
        opacity: 1,
        size: 2,
        type: "lines",
        id: "x-edge",
    },
    {
        x0: [76.90144288688406],
        y0: [71.0924005035601],
        x1: [116.2704403094057],
        y1: [400.55422176003225],
        color: "#8BC34A",
        opacity: 1,
        size: 2,
        type: "lines",
        id: "x-edge",
    },
    {
        x: [76.90144288688406],
        y: [71.0924005035601],
        color: "#FFEB3B",
        opacity: 1,
        size: 3,
        type: "points",
        id: "point-edge",
    },
    {
        x0: [
            17.959360790646787,
            137.34719358659112,
            137.34719358659112,
            -81.5110240942587,
            76.90144288688406,
            213.82772345063952,
            -197.71371554533502,
            -252.3199634947169,
        ],
        y0: [
            -159.24497682126088,
            -18.41157432457717,
            -18.41157432457717,
            57.14201870238984,
            71.0924005035601,
            -131.6587644174212,
            -189.62049644472256,
            42.09995815564638,
        ],
        x1: [
            -81.5110240942587,
            -228.49626847180593,
            193.7546953252549,
            -68.13374068006515,
            213.82772345063952,
            -197.71371554533502,
            -252.3199634947169,
            76.90144288688406,
        ],
        y1: [
            57.14201870238984,
            -58.99538621019858,
            339.9038400681353,
            398.73890327857237,
            -131.6587644174212,
            -189.62049644472256,
            42.09995815564638,
            71.0924005035601,
        ],
        color: "#079992",
        opacity: 0.5,
        size: 1,
        type: "lines",
        id: "cross-section-lines",
    },
    {
        x0: [-37.84615384615385],
        y0: [-37.84615384615385],
        x1: [-83.98226510150009],
        y1: [-42.96413313102678],
        color: "#E91E63",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-worldAxes",
    },
    {
        x0: [-37.84615384615385],
        y0: [-37.84615384615385],
        x1: [-25.2120744090166],
        y1: [-65.33021851296428],
        color: "#03A9F4",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-worldAxes",
    },
    {
        x0: [-37.84615384615385],
        y0: [-37.84615384615385],
        x1: [-35.283440982007576],
        y1: [1.7697494324139984],
        color: "#CDDC39",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-worldAxes",
    },
    {
        x: [-37.84615384615385],
        y: [-37.84615384615385],
        color: "#8BC34A",
        opacity: 1,
        size: 3,
        type: "points",
        id: "point-worldAxes",
    },
    {
        x0: [-26.894063604896623],
        y0: [131.45761551715015],
        x1: [-77.15963513562036],
        y1: [127.84149818259478],
        color: "#9C27B0",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-axes",
    },
    {
        x0: [-26.894063604896623],
        y0: [131.45761551715015],
        x1: [-12.690708113422748],
        y1: [107.21173135076423],
        color: "#00BCD4",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-axes",
    },
    {
        x0: [-26.894063604896623],
        y0: [131.45761551715015],
        x1: [-23.8365862095413],
        y1: [178.72187616273558],
        color: "#FFEB3B",
        opacity: 1,
        size: 1,
        type: "lines",
        id: "x-axes",
    },
    {
        x: [-26.894063604896623],
        y: [131.45761551715015],
        color: "#CDDC39",
        opacity: 1,
        size: 3,
        type: "points",
        id: "point-axes",
    },
]

const data2d = [
    {
        borderColor: "#3c6382",
        borderOpacity: 0,
        borderSize: 0,
        fillColor: "#3c6382",
        fillOpacity: 0.2,
        id: "support-polygon",
        type: "polygon",
        x: [
            -131.11402715982658,
            -95.4084695499833,
            58.42971436173703,
            51.56270326714139,
            12.57720390982729,
            -128.1314823631709,
        ],
        y: [
            -48.1925621275457,
            -92.49440475798801,
            -73.73343236948833,
            -27.927834635039517,
            10.024545460731707,
            -4.19187690871271,
        ],
        z: [0, 0, 0, 0, 0, 0],
    },
    {
        color: "#EE5A24",
        id: "rightMiddleLegpoints0",
        opacity: 1,
        size: 5,
        type: "points",
        x: [
            -67.22200572203558,
            -98.7444741785775,
            -130.7270086855552,
            -131.11402715982658,
        ],
        y: [
            -14.881766393214642,
            -18.188647431342478,
            -21.543791939083103,
            -48.1925621275457,
        ],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "rightFrontLegpoints1",
        opacity: 1,
        size: 5,
        type: "points",
        x: [
            -59.327706387582026,
            -76.53264021487685,
            -94.46183100492338,
            -95.4084695499833,
        ],
        y: [
            -32.923643855480016,
            -48.73570882646304,
            -65.21339670920344,
            -92.49440475798801,
        ],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leftFrontLegpoints2",
        opacity: 1,
        size: 5,
        type: "points",
        x: [3.5522147373603405, 32.28740358832771, 61.589181876691725, 58.42971436173703],
        y: [
            -26.054002514509424,
            -36.499406142797696,
            -47.15076823531696,
            -73.73343236948833,
        ],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leftMiddleLegpoints3",
        opacity: 1,
        size: 5,
        type: "points",
        x: [
            -5.518121990288623,
            24.682176765459893,
            54.460195700057895,
            51.56270326714139,
        ],
        y: [
            -8.408688202251708,
            -5.240510068015064,
            -2.1166314192477116,
            -27.927834635039517,
        ],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leftBackLegpoints4",
        opacity: 1,
        size: 5,
        type: "points",
        x: [
            -14.224336965366408,
            0.5775498635988878,
            14.834638843614934,
            12.57720390982729,
        ],
        y: [8.528268419991793, 22.131831129511216, 35.2347014754267, 10.024545460731707],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "rightBackLegpoints5",
        opacity: 1,
        size: 5,
        type: "points",
        x: [-74.79492848879, -101.5061404071994, -127.72389079566221, -128.1314823631709],
        y: [2.425627056218128, 12.135303625096418, 21.665604137598066, -4.19187690871271],
        z: [100, 100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-0",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [-67.22200572203558, -98.7444741785775, -130.7270086855552],
        x1: [-98.7444741785775, -130.7270086855552, -131.11402715982658],
        y0: [-14.881766393214642, -18.188647431342478, -21.543791939083103],
        y1: [-18.188647431342478, -21.543791939083103, -48.1925621275457],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-1",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [-59.327706387582026, -76.5324718175639, -94.46147988349564],
        x1: [-76.5324718175639, -94.46147988349564, -95.40812328986787],
        y0: [-32.923643855480016, -48.73555406217971, -65.21307401369737],
        y1: [-48.73555406217971, -65.21307401369737, -92.49407602712587],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-2",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [3.5522147373603405, 32.28740358832771, 61.589181876691725],
        x1: [32.287125326284965, 61.58861432523986, 58.4291555680313],
        y0: [-26.054002514509424, -36.499406142797696, -47.15076823531696],
        y1: [-36.499304992971744, -47.15056192715502, -73.7332240765305],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-3",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [-5.518121990288623, 24.682176765459893, 54.460195700057895],
        x1: [24.682176765459893, 54.460195700057895, 51.56270326714139],
        y0: [-8.408688202251708, -5.240510068015064, -2.1166314192477063],
        y1: [-5.240510068015064, -2.1166314192477063, -27.927834635039513],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-4",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [-14.224336965366408, 0.5775498635988878, 14.834638843614934],
        x1: [0.5774105740924796, 14.834370423580923, 12.576938210897962],
        y0: [8.528268419991793, 22.131831129511216, 35.2347014754267],
        y1: [22.131703116538468, 35.23445478601425, 10.024293212684023],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        color: "#EE5A24",
        id: "leg-5",
        opacity: 1,
        size: 5,
        type: "lines",
        x0: [-74.79492848879, -101.5061404071994, -127.72389079566221],
        x1: [-101.2401571676216, -127.72339258160441, -128.1199525541047],
        y0: [2.425627056218128, 12.135303625096418, 21.665604137598066],
        y1: [12.03861721352769, 21.665423033970928, -4.2218469684337725],
        z0: [100, 100, 100],
        z1: [100, 100, 0],
    },
    {
        borderColor: "#FC427B",
        borderOpacity: 1,
        borderSize: 5,
        fillColor: "#ff6348",
        fillOpacity: 0.3,
        id: "body-hexagon",
        type: "polygon",
        x: [
            -67.22200572203558,
            -59.327706387582026,
            3.5522147373603405,
            -5.518121990288623,
            -14.224336965366408,
            -74.79492848879,
            -67.22200572203558,
        ],
        y: [
            -14.881766393214642,
            -32.923643855480016,
            -26.054002514509424,
            -8.408688202251708,
            8.528268419991793,
            2.425627056218128,
            -14.881766393214642,
        ],
        z: [100, 100, 100, 100, 100, 100, 100],
    },
    {
        color: "#FC427B",
        id: "body-points",
        opacity: 1,
        size: 8,
        type: "points",
        x: [
            -67.22200572203558,
            -59.327706387582026,
            3.5522147373603405,
            -5.518121990288623,
            -14.224336965366408,
            -74.79492848879,
            -67.22200572203558,
        ],
        y: [
            -14.881766393214642,
            -32.923643855480016,
            -26.054002514509424,
            -8.408688202251708,
            8.528268419991793,
            2.425627056218128,
            -14.881766393214642,
        ],
        z: [100, 100, 100, 100, 100, 100, 100],
    },
    {
        color: "#32ff7e",
        id: "centerOfGravity",
        opacity: 1,
        size: 14,
        type: "points",
        x: [-36.14974718894332],
        y: [-11.622114862543851],
        z: [100],
    },
    {
        color: "#FC427B",
        id: "head",
        opacity: 1,
        size: 14,
        type: "points",
        x: [-27.6585008429544],
        y: [-29.46377813438941],
        z: [100],
    },
]

const bareMinimumProps = { data: [...scene, ...data2d], container }
export default bareMinimumProps
