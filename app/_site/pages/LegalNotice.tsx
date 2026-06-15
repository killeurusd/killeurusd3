import { LegalLayout, LegalSection } from "../ui";

export default function LegalNotice() {
  return (
    <LegalLayout title="Legal Notice" lastUpdated="[INSERT DATE]">
      <LegalSection title="1. Website Publisher">
        <p>This website is published and operated by:</p>
        <p>
          <strong>RAYSS RESEARCH LLC</strong><br />
          A New Mexico limited liability company<br />
          Registered in the State of New Mexico, USA<br />
          Registered address: [INSERT REGISTERED ADDRESS]<br />
          Support / legal email: [INSERT EMAIL ADDRESS]
        </p>
        <p>Throughout this Legal Notice, “Company,” “we,” “us,” and “our” refer to RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="2. Website Brand">
        <p>This website is operated under the brand name: <strong>KILLEUR USD / KILLER USD</strong></p>
        <p>Unless otherwise stated, all content, offers, products, and services presented under this brand are provided by RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="3. Website Purpose">
        <p>This website is intended to provide information, educational content, digital training, coaching-related offers, and related business services under the KILLEUR USD / KILLER USD brand.</p>
        <p>Nothing on this website should be interpreted as personalized legal, tax, financial, or investment advice.</p>
      </LegalSection>

      <LegalSection title="4. Hosting Provider">
        <p>This website is hosted by:</p>
        <p>
          [INSERT HOSTING PROVIDER NAME]<br />
          [INSERT HOSTING PROVIDER ADDRESS]<br />
          [INSERT HOSTING PROVIDER WEBSITE OR CONTACT DETAILS]
        </p>
        <p>If the website is deployed through a platform such as Vercel or another hosting provider, replace this section with the exact legal details of that provider.</p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>For support, legal inquiries, or general contact requests, you may contact:</p>
        <p>
          RAYSS RESEARCH LLC<br />
          Email: [INSERT EMAIL ADDRESS]
        </p>
        <p>If you provide a dedicated support address and a separate legal address, you may distinguish them here.</p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>Unless otherwise stated, all elements of this website are the exclusive property of RAYSS RESEARCH LLC or are used under appropriate license.</p>
        <p>This includes, without limitation:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>texts,</li>
          <li>brand names,</li>
          <li>logos,</li>
          <li>graphics,</li>
          <li>training materials,</li>
          <li>visual identity,</li>
          <li>page structures,</li>
          <li>educational frameworks,</li>
          <li>downloadable materials,</li>
          <li>videos,</li>
          <li>and other website content.</li>
        </ul>
        <p>No part of this website may be copied, reproduced, republished, uploaded, transmitted, distributed, sold, licensed, or otherwise exploited without prior written authorization from the Company.</p>
        <p>Unauthorized use of any part of the website may result in legal action.</p>
      </LegalSection>

      <LegalSection title="7. Trademarks and Brand Elements">
        <p>The names KILLEUR USD and KILLER USD, along with any associated logos, slogans, design elements, and branding components, may be protected under applicable intellectual property laws.</p>
        <p>Any unauthorized use, imitation, or misuse of the brand identity is prohibited.</p>
      </LegalSection>

      <LegalSection title="8. Website Access">
        <p>The Company makes reasonable efforts to keep the website accessible and functional. However, access to the website may be suspended, interrupted, restricted, or limited at any time for maintenance, updates, technical issues, security reasons, or any other business reason.</p>
        <p>The Company does not guarantee uninterrupted or error-free access to the website.</p>
      </LegalSection>

      <LegalSection title="9. Website Content">
        <p>The Company strives to provide content that is clear, accurate, and useful. However, the information published on this website may be updated, modified, corrected, or removed at any time without notice.</p>
        <p>The Company does not guarantee that all information on the website is complete, current, or free of errors at all times.</p>
        <p>Use of the website and reliance on its content remain at your own risk.</p>
      </LegalSection>

      <LegalSection title="10. No Professional or Investment Advice">
        <p>The content made available on this website is provided for educational and informational purposes only.</p>
        <p>The Company does not provide:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>personalized investment advice,</li>
          <li>brokerage services,</li>
          <li>portfolio management,</li>
          <li>legal advice,</li>
          <li>tax advice,</li>
          <li>or any regulated advisory service unless expressly stated otherwise.</li>
        </ul>
        <p>Any trading or financial decisions made after viewing this website remain solely your responsibility.</p>
      </LegalSection>

      <LegalSection title="11. Limitation of Responsibility">
        <p>To the fullest extent permitted by applicable law, RAYSS RESEARCH LLC shall not be held liable for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>errors or omissions on the website,</li>
          <li>temporary or permanent website unavailability,</li>
          <li>technical failures,</li>
          <li>data loss,</li>
          <li>unauthorized access,</li>
          <li>reliance placed on website content,</li>
          <li>business losses,</li>
          <li>financial losses,</li>
          <li>trading losses,</li>
          <li>or any indirect, incidental, or consequential damages arising from the use of the website.</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. External Links">
        <p>This website may contain links to third-party websites, platforms, tools, or services.</p>
        <p>Such links are provided for convenience only.</p>
        <p>The Company does not control and is not responsible for the content, terms, practices, availability, or privacy standards of third-party websites.</p>
        <p>Accessing third-party websites is done at your own risk.</p>
      </LegalSection>

      <LegalSection title="13. User Responsibility">
        <p>By using this website, you agree to do so lawfully and responsibly.</p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>misuse the website,</li>
          <li>interfere with its operation,</li>
          <li>attempt unauthorized access,</li>
          <li>copy protected content,</li>
          <li>engage in fraud or abusive conduct,</li>
          <li>or use the website in a way that may damage the Company or its reputation.</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Applicable Documents">
        <p>Use of this website may also be governed by additional legal documents, including: Terms &amp; Conditions and Privacy Policy.</p>
        <p>In the event of a conflict between this Legal Notice and another contractual document, the more specific document shall prevail for the relevant subject matter.</p>
      </LegalSection>

      <LegalSection title="15. Governing Law">
        <p>This Legal Notice shall be governed by and interpreted in accordance with the laws of the State of New Mexico, USA, without regard to conflict of laws principles.</p>
      </LegalSection>

      <LegalSection title="16. Modifications">
        <p>The Company reserves the right to update, revise, or modify this Legal Notice at any time.</p>
        <p>The updated version will be published on this page with the revised date.</p>
        <p>Your continued use of the website after such changes are posted constitutes acceptance of the updated version.</p>
      </LegalSection>

      <LegalSection title="17. Information to Complete">
        <p>Before publication, make sure to complete the following fields:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered address</li>
          <li>Email address</li>
          <li>Hosting provider details</li>
          <li>Last updated date</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
