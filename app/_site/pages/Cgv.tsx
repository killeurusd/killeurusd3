import { LegalLayout, LegalSection } from "../ui";

export default function Cgv() {
  return (
    <LegalLayout title="Conditions Générales de Vente (CGV)" lastUpdated="[À COMPLÉTER]">
      <LegalSection title="1. Identité du vendeur">
        <p>Le présent site est exploité par :</p>
        <p>
          <strong>RAYSS RESEARCH LLC</strong><br />
          Forme juridique : Limited Liability Company (LLC)<br />
          État d’immatriculation : Nouveau-Mexique, États-Unis<br />
          Siège social : [ADRESSE À COMPLÉTER]<br />
          Email de contact : [EMAIL SUPPORT À COMPLÉTER]
        </p>
        <p>Ci-après dénommé “le Vendeur”.</p>
      </LegalSection>

      <LegalSection title="2. Objet">
        <p>Les présentes Conditions Générales de Vente ont pour objet de définir les conditions dans lesquelles le Vendeur propose à la vente, via le site internet KILLEUR USD, des produits et services à destination de clients particuliers et professionnels.</p>
        <p>Toute commande passée sur le site implique l’acceptation pleine et entière des présentes CGV.</p>
      </LegalSection>

      <LegalSection title="3. Produits et services proposés">
        <p>Le Vendeur propose notamment à la vente une offre de formation et d’accompagnement en trading comprenant, à la date des présentes :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>un accès immédiat à une formation numérique en ligne,</li>
          <li>un accompagnement privé individuel (1 heure par semaine),</li>
          <li>des sessions de coaching de groupe régulières, selon les modalités définies par le Vendeur.</li>
        </ul>
        <p>Le contenu exact de l’offre, sa composition, ses modules, ses bonus, ses modalités d’accompagnement et ses éventuelles évolutions sont présentés sur la page de vente du site.</p>
        <p>Le Vendeur se réserve le droit de faire évoluer, modifier, enrichir, retirer ou adapter tout ou partie de l’offre, de son contenu, de son organisation ou de ses modalités, à tout moment, afin d’améliorer l’expérience client ou d’adapter son offre.</p>
      </LegalSection>

      <LegalSection title="4. Public concerné">
        <p>Les offres du site peuvent être souscrites par :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>des particuliers agissant à des fins personnelles,</li>
          <li>des professionnels agissant dans le cadre de leur activité.</li>
        </ul>
        <p>Le client déclare avoir la capacité juridique nécessaire pour contracter et utiliser les services proposés.</p>
      </LegalSection>

      <LegalSection title="5. Caractéristiques essentielles de l’offre principale">
        <p>L’offre principale vendue sur le site comprend actuellement :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>l’accès à une formation numérique en ligne,</li>
          <li>un accès immédiat au contenu pédagogique après confirmation du paiement,</li>
          <li>1 heure de coaching privé par semaine pendant 3 mois,</li>
          <li>des sessions de groupe régulières, selon les disponibilités, l’organisation et les modalités librement définies par le Vendeur.</li>
        </ul>
        <p>Le client reconnaît que le contenu exact et l’organisation de l’offre peuvent évoluer à la discrétion du Vendeur.</p>
      </LegalSection>

      <LegalSection title="6. Prix">
        <p>Le prix de l’offre principale est fixé à : <strong>997 USD</strong></p>
        <p>Sauf mention contraire, les prix affichés sur le site sont exprimés en dollars américains.</p>
        <p>Le Vendeur se réserve le droit de modifier ses prix à tout moment. Toutefois, le prix applicable à une commande est celui affiché au moment de la validation de celle-ci.</p>
        <p>Les éventuelles taxes applicables, obligations déclaratives locales, frais bancaires, frais de conversion de devise ou autres frais annexes restent à la charge du client, sauf mention contraire affichée au moment de la commande.</p>
      </LegalSection>

      <LegalSection title="7. Commande">
        <p>La commande est réputée formée dès validation du paiement par le client et confirmation de celui-ci par le prestataire de paiement.</p>
        <p>Avant validation définitive, le client est invité à vérifier le détail de sa commande, son prix total, et à corriger toute éventuelle erreur.</p>
        <p>Le Vendeur se réserve le droit de refuser ou d’annuler toute commande en cas de fraude, de tentative de fraude, de comportement abusif, de litige antérieur, ou pour tout motif légitime.</p>
      </LegalSection>

      <LegalSection title="8. Modalités de paiement">
        <p>Le paiement est effectué via Stripe.</p>
        <p>Les moyens de paiement acceptés sont ceux proposés par Stripe au moment de la commande.</p>
        <p>Le client garantit qu’il dispose des autorisations nécessaires pour utiliser le moyen de paiement choisi.</p>
        <p>En cas de refus de paiement, d’incident, d’impayé, ou de contestation bancaire abusive, le Vendeur pourra suspendre ou annuler l’accès aux services concernés.</p>
      </LegalSection>

      <LegalSection title="9. Livraison / accès aux services">
        <h3 className="text-white font-bold mb-2 mt-4">9.1 Formation numérique</h3>
        <p>L’accès à la formation est fourni immédiatement après validation du paiement, sauf incident technique ou vérification particulière.</p>
        <h3 className="text-white font-bold mb-2 mt-4">9.2 Coaching privé</h3>
        <p>Le coaching privé (à raison d'une heure par semaine) est inclus pour une durée de 3 mois. Les séances doivent être réservées selon les modalités communiquées par le Vendeur.</p>
        <h3 className="text-white font-bold mb-2 mt-4">9.3 Coaching de groupe</h3>
        <p>Les sessions de groupe peuvent être proposées selon une fréquence et une disponibilité librement déterminées par le Vendeur. Le client reconnaît que ces sessions ne constituent pas un engagement fixe, permanent ou intangible, sauf mention expresse contraire sur la page de vente au moment de l’achat.</p>
      </LegalSection>

      <LegalSection title="10. Durée d’accès">
        <h3 className="text-white font-bold mb-2 mt-4">10.1 Formation</h3>
        <p>Sauf indication contraire au moment de l’achat, l’accès à la formation est accordé à vie, sous réserve du maintien du service, de la plateforme et du respect des présentes CGV.</p>
        <h3 className="text-white font-bold mb-2 mt-4">10.2 Coaching privé</h3>
        <p>Le coaching privé est accessible pendant une durée de 3 mois à compter de la confirmation de la commande, sauf mention contraire expresse.</p>
        <h3 className="text-white font-bold mb-2 mt-4">10.3 Coaching de groupe</h3>
        <p>Le coaching de groupe est proposé de manière variable et peut être modifié, suspendu, remplacé ou supprimé à tout moment par le Vendeur.</p>
      </LegalSection>

      <LegalSection title="11. Droit de rétractation">
        <h3 className="text-white font-bold mb-2 mt-4">11.1 Clients consommateurs</h3>
        <p>Lorsqu’un client agit en qualité de consommateur, il bénéficie d’un délai de rétractation de 14 jours à compter de la conclusion du contrat.</p>
        <p>Pour exercer ce droit, le client doit notifier sa décision de se rétracter par écrit à l’adresse email suivante : [EMAIL SUPPORT À COMPLÉTER]</p>
        <p>Toute demande doit permettre d’identifier clairement le client et la commande concernée.</p>
        <h3 className="text-white font-bold mb-2 mt-4">11.2 Remboursement en cas de rétractation</h3>
        <p>En cas de rétractation valable exercée dans le délai applicable, le Vendeur remboursera les sommes versées dans les meilleurs délais et au plus tard dans les délais requis par la réglementation applicable.</p>
        <h3 className="text-white font-bold mb-2 mt-4">11.3 Évolution future</h3>
        <p>Le client est informé que, pour les contenus numériques fournis immédiatement, un régime différent pourra être mis en place à l’avenir avec consentement exprès et reconnaissance de perte du droit de rétractation, conformément aux règles applicables.</p>
      </LegalSection>

      <LegalSection title="12. Conditions spécifiques du coaching">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>12.1 Réservation :</strong> Les séances de coaching privé doivent être réservées selon les créneaux proposés par le Vendeur.</li>
          <li><strong>12.2 Annulation / report :</strong> Toute annulation ou demande de report doit être effectuée au minimum 24 heures à l’avance.</li>
          <li><strong>12.3 Absence :</strong> En cas d’absence du client, de retard important, ou de non-présentation sans respect du délai d’annulation de 24 heures, la séance est considérée comme due et n’est pas remboursable.</li>
          <li><strong>12.4 Disponibilité :</strong> Le Vendeur fera ses meilleurs efforts pour proposer des créneaux adaptés, sans garantie de disponibilité immédiate ou illimitée.</li>
        </ul>
      </LegalSection>

      <LegalSection title="13. Obligations du client">
        <p>Le client s’engage à :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>fournir des informations exactes lors de sa commande,</li>
          <li>ne pas partager ses accès,</li>
          <li>ne pas revendre, céder, louer ou transmettre les contenus achetés,</li>
          <li>ne pas reproduire, copier, diffuser ou exploiter commercialement les supports fournis sans autorisation écrite préalable,</li>
          <li>adopter un comportement respectueux dans les échanges, coachings et espaces de groupe.</li>
        </ul>
        <p>Le non-respect de ces obligations pourra entraîner la suspension ou la suppression de l’accès aux services, sans remboursement.</p>
      </LegalSection>

      <LegalSection title="14. Propriété intellectuelle">
        <p>L’ensemble des contenus proposés par le Vendeur, incluant notamment les vidéos, textes, méthodes, documents, supports pédagogiques, visuels, structures de formation, marques, logos, et contenus du site, est protégé par les règles de propriété intellectuelle applicables.</p>
        <p>Tous les droits sont réservés.</p>
        <p>Aucune reproduction, diffusion, revente, adaptation, publication, communication ou exploitation, totale ou partielle, n’est autorisée sans l’accord écrit préalable du Vendeur.</p>
      </LegalSection>

      <LegalSection title="15. Responsabilité et avertissements">
        <p>Le contenu proposé sur le site et dans les offres du Vendeur est fourni à titre strictement éducatif et informatif.</p>
        <p>Le Vendeur :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ne fournit pas de conseil en investissement personnalisé,</li>
          <li>ne garantit aucun résultat,</li>
          <li>ne promet aucun gain,</li>
          <li>ne garantit aucune performance future,</li>
          <li>ne saurait être tenu responsable des décisions de trading, d’investissement ou de gestion financière prises par le client.</li>
        </ul>
        <p>Le trading et l’investissement comportent des risques importants de perte en capital. Le client reste seul responsable de ses décisions, de leur exécution et de leurs conséquences.</p>
        <p>Les performances passées, exemples, illustrations, analyses ou éléments pédagogiques éventuels ne constituent en aucun cas une garantie de résultats futurs.</p>
      </LegalSection>

      <LegalSection title="16. Force majeure">
        <p>Le Vendeur ne pourra être tenu responsable d’un retard ou d’une inexécution résultant d’un cas de force majeure ou de tout événement échappant raisonnablement à son contrôle.</p>
      </LegalSection>

      <LegalSection title="17. Suspension / résiliation">
        <p>Le Vendeur se réserve le droit de suspendre, restreindre ou résilier l’accès du client en cas de :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>violation des présentes CGV,</li>
          <li>usage abusif,</li>
          <li>fraude,</li>
          <li>comportement nuisible,</li>
          <li>atteinte aux intérêts du Vendeur ou des autres utilisateurs.</li>
        </ul>
        <p>Une telle mesure pourra intervenir sans remboursement si les faits le justifient.</p>
      </LegalSection>

      <LegalSection title="18. Droit applicable">
        <p>Les présentes CGV sont rédigées en français.</p>
        <p>Elles sont soumises au droit applicable déterminé conformément aux règles de conflit de lois applicables, avec référence principale au droit de l’État du Nouveau-Mexique / droit américain lorsque cela est possible.</p>
        <p>Toutefois, si le client est un consommateur bénéficiant de dispositions impératives plus protectrices dans son pays de résidence habituelle, ces dispositions pourront demeurer applicables nonobstant le présent choix de loi.</p>
      </LegalSection>

      <LegalSection title="19. Réclamations et litiges">
        <p>Toute réclamation doit être adressée en priorité à : [EMAIL SUPPORT À COMPLÉTER]</p>
        <p>Le client est invité à rechercher d’abord une solution amiable avec le Vendeur.</p>
        <h3 className="text-white font-bold mb-2 mt-4">19.1 Médiation de la consommation</h3>
        <p>Clause provisoire à compléter avant mise en ligne définitive si nécessaire : Si le client agit en qualité de consommateur et que la réglementation applicable l’exige, il pourra recourir à un dispositif de médiation de la consommation selon les informations qui seront communiquées par le Vendeur.</p>
      </LegalSection>

      <LegalSection title="20. Nullité partielle">
        <p>Si une clause des présentes CGV était déclarée nulle, illégale ou inapplicable, les autres stipulations demeureraient pleinement en vigueur.</p>
      </LegalSection>

      <LegalSection title="21. Acceptation">
        <p>Le client reconnaît avoir pris connaissance des présentes CGV avant toute commande, les avoir comprises et acceptées sans réserve.</p>
      </LegalSection>

      <LegalSection title="22. Coordonnées à compléter">
        <p>
          Adresse du siège : [À COMPLÉTER]<br />
          Email support : [À COMPLÉTER]<br />
          Date de mise à jour : [À COMPLÉTER]<br />
          Médiateur consommation : [À COMPLÉTER SI NÉCESSAIRE]
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
