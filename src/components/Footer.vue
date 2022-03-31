<template>
  <footer class="bg-slate-900 flex flex-col justify-center mt-8 p-3 text-center w-full">
    <p class="my-2 text-gray-200">
      Released under the 
      <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
        target="_blank"
        class="text-white underline"
      >MIT License</a>
    </p>
    <p class="my-2 text-gray-200">
      &copy; {{ new Date().getFullYear() }} — Mochamad Rafli Ramadhan
    </p>
    <div class="flex flex-row justify-center my-2 space-x-5">
      <a v-for="(icon,index) in icons" :key="index" :href= "icon.link" target="_blank"
        class="bg-gray-200 hover:bg-white text-white p-1 rounded-lg"
      >
      <v-icon class='icon text-white' size="24px">
        {{ icon.logo }}
      </v-icon>
      </a>
    </div>
  </footer>
</template>

<script>
export default ({
  name: 'FooterItem',
  data: () => ({
    icons: [
      {
        logo:'mdi-github',
        link:'https://www.github.com/mochamadrafli2018'
      },
      {
        logo:'mdi-email',
        link:'https://mail.google.com/mail/?view=cm&fs=1&to=mochamadrafli2018@mail.ugm.ac.id'
      },
      {
        logo:'mdi-linkedin',
        link:'https://www.linkedin.com/in/mochamad-rafli-ramadhan'
      },
      {
        logo:'mdi-instagram',
        link:'https://www.instagram.com/rafli.r.rmdhn'
      },
    ],
  }),
})
</script>
