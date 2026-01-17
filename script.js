const form = document.getElementById("formDaftar");
const pesan = document.getElementById("pesan");
const listPeserta = document.getElementById("listPeserta");
const sisaKuota = document.getElementById("sisaKuota");
const bagianForm = document.getElementById("bagianForm");

const batasPeserta = 50;
let daftarPeserta = JSON.parse(localStorage.getItem("dataPeserta")) || [];

renderPeserta();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (daftarPeserta.length >= batasPeserta) {
    tampilPesan("Pendaftaran ditutup. Kuota sudah penuh.", "error");
    return;
  }

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const nohp = document.getElementById("nohp").value.trim();
  const kategori = document.getElementById("kategori").value;

  if (!nama || !email || !nohp || !kategori) {
    tampilPesan("Semua data wajib diisi.", "error");
    return;
  }

  const polaHp = /^[+0-9\s]+$/;
  if (!polaHp.test(nohp)) {
    tampilPesan("Nomor HP hanya boleh angka.", "error");
    return;
  }

  daftarPeserta.push({ nama, email, nohp, kategori });
  localStorage.setItem("dataPeserta", JSON.stringify(daftarPeserta));

  tampilPesan("Pendaftaran berhasil. Terima kasih!", "sukses");

  form.reset();
  renderPeserta();
});

function renderPeserta() {
  listPeserta.innerHTML = "";
  sisaKuota.textContent = batasPeserta - daftarPeserta.length;

  daftarPeserta.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${p.nama}</strong>
      <p>${p.email}</p>
      <p>${p.nohp}</p>
      <p>${p.kategori}</p>
    `;
    listPeserta.appendChild(card);
  });

  if (daftarPeserta.length >= batasPeserta) {
    bagianForm.style.display = "none";
    tampilPesan("Pendaftaran ditutup. Kuota sudah penuh.", "error");
  }
}

function tampilPesan(teks, tipe) {
  pesan.textContent = teks;
  pesan.className = tipe === "error" ? "pesan-error" : "pesan-sukses";
  pesan.style.display = "block";
}
