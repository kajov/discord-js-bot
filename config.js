
module.exports = {
  OWNER_IDS: [process.env.OWNER], // Bot owner ID's
  SUPPORT_SERVER: process.env.GUILD_ID, // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: false, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "!", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: false, // Should the interactions be registered globally
    TEST_GUILD_ID: process.env.GUILD_ID, // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#068ADD",
    TRANSPARENT: "#36393F",
    SUCCESS: "#00A56A",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact Bot Owner(s)",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: false,
    LOG_EMBED: "#36393F",
    DM_EMBED: "#36393F",
  },

  // Endless Redirect loop, have to investigate
  DASHBOARD: {
    enabled: true, // enable or disable dashboard
    baseURL: "http://127.0.0.1:8888", // base url
    failureURL: "http://127.0.0.1:8888/callback", // failure redirect url
    port: "8888", // port to run the bot on
  },

  ECONOMY: {
    ENABLED: false,
    CURRENCY: "₪",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "YT", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      // {
      //   host: "narco.buses.rocks",
      //   port: 2269,
      //   password: "glasshost1984",
      //   id: "Remote No-SSL Node 0",
      //   secure: false,
      // },
      // {
      //   host: "141.95.90.1",
      //   port: "80",
      //   password: "youshallnotpass",
      //   id: "Remote No-SSL Node 1",
      //   secure: false,
      // },
      // {
      //   host: "lavalink.devamop.in",
      //   port: 443,
      //   password: "DevamOp",
      //   id: "Remote SSL Secure Node 0",
      //   secure: true
      // },
      {
        host: "127.0.0.1",
        port: "2222",
        password: "youshallnotpass",
        id: "Local No-SLL Lava Node 0",
        secure: false,
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: false,
    REACTION: "🎁",
    START_EMBED: "#FF468A",
    END_EMBED: "#FF468A",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: false,
    EMBED_COLORS: {
      TIMEOUT: "#102027",
      UNTIMEOUT: "#4B636E",
      KICK: "#FF7961",
      SOFTBAN: "#AF4448",
      BAN: "#D32F2F",
      UNBAN: "#00C853",
      VMUTE: "#102027",
      VUNMUTE: "#4B636E",
      DEAFEN: "#102027",
      UNDEAFEN: "#4B636E",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    },
  },

  PRESENCE: {
    ENABLED: true, // Whether the bot should update its status
    STATUS: "dnd", // The bot's status [online, idle, dnd, invisible]
    TYPE: "PLAYING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "{members} members in {servers} servers. Bot under Development by @trifecta.official", // Your bot status message
  },

  STATS: {
    ENABLED: true,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**",
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#4F545C",
    APPROVED_EMBED: "#43B581",
    DENIED_EMBED: "#F04747",
  },

  TICKET: {
    ENABLED: true,
    CREATE_EMBED: "#068ADD",
    CLOSE_EMBED: "#068ADD",
  },
};
