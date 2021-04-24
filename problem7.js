var expected = {foo: 5, bar:3 };
var actual = {foo: 5, bar: 3};
function assertObjectsEqual(actual, expected, testName){
 if(JSON.stringify(expected)===JSON.stringify(actual))
 {
     return 'passed';
 }
 else
 {
    return `Failed. Expected ${expected} but got ${actual}`;
 }
}
console.log(assertObjectsEqual(actual,expected,'detects that two objects are equal'))