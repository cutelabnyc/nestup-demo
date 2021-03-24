export const patterns = [
    {
        title: "Stepping Out",
        instrument: "basic",
        pattern: [
`[5] {2}
[3] {4}
[5] {2}
[3] {6
 1:2 {3}
 5:2 {1}
}`,
`[4] {4
  1 [']
  3 [']
}`,
`[4] {8
  2 {3}
  6 {5}
}
[4] {8
  2 {2}
  4:2 {3}
  6:3 [[1] [1] {2} [1]]
}`,
`[8] {2}`
        ]
    },
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
        instrument: "basic",
        pattern: [
            "[4] {4}",
            "[4] {4 1 ['] 3 [']}",
            "[4] {8}",
        ]
    },
    {
        title: "Boots and cowbell",
        instrument: "basic",
        pattern: [
            "[4] {4}",
            "['4] {4 2 [] 4 []}",
            "[4] {8}",
            "[4] {3}",
        ]
    },
    {
        title: "Back and forth",
        pattern: [
`[4] {2
  1 {3}
}
`,
`[4] {2
  2 {3}
}
`,
        ]
    },
    {
        title: "Leave Some Space",
        instrument: "glitchyNoisy",
        pattern: [
`[15]{15}

[]{4
	2 [']
}
`,
`[16]{4
	4 {2}	
}
`,
`[3]
[3, 5/4]
`,
`[8]{5
	1:4 [']
}

[8]{5
	1:4 [']
	5 {3
		2 {1}_ 
		3 {2}
	}
}
`,
        ]
    },
    {
        title: "Slouching Towards Five",
        instrument: "808-A",
        pattern: [
`[5 {5
    3:2 {1}
    5 {2}
}]`,
`[5 [2] [3]]`,
`[10 [3] {2} [2]]`,
`[5] {5
	2 {4}
	3 {3}
	4 {2}
	5 {1}
}
[5] {5
	2 {4}
	3 {3}
	4:2 {3}
}`
        ]
    },
    {
        title: "Just a Phase",
        instrument: "knock",
        pattern: [
            `[10] {16}`,
            `[10] {17}`,
            `[10] {18}`,
            `[10] {19}`
        ]
    },
    {
        title: "Shuffle Steps",
        instrument: "House-A",
        pattern: [
`[6] {6
 2 {4}
}
[6] {6
 4 {4}
}`,
`[4] [3]`,
`[6] {4}`,
`[5] {5
 1 {2}
 3 {3}
}
[6] {6
 1 {2}
 3:3 {5}
}`
        ]
    },
    {
        title: "Hardware Store March",
        instrument: "House-B",
        pattern: [
`[4] {2}
[4] {4
 2 {3}
}`,
`[6] {2}
[4] {1}`,
`[8] {2}`,
`[4] {12
 1 {3}
 5:2 {3}
 9:2 {4}
}`
        ]
    },
    {
        title: "Software Store March",
        instrument: "House-A",
        pattern: [
`[4] {8
 2:2 {1}
 5:2 {1}
}`,
`[5] {2}`,
`[4] {2
 1 [']
}
[4] {2
 1 [']
 2 {2}
}`,
`[4] {16
 2 {3}
 5:2 {3}
 12:4 {1}
}`
        ]
    },
    {
        title: "Blue Tigers",
        instrument: "Hard-A",
        pattern: [
`[4]  {4 > 1/2
 3 [']
}
[4]  {4
 2 [']
 4 {4 2 [']}
}`,
`[4] {2 > 1/2}`,
`['8] {4 2 {2}}
['8] {4 1 4}`,
`[8] {8
 2:3 {6
 	3 [']
 }
 5 [']
 7 {4}
}`
        ]
    },
    {
        title: "Red Tigers",
        instrument: "Hard-B",
        pattern: [
`[6] {5
 2 ['] 
 4 {4
  4[']
 }
 5 [']
}`,
`[6] {2 > 1/2}`,
`['6] {5
 2 {2}
 5
}`,
`[6] {10
 1:2 {3}
 5 {3}
 9:2 {3}
}`
        ]
    },
    {
        title: "$15 Minimum Wage",
        instrument: "Hard-B",
        pattern: [
`[4] {4}`,
`['4] {4 4}
['4] {4 4 {2 2 {2}}}
['4] {4 4}
['4] {4 4 {3}}`,
`['4] {16
 1:2 7:2 {3} 11 13:4 {3}
}`,
`[4] {6
 3 {3}
 4:3 {4}
}`
        ]
    },
]