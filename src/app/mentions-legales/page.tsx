import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales & Confidentialité — Louis de Caumont",
  description:
    "Mentions légales et politique de confidentialité du site louisdecaumont.fr. Informations sur la collecte et le traitement des données personnelles.",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegales() {
  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Mentions légales & Politique de confidentialité
        </h1>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Éditeur du site
            </h2>
            <p>
              Louis de Caumont — Développeur web freelance
              <br />
              Email : l2caumont@gmail.com
              <br />
              SIRET : 92985203600011
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Politique de confidentialité
            </h2>
            <p>
              Ce site utilise Google Analytics 4 pour mesurer son audience
              (voir section &laquo;&nbsp;Cookies&nbsp;&raquo; ci-dessous). Aucune
              autre donnée personnelle n&apos;est collectée de manière
              automatique.
            </p>
            <p className="mt-3">
              Si vous utilisez le formulaire de contact, les informations
              fournies (nom, email, message) sont transmises via Formspree et
              utilisées uniquement pour répondre à votre demande. Ces données ne
              sont ni vendues, ni partagées avec des tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression de vos données. Pour exercer ces
              droits, contactez-moi à l2caumont@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, code) est
              protégé par le droit d&apos;auteur. Toute reproduction sans
              autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Cookies et mesure d&apos;audience
            </h2>
            <p>
              Ce site utilise Google Analytics 4 (GA4) pour mesurer
              l&apos;audience et comprendre comment les visiteurs interagissent
              avec le contenu. GA4 peut déposer des cookies de mesure
              (identifiants anonymes : <code>_ga</code>,{" "}
              <code>_ga_*</code>) pour comptabiliser les visites et les pages
              consultées.
            </p>
            <p className="mt-3">
              Conformément au RGPD et à la directive ePrivacy, ces cookies ne
              sont déposés qu&apos;après votre consentement explicite. Lors de
              votre première visite, un bandeau vous propose
              d&apos;accepter ou de refuser les cookies d&apos;analyse. Votre
              choix est enregistré et respecté lors de vos visites suivantes.
            </p>
            <p className="mt-3">
              Aucun cookie publicitaire n&apos;est déposé. Aucune donnée
              n&apos;est partagée à des fins de publicité ciblée.
            </p>
            <p className="mt-3">
              Vous pouvez modifier votre choix à tout moment en cliquant sur
              le lien &laquo;&nbsp;Gérer les cookies&nbsp;&raquo; dans le pied
              de page du site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Liens externes
            </h2>
            <p>
              Ce site contient des liens vers des sites tiers (projets clients,
              réseaux sociaux, outils). Louis de Caumont ne peut être tenu
              responsable du contenu de ces sites externes ni de leurs
              pratiques en matière de protection des données personnelles.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Mise à jour
            </h2>
            <p>
              Cette page a été mise à jour le 29 mars 2026. Louis de Caumont
              se réserve le droit de modifier ces mentions légales et cette
              politique de confidentialité à tout moment. Les modifications
              prennent effet dès leur publication sur cette page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
