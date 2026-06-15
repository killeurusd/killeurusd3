import { LegalLayout, LegalSection } from "../ui";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[INSERT DATE]">
      <p className="mb-8 text-zinc-300">
        This Privacy Policy explains how RAYSS RESEARCH LLC, operating the KILLEUR USD / KILLER USD website and brand, collects, uses, stores, shares, and protects your information when you visit the website, submit a form, purchase a product or service, subscribe to communications, or otherwise interact with us.
      </p>
      <p className="mb-8 text-zinc-300">By using the website, you agree to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the website.</p>

      <LegalSection title="1. Company Information">
        <p>
          RAYSS RESEARCH LLC<br />
          A New Mexico limited liability company<br />
          Registered in the State of New Mexico, USA<br />
          Registered address: [INSERT REGISTERED ADDRESS]<br />
          Privacy contact email: [INSERT PRIVACY EMAIL]
        </p>
        <p>Throughout this Privacy Policy, “Company,” “we,” “us,” and “our” refer to RAYSS RESEARCH LLC. “You” refers to any visitor, user, lead, subscriber, customer, or other individual interacting with the website.</p>
      </LegalSection>

      <LegalSection title="2. Information We May Collect">
        <h3 className="text-white font-bold mb-2 mt-4">2.1 Information You Provide Directly</h3>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>your name, email address, phone number,</li>
          <li>billing information, payment-related details,</li>
          <li>company name, contact information,</li>
          <li>messages submitted through forms, booking information, support requests,</li>
          <li>and any information you choose to provide to us.</li>
        </ul>

        <h3 className="text-white font-bold mb-2 mt-4">2.2 Payment Information</h3>
        <p>Payments are processed through third-party payment providers such as Stripe. We do not typically store your full payment card details on our own servers unless explicitly stated otherwise.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.3 Account / Access Information</h3>
        <p>If we provide account access, member access, training access, or booking access, we may collect login details, account identifiers, access history, and related technical information.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.4 Automatically Collected Information</h3>
        <p>When you use the website, we may automatically collect certain technical and usage data, including: IP address, browser type, device type, operating system, pages visited, time spent on pages, referral URLs, general location based on IP, cookie identifiers, and analytics-related data.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.5 Cookies and Similar Technologies</h3>
        <p>We may use cookies, pixels, tags, scripts, and similar technologies to operate the website, improve performance, analyze traffic, remember preferences, and support marketing or retargeting efforts.</p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We may use your information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>to operate and maintain the website,</li>
          <li>to deliver products, services, training, and coaching,</li>
          <li>to process payments, to communicate with you,</li>
          <li>to send confirmations, updates, and support messages, to respond to inquiries,</li>
          <li>to manage bookings and coaching schedules,</li>
          <li>to improve our website, services, and offers,</li>
          <li>to analyze performance and user behavior,</li>
          <li>to send promotional emails or marketing communications,</li>
          <li>to protect against fraud, abuse, unauthorized access, or misuse,</li>
          <li>to enforce our legal terms and policies, and to comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Marketing Communications">
        <p>If you subscribe to our emails, download a resource, fill in a form, purchase an offer, or otherwise provide your contact details, we may send you: educational emails, updates about our offers, launch announcements, reminders, support-related messages, and promotional communications.</p>
        <p>You may unsubscribe from marketing emails at any time by using the unsubscribe link included in the email or by contacting us directly. Please note that even if you unsubscribe from marketing emails, we may still send transactional or service-related messages when necessary.</p>
      </LegalSection>

      <LegalSection title="5. How We Share Information">
        <p>We do not sell your personal information in the ordinary sense of selling customer lists for cash. However, we may share your information with trusted third parties when necessary to operate the business, including: payment processors, email service providers, hosting providers, analytics providers, booking or scheduling tools, customer support tools, website infrastructure providers, contractors or service providers assisting us, legal or compliance professionals, or competent authorities where required by law.</p>
        <p>We may also disclose information to enforce our legal rights, to prevent fraud or abuse, to protect the website, users, or business, in connection with a merger, acquisition, sale of assets, restructuring, or similar business transaction, or if legally required to do so.</p>
      </LegalSection>

      <LegalSection title="6. Third-Party Services">
        <p>The website may rely on third-party tools, platforms, or services such as: Stripe, hosting providers, email marketing tools, analytics tools, scheduling tools, embedded content providers, or communication tools.</p>
        <p>These third parties may process your information under their own privacy policies and terms. We are not responsible for the privacy practices of third-party services we do not control. You should review their policies directly where relevant.</p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>We retain information for as long as reasonably necessary for: providing the services, fulfilling transactions, maintaining business records, handling customer relationships, complying with legal obligations, resolving disputes, enforcing agreements, and protecting the business.</p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>We take reasonable administrative, technical, and organizational measures to help protect personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction. However, no method of transmission over the internet and no method of storage is completely secure. Therefore, we cannot guarantee absolute security. You use the website and provide information at your own risk.</p>
      </LegalSection>

      <LegalSection title="9. International Data Transfers">
        <p>Because the Company is based in the United States and may use service providers located in different countries, your information may be transferred to, stored in, or processed in jurisdictions outside your country of residence.</p>
        <p>By using the website and providing your information, you understand and agree that your information may be transferred to and processed in the United States and other jurisdictions where our service providers operate.</p>
      </LegalSection>

      <LegalSection title="10. Your Choices">
        <p>Depending on how you interact with us, you may choose to: not submit forms, not provide optional information, unsubscribe from marketing emails, disable cookies through your browser settings, or contact us to request updates or corrections to your information.</p>
      </LegalSection>

      <LegalSection title="11. Access, Correction, and Deletion Requests">
        <p>Depending on applicable law and your location, you may have the right to request: access to certain personal information we hold about you, correction of inaccurate information, deletion of certain information, restriction of certain processing, or information about how your data is used.</p>
        <p>To make such a request, contact us at: [INSERT PRIVACY EMAIL]</p>
      </LegalSection>

      <LegalSection title="12. Cookies and Tracking Technologies">
        <p>We may use cookies and similar technologies to: keep the website functioning properly, remember settings or preferences, measure website traffic, analyze user behavior, improve performance, and support advertising or remarketing activities.</p>
        <p>You can manage cookies through your browser settings. In some cases, your browser may allow you to block, delete, or limit cookies. If you use ad blockers, privacy settings, or browser restrictions, some website features may not function as intended.</p>
      </LegalSection>

      <LegalSection title="13. Analytics">
        <p>We may use analytics tools to understand how users interact with the website, which pages are visited, how traffic reaches the site, and how we can improve the user experience and performance of the business. These tools may use cookies, tags, or similar technologies and may collect technical and usage information.</p>
      </LegalSection>

      <LegalSection title="14. Do Not Track">
        <p>Some browsers offer a “Do Not Track” feature. Because there is no universal standard for how websites should respond to Do Not Track signals, the website may not respond to such signals in a uniform way unless and until a legally required standard applies.</p>
      </LegalSection>

      <LegalSection title="15. Children’s Privacy">
        <p>This website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided personal information through the website, please contact us so that we can take appropriate steps.</p>
      </LegalSection>

      <LegalSection title="16. User-Generated Content / Communications">
        <p>If you submit messages, comments, support requests, testimonials, feedback, survey responses, or similar content, we may store and use that information for support, service improvement, quality control, legal protection, or business purposes.</p>
      </LegalSection>

      <LegalSection title="17. Business Transfers">
        <p>If the Company is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, your information may be transferred as part of that transaction, subject to applicable law.</p>
      </LegalSection>

      <LegalSection title="18. Changes to This Privacy Policy">
        <p>We may update this Privacy Policy at any time. When we do, the updated version will be posted on this page with a new “Last updated” date. Your continued use of the website after any changes are posted constitutes acceptance of the updated Privacy Policy.</p>
      </LegalSection>

      <LegalSection title="19. Contact">
        <p>If you have questions about this Privacy Policy or wish to contact us regarding privacy matters, you may contact:</p>
        <p>
          RAYSS RESEARCH LLC<br />
          Address: [INSERT REGISTERED ADDRESS]<br />
          Privacy email: [INSERT PRIVACY EMAIL]
        </p>
      </LegalSection>

      <LegalSection title="20. Fields to Complete Before Publication">
        <p>Before publishing this Privacy Policy, make sure to complete:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered address</li>
          <li>Privacy email</li>
          <li>Last updated date</li>
          <li>any specific third-party tools you want to name explicitly</li>
          <li>any cookie / analytics tools you actually use</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
