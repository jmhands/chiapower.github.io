module.exports = async function createConfigAsync() {
    const math = (await import('remark-math')).default;
    const katex = (await import('rehype-katex')).default;
    const lightCodeTheme = require('prism-react-renderer/themes/github');
    const darkCodeTheme = require('prism-react-renderer/themes/dracula');

    return {
        title: 'Chiapower',
        tagline: 'Modeling the energy use for Chia blockchain',
        url: 'https://chiapower.org/',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'jmhands',
        projectName: 'chiapower',
        i18n: {
            defaultLocale: 'en',
            locales: ['en'],
        },
        presets: [
            [
                '@docusaurus/preset-classic',
                {
                    docs: {
                        routeBasePath: '/',
                        remarkPlugins: [math],
                        rehypePlugins: [katex],
                    },
                    blog: {
                        showReadingTime: true,
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                    googleAnalytics: {
                        trackingID: 'G-Z9SR3NERTV',
                        anonymizeIP: true,
                    },
                },
            ],
        ],
        stylesheets: [
            {
                href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
                type: 'text/css',
                integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
                crossorigin: 'anonymous',
            },
        ],
        themeConfig: {
            navbar: {
                title: 'Chiapower',
                logo: {
                    alt: 'Chiapower Logo',
                    src: 'img/chiapower-logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Model',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/Chia-Network',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Model',
                                to: 'https://chiapower.org',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/LebanonJon',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/jmhands/chiapower.github.io/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Chiapower`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        },
    };
};
