export const patterns = [
    {
        title: "Accelerate",
        pattern: [
            "[4] {4} [2] {4} [1] {4} [1] {8}"
        ],
    },
    {
        title: "5:4",
        pattern: [
            "[4] {4}",
            "[4] {5}",
        ],
        instrument: "marimba"
    },
    {
        title: "3:4",
        pattern: [
            "[4] {3}",
            "[4] {4}",
        ],
        instrument: "knock"
    },
    {
        title: "3:5",
        pattern: [
            "[4] {3}",
            "[4] {5}",
        ]
    },
    {
        title: "Boots and cats",
        pattern: [
            "[4] {4}",
            "[4] {4 (1){0} (3){0}}",
            "[4] {8}",
        ]
    },
    {
        title: "Boots and cowbell",
        pattern: [
            "[4] {4}",
            "[4] {2}",
            "[4] {8}",
            "[4] {3}",
        ]
    },
    {
        title: "Back and forth",
        pattern: [
`[4] {2
  (1) {3}
}
`,
`[4] {2
  (2) {3}
}
`,
        ]
    },
    {
        title: "Leave Some Space",
        pattern: [
`[15]{15}

[]{4
	(2){0}
}
`,
`[16]{4
	(4){2}	
}
`,
`[3]
[3, 5/4]
`,
`[8]{5
	(1,4){0}
}

[8]{5
	(1,4){0}
	(5){3
		(2){1}_ 
		(3){2}
	}
}
`,
        ]
    }
]