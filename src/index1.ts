// Notasi tipe untuk variabel

// let age : number = 10;
// let nama : string = "John";
// let isAdult : boolean = true;

// console.log("jika nama adalah", nama, "dan usia" , age, "maka", isAdult,);

// let siswa:{
//     nama: string;
//     usia: number;
//     isPelajar: boolean;
//     alamat? : string;
// } = {
//     nama: "mr. bonskuy",
//     usia: 25,
//     isPelajar: true,
//     alamat: "jakarta"
// }
// console.log("jika namanya adalah", siswa.nama, "dan umurnya adalah", siswa.usia , "dan pelajarnya", siswa.isPelajar ,"siswa ini tinggal di" , siswa.alamat);

// Notasi tipe untuk parameter fungsi dan tipe kembalian
// function addNumbers(a: number, b: number): number {
//     return a + b;
// }


// Notasi tipe untuk properti objek
// let siswa: { nama: string; usia: number } = { nama: "mr bonskuy", usia: 205 };

// console.log("jika nama adalah", siswa.nama, "maka usia nya adalah" , siswa.usia,);

//interface (untuk mendefinisikan tipe data objectnya)

interface product {
    id : number
    name : string
    price : number
    note? : string
    isPremium : boolean
}
const product1 : product = {
    id : 1,
    name : "ac",
    price : 30000,
    isPremium : true,
}
const product2 : product = {
    id : 2,
    name : "kulkas",
    price : 60000,
    isPremium : false,
}

// nested object
interface productDetail {
    manuFacture : string
    year : number
    price? : number
    isProduct : boolean
}
interface productItem {
    id : number
    productName : string
    price : number
    detail : productDetail
}
   
const product3 : productItem = {
    id : 3,
    productName : "motor",
    price : 120000,
    detail : {
        manuFacture : "honda",
        year : 2020,
        isProduct : true,
    }
}

//square bracket array

const a = [1,2,3,4,5];
const b = ["a","b","c"];
const c = [true,false];

// console.log(a, b , c);

//generic array
let list2 : number[] = [1,2,3,4,5];

//array string
let list3 : string[] = ["a","b","c"];

//array boolean
let list4 : boolean[] = [true,false];

//array gabungan 
let list5 : (number | string | boolean)[] = [1,2,3,4,5,"a","b","c",true];
// console.log(list5);

//object into array
let n = [{nama : "raffa" , ummur : 17}, {nama : "raffa" , ummur : 17}];


//jawaban no 1
// interface anak {
//     nama : string
//     umur : number
//     isSekolah : boolean
// }[];

// interface identitas {
//     nama:string
//     tempat:string
//     umur:number
//     anak:anak
// }

// interface status {
//     isSekolah : boolean
// }[];

// interface dataDiri {
//     name : string
//     alamat : string
//     umur:number
//     status : status
// }[];


// contoh function kelas 1
// function rumusLuasPP(panjang : number, lebar : number) {
//     const luas = panjang * lebar;
//     return luas
// }

// const persegi1 = rumusLuasPP(2000,2)
// const persegi2 = rumusLuasPP(1521,2)
// const persegi3 = rumusLuasPP(13321,2)

// console.log(persegi1,persegi2,persegi3);



//jawaban function menghitung volume balok 
// function rumusBalok(panjang : number, lebar : number, tinggi : number) {
//     const volume = panjang * lebar * tinggi ;
//     return volume
// }

// const balok1 = rumusBalok(2,2,2)
// const balok2 = rumusBalok(3,3,3)
// const balok3 = rumusBalok(4,4,4)
// console.log(balok1,balok2,balok3);

function pembagian({a,b,c = 1} : {a : number, b : number, c? : number}) {
    const hasil = (a / b) * c;
    return hasil;
}

const kali1 = pembagian({a : 10, b : 2, c : 24})
const kali2 = pembagian({a : 10, b :2, c : 24})

// console.log("hasi dari kali 2 adalah", kali2);

//contoh function yang tidak memiliki return
interface atasan{
    a : string
    b :number
}
interface response {
    car : string
    price : string
}
function WithOutReturn({a,b} : {a : number, b : number}): void {
    console.log(a*b);
}
function jikaMemakaiNumber({a,b} : {a : number, b : number}): number {
    return 100;
}
function memakaiBolean({a,b} : {a : number, b : number}): boolean {
    return true;
}

function empat({a,b} : atasan): response {
    return {
        car : "lamborghini",
        price : "2000000000"
    }
}
// console.log(empat({a :"string", b : 0}));


// soal
function array(numberOfArray : number[], numberArray : number): boolean {
    return numberOfArray.includes(numberArray);
}
// console.log(array([1,2,3,4,5],2));

// class user {
//     constructor(
//         public id : number,
//         public firstName : string,
//         public lastName : string 
//     ){
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     login() : Boolean {
//         if(this.id === 1){
//             return true;
//         }else{
//             return false;
//         }
        
//     }
//     relogin() : Boolean {
//         return this.login();
//     }
// }
// const user1 = new user(1,"Azka","budiman");
// console.log(user1.login);
// console.log(user1.relogin());
// console.log(user1);

//soal

class account {
    user: {
        username: string;
        password: string;
    }[];

    constructor() {
        this.user = [{
            username: "azka",
            password: "123"
        },
        {
            username: "budiman",
            password: "1234"
        },
        {
            username: "boss",
            password: "12345"
        },
        {
            username : "admin",
            password : "123456"
        }

    ]
    }

    login(username: string, password: string) {
        for (let i = 0; i < this.user.length; i++)  {
            if (this.user[i].username === username && this.user[i].password === password) {
                return {
                    msg : "berhasil",
                    status : "ok"
                }
            }
        }
        {
            return{

                msg : "gagal",
                status : "username dan password berbeda"
            }
        
        }
    }
};
const user1 = new account()["login"]("budiman","1224");
console.log(user1);

// sub class merupakan turunan dari class baik itu property maupun method
class Smartphone {
    color : string;
    brand : string;
    model : string;
    isTKDM : boolean;
    constructor(color : string, brand : string, model : string) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.isTKDM = true;
    }   
    charging(): void {
        // console.log(`smartphone ${this.brand} ${this.model} sedang di cas`);
    }
}
const samsung = new Smartphone("black", "samsung", "s24 ultra");
// console.log("ini spesifikasi hp nya", samsung);

class Android extends Smartphone {
    layar : number;

    constructor(color : string, brand : string, model : string, layar : number) {
        super(color, brand, model);
        this.layar = layar;
    }


    splitScreen (){
        // console.log('split screen berhasil');
    }
    showBrand (){
        // console.log(`brand handphone ini adalah ${this.brand} dan ukuran ${this.layar} inch`);
    }
    charging(): void {
        // console.log(`smartphone ${this.brand} ${this.model} sedang di cas dengan fast charging`);
    }
}

// const xiaomi = new Android("black", "xiaomi", "redmi", 6);
// console.log("ini spesifikasi hp xiaomi", xiaomi);
// xiaomi.splitScreen()
// xiaomi.showBrand()
// xiaomi.charging()

// const infinix = new Android("black", "infinix", "HOT 30i", 12);
// console.log("ini spesifikasi hp infinix", infinix);
// infinix.charging();
// infinix.splitScreen();

class Ios extends Smartphone {
    airDrop(){
        console.log('air drop berhasil');
    }
}

// const iphone = new Ios("titanium", "iphone", "14 Pro");
// console.log("ini spesifikasi hp iphone", iphone);
// iphone.charging()
// iphone.airDrop()

//polymohism
