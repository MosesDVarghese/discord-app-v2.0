const channelsList = [
  {
    id: 1,
    name: "noCategory",
    selected: false,
    channels: [
      {
        id: 1,
        name: "welcome",
        type: "text",
        notification: true,
      },
      {
        id: 2,
        name: "server-rules",
        type: "rules",
        notification: true,
      },
      {
        id: 3,
        name: "announcements",
        type: "announcements",
        notification: true,
      },
    ],
  },
  {
    id: 2,
    name: "Premium",
    selected: false,
    channels: [
      {
        id: 1,
        name: "sneak-peaks",
        type: "announcements",
        notification: true,
      },
      {
        id: 2,
        name: "general-premium",
        type: "text",
        notification: true,
      },
      {
        id: 3,
        name: "q-n-a",
        type: "text",
        notification: true,
      },
      {
        id: 4,
        name: "showcase",
        type: "text",
        notification: true,
      },
      {
        id: 5,
        name: "forum",
        type: "thread",
        notification: true,
      },
    ],
  },
  {
    id: 3,
    name: "General",
    selected: false,
    channels: [
      {
        id: 1,
        name: "general",
        type: "text",
        notification: true,
      },
      {
        id: 2,
        name: "filming",
        type: "text",
        notification: false,
      },
      {
        id: 3,
        name: "video-editing",
        type: "text",
        notification: true,
      },
      {
        id: 4,
        name: "coding",
        type: "text",
        notification: true,
      },
      {
        id: 5,
        name: "tech",
        type: "text",
        notification: false,
      },
    ],
  },
  {
    id: 4,
    name: "Community",
    selected: false,
    channels: [
      {
        id: 1,
        name: "youtube",
        type: "thread",
        notification: true,
      },
      {
        id: 2,
        name: "tiktok",
        type: "thread",
        notification: true,
      },
      {
        id: 3,
        name: "instagram",
        type: "thread",
        notification: false,
      },
      {
        id: 4,
        name: "rumble",
        type: "thread",
        notification: true,
      },
      {
        id: 5,
        name: "podcast",
        type: "thread",
        notification: true,
      },
    ],
  },
  {
    id: 5,
    name: "Support",
    selected: false,
    channels: [
      {
        id: 1,
        name: "web-development",
        type: "thread",
        notification: false,
      },
      {
        id: 2,
        name: "mobile-development",
        type: "thread",
        notification: false,
      },
      {
        id: 3,
        name: "video-editing",
        type: "thread",
        notification: true,
      },
      {
        id: 4,
        name: "filming",
        type: "thread",
        notification: false,
      },
      {
        id: 5,
        name: "fitness",
        type: "thread",
        notification: false,
      },
      {
        id: 6,
        name: "support-line1",
        type: "voice",
        notification: false,
      },
      {
        id: 7,
        name: "support-line2",
        type: "voice",
        notification: false,
      },
    ],
  },
];

const serverProfiles = [
  {
    id: 1,
    name: "Apple",
    iconPath: require("@/assets/images/ServerProfiles/apple_icon.jpeg"),
    notification: true,
  },
  {
    id: 2,
    name: "Arc Community",
    iconPath: require("@/assets/images/ServerProfiles/arc_icon.png"),
    notification: true,
  },
  {
    id: 3,
    name: "MKBHD",
    iconPath: require("@/assets/images/ServerProfiles/mkbhd_icon.png"),
    notification: true,
  },
  {
    id: 4,
    name: "Apple Arcade",
    iconPath: require("@/assets/images/ServerProfiles/apple_arcade_icon.jpeg"),
    notification: true,
  },
  {
    id: 5,
    name: "r/ChatGPT",
    iconPath: require("@/assets/images/ServerProfiles/chatgpt_icon.jpeg"),
    notification: false,
  },
  {
    id: 6,
    name: "Midjourney",
    iconPath: require("@/assets/images/ServerProfiles/midjourney_icon.jpeg"),
    notification: false,
  },
  {
    id: 7,
    name: "Genshin Impact Official",
    iconPath: require("@/assets/images/ServerProfiles/genshin_impact_icon.jpeg"),
    notification: false,
  },
  {
    id: 8,
    name: "VALORANT",
    iconPath: require("@/assets/images/ServerProfiles/valorant_icon.jpeg"),
    notification: false,
  },
  {
    id: 9,
    name: "Lofi Girl",
    iconPath: require("@/assets/images/ServerProfiles/lofi_girl_icon.jpeg"),
    notification: true,
  },
  {
    id: 10,
    name: "Apex Legends",
    iconPath: require("@/assets/images/ServerProfiles/apex_legends_icon.jpeg"),
    notification: true,
  },
  {
    id: 11,
    name: "Anime Adventures",
    iconPath: require("@/assets/images/ServerProfiles/anime_adventures_icon.jpeg"),
    notification: false,
  },
  {
    id: 12,
    name: "Emoji.gg | Discord Emojis",
    iconPath: require("@/assets/images/ServerProfiles/emojis.gg_icon.jpeg"),
    notification: false,
  },
  {
    id: 13,
    name: "Discord Town Hall",
    iconPath: require("@/assets/images/ServerProfiles/discord_town_hall_icon.jpeg"),
    notification: false,
  },
  {
    id: 14,
    name: "r/leagueoflegends",
    iconPath: require("@/assets/images/ServerProfiles/league_of_legends_icon.jpeg"),
    notification: true,
  },
  {
    id: 15,
    name: "Python",
    iconPath: require("@/assets/images/ServerProfiles/python_icon.jpeg"),
    notification: false,
  },
  {
    id: 16,
    name: "Rythm HQ",
    iconPath: require("@/assets/images/ServerProfiles/rythm_hq_icon.jpeg"),
    notification: true,
  },
  {
    id: 17,
    name: "@Server",
    iconPath: require("@/assets/images/ServerProfiles/server_icon.jpeg"),
    notification: false,
  },
];

export const data = {
  channelsList,
  serverProfiles,
};
