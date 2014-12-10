TexMaxShader = {

    uniforms: {

        "tRunning": { type: "t", value: null },
        "tNew": { type: "t", value: null },

    },

    vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

    ].join("\n"),

    fragmentShader: [

		"uniform sampler2D tRunning;",
        "uniform sampler2D tNew;",

		"varying vec2 vUv;",

		"void main() {",

            "vec4 rCol = texture2D( tRunning, vUv );",
            "vec4 nCol = texture2D( tNew, vUv );",
            "if ( nCol.r > nCol.r ) { ",
            "rCol = nCol;",
            "}",
			"gl_FragColor = vec4(1, 1, 1, 1);",

		"}"

    ].join("\n")

};
