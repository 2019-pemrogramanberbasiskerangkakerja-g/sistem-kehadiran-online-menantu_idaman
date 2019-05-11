**Get All Kelas that include :NRP**
----
   

* **URL**

  /api/kelas/:nrp

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `nrp=[integer]`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all kelas data where :nrp is included> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Mata Kuliah**
----
   

* **URL**

  /api/matakuliah/all

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all matakuliah data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All :id_matkul Mata Kuliah's Data**
----
   

* **URL**

  /api/matakuliah/:id_matkul

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id_matkul=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all id_matkul matakuliah's data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Rekap Kuliah per Semester**
----
   

* **URL**

  /api/rekap/:id_matkul

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id_matkul=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all id_matkul absensi's data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Rekap Kuliah per Semester berdasarkan Pertemuan**
----
   

* **URL**

  /api/rekap/:id_matkul/:pertemuan

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id_matkul=[string]` <br/>
   `pertemuan=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all id_matkul absensi's data, based on :pertemuan> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All User Data**
----
   

* **URL**

  /api/user/all

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all user data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Absen**
----
   

* **URL**

  /api/absen/:ruang/:nrp

* **Method:**

  `POST`

*  **URL Params**

   **Required:**
 
   `ruang=[string]` <br/>
   `nrp=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <corresponding absensi and matakuliah data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Tambah Peserta**
----
   

* **URL**

  /api/matakuliah/tambahpeserta/:id_matkul/:kelas/:nrp

* **Method:**

  `POST`

*  **URL Params**

   **Required:**
 
   `id_matkul=[string]` <br/>
   `kelas=[string]` <br/>
   `nrp=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <matakuliah data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Tambah Mahasiswa**
----
   

* **URL**

  /api/user/tambahmahasiswa

* **Method:**

  `POST`

*  **Body Params**

   **Required:**
 
   `nrp=[integer]` <br/>
   `password=[string]` <br/>
   `nama=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <added user data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Tambah Mata Kuliah**
----
   

* **URL**

  /api/matakuliah/tambahmatkul

* **Method:**

  `POST`

*  **Body Params**

   **Required:**
 
   `nama=[string]` <br/>
   `kelas=[string]` <br/>
   `id_matkul=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <added mata kuliah data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Tambah Jadwal**
----
   

* **URL**

  /api/absen/tambahjadwal

* **Method:**

  `POST`

*  **Body Params**

   **Required:**
 
   `id_matkul=[string]` <br/>
   `pertemuan=[integer]` <br/>
   `waktu_mulai=[date]` <br/>
   `waktu_selesai=[date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <added mata kuliah data> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`