class Polygon{
    constructor(){
        var result;
        this.Run();


    }

    Area(){
        switch (this.type) {
            case "square":
                var side = prompt("Please enter the lenght of the sides", 1);
                return this.AreaRectangle(side, side);
                break;
        
            case "rectangle":
                var base = prompt("Please enter the lenght of the base (cm)", 1);
                var height = prompt("Please enter the lenght of the height (cm)", 1);
                return this.AreaRectangle(base, height);
                break;

            case "triangle":
                var base = prompt("Please enter the lenght of the base (cm)", 1);
                var height = prompt("Please enter the lenght of the height (cm)", 1);
                return (this.AreaRectangle(base, height)/2);
                break;
            
            case "circle":
                var radium = prompt("Please enter the lenght of the radium (cm)", 1);
                return (this.AreaCircle(radium));
                break;
       
            default:
                alert("That is not a supported polygon type.");
                break;
        }
    }
    AreaRectangle(b, h){
        return b*h;
    }
    AreaTriangle(b, h){
        return this.AreaRectangle/2;
    }
    AreaCircle(r){
        return (r * Math.PI);
    }

    Run(){
        var type = prompt("Please enter the type of Polygon (cm)", "square");
        this.type = type;
        var result = this.Area();
        if (result != undefined){
            alert("The area of the " + this.type + " is " + result + " cm2.");
        }
        this.End();
    }
    
    End(){
        
        if (confirm("Try again?")){
            this.Run()
        } else{
            alert("Goodbye!");
        }
    }

    

}

Class Solids() extends Polygon{
    constructor(){}
}



var poly = new Polygon();


