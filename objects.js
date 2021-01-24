function Car (Car_brand,Car_model,price,fuel_type,odometer) 
{
	this.Car_brand = Car_brand ;
	this.Car_model = Car_model ;
	this.price = price ; 
	this.fuel_type = fuel_type ;
	this.odometer = odometer ;
	this.autopilot = function()
	{
		document.write(" <br><h2>This car has autopilot");
	}
}


var c1 = new Car('Honda','Civic',35000,'electric' ,40000);
c1.autopilot() ;
document.write(" <br> <h2> The brand is "+c1.Car_brand+"</h2>") 
document.write("<h2>The model is  "+c1.Car_model+"</h2>")



document.write("<h2>The fuel type is "+c1.fuel_type)
document.write("<h2>Total Distance travelled : "+c1.odometer)









 /* document.write html page pe aata hai 
 console.log console mai dikhata hai output 
 this yaha par self jaise kaam karta hai constructor ke liye kaam aata hai jisse kaafi sare objects create karr sake hum.
objects create karne ke liye line 13 dekh le syntax  
 */