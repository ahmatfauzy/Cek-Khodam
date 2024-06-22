document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("khodamPage").classList.remove("hidden");
  });

  document
    .getElementById("khodamForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value;
      const hasil = [
        {
          deskripsi: "Ikan Berkepala Lele!",
          gambar: "img/lele.png",
        },
        {
          deskripsi: "Roger Sumatera!",
          gambar: "img/rogersumatra.png",
        },
        {
          deskripsi: "MasBro!",
          gambar: "img/masbro.png",
        },
        {
          deskripsi: "Kucing!",
          gambar: "img/kucing.png",
        },
        {
          deskripsi: "Kucing Hitler",
          gambar: "img/kucinghitler.png",
        },
      ];

      const randomHasil = hasil[Math.floor(Math.random() * hasil.length)];
      document.getElementById("hasilCek").innerHTML = `
            <p>Hi ${nama}, khodam Anda adalah</p>
            <img src="${randomHasil.gambar}" alt="${randomHasil.deskripsi}" class="mt-4 mx-auto rounded-lg shadow-lg" />
        `;
    });

  // Teks reset
  document.getElementById("resetText").addEventListener("click", function () {
    document.getElementById("nama").value = ""; // value reset
    document.getElementById("hasilCek").innerHTML = ""; // hapus
  });
});
