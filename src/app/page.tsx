"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import { Building, CalendarCheck, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Projects",          id: "#projects"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Get a Quote",        href: "#contact"}}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o1cswp"
      logoAlt="Carps Construction Logo"
      brandName="Carps Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "rotated-rays-animated-grid"}}
      title="Build Your Dream Home with Carps Construction"
      description="Specializing in custom home building, meticulous remodeling, and comprehensive general construction services across all scales. Your vision, our expertise."
      tag="Trusted Local Builders"
      buttons={[
        {
          text: "Start Your Project",          href: "#contact"},
        {
          text: "View Our Portfolio",          href: "#projects"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/construction-site-with-tower-crane-apartments-urban-modern-architecture_169016-69092.jpg"
      imageAlt="Luxurious new home under construction at sunset"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Us"
      title="Experience & Excellence in Every Build"
      buttons={[
        {
          text: "Learn More",          href: "#"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "home-building",          title: "Custom Home Building",          author: "Carps Construction",          description: "From foundation to finish, we craft custom homes that reflect your unique style and needs, built with precision and the highest quality materials.",          tags: [
            "New Builds",            "Design-Build",            "Luxury Homes"],
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-civil-engineer-safety-hat_185193-108962.jpg",          imageAlt: "New home under construction"},
        {
          id: "remodeling",          title: "Expert Home Remodeling",          author: "Carps Construction",          description: "Revitalize your living spaces with our expert remodeling services. Kitchens, bathrooms, additions – we bring fresh life to your home.",          tags: [
            "Kitchens",            "Baths",            "Additions"],
          imageSrc: "http://img.b2bpic.net/free-photo/modern-wooden-kitchen-with-open-shelving-units-interior-has-stylish-laconic-design_169016-72708.jpg",          imageAlt: "Modern kitchen remodeling"},
        {
          id: "general-construction",          title: "General Construction",          author: "Carps Construction",          description: "Beyond residential, we undertake diverse construction projects, delivering robust and reliable structures on time and within budget.",          tags: [
            "Commercial",            "Industrial",            "Infrastructure"],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-large-construction-site_23-2151933428.jpg",          imageAlt: "General construction site"},
      ]}
      title="Our Comprehensive Construction Services"
      description="We offer a full spectrum of construction services, tailored to meet your unique needs and exceed expectations."
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "proj-1",          name: "Luxury Lakeside Retreat",          price: "$1.2M+",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-architecture-space_23-2151912530.jpg",          imageAlt: "Luxury lakeside home"},
        {
          id: "proj-2",          name: "Modern Kitchen Renovation",          price: "$80K+",          imageSrc: "http://img.b2bpic.net/free-photo/part-home-kitchen-table-setting-with-gray-plates-bouquet-vase_169016-15715.jpg",          imageAlt: "Modern kitchen"},
        {
          id: "proj-3",          name: "Spa-Inspired Bathroom",          price: "$45K+",          imageSrc: "http://img.b2bpic.net/free-photo/sink-hotel-near_1203-1314.jpg",          imageAlt: "Spa-inspired bathroom"},
        {
          id: "proj-4",          name: "Contemporary Living Space",          price: "$120K+",          imageSrc: "http://img.b2bpic.net/free-photo/contemporary-loft-style-apartment-with-homey-office-corner_482257-119908.jpg",          imageAlt: "Contemporary living room"},
        {
          id: "proj-5",          name: "Bespoke Home Office",          price: "$30K+",          imageSrc: "http://img.b2bpic.net/free-photo/woman-glasses-reading-table_23-2147896818.jpg",          imageAlt: "Bespoke home office"},
        {
          id: "proj-6",          name: "Outdoor Entertainment Area",          price: "$60K+",          imageSrc: "http://img.b2bpic.net/free-photo/path-way_74190-3770.jpg",          imageAlt: "Outdoor patio"},
      ]}
      title="Our Portfolio of Completed Projects"
      description="Explore a selection of our finest work, showcasing the quality and versatility of Carps Construction."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "250+",          title: "Projects Completed",          description: "Delivering exceptional results across various construction types.",          icon: Building,
        },
        {
          id: "m2",          value: "30+",          title: "Years Experience",          description: "A legacy of craftsmanship and unwavering dedication to building excellence.",          icon: CalendarCheck,
        },
        {
          id: "m3",          value: "98%",          title: "Client Satisfaction",          description: "Our clients' happiness is our top priority, leading to lasting relationships.",          icon: Smile,
        },
      ]}
      title="Building on a Foundation of Success"
      description="Our commitment to quality and client satisfaction is reflected in our achievements."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/modern-woman-home-with-book_23-2147611420.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "t2",          name: "Michael C.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-helmet-looking-camera_259150-56886.jpg",          imageAlt: "Michael Chen"},
        {
          id: "t3",          name: "Emily R.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-woman-hugging-her-husband-from-sitting-sofa_23-2147901404.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "t4",          name: "David K.",          imageSrc: "http://img.b2bpic.net/free-photo/man-bench_23-2148006266.jpg",          imageAlt: "David Kim"},
        {
          id: "t5",          name: "Jessica L.",          imageSrc: "http://img.b2bpic.net/free-photo/female-architect-with-helmet-level_23-2147702531.jpg",          imageAlt: "Jessica Lee"},
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Rave Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What is your process for new home construction?",          content: "Our process begins with an initial consultation to understand your vision, followed by design, detailed planning, material selection, permits, construction, and final walkthroughs. We maintain open communication at every stage."},
        {
          id: "faq2",          title: "How long does a typical remodeling project take?",          content: "Project timelines vary greatly depending on scope and complexity. A small bathroom remodel might take 3-4 weeks, while a major kitchen or whole-home renovation could be several months. We provide detailed timelines upfront."},
        {
          id: "faq3",          title: "Are you licensed and insured?",          content: "Yes, Carps Construction is fully licensed, bonded, and insured. We adhere to all local building codes and safety regulations to ensure peace of mind for our clients."},
        {
          id: "faq4",          title: "Can you work with my existing architectural plans?",          content: "Absolutely. We are happy to review and work with your existing architectural plans. If you don't have plans, our design-build approach can guide you through creating them from scratch."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common inquiries about our building, remodeling, and construction processes."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Build Your Future?"
      description="Contact Carps Construction today to discuss your project, request a quote, or schedule a consultation. You can reach us directly at rosswcarp@yahoo.com. We look forward to hearing from you."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number (Optional)"},
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project...",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/professional-male-female-architect-looking-catalog-while-working-office_23-2148203930.jpg"
      imageAlt="Construction team discussing blueprints"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Home Building",              href: "#services"},
            {
              label: "Remodeling",              href: "#services"},
            {
              label: "General Construction",              href: "#services"},
            {
              label: "Custom Projects",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Work",              href: "#projects"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "FAQs",              href: "#faqs"},
            {
              label: "Blog (Coming Soon)",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Carps Construction. All rights reserved."
      bottomRightText="Built with quality and care."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}