import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CirclePlay,
  Edit3,
  Factory,
  Globe2,
  Headphones,
  Layers3,
  MessageCircle,
  Newspaper,
  PackageCheck,
  PanelTop,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  title: string;
  label: string;
};

type ProcessStep = {
  num: string;
  title: string;
  text: string;
  image: string;
};

type Category = {
  name: string;
  image: string;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const stats: StatItem[] = [
  { icon: Building2, title: "30,000+ m²", label: "Factory" },
  { icon: UsersRound, title: "50+", label: "Team Members" },
  { icon: ShieldCheck, title: "Quality", label: "Control" },
  { icon: Globe2, title: "Global", label: "Delivery" }
];

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "SMT",
    text: "High-precision\nproduction",
    image: "/assets/process-ai-smt-web.jpg"
  },
  {
    num: "02",
    title: "Cabinet Assembly",
    text: "Standardized\nassembly",
    image: "/assets/process-ai-assembly-web.jpg"
  },
  {
    num: "03",
    title: "Aging Test",
    text: "72H+ aging\ninspection",
    image: "/assets/process-ai-aging-web.jpg"
  },
  {
    num: "04",
    title: "QC Inspection",
    text: "100% quality\nchecking",
    image: "/assets/process-ai-qc-web.jpg"
  },
  {
    num: "05",
    title: "Packaging & Delivery",
    text: "Safe packaging &\non-time delivery",
    image: "/assets/process-ai-packaging-web.jpg"
  }
];

const productCategories: Category[] = [
  { name: "Indoor LED Displays", image: "/assets/product-ai-indoor-web.jpg" },
  { name: "Outdoor LED Displays", image: "/assets/product-ai-outdoor-web.jpg" },
  { name: "LED Floor Displays", image: "/assets/product-ai-floor-web.jpg" },
  { name: "Foldable LED Screens", image: "/assets/product-ai-foldable-web.jpg" },
  { name: "Cylinder LED Displays", image: "/assets/product-ai-cylinder-web.jpg" },
  { name: "Custom-Shaped\nLED Displays", image: "/assets/product-ai-custom-web.jpg" }
];

const features: Feature[] = [
  {
    icon: Wrench,
    title: "OEM/ODM Customization",
    text: "Logo, size, shape, functions\ncustomized as your needs"
  },
  {
    icon: ShieldCheck,
    title: "Reliable Quality",
    text: "Strict QC process to ensure\nstable performance"
  },
  {
    icon: Headphones,
    title: "Project Support",
    text: "Professional solution and\ntechnical support"
  },
  {
    icon: Truck,
    title: "Global Delivery",
    text: "Experienced export team\nand fast delivery"
  }
];

const productMenuItems = [
  {
    title: "Indoor LED Displays",
    text: "Fine pixel pitch screens for showrooms, meeting rooms and control centers.",
    image: "/assets/product-ai-indoor-web.jpg"
  },
  {
    title: "Outdoor LED Displays",
    text: "High-brightness waterproof billboards for advertising and public spaces.",
    image: "/assets/product-ai-outdoor-web.jpg"
  },
  {
    title: "LED Floor Displays",
    text: "Interactive load-bearing floor displays for exhibitions and events.",
    image: "/assets/product-ai-floor-web.jpg"
  },
  {
    title: "Custom-Shaped LED Displays",
    text: "Cylinder, spherical, foldable and creative LED engineering solutions.",
    image: "/assets/product-ai-custom-web.jpg"
  }
];

const resourceMenuItems = [
  { icon: Factory, title: "Factory Tour", text: "See production capacity, QC process and workshop scenes." },
  { icon: PackageCheck, title: "Project Cases", text: "Review export-ready LED display applications by scenario." },
  { icon: Newspaper, title: "Buying Guides", text: "Compare pixel pitch, cabinet size, brightness and installation." },
  { icon: Sparkles, title: "AIO / SEO Hub", text: "Helpful answers for buyers researching LED display suppliers." }
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="LEDUSS home">
        LEDUSS
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a className="active" href="#top">Home</a>
        <div className="nav-item has-mega">
          <button className="nav-trigger" type="button">Products <ChevronDown /></button>
          <div className="mega-menu products-mega" aria-label="Products menu">
            <div className="mega-copy">
              <span>LED Display Solutions</span>
              <h3>Choose the right LED screen for your project</h3>
              <p>Factory-direct options for importers, contractors, rental companies and project buyers.</p>
              <a className="mega-cta" href="#products">
                View All Products
                <ArrowRight />
              </a>
            </div>
            <div className="mega-product-grid">
              {productMenuItems.map((item) => (
                <a className="mega-product-card" href="#products" key={item.title}>
                  <Image src={item.image} alt={item.title} width={220} height={130} />
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
        <a href="#factory">Factory</a>
        <a href="#projects">Projects</a>
        <div className="nav-item has-mega">
          <button className="nav-trigger" type="button">Resources <ChevronDown /></button>
          <div className="mega-menu resources-mega" aria-label="Resources menu">
            <div className="mega-copy">
              <span>Buyer Resources</span>
              <h3>Make LED display sourcing easier</h3>
              <p>Clear guides, factory proof and project support for global procurement teams.</p>
              <a className="mega-cta" href="/contact">
                Talk to Sales
                <ArrowRight />
              </a>
            </div>
            <div className="mega-resource-grid">
              {resourceMenuItems.map(({ icon: Icon, title, text }) => (
                <a className="mega-resource-card" href="#resources" key={title}>
                  <span><Icon /></span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
        <a href="/contact">Contact</a>
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
  );
}

function StatsRow() {
  return (
    <div className="hero-stats">
      {stats.map(({ icon: Icon, title, label }) => (
        <div className="stat" key={title}>
          <Icon />
          <div>
            <strong>{title}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-copy">
        <h1>
          <span>Factory-Direct</span>
          <strong>LED Display Manufacturer</strong>
        </h1>
        <p>
          OEM/ODM LED display solutions for
          <br />
          importers, contractors and project buyers
        </p>
        <div className="hero-buttons">
          <a className="primary-btn" href="#">
            <CirclePlay />
            Book Factory Video Tour
          </a>
          <a className="secondary-btn" href="/inquiry">
            <Edit3 />
            Get a Quote
          </a>
        </div>
        <StatsRow />
      </div>
    </section>
  );
}

function ManufacturingProcess() {
  return (
    <article className="panel process-panel">
      <div className="panel-head">
        <h2>Manufacturing Process</h2>
        <a href="#">
          View More
          <ArrowRight />
        </a>
      </div>
      <div className="process-flow">
        {processSteps.map((step, index) => (
          <div className="process-step" key={step.num}>
            <div className="process-image">
              <Image src={step.image} alt={`${step.title} process`} width={170} height={136} />
              <span>{step.num}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {index < processSteps.length - 1 && <ArrowRight className="process-arrow" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </article>
  );
}

function ProductCategories() {
  return (
    <article className="panel categories-panel" id="products">
      <div className="panel-head">
        <h2>Product Categories</h2>
        <a href="#">View All Products</a>
      </div>
      <div className="category-grid">
        {productCategories.map((category) => (
          <div className="category-card" key={category.name}>
            <Image src={category.image} alt={category.name.replace("\n", " ")} width={160} height={100} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </article>
  );
}

function FeatureStrip() {
  return (
    <div className="feature-strip">
      {features.map(({ icon: Icon, title, text }) => (
        <div className="feature" key={title}>
          <Icon />
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CTABox() {
  return (
    <div className="cta-card" id="contact">
      <div>
        <h2>Have a Project in Mind?</h2>
        <p>
          Tell us your requirements, our sales team
          <br />
          will contact you within 12 hours.
        </p>
      </div>
      <a href="/contact">
        Send Inquiry
        <ArrowRight />
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <main className="landing-page">
      <Header />
      <HeroSection />
      <section className="dashboard-grid" id="factory">
        <ManufacturingProcess />
        <ProductCategories />
      </section>
      <section className="bottom-grid" id="resources">
        <FeatureStrip />
        <CTABox />
      </section>
    </main>
  );
}

export default HomePage;
