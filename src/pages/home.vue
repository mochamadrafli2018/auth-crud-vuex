<template>
  <div class="bg-gradient-to-b from-indigo-200 to-indigo-300 my-0 pt-5 pb-0 quicksand">
    <main class="max-w-4xl mx-auto my-0 px-2">
      <p class="font-semibold text-black my-2 lg:text-3xl md:lg:text-3xl text-2xl text-center leading-7">
        Web App Skrining Penyakit Mata berbasis Form
      </p>
      <!-- Form -->
      <div class="bg-slate-900 mt-5 px-6 pb-3 overflow-hidden rounded-lg">
        <p class="my-2 text-xl text-center text-white">
          Pilih Beberapa Gejala Penyakit Mata di Bawah ini
        </p>
        <hr class="my-2"/>
        <Form/>
      </div>
    </main>
    
    <Footer/>
  </div>
</template>

<script>
import Form from "../components/Form.vue"
import Footer from "../components/Footer.vue"
export default {
  name: "HomePage",
  components: {
    Form, 
    Footer
  },
  methods: {
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
.quicksand {
  font-family: Quicksand, Arial, sans-serif;
}
</style>