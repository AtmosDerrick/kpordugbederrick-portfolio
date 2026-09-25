import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteHeader } from "@/components/navigation/site-header";
import { profile } from "@/data/profile";

const subtleLink =
  "text-sm text-stone-600 transition-colors duration-200 hover:text-stone-900";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <section className="grid gap-12 pb-20 pt-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              {profile.title}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-stone-900 sm:text-5xl lg:text-7xl">
              {profile.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#experience" className="px-5 py-3">
                View Experience
              </ButtonLink>
              <ButtonLink
                href="/cv/Kpordugbe_Derrick_CV@2026.pdf"
                variant="secondary"
                className="px-5 py-3"
                download
              >
                Download CV
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone-600">
              <a
                href="https://github.com/AtmosDerrick"
                target="_blank"
                rel="noreferrer"
                className={subtleLink}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/derrick-kpordugbe/"
                target="_blank"
                rel="noreferrer"
                className={subtleLink}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="border border-stone-200 bg-stone-100/60 p-6 md:mb-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
              Focus
            </p>
            <div className="mt-6 space-y-4">
              {profile.meta.map((item) => (
                <div
                  key={item}
                  className="border-b border-stone-200 pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm leading-6 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="border-t border-stone-200 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="About"
              title="Senior engineer. Thoughtful builder. Reliable operator."
            />
            <div className="space-y-5 text-base leading-7 text-stone-600 sm:text-lg">
              <p>
                I design and deliver dependable software systems, working across
                product, platform, and operational layers to create solutions
                that are usable, maintainable, and ready for real production
                demands.
              </p>
              <p>
                My work spans full-stack development, backend and API
                engineering, fintech systems, cloud infrastructure, AI
                integration, and technical leadership. I enjoy solving complex
                problems at the intersection of software architecture, delivery,
                and business needs.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 py-20" id="work">
          <SectionHeading
            eyebrow="Engineering Focus"
            title="Systems, platform thinking, and implementation depth."
            description="The work blends product delivery, infrastructure, automation, and architecture into reliable engineering outcomes."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <div
                key={area}
                className="border border-stone-200 bg-stone-100/40 p-6"
              >
                <p className="text-lg font-medium tracking-[-0.03em] text-stone-900">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="border-t border-stone-200 py-20">
          <SectionHeading
            eyebrow="Experience"
            title="Selected engineering experience."
            description="A concise view of the roles and periods documented in the professional CV."
          />

          <div className="mt-10 space-y-10">
            {profile.experience.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="border-t border-stone-200 pt-8 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                      {role.period}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                          {role.company}
                        </h3>
                        <p className="mt-2 text-base text-stone-600">
                          {role.title}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-base leading-7 text-stone-600">
                      {role.description.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-none bg-stone-900"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-stone-200 py-20">
          <SectionHeading
            eyebrow="Skills"
            title="A practical engineering toolkit."
            description="Organized by the core domains that shape the work, without a wall of branded technology logos."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div
                key={group}
                className="border border-stone-200 bg-stone-100/40 p-6"
              >
                <h3 className="text-lg font-medium tracking-[-0.03em] text-stone-900">
                  {group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 py-20" id="approach">
          <SectionHeading
            eyebrow="Architecture / Engineering Approach"
            title="Thoughtful systems, calm execution."
            description="The engineering approach is grounded in maintainability, reliability, and long-term team velocity."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {profile.approach.map((item) => (
              <div key={item.title} className="border border-stone-200 p-6">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 py-20" id="certification">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Certification"
              title="Continuous professional learning."
            />
            <div className="space-y-4 text-base leading-7 text-stone-600 sm:text-lg">
              {profile.certification.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 py-20" id="education">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Education"
              title="Academic background and continuing development."
            />
            <div className="space-y-4 text-base leading-7 text-stone-600 sm:text-lg">
              {profile.education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-stone-200 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-stone-900 sm:text-5xl">
                Let&apos;s build something reliable.
              </h2>
            </div>

            <div className="space-y-4 border border-stone-200 bg-stone-100/40 p-6 text-base text-stone-700">
              <p>
                <span className="font-medium text-stone-900">Email:</span>{" "}
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-stone-700 hover:text-stone-900"
                >
                  {profile.contact.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-900">Phone:</span>{" "}
                <a
                  href={`tel:${profile.contact.phone}`}
                  className="text-stone-700 hover:text-stone-900"
                >
                  {profile.contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-900">GitHub:</span>{" "}
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-700 hover:text-stone-900"
                >
                  {profile.contact.github}
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-900">LinkedIn:</span>{" "}
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-700 hover:text-stone-900"
                >
                  {profile.contact.linkedin}
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-900">Location:</span>{" "}
                {profile.location}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Derrick Kpordugbe</p>
          <p>Senior Software Engineer</p>
        </div>
      </footer>
    </div>
  );
}
