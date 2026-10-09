import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Terms of Service | ION GROUP",
  description: "Terms of Service for ION GROUP, a Web3 SMM agency.",
}

const LAST_UPDATED = "9 October 2026"

type Section = { title: string; body: ReactNode }

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-[16px] text-[#B8B8B8] leading-relaxed mb-4 last:mb-0">{children}</p>
)

const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="mb-4 last:mb-0 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-[16px] text-[#B8B8B8] leading-relaxed">
        <span className="mt-[11px] inline-block w-[4px] h-[4px] shrink-0 rounded-full bg-[#6A6A6A]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const OL = ({ items }: { items: ReactNode[] }) => (
  <ol className="mb-4 last:mb-0 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-[16px] text-[#B8B8B8] leading-relaxed">
        <span className="text-accent min-w-[18px]">{i + 1}.</span>
        <span>{item}</span>
      </li>
    ))}
  </ol>
)

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-medium text-foreground">{children}</strong>
)

const sections: Section[] = [
  {
    title: "About these Terms",
    body: (
      <>
        <P>
          These Terms govern all services provided by ION GROUP to its clients. They apply together with the
          Order Form signed for each engagement.
        </P>
        <P>
          <B>Provider.</B> ION GROUP, iongroup.agency (&quot;ION GROUP&quot;, &quot;we&quot;, &quot;us&quot;).
        </P>
        <P>
          <B>Client.</B> The company, project, DAO or individual named in the Order Form (&quot;Client&quot;,
          &quot;you&quot;).
        </P>
      </>
    ),
  },
  {
    title: "Definitions",
    body: (
      <UL
        items={[
          <><B>Order Form</B> — the document signed for each engagement that sets out the package, scope, fee, start date and Initial Term.</>,
          <><B>Services</B> — the social media, content and community management services described in the Order Form.</>,
          <><B>Deliverables</B> — posts, copy, visuals, content plans, reports and other materials we create for you under the Order Form.</>,
          <><B>Billing Period</B> — one calendar month starting on the start date in the Order Form.</>,
          <><B>Initial Term</B> — the minimum engagement period, 1 Billing Period unless the Order Form states otherwise.</>,
        ]}
      />
    ),
  },
  {
    title: "Acceptance and order of precedence",
    body: (
      <>
        <P>
          These Terms are accepted when you sign the Order Form, confirm it in writing (including by email or
          Telegram), or pay the first invoice, whichever happens first.
        </P>
        <P>
          If the Order Form and these Terms conflict, the Order Form prevails. Your own terms of purchase do not
          apply unless we agree to them in writing.
        </P>
        <P>
          We may update these Terms. Changes apply to your engagement from the next Billing Period after we
          notify you, and you may terminate under Section 9 if you do not accept them.
        </P>
      </>
    ),
  },
  {
    title: "Services and scope",
    body: (
      <>
        <P>
          We provide the Services exactly as listed in the Order Form: platforms, number of posts per month,
          content types, community management hours and reporting frequency.
        </P>
        <P>
          Anything not listed in the Order Form is out of scope. This includes paid advertising, KOL and
          influencer fees, giveaway prizes, paid placements, bots and third-party tools. Out-of-scope work is
          quoted separately and starts only after written agreement.
        </P>
        <P>Advertising budgets, prizes and third-party costs are always paid by the Client, separately from our fee.</P>
      </>
    ),
  },
  {
    title: "Onboarding and start",
    body: (
      <P>
        Work starts after we receive full payment of the first invoice and the completed onboarding brief. We
        deliver the first content plan within 5 business days of that point.
      </P>
    ),
  },
  {
    title: "Client obligations",
    body: (
      <>
        <P>You agree to:</P>
        <OL
          items={[
            "Provide account access, brand assets, roadmap, tone of voice and any required information within 3 business days of our request.",
            "Name one contact person who can approve content and answer urgent questions.",
            "Tell us in advance about announcements, launches, listings, partnerships and any information we must not publish.",
            "Make sure all materials you provide do not infringe third-party rights and are accurate.",
            "Remain responsible for your project, token, smart contracts and compliance with laws that apply to it, including securities, financial promotion and advertising rules in your target markets.",
          ]}
        />
        <P>If you delay any of the above, our deadlines move by the same period. The fee for the Billing Period remains due.</P>
      </>
    ),
  },
  {
    title: "Approvals and revisions",
    body: (
      <>
        <P>
          We send content for approval according to the content plan. You have 48 hours to approve or request
          changes. Content not commented on within 48 hours is considered approved and may be published.
        </P>
        <P>
          Each Deliverable includes 2 rounds of revisions. Further revisions, or changes to an already approved
          brief, are charged separately at a price agreed in writing beforehand.
        </P>
        <P>
          We may refuse to publish content that we reasonably believe is misleading, unlawful, or harmful to our
          reputation, including guaranteed-return claims and price predictions.
        </P>
      </>
    ),
  },
  {
    title: "Term and renewal",
    body: (
      <P>
        The engagement runs for the Initial Term stated in the Order Form, 1 Billing Period by default. After
        that it renews automatically month to month until either party terminates.
      </P>
    ),
  },
  {
    title: "Termination",
    body: (
      <>
        <UL
          items={[
            <><B>No mid-month exit:</B> termination always takes effect at the end of a Billing Period. Once a Billing Period has started, its full monthly fee is due, including both installments.</>,
            <><B>After the Initial Term:</B> either party may terminate with 7 days&apos; written notice before the end of the current Billing Period. Notice given later takes effect at the end of the following Billing Period.</>,
            <><B>During the Initial Term:</B> you may stop the work, but the full fee for the Initial Term remains due.</>,
            <><B>For cause:</B> either party may terminate immediately if the other materially breaches these Terms and does not fix it within 7 days of written notice.</>,
            <><B>Non-payment:</B> we may terminate immediately if an installment remains unpaid 7 days after its due date. The rest of the fee for the current Billing Period then becomes due at once.</>,
          ]}
        />
        <P>
          On termination, we hand back account access and deliver all paid Deliverables. You pay the full fee for
          the Billing Period in which termination takes effect.
        </P>
      </>
    ),
  },
  {
    title: "Fees and invoicing",
    body: (
      <>
        <P>
          Fees are set in US dollars (USD) in the Order Form. The monthly fee is paid in advance in two equal
          installments.
        </P>
        <div className="border-t border-border mb-6">
          {[
            ["Installment 1", "50%", "Before the Billing Period starts. For the first month, before work starts"],
            ["Installment 2", "50%", "On the 15th day of the Billing Period"],
          ].map(([name, share, due]) => (
            <div key={name} className="grid grid-cols-[1fr_auto] md:grid-cols-[180px_80px_1fr] gap-x-6 gap-y-1 py-4 border-b border-border">
              <div className="text-[15px] text-foreground font-medium">{name}</div>
              <div className="text-[15px] text-foreground text-right md:text-left">{share}</div>
              <div className="col-span-2 md:col-span-1 text-[15px] text-[#B8B8B8]">{due}</div>
            </div>
          ))}
        </div>
        <UL
          items={[
            "Both installments are one monthly obligation. Paying the first installment commits you to paying the second, including if you give notice of termination.",
            "Invoices are issued 7 days before each due date.",
            "Prices are net. VAT is added where required by law. For business clients outside Germany, the reverse-charge mechanism may apply.",
          ]}
        />
      </>
    ),
  },
  {
    title: "Payment methods",
    body: (
      <>
        <P>We accept USDT and USDC on the networks listed in the invoice, and bank transfer in EUR or USD on request.</P>
        <UL
          items={[
            "Crypto payments are calculated 1:1 for stablecoins against the USD amount on the invoice.",
            "Network fees and bank charges are paid by the Client. The invoice is paid only when the full amount arrives.",
            "Payment is valid only to the wallet address or bank account stated in the invoice. We never change payment details by message. Confirm any change with us through a second channel.",
          ]}
        />
      </>
    ),
  },
  {
    title: "Late payment",
    body: (
      <P>
        If an installment is not paid within 3 days of its due date, we may pause all Services until payment
        arrives. The pause does not extend the Billing Period or reduce the fee.
      </P>
    ),
  },
  {
    title: "No refunds",
    body: (
      <P>
        Fees for a Billing Period that has started are non-refundable and due in full, including the second
        installment, even if you terminate early or pause the work. If we terminate without cause, we refund the
        unused part of the current Billing Period.
      </P>
    ),
  },
  {
    title: "Payment in tokens",
    body: (
      <>
        <P>
          Token compensation is accepted only in addition to the USD fee, never instead of it, and only if agreed
          in the Order Form. The Order Form must state the token, amount, vesting schedule, unlock dates and
          delivery wallet.
        </P>
        <P>
          Tokens are delivered at the Client&apos;s risk of listing and price. Failure to list, delays, or loss of
          value do not reduce the USD fee or create any obligation for us.
        </P>
      </>
    ),
  },
  {
    title: "Intellectual property",
    body: (
      <>
        <P>
          Once the relevant Billing Period is paid in full, you receive an exclusive, worldwide, perpetual right
          to use the Deliverables created in it. Until payment, all rights stay with us.
        </P>
        <P>We keep the rights to our methods, templates, frameworks and know-how, and may reuse them for other clients.</P>
      </>
    ),
  },
  {
    title: "Portfolio",
    body: (
      <P>
        We may name you as a client and show published Deliverables and public results in our portfolio, website
        and social media. If you need confidentiality, state it in the Order Form and we will not do so.
      </P>
    ),
  },
  {
    title: "No guarantee of results",
    body: (
      <>
        <P>
          We commit to the agreed scope and quality of work, not to specific outcomes. We do not guarantee
          follower growth, reach, engagement, token price, listings, funding or sales.
        </P>
        <P>
          Results depend on factors outside our control, including market conditions, platform algorithms,
          account restrictions, and your product and announcements. Platform bans, shadowbans or algorithm changes
          are not a breach by us.
        </P>
      </>
    ),
  },
  {
    title: "Confidentiality",
    body: (
      <P>
        Each party keeps the other&apos;s non-public information confidential and uses it only for the engagement.
        This includes unannounced partnerships, listings, tokenomics, fundraising and internal metrics. The
        obligation lasts 2 years after the engagement ends.
      </P>
    ),
  },
  {
    title: "Account access and security",
    body: (
      <P>
        We use account access only for the Services and store credentials securely. You remain the owner of all
        accounts. You should change passwords and remove our access when the engagement ends.
      </P>
    ),
  },
  {
    title: "Limitation of liability",
    body: (
      <>
        <P>
          Our total liability under any engagement is limited to the fees you paid for the last Billing Period. We
          are not liable for indirect damages, lost profits, lost tokens or market losses.
        </P>
        <P>
          These limits do not apply to intent, gross negligence, injury to life, body or health, or where
          liability cannot be limited under German law.
        </P>
      </>
    ),
  },
  {
    title: "Independent contractor",
    body: (
      <P>
        We act as an independent contractor. Nothing in these Terms creates employment, partnership or agency. We
        do not act as your financial, legal or investment adviser.
      </P>
    ),
  },
  {
    title: "Governing law and disputes",
    body: (
      <>
        <P>
          These Terms are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on
          Contracts for the International Sale of Goods. For business clients, the courts at ION GROUP&apos;s place
          of business in Germany have exclusive jurisdiction.
        </P>
        <P>Before going to court, both parties will try to resolve any dispute in good faith within 30 days.</P>
      </>
    ),
  },
  {
    title: "Final provisions",
    body: (
      <UL
        items={[
          "Notices must be in writing. Email to the addresses in the Order Form is sufficient.",
          "If any provision is invalid, the rest of these Terms stays in force.",
          "These Terms are written in English. Translations are for convenience only.",
        ]}
      />
    ),
  },
]

const pad = (n: number) => String(n).padStart(2, "0")

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="flex justify-between items-center px-6 md:px-12 py-[18px] border-b border-border">
        <Link href="/" className="text-[19px] font-medium tracking-tight hover:text-accent transition-colors">
          ION GROUP
        </Link>
        <Link
          href="/"
          className="text-[14px] text-muted-foreground uppercase tracking-[2px] hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </nav>

      <header className="px-6 md:px-12 pt-20 md:pt-28 pb-14 md:pb-20 border-b border-border">
        <div className="text-[13px] text-accent tracking-[2px] uppercase mb-8 flex items-center">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-current mr-2.5" />
          Legal
        </div>
        <h1 className="text-[44px] md:text-[80px] font-medium leading-[1.02] tracking-[-0.02em] mb-6">
          Terms of Service
        </h1>
        <p className="text-[14px] text-[#7A7A7A] uppercase tracking-[2px]">Last updated: {LAST_UPDATED}</p>
      </header>

      <main className="px-6 md:px-12">
        <div className="md:grid md:grid-cols-[220px_1fr] md:gap-16">
          {/* Contents — desktop only */}
          <aside className="hidden md:block pt-16">
            <div className="sticky top-10">
              <div className="text-[12px] text-accent uppercase tracking-[2px] mb-5">Contents</div>
              <ol className="space-y-2">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#s${i + 1}`}
                      className="flex gap-3 text-[13px] text-[#7A7A7A] hover:text-foreground transition-colors leading-snug"
                    >
                      <span className="min-w-[20px]">{pad(i + 1)}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="max-w-[720px]">
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="scroll-mt-8 py-10 md:py-12 border-b border-border">
                <div className="flex gap-5 items-baseline mb-5">
                  <span className="text-[14px] text-accent tracking-[2px] font-medium min-w-[28px]">{pad(i + 1)}</span>
                  <h2 className="text-[22px] md:text-[26px] font-medium tracking-[-0.01em] leading-tight">{s.title}</h2>
                </div>
                <div className="md:pl-[48px]">{s.body}</div>
              </section>
            ))}

            <div className="py-12">
              <P>
                Questions about these Terms:{" "}
                <Link
                  href="https://t.me/ion_contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 decoration-[#555] hover:decoration-foreground"
                >
                  Telegram @ion_contact
                </Link>
              </P>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12 py-12 border-t border-border">
        <Link href="/" className="text-[18px] font-medium hover:text-accent transition-colors">
          ION GROUP
        </Link>
        <div className="text-[14px] text-[#7A7A7A]">© 2026 ION GROUP</div>
      </footer>
    </div>
  )
}
