/* =====================================================================
   ตื่นมาก็ชาเย็น (WAKE UP CHA) — ข้อมูลเว็บไซต์ (แก้ตรงนี้ที่เดียว!)
   ---------------------------------------------------------------------
   วิธีแก้: เปลี่ยนข้อความ/ราคา/ลิงก์ในลิสต์ด้านล่างได้เลย
   วิธีใส่รูป: เอารูปไปวางในโฟลเดอร์ assets/images/ แล้วใส่ชื่อไฟล์ในช่อง img
              ถ้าเว้นว่าง ("") จะแสดงเป็นกล่อง placeholder สีสวยแทน
   ===================================================================== */

/* ---------- เมนู / สินค้าหน้าร้าน ---------- */
/* หมายเหตุ: ชื่อ/ราคา/คำอธิบาย อามีมี่เดาจากรูปให้ก่อน — ฟานแก้ได้ตรงนี้เลย */
const MENU = [
  { name: "ชาเย็น THAITEA",   tag: "ซิกเนเจอร์", desc: "ชาไทยรสเข้มข้น หอมกลมกล่อม เมนูประจำร้าน", price: "30฿",  img: "thaitea.jpg" },
  { name: "ชามุกชีส",         tag: "ซิกเนเจอร์", desc: "ชาไทยหอมมัน ท็อปด้วยชีสนุ่มๆ เพิ่มมุกหนึบเต็มแก้ว", price: "45฿",  img: "cha-muk-cheese.jpg" },
  { name: "ชาชีส",            tag: "ยอดนิยม",   desc: "ชาเย็นเข้มข้น ราดชีสฟูนุ่ม เค็มหวานลงตัว",  price: "40฿",  img: "cha-cheese.jpg" },
  { name: "ชานมไข่มุก",       tag: "ยอดนิยม",   desc: "ชานมหอมกลมกล่อม ไข่มุกหนึบเต็มแก้ว",       price: "45฿",  img: "bubble-milk-tea.jpg" },
  { name: "มัทฉะปั่น",        tag: "",          desc: "มัทฉะแท้เข้มข้น ปั่นเนียนเย็นชื่นใจ",       price: "55฿",  img: "matcha-frappe.jpg" },
  { name: "ช็อกโกแลตปั่น",    tag: "",          desc: "ช็อกโกแลตเข้มข้น ปั่นนุ่มหอมหวาน",         price: "55฿",  img: "choco-frappe.jpg" },
  { name: "โอริโอ้ปั่น",       tag: "",          desc: "คุกกี้ครีมปั่นเนียน ท็อปวิปครีมจัดเต็ม",     price: "55฿",  img: "oreo-frappe.jpg" },
  { name: "สตรอเบอร์รี่ปั่น",  tag: "",          desc: "สตรอเบอร์รี่สดปั่น หวานอมเปรี้ยวสดชื่น",     price: "55฿",  img: "strawberry-frappe.jpg" },
  { name: "ชาเย็นปั่น",        tag: "",          desc: "ชาไทยซิกเนเจอร์ ปั่นเนียนเย็นซ่าชื่นใจ",      price: "55฿",  img: "" },
  { name: "เค้ก & เบเกอรี",   tag: "ทำสดทุกวัน", desc: "ของหวานเข้าคู่เครื่องดื่ม อบใหม่จากครัวกลาง", price: "75฿",  img: "" },
];

/* ---------- 4 สาขา ----------
   mapUrl: วางลิงก์ Google Maps ของแต่ละสาขา (เปิด Google Maps > แชร์ > คัดลอกลิงก์) */
const BRANCHES = [
  { no: "สาขา 1", name: "โรงเหล้าข",   hours: "ทุกวัน 07:00 – 21:00 (2 กะ)", note: "ใส่ที่อยู่สาขา", mapUrl: "#" },
  { no: "สาขา 2", name: "จะบังติกอ",   hours: "ทุกวัน 07:00 – 21:00 (2 กะ)", note: "ใส่ที่อยู่สาขา", mapUrl: "#" },
  { no: "สาขา 3", name: "เยื้องบิ๊กซี", hours: "ทุกวัน 07:00 – 19:00",         note: "ใส่ที่อยู่สาขา", mapUrl: "#" },
  { no: "สาขา 4", name: "นาเกลือ",     hours: "ทุกวัน 07:00 – 19:00",         note: "ใส่ที่อยู่สาขา", mapUrl: "#" },
];

/* ---------- สินค้าแพ็กพร้อมส่งต่างจังหวัด ---------- */
const SHIPPING = [
  { name: "ชาเย็นขวดพร้อมดื่ม", desc: "ชาเย็นสูตรร้าน บรรจุขวดพร้อมดื่ม ส่งทั่วไทย เปิดฝาดื่มได้เลย", price: "เริ่ม 59฿", img: "cha-bottle.jpg" },
  { name: "มัทฉะขวดพร้อมดื่ม", desc: "มัทฉะแท้เข้มข้น บรรจุขวดพร้อมดื่ม ส่งถึงบ้านทั่วไทย", price: "เริ่ม 69฿", img: "matcha-bottle.jpg" },
  { name: "ชาเย็นชงเอง (เซ็ตซอง)",  desc: "ผงชาเย็นสูตรร้าน แบ่งซองพร้อมชง ชงง่ายอร่อยที่บ้าน", price: "เริ่ม 149฿", img: "" },
  { name: "ผงชาไทยคัดพิเศษ",   desc: "ผงชาไทยสูตรร้าน คัดพิเศษจากครัวกลาง ขนาด 250 ก.",     price: "เริ่ม 220฿", img: "" },
  { name: "เซ็ตของฝาก",       desc: "เซ็ตรวมของอร่อย เหมาะเป็นของฝากสุดพรีเมียม",   price: "เริ่ม 350฿", img: "" },
];

/* ---------- รีวิวลูกค้า ---------- */
const REVIEWS = [
  { stars: 5, text: "ชาเย็นหอมกลมกล่อมมาก บรรยากาศร้านนั่งสบาย พนักงานน่ารัก จะมาอีกแน่นอนค่ะ", name: "คุณมายด์",  loc: "ลูกค้าประจำ สาขาเยื้องบิ๊กซี" },
  { stars: 5, text: "สั่งชาเย็นชงเองมาลองที่บ้าน ชงง่ายแถมอร่อยเหมือนนั่งดื่มที่ร้านเลย", name: "คุณโจ้",    loc: "ลูกค้าต่างจังหวัด" },
  { stars: 5, text: "ราคาน่ารัก คุณภาพเกินราคา เป็นร้านประจำของครอบครัวไปแล้ว", name: "คุณแนน",   loc: "ลูกค้าประจำ สาขานาเกลือ" },
];

/* =====================================================================
   ส่วนการทำงาน (ไม่ต้องแก้ก็ได้)
   ===================================================================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ----- ใส่รูปจาก data-img / สร้าง placeholder ถ้าไม่มีรูป ----- */
function applyImg(el, src, label) {
  if (!src) { if (label) el.setAttribute("data-label", label); el.classList.add("placeholder"); return; }
  const test = new Image();
  test.onload = () => { el.style.backgroundImage = `url('${src}')`; el.classList.add("has-img"); el.classList.remove("placeholder"); };
  test.onerror = () => { if (label) el.setAttribute("data-label", label); el.classList.add("placeholder"); };
  test.src = src;
}

/* ----- เรนเดอร์เมนู ----- */
function renderMenu() {
  $("#menuGrid").innerHTML = MENU.map(m => `
    <article class="menu-card reveal">
      <div class="menu-img" data-src="${m.img ? 'assets/images/' + m.img : ''}" data-label="รูปเมนู"></div>
      <div class="menu-body">
        ${m.tag ? `<span class="menu-tag">${m.tag}</span>` : ""}
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <span class="menu-price">${m.price}</span>
      </div>
    </article>`).join("");
}

/* ----- เรนเดอร์สาขา ----- */
function renderBranches() {
  $("#branchGrid").innerHTML = BRANCHES.map(b => `
    <article class="branch-card reveal">
      <span class="branch-num">${b.no}</span>
      <h3>${b.name}</h3>
      <div class="branch-meta">
        <span><span class="ic">🕒</span> ${b.hours}</span>
        <span><span class="ic">📍</span> ${b.note}</span>
      </div>
      <a class="btn btn-primary" href="${b.mapUrl}" target="_blank" rel="noopener">ดูแผนที่</a>
    </article>`).join("");
}

/* ----- เรนเดอร์สินค้าส่ง ----- */
function renderShipping() {
  $("#shipGrid").innerHTML = SHIPPING.map(s => `
    <article class="ship-card reveal">
      <div class="ship-img" data-src="${s.img ? 'assets/images/' + s.img : ''}" data-label="รูปสินค้า"></div>
      <div class="ship-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <span class="ship-price">${s.price}</span>
      </div>
    </article>`).join("");
}

/* ----- เรนเดอร์รีวิว ----- */
function renderReviews() {
  $("#reviewGrid").innerHTML = REVIEWS.map(r => `
    <article class="review-card reveal">
      <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review-text">“${r.text}”</p>
      <div class="review-author">
        <div class="review-avatar">${r.name.replace(/^คุณ/, "").trim().charAt(0) || "★"}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-loc">${r.loc}</div>
        </div>
      </div>
    </article>`).join("");
}

/* ----- ใส่รูปทุกกล่องหลังเรนเดอร์ ----- */
function hydrateImages() {
  $$("[data-src]").forEach(el => applyImg(el, el.getAttribute("data-src"), el.getAttribute("data-label")));
  $$("[data-img]").forEach(el => applyImg(el, el.getAttribute("data-img"), el.getAttribute("data-label")));
}

/* ----- Navbar: เปลี่ยนสีตอนเลื่อน + เมนูมือถือ ----- */
function initNav() {
  const navbar = $("#navbar"), toggle = $("#navToggle"), links = $("#navLinks");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll);
  toggle.addEventListener("click", () => { links.classList.toggle("open"); toggle.classList.toggle("open"); });
  $$("a", links).forEach(a => a.addEventListener("click", () => { links.classList.remove("open"); toggle.classList.remove("open"); }));
}

/* ----- Reveal on scroll ----- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ----- ฟอร์มติดต่อ (เด้งข้อความขอบคุณ — ยังไม่ส่งจริง) ----- */
function handleContact(e) {
  e.preventDefault();
  const note = $("#formNote");
  note.textContent = "✓ ขอบคุณค่ะ! เราได้รับข้อความแล้ว จะติดต่อกลับโดยเร็วที่สุด";
  e.target.reset();
  setTimeout(() => { note.textContent = ""; }, 6000);
  return false;
}

/* ----- เริ่มทำงาน ----- */
document.addEventListener("DOMContentLoaded", () => {
  renderMenu(); renderBranches(); renderShipping(); renderReviews();
  hydrateImages();
  initNav();
  initReveal();
  $("#year").textContent = new Date().getFullYear() + 543; // พ.ศ.
});
