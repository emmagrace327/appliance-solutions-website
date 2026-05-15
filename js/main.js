/* ============================================
   APPLIANCE SOLUTIONS INC — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // --- Mobile Dropdown Toggle ---
  const dropdowns = document.querySelectorAll('.nav__dropdown > a');
  dropdowns.forEach(function(drop) {
    drop.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });

  // --- Sticky Header Shadow on Scroll ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(function(faq) { faq.classList.remove('active'); });
        // Toggle current
        if (!isActive) { item.classList.add('active'); }
      });
    }
  });

  // --- Close mobile nav on link click ---
  const navLinks = document.querySelectorAll('.nav > a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Phone tracking display ---
  var phoneEls = document.querySelectorAll('[data-phone]');
  phoneEls.forEach(function(el) {
    el.textContent = el.getAttribute('data-phone');
  });
});
