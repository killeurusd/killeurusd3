import { LegalLayout, LegalSection } from "../ui";

export default function Privacy() {
  return (
    <LegalLayout title="Politique de Confidentialité" lastUpdated="[À COMPLÉTER : DATE]">
      <p className="mb-8 text-zinc-300">
        La présente Politique de Confidentialité explique comment RAYSS RESEARCH LLC, qui exploite le site et la marque KILLEUR USD / KILLER USD, collecte, utilise, conserve, partage et protège vos informations lorsque vous consultez le site, soumettez un formulaire, achetez un produit ou un service, vous abonnez à des communications ou interagissez de toute autre manière avec nous.
      </p>
      <p className="mb-8 text-zinc-300">En utilisant le site, vous acceptez les pratiques décrites dans la présente Politique de Confidentialité. Si vous n’acceptez pas cette Politique de Confidentialité, veuillez ne pas utiliser le site.</p>

      <LegalSection title="1. Informations sur la Société">
        <p>
          RAYSS RESEARCH LLC<br />
          Société à responsabilité limitée (LLC) de droit du Nouveau-Mexique<br />
          Immatriculée dans l’État du Nouveau-Mexique, États-Unis<br />
          Adresse du siège : [À COMPLÉTER : ADRESSE DU SIÈGE]<br />
          E-mail de contact « vie privée » : [À COMPLÉTER : E-MAIL VIE PRIVÉE]
        </p>
        <p>Dans l’ensemble de la présente Politique de Confidentialité, les termes « Société », « nous » et « notre » désignent RAYSS RESEARCH LLC. « Vous » désigne tout visiteur, utilisateur, prospect, abonné, client ou autre personne interagissant avec le site.</p>
      </LegalSection>

      <LegalSection title="2. Informations que nous pouvons collecter">
        <h3 className="text-white font-bold mb-2 mt-4">2.1 Informations que vous fournissez directement</h3>
        <p>Nous pouvons collecter les informations personnelles que vous fournissez volontairement, notamment :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>vos nom, adresse e-mail, numéro de téléphone,</li>
          <li>vos informations de facturation et données liées au paiement,</li>
          <li>le nom de votre société, vos coordonnées,</li>
          <li>les messages soumis via les formulaires, les informations de réservation, les demandes de support,</li>
          <li>et toute information que vous choisissez de nous communiquer.</li>
        </ul>

        <h3 className="text-white font-bold mb-2 mt-4">2.2 Informations de paiement</h3>
        <p>Les paiements sont traités par des prestataires de paiement tiers tels que Stripe. Nous ne conservons généralement pas l’intégralité des données de votre carte de paiement sur nos propres serveurs, sauf mention expresse contraire.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.3 Informations de compte / d’accès</h3>
        <p>Si nous fournissons un accès à un compte, un espace membre, une formation ou un système de réservation, nous pouvons collecter vos identifiants de connexion, identifiants de compte, historique d’accès et informations techniques associées.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.4 Informations collectées automatiquement</h3>
        <p>Lorsque vous utilisez le site, nous pouvons collecter automatiquement certaines données techniques et d’usage, notamment : adresse IP, type de navigateur, type d’appareil, système d’exploitation, pages consultées, temps passé sur les pages, URL de provenance, localisation générale basée sur l’IP, identifiants de cookies et données liées à l’analyse d’audience.</p>

        <h3 className="text-white font-bold mb-2 mt-4">2.5 Cookies et technologies similaires</h3>
        <p>Nous pouvons utiliser des cookies, pixels, balises, scripts et technologies similaires pour faire fonctionner le site, améliorer les performances, analyser le trafic, mémoriser vos préférences et soutenir nos efforts de marketing ou de reciblage.</p>
      </LegalSection>

      <LegalSection title="3. Comment nous utilisons vos informations">
        <p>Nous pouvons utiliser vos informations aux fins suivantes :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>exploiter et maintenir le site,</li>
          <li>fournir les produits, services, formations et coachings,</li>
          <li>traiter les paiements et communiquer avec vous,</li>
          <li>envoyer des confirmations, mises à jour et messages de support, répondre aux demandes,</li>
          <li>gérer les réservations et les plannings de coaching,</li>
          <li>améliorer notre site, nos services et nos offres,</li>
          <li>analyser les performances et le comportement des utilisateurs,</li>
          <li>envoyer des e-mails promotionnels ou des communications marketing,</li>
          <li>nous prémunir contre la fraude, les abus, les accès non autorisés ou les usages détournés,</li>
          <li>faire respecter nos conditions et politiques juridiques, et respecter nos obligations légales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Communications marketing">
        <p>Si vous vous abonnez à nos e-mails, téléchargez une ressource, remplissez un formulaire, achetez une offre ou nous fournissez vos coordonnées de toute autre manière, nous pouvons vous envoyer : des e-mails pédagogiques, des informations sur nos offres, des annonces de lancement, des rappels, des messages liés au support et des communications promotionnelles.</p>
        <p>Vous pouvez vous désabonner des e-mails marketing à tout moment en utilisant le lien de désabonnement inclus dans l’e-mail ou en nous contactant directement. Veuillez noter que, même après désabonnement des e-mails marketing, nous pouvons continuer à vous envoyer des messages transactionnels ou liés au service lorsque cela est nécessaire.</p>
      </LegalSection>

      <LegalSection title="5. Comment nous partageons les informations">
        <p>Nous ne vendons pas vos informations personnelles au sens habituel de la vente de fichiers clients contre rémunération. Toutefois, nous pouvons partager vos informations avec des tiers de confiance lorsque cela est nécessaire à l’exploitation de l’activité, notamment : prestataires de paiement, prestataires de messagerie, hébergeurs, prestataires d’analyse d’audience, outils de réservation ou de planification, outils de support client, prestataires d’infrastructure du site, sous-traitants ou prestataires nous assistant, professionnels du droit ou de la conformité, ou autorités compétentes lorsque la loi l’exige.</p>
        <p>Nous pouvons également divulguer des informations afin de faire valoir nos droits, de prévenir la fraude ou les abus, de protéger le site, les utilisateurs ou l’activité, dans le cadre d’une fusion, acquisition, cession d’actifs, restructuration ou opération commerciale similaire, ou si la loi nous y oblige.</p>
      </LegalSection>

      <LegalSection title="6. Services tiers">
        <p>Le site peut s’appuyer sur des outils, plateformes ou services tiers tels que : Stripe, hébergeurs, outils d’e-mailing, outils d’analyse, outils de planification, fournisseurs de contenu intégré ou outils de communication.</p>
        <p>Ces tiers peuvent traiter vos informations conformément à leurs propres politiques de confidentialité et conditions. Nous ne sommes pas responsables des pratiques de confidentialité des services tiers que nous ne contrôlons pas. Il vous appartient de consulter directement leurs politiques le cas échéant.</p>
      </LegalSection>

      <LegalSection title="7. Conservation des données">
        <p>Nous conservons les informations aussi longtemps que cela est raisonnablement nécessaire pour : fournir les services, exécuter les transactions, tenir nos registres commerciaux, gérer la relation client, respecter nos obligations légales, résoudre les litiges, faire respecter les accords et protéger l’activité.</p>
      </LegalSection>

      <LegalSection title="8. Sécurité des données">
        <p>Nous mettons en œuvre des mesures administratives, techniques et organisationnelles raisonnables afin de protéger les informations personnelles contre tout accès non autorisé, perte, usage détourné, divulgation, altération ou destruction. Toutefois, aucune méthode de transmission sur Internet ni aucune méthode de stockage n’est totalement sûre. Nous ne pouvons donc pas garantir une sécurité absolue. Vous utilisez le site et fournissez vos informations à vos propres risques.</p>
      </LegalSection>

      <LegalSection title="9. Transferts internationaux de données">
        <p>La Société étant établie aux États-Unis et pouvant recourir à des prestataires situés dans différents pays, vos informations peuvent être transférées, stockées ou traitées dans des juridictions situées en dehors de votre pays de résidence.</p>
        <p>En utilisant le site et en fournissant vos informations, vous comprenez et acceptez que vos informations puissent être transférées et traitées aux États-Unis et dans d’autres juridictions où nos prestataires opèrent.</p>
      </LegalSection>

      <LegalSection title="10. Vos choix">
        <p>Selon la manière dont vous interagissez avec nous, vous pouvez choisir de : ne pas soumettre de formulaires, ne pas fournir d’informations facultatives, vous désabonner des e-mails marketing, désactiver les cookies via les paramètres de votre navigateur, ou nous contacter pour demander la mise à jour ou la correction de vos informations.</p>
      </LegalSection>

      <LegalSection title="11. Droits d’accès, de rectification et de suppression">
        <p>Selon le droit applicable et votre lieu de résidence, vous pouvez avoir le droit de demander : l’accès à certaines informations personnelles que nous détenons à votre sujet, la rectification d’informations inexactes, la suppression de certaines informations, la limitation de certains traitements, ou des informations sur la manière dont vos données sont utilisées.</p>
        <p>Pour formuler une telle demande, contactez-nous à : [À COMPLÉTER : E-MAIL VIE PRIVÉE]</p>
      </LegalSection>

      <LegalSection title="12. Cookies et technologies de suivi">
        <p>Nous pouvons utiliser des cookies et technologies similaires pour : assurer le bon fonctionnement du site, mémoriser des réglages ou préférences, mesurer le trafic, analyser le comportement des utilisateurs, améliorer les performances et soutenir les activités de publicité ou de reciblage.</p>
        <p>Vous pouvez gérer les cookies via les paramètres de votre navigateur. Dans certains cas, votre navigateur peut vous permettre de bloquer, supprimer ou limiter les cookies. Si vous utilisez des bloqueurs de publicité, des paramètres de confidentialité ou des restrictions de navigateur, certaines fonctionnalités du site pourraient ne pas fonctionner comme prévu.</p>
      </LegalSection>

      <LegalSection title="13. Analyse d’audience">
        <p>Nous pouvons utiliser des outils d’analyse d’audience pour comprendre comment les utilisateurs interagissent avec le site, quelles pages sont consultées, comment le trafic parvient au site et comment améliorer l’expérience utilisateur et les performances de l’activité. Ces outils peuvent utiliser des cookies, balises ou technologies similaires et collecter des informations techniques et d’usage.</p>
      </LegalSection>

      <LegalSection title="14. Signal « Do Not Track »">
        <p>Certains navigateurs proposent une fonctionnalité « Do Not Track » (ne pas suivre). En l’absence de norme universelle définissant la manière dont les sites doivent répondre à ces signaux, le site peut ne pas y répondre de façon uniforme, à moins et jusqu’à ce qu’une norme légalement requise s’applique.</p>
      </LegalSection>

      <LegalSection title="15. Protection des mineurs">
        <p>Le présent site ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants de moins de 13 ans. Si vous pensez qu’un enfant de moins de 13 ans nous a communiqué des informations personnelles via le site, veuillez nous contacter afin que nous puissions prendre les mesures appropriées.</p>
      </LegalSection>

      <LegalSection title="16. Contenus et communications générés par les utilisateurs">
        <p>Si vous soumettez des messages, commentaires, demandes de support, témoignages, retours, réponses à des enquêtes ou contenus similaires, nous pouvons stocker et utiliser ces informations à des fins de support, d’amélioration des services, de contrôle qualité, de protection juridique ou à d’autres fins commerciales.</p>
      </LegalSection>

      <LegalSection title="17. Transferts d’activité">
        <p>Si la Société est impliquée dans une fusion, une acquisition, un financement, une réorganisation, une cession d’actifs ou une opération similaire, vos informations peuvent être transférées dans le cadre de cette opération, sous réserve du droit applicable.</p>
      </LegalSection>

      <LegalSection title="18. Modifications de la présente Politique de Confidentialité">
        <p>Nous pouvons mettre à jour la présente Politique de Confidentialité à tout moment. Le cas échéant, la version mise à jour sera publiée sur cette page avec une nouvelle date de « dernière mise à jour ». La poursuite de votre utilisation du site après la publication de modifications vaut acceptation de la Politique de Confidentialité mise à jour.</p>
      </LegalSection>

      <LegalSection title="19. Contact">
        <p>Si vous avez des questions concernant la présente Politique de Confidentialité ou souhaitez nous contacter au sujet de la protection de vos données, vous pouvez nous joindre :</p>
        <p>
          RAYSS RESEARCH LLC<br />
          Adresse : [À COMPLÉTER : ADRESSE DU SIÈGE]<br />
          E-mail vie privée : [À COMPLÉTER : E-MAIL VIE PRIVÉE]
        </p>
      </LegalSection>

      <LegalSection title="20. Champs à compléter avant publication">
        <p>Avant de publier la présente Politique de Confidentialité, veillez à compléter :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adresse du siège</li>
          <li>E-mail vie privée</li>
          <li>Date de dernière mise à jour</li>
          <li>les éventuels outils tiers que vous souhaitez nommer explicitement</li>
          <li>les outils de cookies / d’analyse réellement utilisés</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
