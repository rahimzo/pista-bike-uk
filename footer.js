class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: black;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .footer-section h3:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 1px;
          background-color: white;
        }
        .footer-section p, .footer-section a {
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          display: block;
        }
        .footer-section a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .social-links svg {
          width: 20px;
          height: 20px;
          stroke: #f5f0e6;
          transition: stroke 0.3s ease;
        }
        .social-links a:hover svg {
          stroke: #d4af37; /* gold hover */
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #666;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Location</h3>
            <p>12 Bruton Street</p>
            <p>Mayfair, London W1J 6PY</p>
            <p>United Kingdom</p>
            <a href="https://maps.google.com/maps?q=Caffè+Necto+London" target="_blank">View on Map</a>
          </div>
          <div class="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 10am - 5pm</p>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <a href="tel:+442045678901">+44 20 4567 8901</a>
            <a href="mailto:hello@caffenecto.com">hello@caffenecto.com</a>
            <div class="social-links">
              <a href="https://instagram.com/caffenecto" target="_blank" aria-label="Instagram">
                <i data-feather="instagram"></i>
              </a>
              <a href="https://facebook.com/caffenecto" target="_blank" aria-label="Facebook">
                <i data-feather="facebook"></i>
              </a>
              <a href="https://wa.me/442045678901" target="_blank" aria-label="WhatsApp">
                <i data-feather="message-circle"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Caffè Necto. All rights reserved.
        </div>
      </footer>
    `;

    // ✅ Load Feather icons properly inside the Shadow DOM
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      const icons = this.shadowRoot.querySelectorAll('i[data-feather]');
      icons.forEach(icon => {
        const name = icon.getAttribute('data-feather');
        const svg = feather.icons[name].toSvg();
        icon.outerHTML = svg;
      });
    };
    this.shadowRoot.appendChild(script);
  }
}

customElements.define('custom-footer', CustomFooter);
