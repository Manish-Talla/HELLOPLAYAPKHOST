import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import QRCode from 'qrcode';

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector('#app');

// Configuration
const DOWNLOAD_URL = "https://apkhelloplay.netlify.app"; // Placeholder or APK URL

app.innerHTML = `
  <div class="noise-overlay"></div>
  
  <header class="fixed top-0 left-0 w-full z-100 py-6 md:py-10 px-6 md:px-20 mix-blend-difference">
    <div class="flex justify-between items-center text-white">
      <div class="flex items-center gap-4 group cursor-pointer">
        <div class="text-2xl md:text-3xl font-black tracking-tightest uppercase italic">H!</div>
        <div class="h-[1px] w-6 md:w-8 bg-white/20 group-hover:w-12 transition-all"></div>
        <div class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Hello Play!</div>
      </div>
      
      <div class="flex items-center gap-10">
        <span class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] opacity-40">Build v2.4.0 Active</span>
      </div>
    </div>
  </header>

  <main>
    <!-- MASSIVE DOWNLOAD HUB: RESPONSIVE REDESIGN -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-primary-bg py-24 md:py-0">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/80 to-primary-bg z-10"></div>
        <img src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=2000" 
             class="w-full h-full object-cover opacity-20 scale-110 hero-visual" alt="">
      </div>

      <div class="container mx-auto px-6 md:px-20 relative z-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <!-- Text Content: order-1 on mobile, order-1 on desktop -->
          <div class="order-1 lg:order-1">
            <div class="mb-8 md:mb-12 overflow-hidden text-center lg:text-left">
              <span class="hero-tag inline-block text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-accent">Single Source Deployment</span>
            </div>

            <h1 class="hero-title text-[14vw] lg:text-[8vw] leading-[0.85] font-black tracking-tightest mb-12 md:mb-16 text-center lg:text-left">
              <div class="overflow-hidden"><span class="reveal-line inline-block">SECURE</span></div>
              <div class="overflow-hidden"><span class="reveal-line inline-block italic text-white/10 uppercase">APK</span></div>
              <div class="overflow-hidden"><span class="reveal-line inline-block text-gradient">SYNC.</span></div>
            </h1>

            <div class="flex flex-col gap-10 md:gap-12 items-center lg:items-start text-center lg:text-left">
              <div class="max-w-md">
                <p class="hero-p text-sm md:text-lg text-white/40 leading-relaxed font-medium uppercase tracking-widest text-[10px] md:text-[11px]">
                  Direct access to the HELLO PLAY social infrastructure. No intermediaries. No distractions. Just elite sports connectivity.
                </p>
              </div>
              
              <div class="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
                <button class="hero-cta bg-accent text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-widest text-sm md:text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto magnetic">
                  Initialize Download
                </button>
                <div class="flex flex-col opacity-30 text-center md:text-left">
                   <span class="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Protocol: Direct Sync</span>
                   <span class="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Size: 48.5 MB</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical & QR Hub: order-2 on mobile, order-2 on desktop -->
          <div class="order-2 lg:order-2 flex flex-col items-center justify-center">
             <div class="qr-container flex flex-col items-center p-8 md:p-12 bg-white/[0.03] border border-white/5 rounded-[3rem] md:rounded-[4rem] backdrop-blur-3xl relative group">
                <div class="qr-box p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative mb-8 md:mb-12 overflow-hidden">
                   <canvas id="qrcode-canvas" class="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"></canvas>
                   <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div class="w-10 h-10 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center">
                         <span class="text-white font-black italic text-xl md:text-2xl">H!</span>
                      </div>
                   </div>
                </div>
                
                <div class="text-center mb-10">
                   <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] text-white/40 group-hover:text-accent transition-colors">Scan Access Deployment</span>
                </div>

                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-[80px] rounded-full pointer-events-none"></div>
             </div>
          </div>

        </div>
      </div>

      <div class="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  </main>

  <footer class="py-10 md:py-12 bg-black border-t border-white/5">
     <div class="container mx-auto px-6 text-center opacity-20">
        <span class="text-[8px] font-black uppercase tracking-[0.5em]">© 2026 HELLO PLAY! | CORE DEPLOYMENT SYSTEMS</span>
     </div>
  </footer>
`;

// GENERATE REAL QR CODE
const generateQR = async () => {
  const canvas = document.getElementById('qrcode-canvas');
  if (canvas) {
    try {
      await QRCode.toCanvas(canvas, DOWNLOAD_URL, {
        width: 256,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
      console.log('QR Code generated successfully');
    } catch (err) {
      console.error('QR generation failed:', err);
    }
  }
};

// Initial QR Generation
generateQR();

// MASTER ENTRANCE
const master = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.8 } });

master
  .from(".reveal-line", { y: "100%", opacity: 0, stagger: 0.15, duration: 1.5 })
  .from(".hero-tag", { y: 20, opacity: 0, duration: 1 }, "-=1.2")
  .from(".hero-p", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
  .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 1.5 }, "-=1.2")
  .from(".qr-container", { y: 40, opacity: 0, duration: 2, ease: "power4.out" }, "-=1")
  .from(".hero-visual", { scale: 1.2, duration: 4, ease: "power2.out" }, 0);

// MAGNETIC BUTTONS
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    });
  });
});
