export const items: {
  [key: string]: {
    name: string
    title: { ja: string; en: string }
    link: string
    icon: {
      component: string
      props: { color?: string }
    }
  }[]
} = {
  apps: [
    {
      name: "chat",
      title: { ja: "チャットアプリ", en: "Chat App" },
      link: "https://chat-taroj.vercel.app/",
      icon: { component: "ChatIcon", props: { color: "hsl(90, 90%, 30%)" } },
    },
    {
      name: "connect4",
      title: { ja: "Connect4", en: "Connect4" },
      link: "https://connect4-taroj.vercel.app/",
      icon: {
        component: "Connect4Icon",
        props: { color: "hsl(180, 90%, 30%)" },
      },
    },
    {
      name: "typing-game",
      title: { ja: "タイピングゲーム", en: "Typing Game" },
      link: "https://typing-game-nextjs.vercel.app/",
      icon: {
        component: "KeyboardIcon",
        props: { color: "hsl(270, 90%, 30%)" },
      },
    },
    {
      name: "search",
      title: { ja: "検索アプリ", en: "Search App" },
      link: "https://taroj.vercel.app/apps/search",
      icon: { component: "SearchIcon", props: { color: "hsl(60, 90%, 30%)" } },
    },
    {
      name: "uoa",
      title: { ja: "UoAのリンク等", en: "UoA Links" },
      link: "https://taroj1205.vercel.app/uoa",
      icon: {
        component: "UniversityIcon",
        props: { color: "hsl(300, 90%, 30%)" },
      },
    },
  ],
  social: [
    {
      name: "twitter",
      title: { ja: "Twitter", en: "Twitter" },
      link: "https://twitter.com/taroj1205",
      icon: {
        component: "TwitterIcon",
        props: { color: "hsl(190, 90%, 30%)" },
      },
    },
    {
      name: "github",
      title: { ja: "GitHub", en: "GitHub" },
      link: "https://github.com/taroj1205",
      icon: { component: "GitHubIcon", props: {} },
    },
    {
      name: "instagram",
      title: { ja: "Instagram", en: "Instagram" },
      link: "https://instagram.com/taroj1205",
      icon: {
        component: "InstagramIcon",
        props: { color: "hsl(330, 90%, 30%)" },
      },
    },
    {
      name: "youtube",
      title: { ja: "YouTube", en: "YouTube" },
      link: "https://youtube.com/@taroj1205",
      icon: { component: "YouTubeIcon", props: { color: "hsl(0, 90%, 40%)" } },
    },
    {
      name: "linkedin",
      title: { ja: "LinkedIn", en: "LinkedIn" },
      link: "https://linkedin.com/in/taroj",
      icon: {
        component: "LinkedInIcon",
        props: { color: "hsl(207, 100%, 35%)" },
      },
    },
    {
      name: "facebook",
      title: { ja: "Facebook", en: "Facebook" },
      link: "https://facebook.com/taroj1205",
      icon: {
        component: "FacebookIcon",
        props: { color: "hsl(214, 89%, 52%)" },
      },
    },
  ],
  blog: [
    {
      name: "hatena",
      title: {
        ja: "はてなブログ",
        en: "Hatena Blog",
      },
      link: "https://taroj1205.hatenablog.com",
      icon: { component: "HatenaIcon", props: {} },
    },
    {
      name: "note",
      title: { ja: "note", en: "note" },
      link: "https://note.com/taroj1205",
      icon: { component: "NoteIcon", props: {} },
    },
  ],
}

export const titles = [
  { ja: "アプリ", en: "Apps" },
  { ja: "SNS", en: "Social" },
  { ja: "ブログ", en: "Blog" },
]
