const puzzle = [
	1721,
  979,
  366,
  299,
  675,
  1456
];

const match = 2020;
const couple = [];
const trouple = [];

puzzle.map(nb => {
  if (couple.length === 2) return;

	const temp = puzzle.map(nb2 => nb + nb2);
 	if (temp.includes(match) && !couple.includes(nb)) {
  	couple.push(nb)
  }
})

puzzle.map(nb => {
  if (trouple.length === 3) return;

	puzzle.map(nb2 => {
  	if (trouple.length === 3) return;

		const temp = puzzle.map(nb3 => nb + nb2 + nb3);
 		if (temp.includes(match) && !trouple.includes(nb)) {
  		trouple.push(nb)
  	}
	});
});

console.log(`Part one: ${couple[0] * couple[1]}`);
console.log(`Part two: ${trouple[0] * trouple[1] * trouple[2]}`);
