/*

1
22
333
4444
55555

*/

var valueToprint ="";
for(var i=1; i<=5; i++) {

        for(var j =1; j<=i; j++) {
            valueToprint +=i;
        }
valueToprint += "\n";
    }
console.log(valueToprint);

*/



/*

54321
5432
543
54
5

*/
a=5;
var num ="";

for(i=1; i<=a; i++){
    for(j=5; j>=i; j--)
        num += j;
}
num +="\n";
}
console.log(num)

*/












/*

1
12
123
1234
12345
*/

var p ="";
 for(i=1; i<=5; i++){
    for(j=i; j<1; j++){
        p +=i;

    }
    console.log(p);
 }