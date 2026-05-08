export interface Project {
    id: number;
    name: string;
    caption: string;
    img: string;
    deployment: string | null;
    code: string | null;
    description: string;
}

export const projectList: Project[] = [
    {
        id: 1,
        name: 'Lo-fi Gaming Lounge',
        caption: 'Win98 meets Neopets',
        img: '/img/lofigaminglounge.png',
        deployment: 'https://lofigaminglounge.com',
        code: null,
        description:
            "My wife and I love cozy gaming, casual and inviting spaces, and we have the skills to build it ourselves, so we did. This is a full stack project where we make bespoke assets and features from the ground up. Visitors can use most features or sign up with a passwordless email flow to access everything. There's a music player, leaderboards, release notes, and of course: games. There's custom email templates, authentication, a Postgres database, and everything is orchestrated using Kubernetes.",
    },
    {
        id: 2,
        name: 'Inventory',
        caption:
            'Inventory and grocery list in Next.js, TypeScript, TailwindCSS and Firebase with login authentication.',
        img: '/img/inventory.jpg',
        deployment: 'https://inventory.jorgevds.vercel.app/',
        code: 'https://inventory.jorgevds.vercel.app/',
        description:
            "Full stack app I made a long time ago, as one of the first full stack apps I ever built. It's made in a now ancient version of NextJS, using Firebase as its NoSQL database. The app has a login flow and contact form with Google reCAPTCHA as well. While the app itself is a glorified to do list, it answers a real need I felt at the time (and still do) of being at a grocery store and not knowing what you have left in your pantry and fridge.",
    },
    {
        id: 3,
        name: 'Ordinary Rabbit',
        caption: 'NextJS static export landing page of my company',
        img: '/img/ordinary-rabbit.png',
        deployment: 'https://ordinary-rabbit.com',
        code: null,
        description:
            "This is the landing page for my company, Ordinary Rabbit. I work together with my wife who's the designer; I make most of the technical decisions and implement to boot. The site itself is a simple static export from a NextJS app, which itself sits within a Turborepo monorepo alongside other projects that are in active development. It's got dark mode so it's all good.",
    },
    {
        id: 4,
        name: 'Pod',
        caption: 'Responsive landing page according to a design by Frontendmentor.io.',
        img: '/img/pod.jpg',
        deployment: 'https://jorgevds.github.io/pod/',
        code: 'https://github.com/jorgevds/pod',
        description:
            "A design challenge I did. There's no engineering, just layout and style. I'm happy with how it came out.",
    },
    {
        id: 5,
        name: "Wolf's Workshop",
        caption: 'The latest in landing page technology: a landing page for a keyboard web shop!',
        img: '/img/wolfs-workshop.jpg',
        deployment: 'https://wolf-workshop-git-main.jorgevds.vercel.app/',
        code: 'https://github.com/jorgevds/wolf-workshop',
        description: 'Mockup of a simple landing page one-pager website I made. It glows in the dark.',
    },
    {
        id: 6,
        name: 'Chore world',
        caption: 'NextJS, React RSC, Effect-TS, Docker, PostgreSQL, TailwindCSS, PrelineUI, just to make a to do app',
        img: '/img/chore-world.png',
        deployment: null,
        code: 'https://github.com/jorgevds/effect-ts-app',
        description:
            "Full stack app to track your chores. This app is an experiment in the Effect-TS library, which is a dyed in the wool functional programming library, NextJS Server Actions, and React RSC. The entirety of the data layer is server actions which run Effect-TS code on the server. There's also a persistence layer in the form of a PostgreSQL database, which is run in a Docker container. There's a login flow, the ability to create chores in rooms, the ability to complete chores, and the ability to track who's being chore-ing and when. There's also one-off chore list feature, which is just 100% a todo list.",
    },
    {
        id: 7,
        name: 'gh templating',
        caption: 'CLI tool in NodeJS that interacts with your GitHub repos',
        img: '/img/gh-templating.png',
        deployment: null,
        code: 'https://github.com/jorgevds/gh-templating/',
        description:
            'I was on a large project where we wanted to leverage a lot of the GitHub ecosystem. To that end, we came up with a PR template for contributors to fill in. This was easy enough, but I figured it would be cool if you could maintain multiple templates and then also use them when you created a PR. I found this was not easy to do when creating PRs using the UI (if possible at all), but seemed trivial when you used the GitHub CLI. So I built this tool to act as an abstraction layer above the existing GitHub CLI.',
    },
    {
        id: 8,
        name: 'Bakkerij Alfons',
        caption: 'Website for a fictional bakery with Sass preprocessor.',
        img: '/img/bakkerij-alfons.jpg',
        deployment: 'https://jorgevds.github.io/alfons/',
        code: 'https://github.com/jorgevds/alfons/',
        description:
            "One of the oldest projects I ever built. It's a mockup of a landing page for a bakery in Belgium. I'm no designer, but I think it looks pretty ok. I think the spirit is there and the site is too large otherwise. It looks very dated and probably never looked modern, but there's elements that I think are charming and almost work. If nothing else, I put a lot of work into it and I don't want to throw it in the garbage. But I did turn off all the deprecation warnings I kept getting over email from GitHub, that shit was annoying as hell.",
    },
];
