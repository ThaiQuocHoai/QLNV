import {NhanVien} from './NhannVien.js'

export class LaoCong extends NhanVien{
    constructor(name){
        super(name);
    }

    congViec(){
        console.log('cong viec');
    }

    tinhLuong(){
        return super.tinhLuong() + 2000;
    }
}

let laoCong = new LaoCong();
// laoCong.

//co the export array

export const arrSinhVien = [{ma:1, ten:'a'}, {ma:2, ten:'b'}];

//export default: mỗi file import chỉ được 1 lệnh và import có thể rename mà ko cần viết đúng tên
export default LaoCong;