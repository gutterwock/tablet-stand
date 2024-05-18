const { writeToFile } = require("../scadjs-utils/src/utils");
const {
	leftArm,
  rightArm
} = require("./calcs");
const RoundedQuad = require("../scadjs-utils/src/composites/roundedQuad");

const renderLeft = true;
const renderRight = true;

const leftSolids = renderLeft ? leftArm.map((props) => {
	const roundedQuad = new RoundedQuad(props);
	roundedQuad.render();
	return roundedQuad;
}) : [];

const rightSolids = renderRight ? rightArm.map((props) => {
	const roundedQuad = new RoundedQuad(props);
	roundedQuad.render();
	return roundedQuad;
}) : [];

const solids = [...leftSolids, ...rightSolids];

const outputFile = "./stand.scad";

writeToFile({
	fileName: outputFile,
	fn: 15,
	solids
});
