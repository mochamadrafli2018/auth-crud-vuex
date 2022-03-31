<template>
  <div class="flex flex-col space-y-5 mb-3 mx-auto p-0 text-white">
    <label><input 
      type="checkbox" v-model="selected"
      name="gejala1"
      value="gejala1"
    > Peka terhadap cahaya (fotofobia)</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala2"
      value="gejala2"
    > Terasa nyeri</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala3"
      value="gejala3"
    > Tampak bintik nanah berwarna kuning keputihan pada kornea</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala4"
      value="gejala4"
    > Terdapata kotoran mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala5"
      value="gejala5"
    > Kelopak mata membengkak</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala6"
      value="gejala6"
    > Mengalami iritasi</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala7"
      value="gejala7"
    > Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala8"
      value="gejala8"
    > Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala9"
      value="gejala9"
    > Mengalami iritasi</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala10"
      value="gejala10"
    > Mata sukar dibuka ketika bangun dipagi hari</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala11"
      value="gejala11"
    > Alergi</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala12"
      value="gejala12"
    > Mata terasa panas</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala13"
      value="gejala13"
    > Mata terasa seperti kelilipan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala14"
      value="gejala14"
    > Mata berair</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala15"
      value="gejala15"
    > Nyeri pada tepi kelopak mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala16"
      value="gejala16"
    > Kornea tampak keruh</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala17"
      value="gejala17"
    > Konjungtiva meradang      </label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala18"
      value="gejala18"
    > Penglihatan kabur</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala19"
      value="gejala19"
    > Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala20"
      value="gejala20"
    > Hilangnya fungsi penglihatan pada salah satu mata, yang kemudian menyebar sejalan perkembangan ablasio</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala21"
      value="gejala21"
    > Kesulitan melihat di malam hari</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala22"
      value="gejala22"
    > Penurunan ketajaman penglihatan (bahkan siang hari)</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala23"
      value="gejala23"
    > Kemerahan pada skelra</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala24"
      value="gejala24"
    > Mata menonjol</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala25"
      value="gejala25"
    > Demam</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala26"
      value="gejala26"
    > Bola mata bengkak dan tampak berkabut</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala27"
      value="gejala27"
    > Mata merah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala28"
      value="gejala28"
    > Mata terasa gatal</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala29"
      value="gejala29"
    > Mata terasa perih</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala30"
      value="gejala30"
    > Konjungtiva menjadi merah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala31"
      value="gejala31"
    > Konjungtiva bengkak</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala32"
      value="gejala32"
    > Peradangan mata yang agak menonjol dan berwarna kuning</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala33"
      value="gejala33"
    > Mata nyeri bila ditekan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala34"
      value="gejala34"
    > Gangguan penglihatan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala35"
      value="gejala35"
    > Sakit kepala</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala36"
      value="gejala36"
    > Koma</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala37"
      value="gejala37"
    > Kejang</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala38"
      value="gejala38"
    > Sakit dengan gerakan mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala39"
      value="gejala39"
    > Kehilangan penglihatan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala40"
      value="gejala40"
    > Nyeri di daerah sekitar kantong air mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala41"
      value="gejala41"
    > Mata mengeluarkan nanah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala42"
      value="gejala42"
    > Pusing karena lelah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala43"
      value="gejala43"
    > Mengalami mual dan muntah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala44"
      value="gejala44"
    > Pupil melebar dan tidak mengecil jika diberi sinar yang terang</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala45"
      value="gejala45"
    > Sel batang retina sulit beradaptasi di ruang yang remang-remang </label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala46"
      value="gejala46"
    > Tidak dapat melihat pada lingkungan yang kurang bercahaya</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala47"
      value="gejala47"
    > Gangguan penglihatan pada salah satu mata</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala48"
      value="gejala48"
    > Garis lurus terlihat bergelombang</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala49"
      value="gejala49"
    > Mata tidak nyeri</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala50"
      value="gejala50"
    > Riwayat penyakit menular seksual pada ibu</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala51"
      value="gejala51"
    > Air mata berlebihan</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala52"
      value="gejala52"
    > Mata kering</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala53"
      value="gejala53"
    > Benjolan pada mata bagian atas atau bawah</label>
    <label><input
      type="checkbox" v-model="selected"
      name="gejala54"
      value="gejala54"
    > Seperti ada benda asing di mata</label>
    <p class='my-2'>Anda memilih gejala dengan kode : {{ selected }}</p>

    <button class='bg-indigo-500 hover:bg-indigo-600 focus:ring focus:ring-indigo-200 text-white hover:text-white mx-auto my-3 px-3 py-2 rounded-full shadow'
      @click='send()'
    >
      Submit
    </button>
    
    <!-- Loading -->
    <hr class='my-2'/>
    <p class='my-2 text-center'>Hasil skrining penyakit mata : </p>
    <div class='flex flex-row justify-center my-2 space-x-2'>
      <p v-if="resultLoading === true">
        Processing...
      </p>
      <p v-else-if="resultLoading === false">
        {{ result }}
      </p>
    </div>
    <p v-if="errorResult !== null" class="my-2">
      {{ errorResult }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'FormItem',
  components: {
  },
  data: () => ({
    selected: [],
    result: '',
    resultLoading: false,
    errorResult:''
  }),
  methods: {
    async send() {
      this.resultLoading = true;
      await axios.post('https://chatbot-backend-hapi.herokuapp.com', {
        selected: this.selected
      }).then((response) => {
        this.resultLoading = false;
        this.result = response.data.diagnosis;
      }).catch((error) => {
        this.errorResult = error.message;
      })
    }
  }
};
</script>

<style scoped>
input[type="checkbox"] {
  cursor: pointer;
}
</style>