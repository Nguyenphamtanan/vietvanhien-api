export default function HeroSection() {
  return (
    <section className="hero-video relative h-screen w-full overflow-hidden" aria-label="Video giới thiệu Việt Văn Hiến">
      <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/images/hero-bg.jpg">
        <source src="https://res.cloudinary.com/dpubhoped/video/upload/v1782798170/intro-vvh_dacy63.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay pointer-events-none absolute inset-0 bg-black/15" />
    </section>
  );
}
