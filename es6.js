// // // /*
// // //     -phạm vi hoạt động của từ khoá var: toàn bộ scope
// // //     -phạm vi hoạt động của từ khoá let: trong từ scope khác nhau sẽ phân biệt nhau
// // //     -trong 1 scope thì không thể khai báo 2 lần let với cùng 1 tên biến
// // //     -đối với khai báo biến bằng var trong js sẽ hỗ trợ cơ chế tự khai báo hoisting ngầm định
// // //         ở đầu scope. đối với let và const thì không hỗ trợ

// // // */
// // // /*
// // //     * ArroundFunction
// // //         - Không hỗ trợ cơ chế hoisting(Khai báo mới được gọi hàm)
// // //         - Đối với hàm 1 lệnh return thì không cần đóng {} và không cần ghi return
// // //         - Đối với hàm có 1 tham số không cần {thamso} => --> thamso=>{ ... }
// // //         - Không làm thay đổi ngữ cảnh của con trỏ this.
// // // */



// // // var tenHam = () => {
// // //     console.log('hello');
// // // }

// // // tenHam();

// // // // Ví dụ hàm có 1 lệnh return
// // // var tinhTong = (a, b) => a + b;

// // // //Với hàm có 1 tham số
// // // var showMess = name => console.log(`hello +${name}`);

// // // //Không làm thay đổi ngữ cảnh của con trỏ this.

// // // /*
// // //     - Ngữ cảnh (context) con trỏ this :
// // //       + Mặc định khi dùng contrỏ this thì nó là window (var biến hoặc window.bien)
// // //       + Khi dùng con trỏ this trong đối tượng object ={} --> thì this là đối tượng đó
// // //       + Khi dùng con trỏ this trong function (prototype hoặc class) thì this sẽ đại diện 
// // //         cho prototype hay class đó
// // // */

// // // // console.log(this.innerHeight, this.innerWidth);

// // // let hocVien = {
// // //     id: 1,
// // //     hoTen: 'Nguyen Van A',
// // //     layThongTinHocVien: function () {
// // //         this.hoTen = 'abc';
// // //         let HienThiSinhVien = () => {
// // //             this.hoTen = 'xyz';
// // //             console.log(`Ho ten: ${this.hoTen}`);
// // //         }
// // //         HienThiSinhVien();
// // //     }
// // // }

// // // // hocVien.layThongTinHocVien();


// // // /*
// // //     default param giúp định nghĩa tham số mặc định chho hàm => Nếu ta gọi
// // //     hàm không truyền tham số thì hàm sẽ lấy tham số mặc định ngược lại nếu ta 
// // //     truyền tham số thì sẽ thấy tham số ta truyền (không lấy mặc định) 
// // // */
// // // var getUserInfo = (name, year, age = 2021 - year) => {
// // //     console.log(`name ${name}`);
// // //     console.log(`age ${age}`);
// // // }

// // // // getUserInfo('hoai', 1999, 30);


// // // //rest param
// // // // function tinhTong(a, b) {
// // // //     console.log(a+b);
// // // // }


// // // // function tinhTong(a, b, c){
// // // //     console.log(a+b+c);
// // // // }

// // // var tinhTong = function (...restparam) {
// // //     switch (restparam.length) {
// // //         case 2: {
// // //             console.log(`tong 2 so: = ${restparam[0] + restparam[1]}`);
// // //         } break;
// // //         case 3: {
// // //             console.log(`tong 3 so: = ${restparam[0] + restparam[1] + restparam[2]}`);
// // //         } break;
// // //         default: {
// // //             console.log('Tham so khong hop le!');
// // //         }
// // //     }
// // // }

// // // //spread oparator

// // // // let SV1 = {id:1};
// // // // let SV2 = {...SV1};
// // // // SV2.id = 2;
// // // // console.log(SV1);
// // // // console.log(SV2);

// // // //khi sử dụng spread mà ở sau nó có biến trùng tên với cái trước thì nó đè lên cái trước giá trinh luôn
// // // // như overriding


// // // ///destructuring

// // // // let product = {
// // // //     maSP: 1,
// // // //     tenSP: 'Iphone',
// // // //     hinhAnh: 'https://picsum.photos/200/20',
// // // //     thongTinSanPham: function () {
// // // //         console.log(`ma sp: ${product.maSP}`);
// // // //         console.log(`ten sp: ${product.tenSP}`);
// // // //         console.log(`hinh anh: ${product.hinhAnh}`);
// // // //     }
// // // // }

// // // // let maSP = product.maSP;
// // // // let tenSP = product.tenSP;
// // // // let hinhAnh = product.hinhAnh;

// // // // let {maSP, tenSP, hinhAnh, thongTinSanPham} = product;


// // // object literal
// // // từ tên biến tạo ra tên thuộc tính 

// // let fName = 'Mị';

// // let myObj = {
// //     fName,
// //     sayHi: function(){
// //         console.log('hello '+ fName);
// //     }
// // }

// // console.log(myObj);
// // var tenThuocTinh = 'Học viên: ';

// // let hocVien = {
// //     [tenThuocTinh]: '001',
// //     tenHocVien: 'abc'
// // }

// // // console.log(hocVien);

// // //((1)) for in, ngoài duyệt mãng ra ccòn có thể duyệt thuộc tính của object
// // let mangSanPham =[
// //     {maSP: 1, tenSP: 'Iphone X',gia: 100000000},
// //     {maSP: 2, tenSP: 'Iphone XS',gia: 200000000},
// //     {maSP: 3, tenSP: 'Iphone XS Max',gia: 300000000}
// // ]

// // // for(let item in mangSanPham){
// // //     console.log('index ', item);
// // //     console.log('Mang san pham', mangSanPham[item]);
// // // }

// // // for(let item of mangSanPham){
// // //     console.log(item);
// // // }

// // var nguoidung = {
// //     taiKhoan: 'nguyenvana',
// //     mk: '123',
// //     soDT: '123458'
// // }

// // for(let obj in nguoidung){
// //     console.log(obj, nguoidung[obj]);
// // }

// document.querySelector('form').onsubmit = function(e){
//     e.preventDefault();

//     let arrInput = document.querySelectorAll('form input');
//     let hocvien = {};
//     console.log('arrInput', arrInput);
//     for(let input of arrInput){
//         //lay name va value
//         let {name, value} = input;

//         hocvien = {...hocvien,[name]: value};

//     }
//     console.log(hocvien);

//     //tạo table từ object hocvien

//     var trHocVien=`<tr>`;
//     for(let item in hocvien){
//         trHocVien+=`<td>${hocvien[item]}</td>`;
//     }

//     trHocVien+=`</tr>`;

//     document.querySelector('#tableHocVien').innerHTML = trHocVien;
// }

// class HocVien {
//     maHocVien ='';
//     tenHocVien = '';

//     constructor(ma, ten){
//         this.maHocVien = ma;
//         this.tenHocVien = ten;
//     }

//     //c1:
//     hienThiThongTinHocVien (){
//         console.log('Ma ',this.maHocVien);
//         console.log('Ten ', this.tenHocVien);
//     }

//     //c2
//     hienThiThongTin = () =>{
//         console.log('Ma ',this.maHocVien);
//         console.log('Ten ', this.tenHocVien);
//     }
// }

// let hv = new HocVien(1, 'Abc');

// import {LaoCong, arrSinhVien} from './models/LaoCong.js';
// import NhanVienLaoCong from './models/LaoCong.js';

// let laoCong = new LaoCong();

// console.log('lao cong ', laoCong);
// console.log(arrSinhVien);

// let nhanVienLaoCong = new NhanVienLaoCong('Khai');
// nhanVienLaoCong.maNhanVien = 2;
// nhanVienLaoCong.tinhLuong();
// console.log(nhanVienLaoCong);


let mangSanPham = [
    { maSP: 1, tenSP: 'Google pixel 1', gia: 1000, hangSX: 'Google' },
    { maSP: 2, tenSP: 'Google pixel 2', gia: 2000, hangSX: 'Sony' },
    { maSP: 3, tenSP: 'Google pixel 3', gia: 3000, hangSX: 'Oppo' },
    { maSP: 4, tenSP: 'Google pixel 4', gia: 4000, hangSX: 'Google' },
    { maSP: 5, tenSP: 'Google pixel 5', gia: 5000, hangSX: 'Sony' },
    { maSP: 6, tenSP: 'Google pixel 6', gia: 6000, hangSX: 'Oppo' },
    { maSP: 7, tenSP: 'Google pixel 7', gia: 7000, hangSX: 'Google' },
    { maSP: 8, tenSP: 'Google pixel 8', gia: 8000, hangSX: 'Sony' },
    { maSP: 9, tenSP: 'Google pixel 9', gia: 9000, hangSX: 'Oppo' },
    { maSP: 10, tenSP: 'Google pixel 10', gia: 10000, hangSX: 'Google' }
];

// // let arrSony= [];

// // let GetArraySony = function() {
// //     for(var item of mangSanPham){
// //         if(item.hangSX === 'Sony'){
// //             arrSony.push(item);
// //         }
// //     }
// // }();

// // console.log(arrSony);

// let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

// console.log(arrSony);

// let sp5 = mangSanPham.find(sp => sp.hangSX==='Sony');

// if(sp5){
//     console.log(sp5);
// } else{
//     console.log(sp5);
//     console.log('Không tìm thấy');
// }

// //Bài tập 1 lấy ra các sản phẩm có giá trên 2k
// //bài 2 thay đổi tênn sp thứ 10 thành xiaomi mi mix 3

// let arrSanPham = mangSanPham.filter(sp=> sp.gia >= 2000);

// let renameSP = function() {
//     if(mangSanPham.length == 10){
//         mangSanPham[9].tenSP = 'Xiaomi mix 3';
//     }
// }();


// console.log('San Pham co gia tren 2k ', arrSanPham);
// console.log('San Pham thu 10 ', mangSanPham[9]);

//finđInex: tương tự find, tìm thấy trả vị trí, không thấy trả  -1

//foreach

// mangSanPham.forEach((sp, index)=>{
//     sp.gia += 1000;
//     console.log(`san pham`, sp);
// });

console.log(mangSanPham);

//map từ mảng tạp ra mảng

let htmlCard = mangSanPham.map((sp, index) => {
    return `
        <div class="card text-left">
          <img class="card-img-top" src="https://picsum.photos/id/${sp.maSP}/300/300" alt="">
          <div class="card-body">
            <h4 class="card-title">${sp.tenSP}</h4>
            <p class="card-text">${sp.gia}</p>
          </div>
        </div>
    `;
});

// htmlCard.forEach((htmSanPham, index) => {
//     document.querySelector('#danhSachSanPham').innerHTML += htmSanPham;
// })


//reduce tương tự hàm map tuy nhiên kết quả trả về là 1 giá trị , từ mảng => giá trị

let tongTienSanPham = mangSanPham.reduce((htmlSanPham, sp, index) => {
    return htmlSanPham += `
        <div class="card text-left">
        <img class="card-img-top" src="https://picsum.photos/id/${sp.maSP}/300/300" alt="">
        <div class="card-body">
            <h4 class="card-title">${sp.tenSP}</h4>
            <p class="card-text">${sp.gia}</p>
        </div>
        </div>
    `;
}, '');

document.querySelector('#danhSachSanPham').innerHTML = tongTienSanPham;


//sort theo số
mangSanPham.sort((sp, sptruoc)=>{
    let tenSanPhamm = sp.tenSP.toLowerCase().trim();
    let tenSanphamTruoc = sptruoc.tenSP.toLowerCase().trim();
    if(tenSanPhamm > tenSanphamTruoc){
        return 1;
    }
    return -1;
});
console.log('mang sx ten', mangSanPham);
// mangSanPham.reverse();
// console.log('mang sp', mangSanPham);

let arrGia = mangSanPham.sort((sp, spTruoc)=>{
    return sp.gia - spTruoc.gia;
});

console.log('sort by price', mangSanPham);
mangSanPham.reverse();