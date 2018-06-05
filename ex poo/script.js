
class Figures{
    getArea(){
        alert("The area of this " + this.constructor.name + " is " + this.area + " cm2");
    }
    getVolume(){
        if (this.volume > 0)
            alert("The volume of this " + this.constructor.name + " is " + this.volume + "cm3");
        else
            alert("Geometric figures have no volume propriety.")
    }    
}



class Polygon extends Figures{
    constructor(height, width){
        super();
        this.height = height;
        this.width = width;
        this.area = height * width;
        this.volume = 0;
        //this.volume = height * width * depth;
        }
        // getArea(){
        //     alert("The area of this " + this.constructor.name + " is " + this.area);
        // }


}




class Square extends Polygon {
    constructor(sideLength){
        super(sideLength, sideLength);
        this.sideLength = sideLength;
    }


}



class Triangle extends Polygon{
    constructor(height,width){
        super(height,width);
        this.areat = this.area / 2;
        this.area = this.areat;
    }
}

class Rectangle extends Polygon{
    constructor(height,width){
        super(height, width);
        }
}

class Circle extends Figures{
    constructor(radium){
        super();
        this.radium = radium;
        this.volume = 0;
        this.area = radium * Math.PI;
    }
}

class  PolyedricSolids extends Figures{
        constructor(height, width, depth){
            super();
            this.height = height;
            this.width = width;
            this.area = height * width + width * depth + height * depth;
            this.volume = height * width * depth;
            this.depth = depth;
            
        }

}


class Cube extends PolyedricSolids{
        constructor(sideLength){
            super(sideLength, sideLength, sideLength)
            this.sideLength = sideLength;
        }
}

class Parallelepiped extends PolyedricSolids{
        constructor(height, width, depth){
            super(height, width, depth);
        }
}

var picasso = new Cube(40);
picasso.getArea();
picasso.getVolume();


// var coiso = new Polygon(4,3);
// coiso.getArea();

// var coisao = new Triangle(2,3);
// coisao.getArea();

// var coisinho = new Square(4);
// coisinho.getArea();

// var coisicoisi = new Circle(45);
// coisicoisi.getArea();
// coisicoisi.getVolume();




//     Area(){
//         switch (this.type) {
//             case "square":
//                 var side = prompt("Please enter the lenght of the sides", 1);
//                 return this.AreaRectangle(side, side);
//                 break;
        
//             case "rectangle":
//                 var base = prompt("Please enter the lenght of the base (cm)", 1);
//                 var height = prompt("Please enter the lenght of the height (cm)", 1);
//                 return this.AreaRectangle(base, height);
//                 break;

//             case "triangle":
//                 var base = prompt("Please enter the lenght of the base (cm)", 1);
//                 var height = prompt("Please enter the lenght of the height (cm)", 1);
//                 return (this.AreaRectangle(base, height)/2);
//                 break;
            
//             case "circle":
//                 var radium = prompt("Please enter the lenght of the radium (cm)", 1);
//                 return (this.AreaCircle(radium));
//                 break;
       
//             default:
//                 alert("That is not a supported polygon type.");
//                 break;
//         }
//     }
//     AreaRectangle(b, h){
//         return b*h;
//     }
//     AreaTriangle(b, h){
//         return this.AreaRectangle/2;
//     }
//     AreaCircle(r){
//         return (r * Math.PI);
//     }

//     Run(){
//         var type = prompt("Please enter the type of Polygon (cm)", "square");
//         this.type = type;
//         var result = this.Area();
//         if (result != undefined){
//             alert("The area of the " + this.type + " is " + result + " cm2.");
//         }
//         this.End();
//     }
    
//     End(){
        
//         if (confirm("Try again?")){
//             this.Run()
//         } else{
//             alert("Goodbye!");
//         }
//     }

    

// }



// var poly = new Polygon();


