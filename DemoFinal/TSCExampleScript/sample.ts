var myName:string="Diksha";
var canVote:boolean=true;
var anything:any="capgemini";

interface SuperHero
{
realName:String;
superName:String;
}

var superName1:SuperHero=
{
realName:"Diksha Gupta",
superName:"dik"
}

class Animal
{
public favFood:string;
static numOfAnimals:number=0;

constructor(private name:string, private owner:string)
{
Animal.numOfAnimals++;
}

ownerInfo()
{
document.write("<br>"+this.name+"is owned by"+this.owner+"<br>");
}

static howManyAnimals():number
{
return Animal.numOfAnimals;
}

private _weight:number;

get weight():number{
return this._weight;
}

set weight(weight:number){
this._weight=weight;
}
} 

var myDog=new Animal("Moti","Aditya");
myDog.ownerInfo();
myDog.weight=100;
document.write("<br>Moti's weight is"+myDog.weight+"<br>");

document.write("<br>animals count"+Animal.howManyAnimals()+"<br>");

class Dog extends Animal
 {
constructor(name:string,owner:string){
super(name,owner);
Dog.numOfAnimals++;
 }
}
