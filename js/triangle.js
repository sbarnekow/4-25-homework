var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

function area(triangle){
    var perimeterhalf = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
    //console.log(perimeterhalf);
    function heron(triangle, perimeterhalf){
      //console.log(triangle, perimeterhalf);
      return Math.sqrt (perimeterhalf * (perimeterhalf - triangle.sideA) * (perimeterhalf - triangle.sideB) * (perimeterhalf - triangle.sideC));
    }
    return heron(triangle, perimeterhalf);
}

var triangleArea = area(triangle);

console.log(triangleArea)





// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 5
// };

// function area (triangle) {
//   var perimeterhalf = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
//   {
//       var (permiterhalf * (triangle.sideA - perimeterhalf) * (triangle.sideB - perimeterhalf) * (triangle.sideC - permiterhalf));
//   }
// }

// function area(){
//   console.log((triangle.sideA + triangle.sideB)/2);
// }



  // var find = 0;
  // for (var i = 0; i < triangle.length; x += 1){
  //   if !(find = 3){

  //   }
  //   else if (var i = 4)
  // }
