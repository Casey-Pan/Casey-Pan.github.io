console.log('hello world')

var x='World Hello';
console.log(x);

var demo_list=[5,12,34,22,57];
var fruit_list=["apple","stawberry","pear","dragonfruit"];
console.log(fruit_list);

console.log(fruit_list[2]);

var car = {
	make: 'BMW',
	year: 2012,
	milage: '64k'
};

console.log(car);
console.log(car.year);

var multiple = function(x,y) {
	return x*y;
}

console.log(multiple(2,3));

var btnClickHandler = function(){
	console.log('I just clicked the button');
	var firstNameEl = $(".first-name");
	var numOfPeopleEl = $(".num-of-people");

	console.log(firstNameEl);
	console.log(numOfPeopleEl);

	var firstNameElValue = firstNameEl.val();
	var numOfPeopleValue = numOfPeopleEl.val();

	console.log(firstNameElValue)
	console.log(numOfPeopleValue)

	var firstNameOutputEl = $(".first-name-output.result");
	var firstNameOutputEl = $(".num-of-people-output.result");

	firstNameOutputEl.html(firstNameElValue);
	numOfPeopleEl.html(numOfPeopleValue);

	var outputEl = $('.outputs');
	var bgColorOpacity = numOfPeopleValue / 100;
	var bgColorVal = "rgb (173, 216, 230" + bgColorOpacity + ")";
	outputEl.css({
		backgroundColor: bgColorVal;
	})

}

$("example-btn").on("click", btnClickHandler);