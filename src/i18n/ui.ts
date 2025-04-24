import SpainFlag from '@/components/flags/Spain.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.servicio': 'Servicios',
		'nav.archivo': 'Archivo',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
		'nav.contacto': 'Contacto'
	},
	en: {
		'nav.inicio': 'Home',
		'nav.servicio': 'Services',
		'nav.archivo': 'Archive',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
		'nav.contacto': 'Contact'
	}
} as const;

export const routes = {
	es: {
		vota: 'vota',
		servicio: 'servicio',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
		contacto: 'contacto',
	},
	en: {
		vota: 'vote',
		servicio: 'service',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
		contacto: 'contact',
	}
};