// Autor: Juan Blanco dev :)
// Para: Clase 03 - Alura LATAM

const catalogContainer = document.querySelector('.container .catalog')

const youtubers = [
  {
    name: 'Programación ATS',
    createdAt: '5 Noviembre 2015',
    suscribers: '631k',
    url: 'https://www.youtube.com/@ProgramacionATS',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mdklU2Z-nQJE840nqMorTLuqzNa9y0TeezqQMd1Q=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'Fazt',
    createdAt: '7 Agosto 2015',
    suscribers: '567k',
    url: 'https://www.youtube.com/@FaztTech',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_k-fooXOibTlK8EQg2rzup0nUq2l2XZk0H2vlfDUQ=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'Fazt Code',
    createdAt: '15 Mayo 2017',
    suscribers: '243k',
    url: 'https://www.youtube.com/@FaztCode',
    avatar: 'https://yt3.googleusercontent.com/1MQimlFDJ_dRqQMZCIKv6q2-G7oIB-Vngg5-GZLaN3LTIGkXuNW79ftTWMddm0gP5xYh3EK99Q=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'midulive',
    createdAt: '6 Enero 2021',
    suscribers: '231k',
    url: 'https://www.youtube.com/@midulive',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_lCQ-IAoYhcXytlGR0SCoD3hgsRe52TyZo3xIci=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'HolaMundo',
    createdAt: '15 Septiembre 2018',
    suscribers: '762k',
    url: 'https://www.youtube.com/@HolaMundoDev',
    avatar: 'https://yt3.googleusercontent.com/Z69fhRL9_OaXsDz-XsCUe2sGIqU7G1F5Mwl0PwlBsx_ll13K0nLb47q7_RMen7NHvzMVDgd2=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'EDteam',
    createdAt: '19 Noviembre 2012',
    suscribers: '699k',
    url: 'https://www.youtube.com/@EDteam',
    avatar: 'https://yt3.googleusercontent.com/IwyRA05tmAiXDsv8KtFh3GYjkYTaTHAV-iaDDPDFrfal0qklJuaz4ULKE67n0ycgjgfLmfY1spE=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'freeCodeCamp Español',
    createdAt: '23 Noviembre 2020',
    suscribers: '239k',
    url: 'https://www.youtube.com/@freecodecampespanol',
    avatar: 'https://yt3.googleusercontent.com/Q_KD8PJy-rOefmOPEPoGXl9jXlSRToONNygA6hZgkepXJTrgGDnHQr_UguNRvPHNqK7GcBoVmw=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'El Rincón Del Dev',
    createdAt: '2 Septiembre 2021',
    suscribers: '24k',
    url: 'https://www.youtube.com/@elrincondeldev',
    avatar: 'https://yt3.googleusercontent.com/AgkxR9muoiV5xQ88CEIL0CLscsLjGfwjswvCIbBDD3HgPHVkVZjBCKwmZGQh8tRE7K33M4UdC98=s176-c-k-c0x00ffffff-no-rj'
  }
]

function addYoutuber({ name, suscribers, createdAt, avatar, url }){
  catalogContainer.innerHTML += `
    <div class="youtuber">
      <div class="avatar">
        <img src="${avatar}" alt="${name}">
      </div>
      <div class="info">
        <h2 class="name">${name}</h2>
        <span class="suscribers">
          <span>${suscribers}</span> 
          suscriptores
        </span>
      </div>
      <div class="createdAt">
        Se unió el 
        <span>${createdAt}</span>
      </div>
      
      <a href="${url}" target="_blank" class="btn">Visitar canal</a>
    </div>
  `
}

youtubers.forEach((element) => addYoutuber(element))