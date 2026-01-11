# QACIMB — FAQ (คำถามที่พบบ่อย)

ไฟล์นี้เป็นหน้าเว็บสแตติก (index.html) ที่พร้อมเผยแพร่ — แยก CSS/JS ออกเป็นไฟล์ภายนอก เพื่อให้ง่ายต่อการดูแล

วิธีใช้งาน (เผยแพร่ผ่าน GitHub Pages)
1. ไฟล์ที่ถูกเพิ่ม: `index.html`, `assets/styles.css`, `assets/scripts.js`, `README.md`
2. อยู่ที่ branch `main` แล้ว — หน้าเว็บจะพร้อมเผยแพร่ผ่าน GitHub Pages
3. ไปที่ Settings ของ repository → Pages
4. เลือก branch `main` และโฟลเดอร์ `/(root)`
5. กด Save — รอสักครู่ แล้วหน้าเว็บจะพร้อมใช้งานที่ `https://<username>.github.io/<repo>/`

เช็คลิงก์เอกสาร
- ไฟล์ PDF/เอกสารที่เชื่อมโยงมาจาก Google Drive ควรตั้งค่าสิทธิ์การแชร์เป็นสาธารณะ (Anyone with link) หากต้องการให้ผู้อื่นดาวน์โหลดได้โดยไม่ติดสิทธิ์

ปรับแต่งเพิ่มเติม (คำแนะนำ)
- เปลี่ยนค่า `<link rel="canonical">` ใน `index.html` เป็น URL จริงเมื่อเผยแพร่
- หากต้องการให้หลายรายการเปิดพร้อมกัน ให้เพิ่ม attribute `data-multi="true"` ที่ `<section id="faq">`
- หากต้องการนำ CSS/JS ไปรวมกับระบบ build ให้แก้เส้นทางใน `index.html` ตามนั้น

หากต้องการ ผมช่วย:
- สร้าง PR แทนการ push ตรง
- เพิ่ม favicon ไฟล์จริง (ico/png)
- ปรับให้รองรับหลายภาษา (ไทย/อังกฤษ)
