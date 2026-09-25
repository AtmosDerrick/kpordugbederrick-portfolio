import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.14em] text-stone-900 uppercase"
        >
          Derrick Kpordugbe
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 transition-colors duration-200 hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="/cv/Kpordugbe_Derrick_CV@2026.pdf"
          variant="secondary"
          className="px-4 py-2.5"
          download
        >
          Download CV
        </ButtonLink>
      </div>
    </header>
  );
}
