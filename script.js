document.addEventListener("DOMContentLoaded", () => {
    const uploadButton = document.getElementById("upload-button");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const productForm = document.getElementById("product-form");
    const productList = document.querySelector(".product-list");
  
    // Open modal
    uploadButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Close modal
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Add product
    productForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const productImage = document.getElementById("product-image").files[0];
      const productTitle = document.getElementById("product-title").value;
      const productDescription = document.getElementById("product-description").value;
      const sellerContact = document.getElementById("seller-contact").value;
  
      const reader = new FileReader();
      reader.onload = (e) => {
        const productHTML = `
          <div class="product">
            <img src="${e.target.result}" alt="${productTitle}">
            <h3>${productTitle}</h3>
            <p>${productDescription}</p>
            <p><strong>Kontak:</strong> ${sellerContact}</p>
          </div>
        `;
  
        productList.innerHTML += productHTML;
      };
  
      reader.readAsDataURL(productImage);
      modal.style.display = "none";
      productForm.reset();
    });
  });
  