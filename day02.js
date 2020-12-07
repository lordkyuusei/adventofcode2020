const puzzle = [
  "15-16 m: mhmjmzrmmlmmmmmm",
  "5-6 d: dcdddhzld",
  "3-4 s: vqssdcbl",
  "0-0 y: OfCourseThereIsMoreThanSixPasswordsButICannotMakethisTooLong",
  "9-12 t: tvwstttttttktwt",
  "4-6 g: vslqbgg",
  "9-16 d: dsdddddddrdddddhdbdd",
];

let valid = 0;
puzzle.forEach(line => {
	const context = line.split(" ");
  const letter = context[1].slice(0, -1);
  const password = context[2];

	const range = context[0].split("-");
  const [min, max] = [range[0], range[1]];
  console.log(`We need to find ${letter} between ${min} and ${max} times in ${password}`);
  try {
    const count = (password.match(new RegExp(letter, 'g') || [])).length;
    if (count >= min && count <= max) {
      console.log("It respects the policy!");
      valid += 1;
    }
  } catch(error) {
  	console.error(error);
  }
})

console.log(valid);
