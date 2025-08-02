 const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });

 function goToPage() {
    window.location.href = "pampers.html";
  }
   function goToThePage() {
    window.location.href = "girlsfashion.html";
  }
  function GoToPage() {
    window.location.href = "soap.html";
  }
 function GoToThePage() {
    window.location.href = "stroller.html";
  }

 function goToCartPage() {
    
    window.location.href = "cart.html";
  }
document.querySelector('.search-icon').addEventListener('click', () => {
  const query = document.getElementById('searchBar').value;
  alert(`You searched for: ${query}`);
});



 function toggleFilterMenu() {
    document.getElementById("filterMenu").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.filter-button') && !event.target.matches('.filter-icon')) {
        var dropdowns = document.getElementsByClassName("filter-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Thumbnail to main image
  function changeMainImage(thumbnail) {
    document.getElementById("main-image").src = thumbnail.src;
  }

  // Quantity controls
  function updateQty(change) {
    const qtyElement = document.getElementById("qty");
    let qty = parseInt(qtyElement.textContent);
    qty = Math.max(1, qty + change);
    qtyElement.textContent = qty;
  }

  const qtyInputs = document.querySelectorAll('.qty-input');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const discountEl = document.getElementById('discount');
    const cartCountEl = document.getElementById('cart-count');

    function updateTotals() {
      let subtotal = 0;
      let totalItems = 0;

      document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseInt(item.dataset.price);
        const qty = parseInt(item.querySelector('.qty-input').value);
        const itemSubtotal = price * qty;
        item.querySelector('.subtotal').textContent = `₹${itemSubtotal}`;
        subtotal += itemSubtotal;
        totalItems += qty;
      });

      const discount = parseInt(discountEl.textContent);
      subtotalEl.textContent = subtotal;
      totalEl.textContent = subtotal - discount;
      cartCountEl.textContent = totalItems;
    }

    qtyInputs.forEach(input => {
      input.addEventListener('change', updateTotals);
    });

    updateTotals();
    const cartLink = document.getElementById('cart-link');
    const navCartCount = document.getElementById('nav-cart-count');

    function updateCartCount() {
      const qtyInputs = document.querySelectorAll('.qty-input');
      let totalItems = 0;
      qtyInputs.forEach(input => {
        totalItems += parseInt(input.value);
      });

      navCartCount.textContent = totalItems;
      navCartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }

    // Optional: update on cart link click too
    cartLink.addEventListener('click', function (e) {
      e.preventDefault();
      updateCartCount();
      alert("Cart clicked. Count updated in navbar!");
    });
     function applyCoupon() {
    const couponInput = document.getElementById("coupon");
    const message = document.getElementById("coupon-message");

    if (couponInput.value.trim().toUpperCase() === "EB55") {
      message.textContent = "Coupon Applied! ₹55 Discount";
      // You can also update the total here if needed
    } else {
      message.textContent = "Invalid Coupon Code";
      message.style.color = "red";
    }
  }


   function addToCartAndGo() {
    // Get current cart count from localStorage or default to 0
    let count = localStorage.getItem("cartCount") || 0;
    count++;
    
    // Save updated count
    localStorage.setItem("cartCount", count);

    // Optional: Update cart count on current page (if needed)
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) cartCountEl.textContent = count;

    // Redirect to cart page
    window.location.href = "cart.html";
  }

  // On page load: update cart icon count from localStorage
  window.addEventListener("DOMContentLoaded", () => {
    const savedCount = localStorage.getItem("cartCount");
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl && savedCount) {
      cartCountEl.textContent = savedCount;
    }
  });

   function addToCart() {
    // Get current cart count from localStorage (or default to 0)
    let count = parseInt(localStorage.getItem("cartCount")) || 0;
    
    // Increase count by 1
    count++;

    // Save updated count back to localStorage
    localStorage.setItem("cartCount", count);

    // Optional: Update cart count on the page immediately
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }
  }

  // Update count on page load
  window.addEventListener("DOMContentLoaded", () => {
    const count = localStorage.getItem("cartCount") || 0;
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }
  });



  