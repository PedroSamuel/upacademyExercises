
class Figures{
    constructor(){
    this.area = 0;
    this.volume = 0;
    this.perimeter = 0;
    }
    getArea(){
        alert("The area of this " + this.constructor.name + " is " + this.area + " cm2");
    }

    getPerimeter(){
        alert("The perimeter of this " + this.constructor.name + " is " + this.perimeter + " cm");

    }
}

class Solids{
    constructor(){
        this.volume = 0;
        this.surfArea = 0;
    }

    getVolume(){
        alert("The volume of this " + this.constructor.name + " is " + this.volume + "cm3");
    }    

    getSurfArea(){
        alert("The surface area of this " + this.constructor.name + " is " + this.surfArea + "cm2");

    }
}

class Figures1 extends Figures{ 
    constructor(height,width){
        super();
        this.height = height;
        this.width = width;
        this.area = (height * width);
    }
}

class Square extends Figures1{
    constructor(sideLength){
        super(sideLength, sideLength);
        this.sideLength = sideLength;
        this.area = sideLength ** 2;
        this.perimeter = sideLength * 4;
    }
}



class Triangle extends Figures1{
    constructor(height,width){
                super(height, width);
                this.hypotenuse = Math.sqrt(height**2 + width**2);

        this.area = this.area / 2;
        this.perimeter = (height + width + this.hypotenuse);
    }
}


class Rectangle extends Figures1{
    constructor(height,width){
        super(height,width);
        this.perimeter = (2*height + 2*width);
        }
}

class Circle extends Figures{
    constructor(radium){
        super();
        this.radium = radium;
        this.area = radium**2 * Math.PI;
        this.perimeter = 2*(radium * Math.PI)
    }
}

class Solids1 extends Solids{
    constructor(height, width, depth){
        super(height, width, depth);
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.volume = height * width * depth;
    }
}

class Cube extends Solids1{
        constructor(sideLength){
            super(sideLength, sideLength, sideLength)
            this.sideLength = sideLength;
            this.surfArea = 6* sideLength**2; 
        }
}



class Parallelepiped extends Solids1{
        constructor(height, width, depth){
            super(height, width, depth);
            this.surfArea =  (2 * (height*width)) + (2 * (width * depth)) + (2 * (height * depth));
        }
}

var picasso = new Cube(4);
picasso.getSurfArea();
picasso.getVolume();

var matisse = new Parallelepiped(4, 5, 2);
matisse.getSurfArea();
matisse.getVolume();



// var coiso = new Figures(4,3);
// coiso.getArea();

// var coisao = new Rectangle(5,3);
// coisao.getArea();
// coisao.getPerimeter();


// var coisinho = new Circle(2);
// coisinho.getArea();
// coisinho.getPerimeter();

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
//                 alert("That is not a supported Figures type.");
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
//         var type = prompt("Please enter the type of Figures (cm)", "square");
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



// var poly = new Figures();


