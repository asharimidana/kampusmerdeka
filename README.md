### Perkenalan
Nama        : Ashari Midana </br>
Prodi       : Fisika </br>
Universitas : Halu Oleo </br>
Asal Daerah : Kendari Sulawesi Tenggara

### About
aplikasi ini dibangun menggunakan Express js dan Reactjs
Fitur utamanya yakni CRUD data mahasiswa secara asynchronous sehingga bisa berjalan tanpa reload membuat aplikasi lebih powerful dan cepat.

Dependencies
------------
Adapun dependency yang diperlukan untuk instalasinya yakni:
* Nodejs (`>=12`)
* mysql 
* npm (`>=8.0`)

### Instalation
1. clone repository:
```shell
git clone https://github.com/asharimidana/kampusmerdeka.git
```
2. masuk ke directory backend dan frontend untuk install module nodejs yang dibutuhkan:
```shell
cd ./kampusmerdeka/backend
npm install
```
untuk menjalankan server expressjs ketik:
```shell
npm run dev
```
jika menggunakan yarn bisa ketik `yarn install`

```shell
cd ./kampusmerdeka/frontend
npm install
```
untuk menjalankan reacjs ketik:
```shell
npm run start
```
2. setelah itu jalankan mysql dan buat database crud_db atau dapat dibuat melalui phpmyadmin
3. import crud_db.sql melalui phpmy admin
4. selah itu login ke sistem 
```shell
masuk pada: http://localhost:3000/login
username: msib@gmail.com
password: 123456
```

### Tampilan Dan Fitur Aplikasi
------------
![Demo GIF](https://github.com/asharimidana/img/blob/main/ASHARI_MIDANA_APLIKASI_PENGELOLA_DATA_MAHASISWA_AdobeExpress.gif)
