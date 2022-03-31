<template>
  <div class="h-screen bg-gradient-to-b from-indigo-200 to-indigo-300 my-0 py-5 quicksand">
    <form onSubmit={} class="bg-slate-900 max-w-md mx-auto my-0 lg:p-7 md:p-5 p-5 rounded-xl text-white text-md">
      <h3 class='font-bold lg:text-2xl md:text-2xl text-xl'>Login Pengguna</h3>
      <p>Silahkan login dengan isi data berikut.</p>
      <div class='flex flex-col lg:my-3 md:my-3 sm:my-2'>
        <label>Email</label>
        <input
          v-model="email"
          class='bg-indigo-100 border-2 border-indigo-500 hover:border-indigo-600 px-2 py-1 rounded text-black' 
          placeholder='Masukkan Alamat Email'
        />
      </div>
      <!-- Validation -->
      <div v-if="emailEmpty === true" 
        class="border-2 border-red-300 bg-red-100 p-3 rounded text-black"
      >
        Email harus di isi
      </div>

      <div class='flex flex-col lg:my-3 md:my-3 sm:my-2'>
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class='bg-indigo-100 border-2 border-indigo-500 hover:border-indigo-600 px-2 py-1 rounded text-black' 
          placeholder='Masukkan Password'
        />
      </div>
      <!-- Validation -->
      <div v-if="passwordEmpty === true" 
        class="border-2 border-red-300 bg-red-100 p-3 rounded text-black"
      >
        Password harus di isi
      </div>

      <button class='bg-indigo-500 hover:bg-indigo-600 focus:ring focus:ring-indigo-200 text-white mx-auto lg:my-3 md:my-3 my-2 px-4 py-2 rounded w-full'
        @click='login' type='button'
      >
        MASUK
      </button>
      <!-- Validation -->
      <div v-if="send === true"
        class="border-2 border-indigo-300 bg-indigo-100 p-3 rounded text-black"
      >
        Tunggu sebentar...
      </div>
      <div v-if="errorMessage === 'Request failed with status code 409'"
        class="border-2 border-red-300 bg-red-100 p-3 rounded text-black"
      >
        Email terdaftar, tapi password salah.
      </div>
      <div v-if="errorMessage === 'Request failed with status code 500'"
        class="border-2 border-red-300 bg-red-100 p-3 rounded text-black"
      >
        Email tidak terdaftar, silahkan daftar terlebih dahulu.
      </div>

      <hr class='my-2'/>
      <p>Belum punya akun? Daftar <router-link class='font-bold underline' to='/register'>
        di sini</router-link>
      </p>
    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data () {
    return {
      // initial state
      email:'',
      password:'',
      errorMessage:'',
      send:false,
      // input validation
      emailEmpty:false,
      passwordEmpty:false,
      // component data
      links: [
        {text:'Home',url:'/'},
        {text:'Daftar',url:'/register'},
        {text:'Masuk',url:'/login'},
      ],
    }
  },
  methods: {
    // user authorization
    async login() {
      await axios.post("http://localhost:5000/api/login",
        ({
          email: this.email,
          password: this.password,
        })
      ).then(response => {
        this.send = true;
        this.errorMessage = '';
        // set token on local storage
        (localStorage.setItem('token', response.data.token));
        this.$router.push('/dashboard');
      }).catch(error => {
        this.send = false;
        this.errorMessage = error.message;
      })
    }
  },
  watch: {
    // whenever data in v-model changes, this function will run
    email(value) {
      if (value !== '') {this.emailEmpty = false;}
      if (value === '') { this.emailEmpty = true; }
    },
    password(value) {
      if (value !== '') {this.passwordEmpty = false;}
      if (value === '') { this.passwordEmpty = true; }
    },
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
.quicksand {
  font-family: Quicksand, Arial, sans-serif;
}
.nav{
  background-color:transparent;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width:100%;
}
</style>
