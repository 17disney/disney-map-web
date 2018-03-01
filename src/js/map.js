// import './leaflet.js'

window.onload = function() {
  console.log('333333333')
  var shanghaiMap = L.map('shanghaiMap').setView([19.108005, 72.658424], 16)

  L.tileLayer(
    'https://secure.parksandresorts.wdpromedia.com/media/maps/prod/shdr-baidu/13/{z}/{x}/{y}.jpg',
    {
      maxZoom: 20
    }
  ).addTo(shanghaiMap)
}
