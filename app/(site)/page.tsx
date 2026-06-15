import Home from "../_site/pages/Home";
import { faqs } from "../_site/faq";

// La metadata de l'accueil est héritée du layout racine (title/description/OG/canonical).

// JSON-LD FAQPage : rend les questions/réponses extractibles par Google & les moteurs IA.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Home />
    </>
  );
}
