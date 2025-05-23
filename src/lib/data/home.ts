import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Antonio';

export const lastName = 'Portada';

export const description =
	'In progress...';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/AntonioPortada' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://mx.linkedin.com/in/antonio-portada'
	},
	{
		platform: Platform.Email,
		link: 'antonio_portada25@hotmail.com'
	},
	{
		platform: Platform.Upwork,
		link: 'https://www.upwork.com/freelancers/~0187382d14076db02f'
	}
];

export const skills = getSkills('java', 'spring', 'swift', 'angular', 'js', 'ts', 'bootstrap', 'html');
