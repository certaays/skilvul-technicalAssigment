1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu
![Screenshot 2021-09-21 225847](https://user-images.githubusercontent.com/71106437/134215308-5fbef5ea-6739-4c5a-9cec-d9fc48869804.png)
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.
**git clone https://github.com/certaays/tech4impact-students-bio.git**
3. Buatlah branch baru dengan nama lengkap kamu. Misalnya david-winalda. Jangan melakukan perubahan pada branch master.
**git branch certa-yustitia**
4. Checkout ke dalam branch tersebut yang telah kamu buat
**git checkout certa-yustitia**
5. Buatlah 1 file format .md dengan nama lengkap kamu. Contoh davidwinalda.md
**touch certayustitia.md**
6. Isi file tersebut davidwinalda.md dengan konten di bawah ini:
Nama Lengkap: David Winalda
Umur: 27
Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
![Screenshot 2021-09-21 231532](https://user-images.githubusercontent.com/71106437/134215368-acd6898e-bdf0-450a-a5bd-17520bb82b2d.png)
7. Masukkan file .md tersebut ke dalam staging area
**git add certayustitia.md**
8. Commit dengan memberikan pesan nama file .md kamu
**git commit -m "certayustitia.md"**
9. Merge branch yang telah kamu buat ke dalam branch master
**git checkout master**
**git merge certayustitia**
10. Push ke dalam branch master
**git push -u origin master**
11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch master pada GitHub Repository aslinya.
![image](https://user-images.githubusercontent.com/71106437/134215555-9f6bd43c-eda2-4932-89a5-fe56dab264b2.png)
