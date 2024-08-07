//jawaban no 1
function minimal(a : number, b : number ) : number {
    return a < b ? a : b
}
const minimal1 : number = minimal (1,4);
const minimal2 : number = minimal (3,2);
const minimal3 : number = minimal (3,3);

// console.log(minimal1);

// jawaban no 2
function power(a : number, b : number) : number {
    return Math.pow(a, b)
}
const power1 : number = power (7,3);
const power2 : number = power (3,3);
const power3 : number = power (4, 0.5);
// console.log(power3);

// jwaban no 3
// function penjumlahanBilangan(a : number[], b : number) : number {
// }
// const penjumlahan1: number = penjumlahanBilangan([1, 2, 3, 4, 5], 1);
// console.log(penjumlahan1);


//jawaban no 4
class Animal {
    name : string
    age : number
    isMamal : boolean
    constructor(name : string, age : number, isMamal : boolean) {
        this.name = name;
        this.age = age;
        this.isMamal = isMamal;
    }
}

//jawaban no 5 
class rabbit extends Animal {
    constructor(name: string, age: number, isMamal: boolean) {
        super(name, age, isMamal);
    }
    statusMakan (){
        console.log(`hewan ${this.name} sedang makan`);
    }
}
// const hewan1 = new rabbit("rabbit",2, true);
// hewan1.statusMakan();

// jawaban no 6
class Eagle extends Animal {
    speed : number 
    constructor(name : string, age : number,  speed : number) {
        super(name, age, true);
        this.speed = speed;
    }
    fly() : string{
        return`${this.name} yang berumur ${this.age} tahun sedang terbang`;
    }
    run() : string{
        return`${this.name} Berlari dengan kecapatan ${this.speed} km`;
    }
}
// const hewan2 = new Eagle("eagle", 5, false, 100);
// hewan2.fly();
// hewan2.run();

//jawaban no 7
class EagleRun extends Eagle {
    fly(): string {
        return `${this.name} yang berumur ${this.age} tahun sedang terbang!`;
    }
    runEagle() : string{
        return `${this.run()}`;
    }
}

//jawaban no 8
// const myRabbit = new rabbit("labi", 2, true);
// myRabbit.statusMakan();

//jwaban no 9
// const myEagle = new Eagle("Elo",4, 220);
// myEagle.fly();

//jawaban no 10
const speedTest = new EagleRun("Elo", 4, 220);