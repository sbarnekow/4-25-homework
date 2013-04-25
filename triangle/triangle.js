var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 7
};

function area(triangle){
    var perimeterhalf = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
    function heron(triangle, perimeterhalf){
      return Math.sqrt (perimeterhalf * (perimeterhalf - triangle.sideA) * (perimeterhalf - triangle.sideB) * (perimeterhalf - triangle.sideC));
    }
    return heron(triangle, perimeterhalf);
}
var triangleArea = area(triangle);
console.log(triangleArea);