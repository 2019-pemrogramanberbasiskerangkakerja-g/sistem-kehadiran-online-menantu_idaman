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
**Get All :id_matkul Absensi's Data**
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
**Get All :id_matkul Absensi's Data, based on :pertemuan**
----
   

* **URL**

  /api/rekap/:id_matkul/:pertemuan

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id_matkul=[integer]` <br/>
   `pertemuan=[integer]`

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