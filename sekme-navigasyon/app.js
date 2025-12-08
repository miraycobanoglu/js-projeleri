const contents = document.querySelectorAll('.content')
const navBtn = document.querySelectorAll('nav ul li')

navBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    hideAllContents()
    hideAllBtns()

    btn.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'))
}

function hideAllBtns() {
  navBtn.forEach((item) => item.classList.remove('active'))
}









//diğer yöntem (data-attribute ile)


//html

/*

<nav>
  <ul>
    <li data-target="home">Home</li>
    <li data-target="profile">Profile</li>
    <li data-target="settings">Settings</li>
  </ul>
</nav>

<div class="content" data-content="home">Home içerik</div>
<div class="content" data-content="profile">Profile içerik</div>
<div class="content" data-content="settings">Settings içerik</div>

*/






//js 

/*

const btns = document.querySelectorAll("nav ul li");
const contents = document.querySelectorAll(".content");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    // hepsini gizle
    contents.forEach(c => c.classList.remove("show"));
    btns.forEach(b => b.classList.remove("active"));

    // tıklananı aktif yap
    btn.classList.add("active");

    // doğru içeriği bul ve göster
    document.querySelector(`[data-content="${target}"]`).classList.add("show");
  });
});

*/
