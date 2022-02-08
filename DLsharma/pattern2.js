/*


    #
   ##
  ###
 ####
#####
*/


var n = 5;
var valueToprint = "";
for(var i =1; i<=n; i++) {

    for(var j =0; j<n-i; j++){
        valueToprint += " ";
    }
    for(var k =0; k <i; k++){
        valueToprint += "\n";
    }
     console.log(valueToprint);

     /*     *
           ***
          *****
         *******  */



          var n =4;
          var s ="";
          for(i=1; i<=n; i++)
          {
              for(j=1; j<=n-i; j++)
              {
                s +=" ";
              }
          for(k=1; k<=2*i-1; k++)
          {
              s +="*";

          }
          s += "\n";

        console.log(s);
          }
          

