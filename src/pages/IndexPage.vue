<template>
<br><br>

  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="src/assets/imgbg.jpg"
    >
    <div class="index-image">
                    <q-img
                      src="src/assets/adwaitPort.png"
                      alt="User's profile picture"
                      class="rounded-borders"
                      width="150px"
                      height="150px"
                    />
                  </div>
      <!-- <h1 class="text-white"></h1> -->
      <h4 class="hello">Hello World!</h4>
      <h5 class="desc"> Welcome to my portfolio website!</h5>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" class="about-button" label="About Me" @click="$event => $router.push('/adwait/about')"/>
    </div>
    </q-parallax>

    </div>
  </div>

</template>

<style>
.index-image {
  margin: 0;
  position: absolute;
  top: 20%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.desc {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: aliceblue;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.hello {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(255, 255, 255);
  margin: 0;
  position: absolute;
  top: 43%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.about-button {
  margin: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>
