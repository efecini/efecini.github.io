// config.js
module.exports = {
    github: {
        username: 'efecini', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10000, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce', // These projects will not be displayed. example: ['my-project1', 'my-project2']
                       'cracking-the-code-interview-solutions',
                       'hackerrank',
                       'mooniversity_examples',]
        }
    },
    social: {
        linkedin: 'efecini',
        twitter: 'efecini',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: '',
        phone: '',
        email: 'efecini@gmail.com'
    },
    skills: [
        'Bitcoin',
        'Lightning Network',
        'Python',
        'Django',
        'HTML',
        'CSS',
        'JavaScript'
    ],
    experiences: [],
    education: [],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: '',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '2617601', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
        ]
    }
}
