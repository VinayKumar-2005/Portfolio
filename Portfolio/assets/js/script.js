'use strict';

document.addEventListener("DOMContentLoaded", function () {

  // Toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  }

  // Sidebar toggle
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // Custom select filter
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this.parentElement);
    });
  }

  const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
      const category = item.dataset.category;
      if (selectedValue === "all" || category === selectedValue) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // Form validation
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });

  // ✅ Page Navigation Fix
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetPage = link.textContent.trim().toLowerCase();

      pages.forEach(page => {
        if (page.dataset.page === targetPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });

      navigationLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");

      window.scrollTo(0, 0);
    });
  });

});
