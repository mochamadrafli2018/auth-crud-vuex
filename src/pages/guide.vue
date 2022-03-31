<template>
  <div class="lg:h-screen md:h-screen h-full bg-gradient-to-b from-indigo-200 to-indigo-300 my-0 py-5 quicksand">
    <main class='max-w-4xl mx-auto lg:mt-8 md:mt-5 mt-3 lg:px-8 md:px-6 px-4'>
      <v-expansion-panels class="pb-5 px-6 z-10">
        <v-expansion-panel v-for="(item,index) in guides" :key="index" 
        class='my-1 rounded'>
          <v-expansion-panel-header class='bg-slate-900'>
            <p class='font-bold text-left text-lg text-white underline'>
              {{ item.title }}
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content class='bg-slate-700 py-2 text-white'>
            <p>{{ item.text }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </main>

    <footer class="bg-slate-900 text-center text-gray-200 z-20">
      <p>&copy; {{ new Date().getFullYear() }} — Mochamad Rafli Ramadhan</p>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GuidePage",
  data: () => ({
    guides: [
      {
        title:"Panduan untuk Skrining Penyakit Mata",
        text:`Untuk memulai skrining penyakit mata, pilih gejala-gejala yang di alami pada form, kemudian tekan atau klik tombol submit pada bagian bawah form.`
      },
      {
        title:"Daftar Penyakit Mata pada Sistem Pakar",
        text:`
          1.) Ulkus Kornea, 
          2.) Keratokonus, 
          3.) Kalazion,
          4.) Blefaritis, 
          5.) Hordeolum (Stye), 
          6.) Konjungtivitis, 
          7.) Trakoma, 
          8.) Abalso Retina, 
          9.) Retinopati Diabetikum, 
          10.) Glaukoma, 
          11.) Katarak, 
          12.) Uveitis, 
          13.) Selulitis Orbitalis, 
          14.) Eksoftalmus, 
          15.) Keratitis Pungtata Superfisialis, 
          16.) Alergi Mata Merah, 
          17.) Endoftalmitis, 
          18.) Trombosis Sinus Kavernosus, 
          19.) Optic Neuritis, 
          20.) Dakrioritis, 
          21.) Degenerasi Makula, 
          22.) Episkleritis, 
          23.) Infeksi Herpes Simpleks Kornea, 
          24.) Infeksi Herpes Zoster Kornea, 
          25.) Keratitis Ulserativa Perifer, 
          26.) Degenerasi Makula, 
          27.) Skleritis.`
      },
      {
        title:"Catatan Penting",
        text:`Hasil skrining dari sistem pakar ini tidak bisa dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.
        Hasil skrining tersebut bisa anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.`
      },
    ],
  })
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
footer{
  position:fixed;
  bottom:0;
  width:100%;
}
.quicksand {
  font-family: Quicksand, Arial, sans-serif;
}
</style>
