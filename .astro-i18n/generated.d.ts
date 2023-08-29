type DefaultLangCode = "lt"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/" | "/pdf" 
type RouteParams = {"/": undefined; "/pdf": undefined; }
type TranslationPath = "config.main.project" | "config.main.title" | "config.statusbar.statusbar_empty" | "config.statusbar.statusbar_ok" | "config.main.meta.title" | "config.main.meta.description" | "config.main.pdf.footer" | "config.main.cta.title" | "config.main.cta.description" | "config.main.cta.buttonLabel" | "config.main.sections.education.config.title" | "config.main.sections.education.diploma1.title" | "config.main.sections.education.diploma1.institution" | "config.main.sections.education.diploma1.description" | "config.main.sections.experience.config.title" | "config.main.sections.experience.jobs.job1.role" | "config.main.sections.experience.jobs.job1.company" | "config.main.sections.experience.jobs.job1.description" | "config.main.sections.experience.jobs.job2.role" | "config.main.sections.experience.jobs.job2.company" | "config.main.sections.experience.jobs.job2.description" | "config.main.sections.experience.jobs.job3.role" | "config.main.sections.experience.jobs.job3.company" | "config.main.sections.experience.jobs.job3.description"
type TranslationOptions = { "config.main.project": {} | undefined; "config.main.title": {} | undefined; "config.statusbar.statusbar_empty": {} | undefined; "config.statusbar.statusbar_ok": {} | undefined; "config.main.meta.title": {} | undefined; "config.main.meta.description": {} | undefined; "config.main.pdf.footer": {} | undefined; "config.main.cta.title": {} | undefined; "config.main.cta.description": {} | undefined; "config.main.cta.buttonLabel": {} | undefined; "config.main.sections.education.config.title": {} | undefined; "config.main.sections.education.diploma1.title": {} | undefined; "config.main.sections.education.diploma1.institution": {} | undefined; "config.main.sections.education.diploma1.description": {} | undefined; "config.main.sections.experience.config.title": {} | undefined; "config.main.sections.experience.jobs.job1.role": {} | undefined; "config.main.sections.experience.jobs.job1.company": {} | undefined; "config.main.sections.experience.jobs.job1.description": {} | undefined; "config.main.sections.experience.jobs.job2.role": {} | undefined; "config.main.sections.experience.jobs.job2.company": {} | undefined; "config.main.sections.experience.jobs.job2.description": {} | undefined; "config.main.sections.experience.jobs.job3.role": {} | undefined; "config.main.sections.experience.jobs.job3.company": {} | undefined; "config.main.sections.experience.jobs.job3.description": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
