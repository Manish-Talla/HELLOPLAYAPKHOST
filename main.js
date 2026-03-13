import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

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

app.innerHTML = `
  <div class="noise-overlay"></div>
  
  <header class="fixed top-0 left-0 w-full z-100 py-10 px-10 md:px-20 mix-blend-difference">
    <div class="flex justify-between items-center text-white">
      <div class="flex items-center gap-4 group cursor-pointer">
        <div class="text-3xl font-black tracking-tightest uppercase italic">H!</div>
        <div class="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all"></div>
        <div class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Hello Play!</div>
      </div>
      
      <div class="flex items-center gap-10">
        <span class="text-[9px] font-black uppercase tracking-[0.5em] opacity-40">Build v2.4.0 Active</span>
      </div>
    </div>
  </header>

  <main>
    <!-- MASSIVE DOWNLOAD HUB -->
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-bg">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/80 to-primary-bg z-10"></div>
        <img src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=2000" 
             class="w-full h-full object-cover opacity-20 scale-110 hero-visual" alt="">
      </div>

      <div class="container mx-auto px-10 md:px-20 relative z-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="max-w-[1200px]">
            <div class="mb-12 overflow-hidden">
              <span class="hero-tag inline-block text-[10px] font-black uppercase tracking-[0.5em] text-accent">Single Source Deployment</span>
            </div>

            <h1 class="hero-title text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-tightest mb-16">
              <div class="overflow-hidden"><span class="reveal-line inline-block">SECURE</span></div>
              <div class="overflow-hidden"><span class="reveal-line inline-block italic text-white/10 italic">APK</span></div>
              <div class="overflow-hidden"><span class="reveal-line inline-block text-gradient">SYNC.</span></div>
            </h1>

            <div class="flex flex-col gap-12">
              <div class="max-w-md">
                <p class="hero-p text-lg text-white/40 leading-relaxed font-medium uppercase tracking-widest text-[11px]">
                  Direct access to the HELLO PLAY social infrastructure. No intermediaries. No distractions. Just elite sports connectivity.
                </p>
              </div>
              
              <div class="flex flex-col md:flex-row items-start md:items-center gap-8">
                <button class="hero-cta bg-accent text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all magnetic">
                  Initialize Download
                </button>
                <div class="flex flex-col opacity-30">
                   <span class="text-[9px] font-black uppercase tracking-widest">Protocol: Direct Sync</span>
                   <span class="text-[9px] font-black uppercase tracking-widest">Size: 48.5 MB</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Context Block -->
          <div class="hidden lg:flex flex-col items-center justify-center p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] backdrop-blur-3xl relative group">
             <div class="qr-box p-12 bg-white rounded-[3rem] shadow-2xl relative mb-12">
                <div class="w-64 h-64 bg-black p-8 rounded-3xl relative overflow-hidden">
                  <div class="grid grid-cols-6 gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                    ${Array(36).fill('<div class="w-full h-full bg-accent rounded-sm pulse-dot"></div>').join('')}
                  </div>
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
                     <span class="text-2xl font-black italic">H!</span>
                     <span class="text-[8px] font-black uppercase tracking-[0.5em]">Scan To Sync</span>
                  </div>
                </div>
             </div>
             
             <div class="flex gap-4">
                <div class="w-48 aspect-[9/16] bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                   <img src="/assets/mockup-feed.png" class="w-full h-full object-cover opacity-60" alt="">
                </div>
                <div class="w-48 aspect-[9/16] bg-black/40 rounded-2xl border border-white/5 overflow-hidden mt-12">
                   <img src="/assets/mockup-booking.png" class="w-full h-full object-cover opacity-60" alt="">
                </div>
             </div>

             <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-[80px] rounded-full point-events-none"></div>
          </div>
        </div>
      </div>

      <div class="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  </main>

  <footer class="py-12 bg-black border-t border-white/5">
     <div class="container mx-auto px-10 md:px-20 text-center opacity-20">
        <span class="text-[8px] font-black uppercase tracking-[0.5em]">© 2026 HELLO PLAY! | CORE DEPLOYMENT SYSTEMS</span>
     </div>
  </footer>
`;

// MASTER ENTRANCE
const master = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.8 } });

master
  .from(".reveal-line", { y: "100%", opacity: 0, stagger: 0.15, duration: 1.5 })
  .from(".hero-tag", { y: 20, opacity: 0, duration: 1 }, "-=1.2")
  .from(".hero-p", { y: 30, opacity: 0, duration: 1.5 }, "-=1")
  .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 1.5 }, "-=1.2")
  .from(".qr-box", { y: 50, opacity: 0, duration: 1.5 }, "-=1")
  .from(".hero-visual", { scale: 1.2, duration: 4, ease: "power2.out" }, 0);

// QR PULSE
gsap.to(".pulse-dot", {
  scale: 1.4,
  opacity: 0.8,
  duration: 0.8,
  stagger: {
    each: 0.05,
    from: "center",
    grid: [6, 6]
  },
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

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
