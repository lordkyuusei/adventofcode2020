const puzzle = [
	"1-3 a: abcde",
	"1-3 b: cdefg",
	"2-9 c: ccccccccc",
];

let valid1 = 0;
let valid2 = 0;

const part_one = (password, letter, min, max) => {
	const count = (password.match(new RegExp(letter, 'g') || [])).length;
	if (count >= min && count <= max) {
    	valid1 += 1;
  	}
}

const part_two = (password, letter, fpos, spos) => {
	const policy = password[fpos-1] === letter ^ password[spos-1] === letter;
  	if (policy) {
  		valid2 += 1;
  	}
}

puzzle.forEach(line => {
	const context = line.split(" ");
	const letter = context[1].slice(0, -1);
	const password = context[2];
	const range = context[0].split("-");
	const [nb1, nb2] = [range[0], range[1]];
	try {
  		part_one(password, letter, nb1, nb2);
    	part_two(password, letter, nb1, nb2);
  	} catch(error) {
  		return;
  	}
});

console.log(valid1);
console.log(valid2);
