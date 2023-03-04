<template>
  <div>
    <v-container>
      <PhotoForm @addPhoto="addPhoto" />
      <v-row>
        <Photo 
          v-for="photo in photos"
          :key="photo.id"
          :photo="photo"
          @openPhoto="openPhoto"
        />
      </v-row>

      <PhotoDialog 
        :photo="currentPhoto"
        v-model="dialogVisible"
      />

    </v-container>
  </div>
</template>

<script>
import Photo from '@/components/photo/Photo';
import PhotoForm from '@/components/photo/PhotoForm';
import PhotoDialog from '@/components/photo/PhotoDialog';

  export default {
    components: {
      Photo,
      PhotoForm,
      PhotoDialog
    },

    data: () => ({
      photos: [],
      currentPhoto: {},
      dialogVisible: false
    }),

    mounted() {
      this.fetchTodo()
    },

    methods: {
      fetchTodo() {
        this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
          .then(response => this.photos = response.data)
      },

      addPhoto(photo) {
        this.photos.push(photo)
      },

      openPhoto(photo) {
        this.currentPhoto = photo
        this.dialogVisible = true
      },


    }

  }
</script>

<style lang="scss" scoped>

</style>