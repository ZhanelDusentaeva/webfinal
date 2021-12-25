const creatNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML =  {
    <div class="nav">
            <img src="img/logo.jpg" class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search,brend,au,mau karoche..."  >
                    <button class="search-btn">Search</button>
               </div>
               <a href="#"><img src="img/user.png" alt=""></a>
               <a href="#"><img src="img/cart.png" alt=""></a>
           </div>
      </div>
      <ul class="link-container">
          <li class=" link-item "><a href="#" class="link">Home</a></li>
          <li class=" link-item "><a href="#" class="link">Women</a></li>
          <li class=" link-item "><a href="#" class="link">Man</a></li>
          <li class=" link-item "><a href="#" class="link">Accessori</a></li>
     </ul>
     ';

    


} 
creatNav();