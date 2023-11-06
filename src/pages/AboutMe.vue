<template>
    <q-page class="bg-grey-1">
      <q-header>
        <q-toolbar-title></q-toolbar-title>
      </q-header>
      <q-page-container>
        <div class="row justify-center">
          <div class="col-12 col-sm-8 col-md-6">
            <q-card>
              <q-card-section>
                <div class="row items-center">
                  <div class="col-auto">
                    <q-img
                      src="../assets/AdwaitImage.png"
                      alt="User's profile picture"
                      class="rounded-borders"
                      width="100px"
                      height="100px"
                    />
                  </div>
   
                  <div class="col">
                    <h4 class="text-name">Adwait Deshpande</h4>
                    <p class="text-subtitle2 text-grey-8">Software Engineer</p>
                  </div>
                </div>
              </q-card-section>
   
              <q-separator />
   
              <q-card-section>
                <h4 class="text-head-name">About Adwait</h4>
                <p class="text-grey-8">
                  I'm a Software Engineer who is excited to work in an organization where I can utilize and improve my skills and knowledge for the betterment and interest of the organization and also to grow with the organization.
                  <br>
                  <br>Skills: Python | Powershell | Docker | Kubernetes 
                  <br><br>Smart Worker | Proactive | Calm | Curious to Learn | Go Getter
                </p>
                
                <h4 class="text-head-name">Education </h4>
                <p class="text-grey-8">
                  College : Shri Ramdeobaba College of Engineering and Management, Nagpur
                  8.6 CGPA<br>
                  Schooling : R.S. Mundle English School and Junior College, Nagpur
                  93% <br>
                </p>

                <h5 class="text-head-name">Other me</h5>
                <div class="interest-button">
                    <q-btn color="primary" class="about-button" label="My Artworks" @click="$event => $router.push('/adwait/interest')"/>
                </div>
                <p class="text-grey-8">
                  Other than this i'm an artist and I play variours musical instruments.
                </p>
   
              </q-card-section>
   
              <q-separator />
   
              <q-card-section>
                <h5 class="text-head-name">Contact Adwait </h5>
                <p class="text-grey-8">
                  Email: Adwait.Deshpande1@ltimindtree.com <br>
                  Contact: +91 7219847196
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page-container>
    </q-page>
  </template>
   
  <style>
   .interest-button {
    margin: 0;
  position: absolute;
  top: 82%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
   }
    .text-head-name {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #435b5c;
    }
    .text-name {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #435b5c;
    }

    .bg-grey-1 {
      background-color: #ffffff;
    }
   
    .rounded-borders {
      border-radius: 50%;
    }
   
    .text-primary {
      color: #5c4343;
    }
   
    .text-grey-8 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color: #888888;
    }
  </style>