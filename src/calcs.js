const {
	tilt,
	bevelRadius,
	beamWidth,
	coverageHeight,
	coverageWidth,
	fn,
	maxTabletDepth
} = require("./config");

const coverSlantDepth = Math.cos(tilt * Math.PI / 180) * coverageHeight;
const coverSlantHeight = Math.sin(tilt * Math.PI / 180) * coverageHeight;

const coverCorners = [
	[-coverageWidth / 2, -coverSlantDepth / 2, -coverSlantHeight / 2],
	[-coverageWidth / 2, coverSlantDepth / 2, coverSlantHeight / 2],
	[coverageWidth / 2, coverSlantDepth / 2, coverSlantHeight / 2],
	[coverageWidth / 2, -coverSlantDepth / 2, -coverSlantHeight / 2]
];

const leftArm = [
	{
		bevelRadius,
		corners: [
			coverCorners[0],
			[coverCorners[0][0], coverCorners[0][1] + beamWidth, coverCorners[0][2]],
			[coverCorners[0][0] + beamWidth, coverCorners[0][1] + beamWidth, coverCorners[0][2]],
			[coverCorners[0][0] + beamWidth, coverCorners[0][1], coverCorners[0][2]],
			
      [coverCorners[2][0] - beamWidth, coverCorners[2][1] - beamWidth, coverCorners[2][2]],
			[coverCorners[2][0] - beamWidth, coverCorners[2][1], coverCorners[2][2]],
			[coverCorners[2][0], coverCorners[2][1], coverCorners[2][2]],
			[coverCorners[2][0], coverCorners[2][1] - beamWidth, coverCorners[2][2]],

		],
		fn,
		name: "leftMain",
		transformations: [
      ["translate", [0, coverSlantDepth / 2, coverSlantHeight / 2]]
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

			[coverCorners[1][0], coverCorners[1][1] - beamWidth, coverCorners[1][2]],
			[coverCorners[1][0], coverCorners[1][1], coverCorners[1][2]],
			[coverCorners[1][0] + beamWidth, coverCorners[1][1], coverCorners[1][2]],
			[coverCorners[1][0] + beamWidth, coverCorners[1][1] - beamWidth, coverCorners[1][2]],

		],
		fn,
		name: "rightMain",
		transformations: [
      ["translate", [0, coverSlantDepth / 2, coverSlantHeight / 2]]
    ]
	}
];

module.exports = {
	leftArm,
  rightArm
};
