// define a startup script that
// reads the JSON data files from the filesystem
// and inserts them into the database if needed
// while randomly selecting an array from the total array of elements
// to enable a random data collection
if (Meteor.isServer){
	Meteor.startup(function(){
	if (!Courses.findOne()){
		function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
			}
			return array.slice(0,300);
		}
		console.log("no coursedata yet... creating from filesystem");
		var fs = Meteor.npmRequire('fs');
		var files = fs.readdirSync('./assets/app/jsonfiles/');
		 	var filename = 'jsonfiles/coursedata.json';
			var grades = JSON.parse(Assets.getText(filename));
			random_array=shuffleArray(grades);
			Courses.insert({key:"grades",array: random_array});
		console.log("Inserted "+random_array.length+" new data...");
}
});
}
