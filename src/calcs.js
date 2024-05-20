const {
	tilt,
	bevelRadius,
	beamWidth,
	coverageHeight,
	coverageWidth,
	fn,
	maxTabletDepth
} = require("./config");

const slantDepthRatio = Math.cos(tilt * Math.PI / 180);
const bodySlantDepth = slantDepthRatio * coverageHeight;
const slantHeightRatio = Math.sin(tilt * Math.PI / 180);
const bodySlantHeight = slantHeightRatio * coverageHeight;

const beamSlantDepth = beamWidth * bodySlantDepth / bodySlantHeight;
const coverSlantWidth = (beamWidth) * (coverageWidth - beamWidth) / bodySlantHeight;

const coverCorners = [
	[-coverageWidth / 2, -bodySlantDepth / 2, -bodySlantHeight / 2],
	[-coverageWidth / 2, bodySlantDepth / 2, bodySlantHeight / 2],
	[coverageWidth / 2, bodySlantDepth / 2, bodySlantHeight / 2],
	[coverageWidth / 2, -bodySlantDepth / 2, -bodySlantHeight / 2]
];

const leftArm = [
	{
		bevelRadius,
		corners: [
			coverCorners[0],
			[coverCorners[0][0], coverCorners[0][1] + beamWidth, coverCorners[0][2]],
			[coverCorners[0][0] + beamWidth, coverCorners[0][1] + beamWidth, coverCorners[0][2]],
			[coverCorners[0][0] + beamWidth, coverCorners[0][1], coverCorners[0][2]],
			
      [coverCorners[2][0] - beamWidth, coverCorners[2][1], coverCorners[2][2]],
			[coverCorners[2][0] - beamWidth, coverCorners[2][1] + beamWidth, coverCorners[2][2]],
			[coverCorners[2][0], coverCorners[2][1] + beamWidth, coverCorners[2][2]],
			[coverCorners[2][0], coverCorners[2][1], coverCorners[2][2]],

		],
		fn,
		name: "leftBody",
		transformations: [
      // ["translate", [0, bodySlantDepth / 2, bodySlantHeight / 2]]
    ]
	},
  {
    bevelRadius,
    corners: [
      coverCorners[0],
      [coverCorners[0][0], coverCorners[0][1] + bodySlantDepth, coverCorners[0][2]],
      [coverCorners[0][0] + beamWidth, coverCorners[0][1] + bodySlantDepth, coverCorners[0][2]],
      [coverCorners[0][0] + beamWidth, coverCorners[0][1], coverCorners[0][2]],

      [coverCorners[0][0] + coverSlantWidth, coverCorners[0][1] + beamSlantDepth, coverCorners[0][2] + beamWidth],
      [coverCorners[0][0] + coverSlantWidth, coverCorners[0][1] + bodySlantDepth, coverCorners[0][2] + beamWidth],
      [coverCorners[0][0] + beamWidth + coverSlantWidth, coverCorners[0][1] + bodySlantDepth, coverCorners[0][2] + beamWidth],
      [coverCorners[0][0] + beamWidth + coverSlantWidth, coverCorners[0][1] + beamSlantDepth, coverCorners[0][2] + beamWidth],
    ],
    fn,
    name: "leftFeet",
    transformations: [
      // ["translate", [0, bodySlantDepth / 2, bodySlantHeight / 2]]
    ]
  }
];

const rightArm = [
	{
		bevelRadius,
		corners: [
			[coverCorners[3][0] - beamWidth, coverCorners[3][1], coverCorners[3][2]],
			[coverCorners[3][0] - beamWidth, coverCorners[3][1] + beamWidth, coverCorners[3][2]],
			[coverCorners[3][0], coverCorners[3][1] + beamWidth, coverCorners[3][2]],
			coverCorners[3],

			[coverCorners[1][0], coverCorners[1][1], coverCorners[1][2]],
			[coverCorners[1][0], coverCorners[1][1] + beamWidth, coverCorners[1][2]],
			[coverCorners[1][0] + beamWidth, coverCorners[1][1] + beamWidth, coverCorners[1][2]],
			[coverCorners[1][0] + beamWidth, coverCorners[1][1], coverCorners[1][2]],

		],
		fn,
		name: "rightBody",
		transformations: [
      // ["translate", [0, bodySlantDepth / 2, bodySlantHeight / 2]]
    ]
	},
  {
    bevelRadius,
    corners: [
      coverCorners[3],
      [coverCorners[3][0], coverCorners[3][1] + bodySlantDepth, coverCorners[3][2]],
      [coverCorners[3][0] - beamWidth, coverCorners[3][1] + bodySlantDepth, coverCorners[3][2]],
      [coverCorners[3][0] - beamWidth, coverCorners[3][1], coverCorners[3][2]],

      [coverCorners[3][0] - coverSlantWidth, coverCorners[3][1] + beamSlantDepth, coverCorners[3][2] + beamWidth],
      [coverCorners[3][0] - coverSlantWidth, coverCorners[3][1] + bodySlantDepth, coverCorners[3][2] + beamWidth],
      [coverCorners[3][0] - beamWidth - coverSlantWidth, coverCorners[3][1] + bodySlantDepth, coverCorners[3][2] + beamWidth],
      [coverCorners[3][0] - beamWidth - coverSlantWidth, coverCorners[3][1] + beamSlantDepth, coverCorners[3][2] + beamWidth],
    ],
    fn,
    name: "leftFeet",
    transformations: [
      // ["translate", [0, bodySlantDepth / 2, bodySlantHeight / 2]]
    ]
  }
];

module.exports = {
	leftArm,
  rightArm
};
