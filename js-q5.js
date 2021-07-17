function getHeaderElement() {
// Get header element by its id.
	header = $('myHeader');
	if (header === null && TypeOf(header) === undefined) {
		console.log('header element does not exist!');
	}
	else{
		console.log('header element exists!');
	}
	return header
}