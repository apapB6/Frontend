## Application Programming Interface

### List
| No | Web Service | Method | URL |
|----|-------------|--------|-----|
| 1 | Daftar User untuk SI-TU | GET | [https://si-perpus-b6.herokuapp.com/api/employees](#apicheckstatus) |
| 2 | Membuat Surat Peringatan Overdue ke SI-TU | POST | [https://si-perpus-b6.herokuapp.com/api/add-surat](#apicheckstatus) |
| 3 | Menampilkan User Profile | GET | [https://si-perpus-b6.herokuapp.com//api/user-profile/{uuid}](#apicheckstatus) |
| 4 | Menambah User | POST | [https://si-perpus-b6.herokuapp.com/api/add-user](#apicheckstatus) |

#### URL : `https://si-perpus-b6.herokuapp.com/api/employees`
#### Method : `GET`

### Response
```json
[
    {
        "username": "userpustakawan",
        "id_role":"5"
    },
    {
        "username": "userguru",
        "id_role":"3"
    },
    {
        "username": "usersiswa",
        "id_role":"4"
    }
]
```

#### URL : `https://si-perpus-b6.herokuapp.com/api/add-surat`
#### Method : `POST`

### Response
```json
{
        "nomor_surat": "-",
	"tanggal_pengajuan": "2020-05-06",
	"tanggal_disetujui": null,
	"keterangan":"Overdue Peminjaman Buku",
	"status": 0,
	"id_jenis_surat": 5,
	"uuid_user":"1"
}
```

#### URL : `https://si-perpus-b6.herokuapp.com//api/user-profile/{uuid}`
#### Method : `GET`

### Response
```json
{
    "id": 1,
    "nama": "Shafira Fauzia",
    "uuid": "8b4304d55be44583be9ae3e957e5d996",
    "nip":"P26061996b43804d55be44583be9ae3e957e5d996",
    "tempat_lahir": "Bogor",
    "tanggal_lahir": "1996-06-26",
    "alamat": "Bogor",
    "telepon": "08222919199",
    "username": "shafickr",
    "password": "4695486786b27a4036f0e7bfb19545ba",
    "id_role": 5
}
```

#### URL : `https://si-perpus-b6.herokuapp.com/api/add-user`
#### Method : `POST`

### Response
```json
{
	body: false
}
```