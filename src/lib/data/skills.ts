import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' }),
	defineSkillCategory({ name: 'Versioning', slug: 'versions' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: "I've used java extensively accross all my backend roles, from building "
		+"RESTFull APIs using Spring and Jersey to developing complete "
		+"web application. I've worked with java 7, 8, 11, 17, adapting to the envolving ecosystem "
		+"to deliver scalable and maintanable solutions.",
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'spring',
		color: 'green',
		description: "Spring framework and Spring Boot have been at the core of my backend development."
		+"I've created APIs, configured security, managed services with dependency ingection and implemented "
		+"bussiness logic layers across multiple projects including enterprise apps and client-server systems",
		logo: Assets.Spring,
		name: 'Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'swift',
		color: 'orange',
		description: "In my role as an iOS developer, I worked on Swift to maintain and improve existing "
		+"mobile applications. This envolved updating codebase for iOS compatibility, adding new "
		+"functionalities, and ensuring the UI aligment with modern standards and Apples guidelines.",
		name: 'Swift',
		logo: Assets.Swift,
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'swiftui',
		color: 'blue',
		description: "While maintaining iOS apps, I've been gradually adopting SwiftUI in personal projects. I'm "
		+"exploting its declarative syntax and how it simplifies building adaptive UIs compared to UIKit",
		logo: Assets.SwiftUI,
		name: 'SwiftUI',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: "I've used JavaScript primarily for building and enhancing dynamic frontends. Working alongside "
		+"JSP framework, I created interactive user interfaces that connect seamslessly to back services.",
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: "I used TypeScript while working on Angular-based applications to enforce type safety and organize large codebases. "
		+"This helped improve the maintainability and readability of frontend code across collaborative teams.",
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: "I have hands-on experience using HTML in production environments as part of full-stack development. I've used it to structure responsive and accessible UIs, "
		+"working alongside CSS, JavaScript, JSP, and Angular to deliver clean and functional web applications connected to backend services.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'jsp',
		color: 'blue',
		description: "I used JSP to render dynamic content in web applications. This was especially valuable in older Java EE projects, "
		+"allowing me to deliver user-friendly interfaces connected to business logic.",
		logo: Assets.JSP,
		name: 'Java Server Pages',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'jsf',
		color: 'yellow',
		description: "I worked with JSF in legacy applications to develop server-rendered views that connect to backend Java services. "
		+"It was particularly useful in applications where backend-driven UI generation was preferred.",
		logo: Assets.JSF,
		name: 'Java Server Faces',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: "I used Angular to build modular and responsive frontends, particularly in projects where I needed to connect complex UIs to Java-based APIs. "
		+"I’ve also completed advanced Angular courses to strengthen my understanding of modern frontend architecture.",
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'blue',
		description: "Bootstrap helped me quickly structure responsive interfaces, especially during full-stack development work. "
		+"I often used it to create clean layouts and components while integrating with Spring or Angular apps.",
		logo: Assets.Bootstrap,
		name: 'Booststrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: "I have hands-on experience using version control across multiple team-based and solo projects. I’ve managed repositories, handled branching strategies, "
		+"and ensured codebase stability throughout the development lifecycle. Additionally, I implemented GitHub Actions to automate CI/CD workflows, particularly for "
		+"deploying static sites and web applications to GitHub Pages — streamlining releases and improving deployment consistency.",
		logo: Assets.Git,
		name: 'Git',
		category: 'versions'
	}),
	defineSkill({
		slug: 'svn',
		color: 'blue',
		description: "Version control is a core part of my workflow. I used SVN to manage project repositories, coordinate changes with teams, "
		+"and maintain stable release versions across all environments.",
		logo: Assets.Svn,
		name: 'SVN',
		category: 'versions'
	}),
	defineSkill({
		slug: 'aws',
		color: 'yellow',
		description: "I'm currently learning AWS to strengthen my cloud deployment skills. I’ve been exploring EC2 and S3 to understand how to host "
		+"services and manage static assets. I'm also practicing access control with IAM and basic infrastructure setup for future backend deployments.",
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: "I used Azure to manage remote servers during development and testing. It allowed me to connect, configure, and maintain backend "
		+"infrastructure from anywhere, enhancing the reliability of my deployment process.",
		logo: Assets.Azure,
		name: 'Azure',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'blue',
		description: "I integrated GCP services into my projects, such as Google APIs for communication. "
		+"GCP helped extend the capabilities of the backend systems I built, particularly in apps requiring cloud connectivity.",
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'cloud'
	}),
defineSkill({
		slug: 'digitalocean',
		color: 'blue',
		description: "I have hands-on experience deploying applications to production using DigitalOcean. I’ve set up environments for Java-based web apps, "
		+"and handled server access and maintenance to ensure stable and reliable deployments.",
		logo: Assets.DigitalOcean,
		name: 'Digital Ocean',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'blue',
		description: "I explored Jenkins in introductory workshops to understand continuous integration. "
		+"I’ve experimented with pipelines to automate builds and streamline testing processes in Java-based projects.",
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: "I learned Docker to containerize my applications and create consistent development environments. It’s been valuable in making my applications portable and easier to deploy across teams.",
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'hibernate',
		color: 'gray',
		description: "I’ve used Hibernate in backend projects to manage object-relational mapping and simplify database interactions. "
		+"It helped me implement dynamic queries, reduce boilerplate code, and ensure transactional consistency in Java applications.",
		logo: Assets.Hibernate,
		name: 'Hibernate',
		category: 'orm'
	}),
	defineSkill({
		slug: 'jpa',
		color: 'green',
		description: "I’ve applied Spring Data JPA in projects built with Spring Boot to handle database operations through repository interfaces. "
		+"It allowed me to quickly implement CRUD functionality and focus on business logic without writing SQL manually.",
		logo: Assets.JPA,
		name: 'Spring data JPA',
		category: 'orm'
	}),
	defineSkill({
		slug: 'mybatis',
		color: 'orange',
		description: "I’ve worked with MyBatis to maintain control over SQL queries while integrating with Java applications. "
		+"I used it in environments where fine-grained query tuning was needed and appreciated its flexibility with XML or annotation-based mappings.",
		logo: Assets.Mybatis,
		name: 'Mybatis',
		category: 'orm'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: "I’ve worked with Oracle Database in enterprise settings to create and manage relational data structures. "
		+"This included writing stored procedures, triggers, and jobs using PL/SQL, ensuring data integrity and performance.",
		logo: Assets.Oracle,
		name: 'Oracle',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgrest',
		color: 'blue',
		description: "I’ve used PostgreSQL in backend systems requiring robustness and advanced SQL features. "
		+"I worked with indexing, complex joins, and structured data types to build efficient and scalable database layers.",
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: "I’ve worked with MySQL across multiple projects for web and API backends. I used DDL/DML commands, created triggers and procedures, "
		+"and performed data migrations during development and deployment phases.",
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: "I'm studying MongoDB as part of my exploration into NoSQL databases. Through exercises and labs, I'm practicing data modeling, indexing, and CRUD operations, "
		+"aiming to complement my relational database background with flexible document storage techniques.",
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'tomcat',
		color: 'yellow',
		description: "I’ve deployed WAR files and configured Apache Tomcat servers to host my Java web applications. "
		+"This includes setting up production-ready environments and troubleshooting deployment issues.",
		logo: Assets.Tomcat,
		name: 'Apache Tomcat',
		category: 'server'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
