function toCelcius(fahrenheit)
{
    return (5/9) * (fahrenheit-32);
}


//fungsi digunakan di sini
console.log("10 fahrenheit = "+ toCelcius(10) + " celcius");
console.log("27 fahrenheit = "+ toCelcius(27) + " celcius");

function faktorial(n) 
{
    if (n === 0){
        return 1;
    }else{
        return n * faktorial(n-1);
    }
    
} 

console.log(faktorial(5));

function konterMenurun(angka_awal)
{
    console.log(angka_awal);
    let angka_berikutnya = angka_awal - 1;

    if (angka_berikutnya > 0 ) {
        konterMenurun(angka_berikutnya);
    }
    else
    {
        console.log("Selesai");
    }
}

konterMenurun(5);

function jumlahDigit(angka_awal)
{
    let angka_berikutnya = angka_awal - 1;
    if (angka_berikutnya > 0 ) 
    {
        return angka_awal + jumlahDigit(angka_berikutnya);    
    }
    return 1;
}
console.log(jumlahDigit(5));

function get_data_kelas(id) {
    const kelas = 
    {
        id:0,
        nama:"",
        jml_peserta:0,
        jml_peserta_lulus: 0,
        jml_peserta_ongoing: 0,
        jml_peserta_tidak_lulus: 0
    };
    const ary_jml_peserta = [100,200,300];
    const ary_jml_peserta_lulus = [10,20,30];
    const ary_jml_peserta_ongoing = [20,40,60];
    const ary_jml_peserta_tidak_lulus = [70,140,210];

    kelas.id = id;
    kelas.jml_peserta = ary_jml_peserta[id-1];
    kelas.jml_peserta_lulus = ary_jml_peserta_lulus[id-1];
    kelas.jml_peserta_ongoing = ary_jml_peserta_ongoing[id-1];
    kelas.jml_peserta_tidak_lulus =ary_jml_peserta_tidak_lulus[id-1];

    switch (id) {
        case 1:
            kelas.nama="Pemograman Dasar";
            break;
        case 2:
            kelas.nama="Pemograman Beroerintasi Objek";
            break;
        case 3:
            kelas.nama="Pemogragaman Game";
            break;
        default:
            kelas.nama="Tidak diketahui";
    }

    return kelas;
}

let kelas = get_data_kelas(1);
console.log("ID = " + kelas.id);
console.log("Nama = " + kelas.nama);
console.log("Jumlah Peserta = " + kelas.jml_peserta);
console.log("Jumlah Peserta Lulus = " + kelas.jml_peserta_lulus);
console.log("Jumlah Peserta Ongoing = " + kelas.jml_peserta_ongoing);
console.log("Jumlah Peserta Tidak Lulus = " + kelas.jml_peserta_tidak_lulus);

let kelas1 = get_data_kelas(2);
console.log("ID = " + kelas1.id);
console.log("Nama = " + kelas1.nama);
console.log("Jumlah Peserta = " + kelas1.jml_peserta);
console.log("Jumlah Peserta Lulus = " + kelas1.jml_peserta_lulus);
console.log("Jumlah Peserta Ongoing = " + kelas1.jml_peserta_ongoing);
console.log("Jumlah Peserta Tidak Lulus = " + kelas1.jml_peserta_tidak_lulus);

let kelas2 = get_data_kelas(3);
console.log("ID = " + kelas2.id);
console.log("Nama = " + kelas2.nama);
console.log("Jumlah Peserta = " + kelas2.jml_peserta);
console.log("Jumlah Peserta Lulus = " + kelas2.jml_peserta_lulus);
console.log("Jumlah Peserta Ongoing = " + kelas2.jml_peserta_ongoing);
console.log("Jumlah Peserta Tidak Lulus = " + kelas2.jml_peserta_tidak_lulus);

//Pencarian bilangan fibonacci
function fibonacci(n) {
    if(n <= 1)
    {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(15));

//Perhitungan Faktorial
function factorial(n)
{
    if (n === 0 )
    {
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

//Penjumlahan Array
function sumArray(arr)
{
    if(arr.length === 0)
    {
        return 0;
    }else{
        return arr[0] + sumArray(arr.slice(1));
    }
}
console.log(sumArray([1,2,3,4,5]));

//Pencarian Binari
function binarySearch(arr, target, start = 0, end = arr.length - 1) 
{
    if(start > end)
    {
        return -1;
    }
    let mid = Math.floor((start + end)/ 2);

    if(arr[mid] === target)
    {
        return mid;
    }else if(arr[mid] < target){
        return binarySearch(arr, target, mid + 1, end);
    }else{
        return binarySearch(arr, target, start, mid - 1);
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10));

//Validasi Parentheses
function  isValidParenthesis(str) 
{
    function isValid(str, stack= []) {
        if (str.length === 0) {
            return stack.length === 0;
        }
        const char = str.charAt(0);
        
        if (char === '(') {
            stack.push('(');
        } else if(char === ')'){
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }

        return isValid(str.slice(1), stack);
    }

    return isValid(str);
}
console.log(isValidParenthesis("((()))"));