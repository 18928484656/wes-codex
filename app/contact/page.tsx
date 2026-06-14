import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck
} from "lucide-react";

const address = "Building 2, Mingjinhai Industrial Zone, Shiyan Subdistrict, Bao'an District, Shenzhen";
const mapLat = 22.5962515;
const mapLng = 113.8516185;
const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=113.8448%2C22.5908%2C113.8586%2C22.6017&layer=mapnik&marker=${mapLat}%2C${mapLng}`;
const osmViewUrl = `https://www.openstreetmap.org/?mlat=${mapLat}&mlon=${mapLng}#map=16/${mapLat}/${mapLng}`;

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header contact-header">
        <a className="brand" href="/" aria-label="LEDUSS home">LEDUSS</a>
        <nav className="main-nav" aria-label="Contact page navigation">
          <a href="/">Home</a>
          <a href="/#products">Products <ChevronDown /></a>
          <a href="/#factory">Factory</a>
          <a href="/#projects">Projects</a>
          <a href="/#resources">Resources <ChevronDown /></a>
          <a className="active" href="/contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="language" type="button">
            <Globe2 />
            English
            <ChevronDown />
          </button>
          <a className="whatsapp" href="#">
            <MessageCircle />
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="contact-hero">
        <div className="contact-copy">
          <a className="back-link" href="/">
            <ArrowLeft />
            Back to Home
          </a>
          <span className="contact-eyebrow">Contact LEDUSS</span>
          <h1>Visit our LED display factory in Shenzhen</h1>
          <p>
            Send your project requirements or schedule a factory video tour. Our team will help you confirm pixel pitch,
            cabinet size, installation method and delivery plan.
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href="/inquiry">
              <Mail />
              Send Inquiry
            </a>
            <a className="secondary-btn" href={osmViewUrl} target="_blank" rel="noreferrer">
              <Navigation />
              Open Map
            </a>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <article className="contact-info-card">
          <div className="info-card-head">
            <span><Building2 /></span>
            <div>
              <h2>Company Address</h2>
              <p>{address}</p>
            </div>
          </div>

          <div className="contact-list">
            <div>
              <MapPin />
              <span>Shiyan Subdistrict, Bao&apos;an District, Shenzhen, Guangdong, China</span>
            </div>
            <div>
              <Phone />
              <span>WhatsApp / Tel: +86 189 2848 2512</span>
            </div>
            <div>
              <Mail />
              <span>ych775082667@gmail.com</span>
            </div>
            <div>
              <Clock3 />
              <span>Mon - Sat, 9:00 - 18:00 China Time</span>
            </div>
          </div>

          <div className="trust-strip">
            <div>
              <ShieldCheck />
              <strong>Factory Direct</strong>
              <span>OEM/ODM LED displays</span>
            </div>
            <div>
              <CheckCircle2 />
              <strong>QC Support</strong>
              <span>From design to delivery</span>
            </div>
          </div>
        </article>

        <article className="map-card">
          <div className="map-card-head">
            <div>
              <span>OpenStreetMap</span>
              <h2>LEDUSS factory location</h2>
            </div>
            <a href={osmViewUrl} target="_blank" rel="noreferrer">
              View Larger Map
              <ArrowRight />
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="LEDUSS factory address on OpenStreetMap"
              src={osmEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-pin-card">
              <MapPin />
              <div>
                <strong>LEDUSS Shenzhen Factory</strong>
                <span>Building 2, Mingjinhai Industrial Zone</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
