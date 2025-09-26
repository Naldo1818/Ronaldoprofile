// gitprofile.config.ts

const CONFIG = {
  github: {
        username: 'Naldo1818', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
    base: '/Ronaldoprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
          projects: ['Naldo1818/MusicPlayer', 'Naldo1818/HospitalSystem'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HospitalSystem',
          description:
            'Implementing the surgery booking system (capturing surgeon, patient, date, session, and theatre). Developing the prescription module, ensuring surgeons could add medication while the system automatically checked for contra-indications, allergies, and interactions. Implementing an alert system that notifies surgeons of potential medication risks, requiring a justification if overridden. Ensuring surgeons could view prescription statuses and respond to pharmacist feedback. This project demonstrated my ability to work in a team while handling complex database interactions, validation logic, and user interface development for medical professionals',
          imageUrl:
              'assets/Hospital.png',
              link: 'https://github.com/Naldo1818/HospitalSystem',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ronaldo Jansen', description: 'Junior Developer', imageURL: '' },
  social: {
      linkedin: 'ronaldo-jansen-0b0018350',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Naldo1818',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
      website: 'https://naldo1818.github.io/Ronaldoprofile/',
    phone: '078 654 2174',
    email: 'jansen.ronaldocullen@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/Naldo1818/Ronaldoprofile/blob/main/src/assets/RonaldoJansenCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
    skills: [
        'C#',
        'C++',
        'Python',
        'SQL',
        'JavaScript',
        'HTML',
        'CSS',
        '.NET Framework',
        'React',
        'AJAX',
        'Git',
        'GitHub',
        'REST APIs',
        'Visual Studio',
        'VS Code',
        'SQL Server',
        'MySQL',
    ],
  experiences: [
    {
      company: 'HOWLER',
      position: 'Liaison Manager ',
      from: 'Dec 2021 ',
      to: 'Dec 2024(Seasonal)',
      companyLink: 'https://www.howler.co.za/',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Software Engineering Job Simulation',
      body: 'Software Engineering Job Simulation – Electronic Arts (Forage) ',
      year: 'February 2025',
      link: 'https://www.theforage.com/',
    },
    {
      name: 'Cybersecurity Certification',
      body: 'Cisco Introduction to Cybersecurity Certification',
      year: 'March 2021',
      link: 'https://www.netacad.com/',
    },
  ],
  educations: [
    {
      institution: 'Nelson Mandela University',
      degree: 'Advanced National Diploma in Information Technology – Software Development ',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Nelson Mandela University',
      degree: 'National Diploma in Information Technology – Software Development ',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
      {
          title: '',
          conferenceName: '',
          journalName: '',
          authors: '',
          link: '',
          description: '',
      },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:'',},
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://naldo1818.github.io/Ronaldoprofile/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
