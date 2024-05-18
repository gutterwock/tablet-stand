const { writeToFile } = require("../scadjs-utils/src/utils");
const Cube = require("../scadjs-utils/src/primitives/cube");

const cube = new Cube({
	dimensions: [1, 1, 1],
});
cube.render();

const solids = [cube];

const outputFile = "./stand.scad";

writeToFile({
	fileName: outputFile,
	fn: 15,
	solids
});
