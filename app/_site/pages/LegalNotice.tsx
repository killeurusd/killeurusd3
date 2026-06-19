import { LegalLayout, LegalSection } from "../ui";

export default function LegalNotice() {
  return (
    <LegalLayout title="Mentions Légales" lastUpdated="[À COMPLÉTER : DATE]">
      <LegalSection title="1. Éditeur du site">
        <p>Le présent site est édité et exploité par :</p>
        <p>
          <strong>RAYSS RESEARCH LLC</strong><br />
          Société à responsabilité limitée (LLC) de droit du Nouveau-Mexique<br />
          Immatriculée dans l’État du Nouveau-Mexique, États-Unis<br />
          Adresse du siège : [À COMPLÉTER : ADRESSE DU SIÈGE]<br />
          E-mail support / juridique : [À COMPLÉTER : ADRESSE E-MAIL]
        </p>
        <p>Dans l’ensemble des présentes Mentions Légales, les termes « Société », « nous » et « notre » désignent RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="2. Marque du site">
        <p>Le présent site est exploité sous la marque : <strong>KILLEUR USD / KILLER USD</strong></p>
        <p>Sauf mention contraire, l’ensemble des contenus, offres, produits et services présentés sous cette marque sont fournis par RAYSS RESEARCH LLC.</p>
      </LegalSection>

      <LegalSection title="3. Objet du site">
        <p>Le présent site a pour objet de fournir des informations, des contenus pédagogiques, des formations numériques, des offres liées au coaching ainsi que des services commerciaux associés sous la marque KILLEUR USD / KILLER USD.</p>
        <p>Aucun élément du présent site ne saurait être interprété comme un conseil personnalisé d’ordre juridique, fiscal, financier ou en matière d’investissement.</p>
      </LegalSection>

      <LegalSection title="4. Hébergeur">
        <p>Le présent site est hébergé par :</p>
        <p>
          [À COMPLÉTER : NOM DE L’HÉBERGEUR]<br />
          [À COMPLÉTER : ADRESSE DE L’HÉBERGEUR]<br />
          [À COMPLÉTER : SITE WEB OU COORDONNÉES DE L’HÉBERGEUR]
        </p>
        <p>Si le site est déployé via une plateforme telle que Vercel ou un autre hébergeur, remplacez cette section par les informations légales exactes de ce prestataire.</p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>Pour toute demande de support, demande juridique ou demande de contact générale, vous pouvez nous joindre :</p>
        <p>
          RAYSS RESEARCH LLC<br />
          E-mail : [À COMPLÉTER : ADRESSE E-MAIL]
        </p>
        <p>Si vous disposez d’une adresse de support dédiée et d’une adresse juridique distincte, vous pouvez les différencier ici.</p>
      </LegalSection>

      <LegalSection title="6. Propriété intellectuelle">
        <p>Sauf mention contraire, l’ensemble des éléments du présent site sont la propriété exclusive de RAYSS RESEARCH LLC ou sont utilisés sous licence appropriée.</p>
        <p>Cela inclut, de manière non limitative :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>les textes,</li>
          <li>les noms de marque,</li>
          <li>les logos,</li>
          <li>les éléments graphiques,</li>
          <li>les supports de formation,</li>
          <li>l’identité visuelle,</li>
          <li>la structure des pages,</li>
          <li>les cadres pédagogiques,</li>
          <li>les documents téléchargeables,</li>
          <li>les vidéos,</li>
          <li>et tout autre contenu du site.</li>
        </ul>
        <p>Aucune partie du présent site ne peut être copiée, reproduite, republiée, téléversée, transmise, distribuée, vendue, concédée sous licence ou exploitée de quelque manière que ce soit sans autorisation écrite préalable de la Société.</p>
        <p>Toute utilisation non autorisée d’une partie quelconque du site est susceptible de donner lieu à des poursuites judiciaires.</p>
      </LegalSection>

      <LegalSection title="7. Marques et éléments de marque">
        <p>Les noms KILLEUR USD et KILLER USD, ainsi que tout logo, slogan, élément de conception et composant de marque associés, peuvent être protégés au titre des lois applicables en matière de propriété intellectuelle.</p>
        <p>Toute utilisation, imitation ou usage abusif non autorisé de l’identité de marque est interdit.</p>
      </LegalSection>

      <LegalSection title="8. Accès au site">
        <p>La Société met en œuvre des efforts raisonnables pour maintenir le site accessible et fonctionnel. Toutefois, l’accès au site peut être suspendu, interrompu, restreint ou limité à tout moment pour des raisons de maintenance, de mise à jour, de problèmes techniques, de sécurité ou pour toute autre raison commerciale.</p>
        <p>La Société ne garantit pas un accès au site ininterrompu ou exempt d’erreurs.</p>
      </LegalSection>

      <LegalSection title="9. Contenu du site">
        <p>La Société s’efforce de fournir un contenu clair, exact et utile. Toutefois, les informations publiées sur le présent site peuvent être mises à jour, modifiées, corrigées ou supprimées à tout moment et sans préavis.</p>
        <p>La Société ne garantit pas que l’ensemble des informations du site soient complètes, à jour ou exemptes d’erreurs en permanence.</p>
        <p>L’utilisation du site et le recours à son contenu se font sous votre seule responsabilité.</p>
      </LegalSection>

      <LegalSection title="10. Absence de conseil professionnel ou en investissement">
        <p>Le contenu mis à disposition sur le présent site est fourni à des fins exclusivement pédagogiques et informatives.</p>
        <p>La Société ne fournit pas :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>de conseil personnalisé en investissement,</li>
          <li>de services de courtage,</li>
          <li>de gestion de portefeuille,</li>
          <li>de conseil juridique,</li>
          <li>de conseil fiscal,</li>
          <li>ni aucun service de conseil réglementé, sauf mention expresse contraire.</li>
        </ul>
        <p>Toute décision de trading ou décision financière prise après consultation de ce site relève de votre seule responsabilité.</p>
      </LegalSection>

      <LegalSection title="11. Limitation de responsabilité">
        <p>Dans toute la mesure permise par la loi applicable, RAYSS RESEARCH LLC ne saurait être tenue responsable de :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>erreurs ou omissions sur le site,</li>
          <li>indisponibilité temporaire ou permanente du site,</li>
          <li>défaillances techniques,</li>
          <li>perte de données,</li>
          <li>accès non autorisé,</li>
          <li>du recours au contenu du site,</li>
          <li>pertes d’exploitation,</li>
          <li>pertes financières,</li>
          <li>pertes liées au trading,</li>
          <li>ou de tout dommage indirect, accessoire ou consécutif résultant de l’utilisation du site.</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Liens externes">
        <p>Le présent site peut contenir des liens vers des sites, plateformes, outils ou services tiers.</p>
        <p>Ces liens sont fournis à titre de simple commodité.</p>
        <p>La Société ne contrôle pas et n’est pas responsable du contenu, des conditions, des pratiques, de la disponibilité ou des normes de confidentialité des sites tiers.</p>
        <p>L’accès aux sites tiers se fait sous votre seule responsabilité.</p>
      </LegalSection>

      <LegalSection title="13. Responsabilité de l’utilisateur">
        <p>En utilisant le présent site, vous vous engagez à le faire de manière licite et responsable.</p>
        <p>Vous vous engagez à ne pas :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>détourner l’usage du site,</li>
          <li>perturber son fonctionnement,</li>
          <li>tenter un accès non autorisé,</li>
          <li>copier des contenus protégés,</li>
          <li>vous livrer à une fraude ou à un comportement abusif,</li>
          <li>ou utiliser le site d’une manière susceptible de porter préjudice à la Société ou à sa réputation.</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Documents applicables">
        <p>L’utilisation du présent site peut également être régie par des documents juridiques complémentaires, notamment : les Conditions Générales de Vente et la Politique de Confidentialité.</p>
        <p>En cas de contradiction entre les présentes Mentions Légales et un autre document contractuel, le document le plus spécifique prévaut pour la matière concernée.</p>
      </LegalSection>

      <LegalSection title="15. Droit applicable">
        <p>Les présentes Mentions Légales sont régies et interprétées conformément au droit de l’État du Nouveau-Mexique, États-Unis, sans égard aux règles de conflit de lois.</p>
      </LegalSection>

      <LegalSection title="16. Modifications">
        <p>La Société se réserve le droit de mettre à jour, réviser ou modifier les présentes Mentions Légales à tout moment.</p>
        <p>La version mise à jour sera publiée sur cette page avec la date de révision.</p>
        <p>La poursuite de votre utilisation du site après la publication de ces modifications vaut acceptation de la version mise à jour.</p>
      </LegalSection>

      <LegalSection title="17. Informations à compléter">
        <p>Avant publication, veillez à compléter les champs suivants :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adresse du siège</li>
          <li>Adresse e-mail</li>
          <li>Coordonnées de l’hébergeur</li>
          <li>Date de dernière mise à jour</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
