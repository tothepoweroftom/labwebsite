<template>
  <div class="container-fluid">
  
    <div class="row" style="padding-top: 5vh;">
  
      <div class="col-md-8" >
        <div class="row">
  
  
          <div class="col-md-6 col-xs-12 col-sm-8" v-for="(card, index) in cards" :key="index" style="margin-bottom:60px;">
            <project-card>
              <img v-bind:src="card.image" alt="Card Image" slot='image'>
  
              <div slot="footer">
                <h5 class="date">
                  {{card.date}}
                </h5>
  
                <h1 class="title">
                  {{card.title}}
                </h1>
  
                <h5 class="subtitle truncate">
                  {{card.subtitle}}
                </h5>
              </div>
  
  <!-- Ensure grid system -->
                <div class="w-100"></div>

            </project-card>

          </div>
          
  
        </div>
  
  
      </div>
  
      <div class="col-md-3 social" style="max-height: 100vh; overflow-y: scroll">
        
  
  
      </div>
    </div>
  
  
  
  
  
  
  </div>
</template>

<script>
  import ProjectCard from '../../UIComponents/Cards/ProjectCard'
  import {
    Tweet,
    Moment,
    Timeline
  } from 'vue-tweet-embed'
  
  export default {
    components: {
      ProjectCard,
      Timeline
    },
  
    data() {
      return {
  
        cards: [{
            date: '01 04 18',
            title: 'Smartify',
            subtitle: 'Smartify is a free app that allows you to scan and identify artworks, access rich interpretation and build a personal art collection in some of the world’s best museums and galleries.',
            image: 'static/img/card-dummy/card1.png',
  
          },
          {
            date: '01 04 18',
            title: 'Alexa X Dos Equis',
            subtitle: 'Use voice to order a cold beer delivered to your door.',
            image: 'static/img/card-dummy/card2.png',
  
          },
          {
            date: '01 04 18',
            title: 'Plants Learn To Speak Because Money Talks',
            subtitle: 'A Medium Article About a Blockchain Experiment by Charles Fried, Monique Grimord, and Tom Power',
            image: 'static/img/card-dummy/card3.png',
  
          },
          {
            date: '01 04 18',
            title: 'Plants Learn To Speak Because Money Talks',
            subtitle: 'A Medium Article About a Blockchain Experiment by Charles Fried, Monique Grimord, and Tom Power',
            image: 'static/img/card-dummy/card2.png',
  
          },
          {
            date: '01 04 18',
            title: 'Smartify',
            subtitle: 'Smartify is a free app that allows you to scan and identify artworks, access rich interpretation and build a personal art collection in some of the world’s best museums and galleries.',
            image: 'static/img/card-dummy/card1.png',
  
          },
          {
            date: '01 04 18',
            title: 'Plants Learn To Speak Because Money Talks',
            subtitle: 'A Medium Article About a Blockchain Experiment by Charles Fried, Monique Grimord, and Tom Power',
            image: 'static/img/card-dummy/card3.png',
  
          },
          {
            date: '01 04 18',
            title: 'Plants Learn To Speak Because Money Talks',
            subtitle: 'A Medium Article About a Blockchain Experiment by Charles Fried, Monique Grimord, and Tom Power',
            image: 'static/img/card-dummy/card2.png',
  
          }
  
  
  
        ],
  
      }
    }
  }
</script>

<style scoped>
  .date {
    font-weight: 100;
    padding-top:10px;
    margin-bottom: 5px;
    color: white;
    opacity: 0.6;
    letter-spacing: 0.05em;
  }
  
  .title {
    font-family: 'Graphik', sans-serif;
    /* font-size: 3rem; */
    color: whitesmoke;
    letter-spacing: 0.03em;
    font-size: 24pt;
  }
  
  .subtitle {
    font-size: 96%;
    color: rgb(207, 207, 207);
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
    max-width: 90%;
  }
  
  .truncate {
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .social {
    border-left: 1px solid white;
    min-height: 100vh;
  }

  .timeline-Widget {
    background: transparent !important;
  }
</style>
