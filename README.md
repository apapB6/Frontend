# Kelompok B6 - SI PERPUSTAKAAN

## Anggota Kelompok
- [Dwi Ana Ambar Rofiqoh](https://github.com/dwianaambarr) - 1806269676
- [Riska Kurnia Dewi](https://github.com/riskakrndw/) - 1806269801
- [Shafira Fauzia](https://github.com/shafickr/) - 1806269814

## Kontrak Tahap 1 Tugas Akhir
| NPM | Nama Lengkap | Fitur yang akan diselesaikan |
|-----|--------------|------------------------------|
| 1806269676 | Dwi Ana Ambar Rofiqoh | <ol><li>Halaman Utama</li> <li>Menampilkan Daftar Buku</li> </ol> |
| 1806269801 | Riska Kurnia Dewi | <ol><li>Logout</li> <li>Menampilkan Daftar Pengajuan Peminjaman</li> </ol> |
| 1806269814 | Shafira Fauzia | <ol><li>Login</li> <li>Menampilkan Daftar Pengajuan Pengadaan</li> </ol> |

## Kontrak Tahap 2 Tugas Akhir
| NPM | Nama Lengkap | Fitur yang akan diselesaikan |
|-----|--------------|------------------------------|
| 1806269676 | Dwi Ana Ambar Rofiqoh | <ol><li>Menambah Buku</li> <li>Menampilkan Detail Buku</li> </ol> |
| 1806269801 | Riska Kurnia Dewi | <ol><li>Mengajukan Peminjaman</li> <li>Menampilkan detail peminjaman</li> </ol> |
| 1806269814 | Shafira Fauzia | <ol><li>Mengajukan Pengadaan</li> <li>Menampilkan Detail Pengadaan</li> </ol> |

## Kontrak Tahap 3 Tugas Akhir
| NPM | Nama Lengkap | Fitur yang akan diselesaikan |
|-----|--------------|------------------------------|
| 1806269676 | Dwi Ana Ambar Rofiqoh | <ol><li>Mengubah Jumlah Buku</li> <li>Menghapus Buku</li> <li>[Web Service, GET] Daftar User untuk SI-TU</li> </ol> |
| 1806269801 | Riska Kurnia Dewi | <ol><li>Mengubah Status Pengajuan Peminjaman</li> <li>Menghapus Pengajuan Pengadaan</li> <li>[Web Service, POST] Membuat Surat Peringatan Overdue ke SI-TU</li> </ol> |
| 1806269814 | Shafira Fauzia | <ol><li>[Web Service, GET] Menampilkan User Profile</li> <li>[Web Service, POST] Menambah User</li> </ol> |

## Installing
Install `java` at least version `1.8.0`, follow [this instruction](https://www.java.com/en/download/help/download_options.xml) to install Java 1.8 JDK.

After Java installed, Follow this instructions
```bash
$ git clone https://github.com/apapB6/tugas-akhir-apap-b6.git
$ cd Backend/finalproject_B6-master
$ ./mvnw install
$ ./mvnw build
$ ./mwnw spring-boot:run
```
Go to `http://localhost:8080/` to [start this application.](http://localhost:8080/)

## Deployment
Once `spring-boot-maven-plugin` has been included in your `pom.xml`, it automatically tries to rewrite archives to make them executable by using the `spring-boot:repackage` goal.
You should configure your project to build a jar or war (as appropriate) by using the usual packaging element, as shown in the following example:
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<!-- ... -->
	<packaging>jar</packaging>
	<!-- ... -->
</project>
```
[See more](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#build-tool-plugins-maven-packaging)


## Features
- [ ] Halaman Utama
- [ ] Login
- [ ] Logout
- [ ] Menambah Buku
- [ ] Menampilkan Detail Buku
- [ ] Mengubah Jumlah Buku
- [ ] Menghapus Buku 
- [ ] Mengajukan Peminjaman
- [ ] Menampilkan Daftar Pengajuan Peminjaman 
- [ ] Mengubah Status Pengajuan Peminjaman
- [ ] Mengajukan Pengadaan 
- [ ] Menampilkan Daftar Pengajuan Pengadaan
- [ ] Menghapus Pengajuan Pengadaan 
- [ ] [Web Service, GET] Daftar User untuk SI-TU
- [ ] [Web Service, POST] Membuat Surat Peringatan Overdue ke SI-TU 
- [ ] [Web Service, GET] Menampilkan User Profile
- [ ] [Web Service, POST] Menambah User 
- [ ] Menampilkan Daftar Buku
- [ ] Menampilkan Detail Pengadaan 
- [ ] Menampilkan Detail peminjaman

