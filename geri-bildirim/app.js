const ratings = document.querySelectorAll('.rating')
const btn = document.getElementById('send')
const panel = document.querySelector('.panel-container')
let selectedRating = 'Geri bildirim seçmediniz!'

// Sayfa yüklenince localStorage'dan seçimi yükle
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('selectedRating')
  if (saved) {
    selectedRating = saved
    ratings.forEach(r => {
      const text = r.querySelector('small').innerText
      if (text === saved) {
        r.classList.add('active', 'bg-green-200')
      }
    })
  }
})

// Rating tıklama eventi
ratings.forEach((rating) =>
  rating.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('rating')) {
      removeActive()
      e.currentTarget.classList.add('active', 'bg-gray-200')
      selectedRating = e.currentTarget.querySelector('small').innerText
      localStorage.setItem('selectedRating', selectedRating)
    }
  })
)

// Tüm ratinglerden aktif sınıfı kaldır
function removeActive() {
  ratings.forEach(r => r.classList.remove('active', 'bg-green-200'))
}

// Gönder butonuna basınca paneli güncelle
btn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-heart text-red-500 text-2xl mb-2"></i>
    <strong class="block mb-2">Geri bildiriminiz bizim için çok değerli.</strong>
    <strong class="block mb-2">Geri Bildiriminiz: ${selectedRating}</strong>
    <p>Geri bildiriminizi kendimizi geliştirmek için kullanacağız.</p>
  `
})
