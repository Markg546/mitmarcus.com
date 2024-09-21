import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'en';

export const locales = [defaultLocale, 'ro', 'ru', 'da'] as const;

export const {
	Link,
	redirect,
	usePathname,
	useRouter,
} = createSharedPathnamesNavigation({ locales });

