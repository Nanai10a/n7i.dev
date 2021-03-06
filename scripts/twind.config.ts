import * as deps from "/deps.ts";

const config = {
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Zen+Kaku+Gothic+New&display=swap');",
  },
  mode: "strict",
  // hash: true, // TODO: improves size?
  presets: [deps.twind.preset.autoprefix(), deps.twind.preset.tailwind()],
  theme: {
    extend: {
      colors: {
        // light themes
        priml: "#196d23",
        "on-priml": "#ffffff",
        "prim-contl": "#a2f79a",
        "on-prim-contl": "#002203",
        secl: "#53634f",
        "on-secl": "#ffffff",
        "sec-contl": "#d6e8ce",
        "on-sec-contl": "#111f0f",
        terl: "#38656a",
        "on-terl": "#ffffff",
        "ter-contl": "#bcebf0",
        "on-ter-contl": "#002023",
        errl: "#ba1a1a",
        "on-errl": "#ffffff",
        "err-contl": "#ffdad6",
        "on-err-contl": "#410002",
        oll: "#72796f",
        bgl: "#fcfdf6",
        "on-bgl": "#1a1c19",
        surl: "#fcfdf6",
        "on-surl": "#1a1c19",
        "sur-varl": "#dee5d8",
        "on-sur-varl": "#424940",
        "inv-surl": "#2f312d",
        "inv-on-surl": "#f1f1eb",

        // dark themes
        primd: "#87da81",
        "on-primd": "#003909",
        "prim-contd": "#005311",
        "on-prim-contd": "#a2f79a",
        secd: "#baccb3",
        "on-secd": "#253423",
        "sec-contd": "#3b4b38",
        "on-sec-contd": "#d6e8ce",
        terd: "#a0cfd4",
        "on-terd": "#00363b",
        "ter-contd": "#1e4d52",
        "on-ter-contd": "#bcebf0",
        errd: "#ffb4ab",
        "on-errd": "#690005",
        "err-contd": "#93000a",
        "on-err-contd": "#ffdad6",
        old: "#8c9388",
        bgd: "#1a1c19",
        "on-bgd": "#e2e3dd",
        surd: "#1a1c19",
        "on-surd": "#e2e3dd",
        "sur-vard": "#424940",
        "on-sur-vard": "#c2c9bd",
        "inv-surd": "#e2e3dd",
        "inv-on-surd": "#1a1c19",
      },
      fontFamily: {
        poi: ["'Poiret One'", "cursive"],
        zen: ["'Zen Kaku Gothic New'", "sans-serif"],
      },
    },
  },
  // darkMode: "class" // TODO: to switch theme
};

export default config;
