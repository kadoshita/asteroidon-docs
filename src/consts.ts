export const SITE = {
    title: 'あすてろいどん - ヘルプページ',
    description: 'マストドンサーバー「あすてろいどん」のヘルプページ',
    defaultLanguage: 'ja-jp',
} as const;

export const OPEN_GRAPH = {
    image: {
        src: 'https://docs-mstdn.sublimer.me/og-image.png',
        alt: 'あすてろいどんのロゴ画像',
    },
    twitter: 'lz650sss',
};

export const KNOWN_LANGUAGES = {
    Japanese: 'ja',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/kadoshita/asteroidon-docs/tree/master`;

export const COMMUNITY_INVITE_URL = `https://github.com/kadoshita/asteroidon-docs/issues`;

export type Sidebar = Record<(typeof KNOWN_LANGUAGE_CODES)[number], Record<string, { text: string; link: string }[]>>;
export const SIDEBAR: Sidebar = {
    ja: {
        あすてろいどんについて: [
            { text: 'はじめに', link: 'ja/asteroidon/introduction' },
            { text: 'あすてろいどんとは', link: 'ja/asteroidon/explain' },
            { text: 'あすてろいどんを支える技術', link: 'ja/asteroidon/system' },
        ],
        マストドンについて: [{ text: 'マストドンとは', link: 'ja/mastodon/explain' }],
    },
};
