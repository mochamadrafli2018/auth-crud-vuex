<template>
  <div class="bg-gradient-to-b from-indigo-300 to-indigo-400 quicksand">
    
    <div class="bg-slate-900 text-center text-white w-full">
      Eye-Screening Form
    </div>

    <nav class='nav flex flex-row justify-center m-0 py-1 px-0 top-0 shadow lg:space-x-6 md:space-x-4 space-x-2 text-white z-20'>
      <router-link to="/" v-if="tokenEmpty === true">
        <p class="font-bold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 no-underline my-0 px-3 py-2 rounded-lg">
          Home
        </p>
      </router-link>
      <router-link to="/dashboard" v-if="tokenEmpty === false">
        <p class="font-bold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 no-underline my-0 px-3 py-2 rounded-lg">
          Home
        </p>
      </router-link>
      <router-link to="/guide">
        <p class="font-bold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 no-underline my-0 px-3 py-2 rounded-lg">
          Panduan
        </p>
      </router-link>
      <router-link to="/register" v-if="tokenEmpty === true">
        <p class="font-bold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 no-underline my-0 px-3 py-2 rounded-lg">
          Register
        </p>
      </router-link>
      <router-link to="/login" v-if="tokenEmpty === true">
        <p class="font-bold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 no-underline my-0 px-3 py-2 rounded-lg">
          Masuk
        </p>
      </router-link>
      <button v-if="tokenEmpty === false"
        class="mr-auto font-bold bg-red-500 hover:bg-red-600 focus:bg-red-700 no-underline my-0 px-3 py-2 rounded-lg"
        @click="logoutHandler"
      >
        Keluar
      </button>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  data () {
    return {
      tokenEmpty: true,
    }
  },
  components: {
  },
  created () {
    // created() is used to call function when page reload
    if (typeof window !== 'undefined') {
      // check token exist or not
      const token = localStorage.getItem('token');
      if(!token) { 
        this.tokenEmpty = true;
      }
      else {
        this.tokenEmpty = false;
      }
      // call authorization function
    }
  },
  methods: {
    // log out handler
    logoutHandler() {
      //remove token from localStorage
      localStorage.removeItem('token');
      this.$router.push('/login');
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