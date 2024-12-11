export type TeamKey =
  | "csk"
  | "dc"
  | "gt"
  | "kkr"
  | "lsg"
  | "mi"
  | "pk"
  | "rr"
  | "rcb"
  | "sh";

interface Style {
  confPage: {
    background: string;
  };
  dashBoard: {
    topBar: {
      background: string;
    };
    lineColor: string;
    body: {
      background: string;
    };
  };
  card: {
    lowerBackground: string;
    textColor: string;
    lowerBorderColor: string;
  };
}

interface TeamTheme {
  title: string;
  image: string;
  style: Style;
}

export const iplTeamThemes: Record<TeamKey, TeamTheme> = {
  csk: {
    title: "Chennai Super Kings",
    image: "./cskLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #fbff0c, #010de9, #fbff0c)",
      },
      dashBoard: {
        topBar: {
          background:
            "linear-gradient(45deg, #01529E, #FDCE02, #01529E, #45FE21)",
        },
        lineColor: "#FDDA02",
        body: {
          background:
            "linear-gradient(160deg, rgba(253,209,0,1) 0%, rgba(0,80,160,1) 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  dc: {
    title: "Delhi Capitals",
    image: "./dcLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 49.8% 50%, #ff0202, #010de9, #ffffff)",
      },
      dashBoard: {
        topBar: {
          background:
            "linear-gradient(27deg, rgba(255,2,2,1) 0%, rgba(220,217,247,1) 27%, rgba(1,13,233,1) 46%, rgba(31,12,206,1) 59%, rgba(255,255,255,1) 78%, rgba(238,3,17,1) 87%)",
        },
        lineColor: "rgba(238,3,17,1)",
        body: {
          background:
            "linear-gradient(160deg, rgba(238,3,17,1) 0%, rgba(27,12,209,1) 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  gt: {
    title: "Gujarat Titans",
    image: "./gtLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #2cf84a, #002748, #242a34, #ffffff)",
      },
      dashBoard: {
        topBar: {
          background:
            "linear-gradient(27deg, rgba(44,248,74,1) 0%, rgba(0,39,72,1) 41%, rgba(36,42,52,1) 69%, rgba(44,248,74,1) 86%, rgba(255,255,255,1) 100%)",
        },
        lineColor: "#37F953",
        body: {
          background: "linear-gradient(120deg, #37F953 0%, #16293D 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  kkr: {
    title: "Kolkata Knight Riders",
    image: "./kkrLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #c5f829, #74dd5f, #00417f, #010783, #10377e, #6fcde8, #8beeff)",
      },
      dashBoard: {
        topBar: {
          background:
            "conic-gradient(from 0deg at 50% 50%, #c5f829, #74dd5f, #00417f, #010783, #10377e, #6fcde8, #8beeff)",
        },
        lineColor: "rgba(69,138,185,1)",
        body: {
          background:
            "linear-gradient(160deg, rgba(164,237,62,1) 0%, rgba(69,138,185,1) 50%, rgba(2,10,131,1) 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  lsg: {
    title: "Lucknow Super Giants",
    image: "./lsgLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #ff0e0e, #f40078, #6900aa, #392592, #0050a6, #00e782, #47ff1e)",
      },
      dashBoard: {
        topBar: {
          background:
            "conic-gradient(from 360deg at 50% 50%, #45FE21, #392592, #FE0D14, #392592, #45FE21)",
        },
        lineColor: "#45F327",
        body: {
          background: "linear-gradient(120deg,#45FC22  0%,#392B8A  100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  mi: {
    title: "Mumbai Indians",
    image: "./miLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 105deg at 50% 30%, rgba(104,241,21,1), #165491, #165491, #FFCB31, #C49B6D, #68f115, #C49B6D, #68f115)",
      },
      dashBoard: {
        topBar: {
          background:
            "linear-gradient(173deg, rgba(255,203,49,1) 0%, rgba(22,84,145,1) 48%, rgba(196,155,109,1) 74%, rgba(196,155,109,1) 86%, rgba(255,255,255,1) 100%)",
        },
        lineColor: "#C49B6D",
        body: {
          background: "linear-gradient(120deg, #175591 0%, #C49B6D 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  pk: {
    title: "Punjab Kings",
    image: "./pkLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #ffffff, #d9ebe2, #b2d7c6, #8cc4aa, #64b090, #349c76, #199356, #459125, #718a00, #a07c00, #d15e00, #ff0000)",
      },
      dashBoard: {
        topBar: {
          background:
            "conic-gradient(from 0deg at 50% 50%, #ffffff, #d9ebe2, #b2d7c6, #8cc4aa, #64b090, #349c76, #199356, #459125, #718a00, #a07c00, #d15e00, #ff0000)",
        },
        lineColor: "#92C7AF",
        body: {
          background: "linear-gradient(120deg, #92C7AF 0%, #7D8700 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  rr: {
    title: "Rajasthan Royals",
    image: "./rrLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 0deg at 50% 50%, #e60693, #e60693, #e60693, #e60693, #e60693, #e60693, #eb3b9c, #f36daf, #f994c3, #feb9d7, #ffdceb, #ffffff)",
      },
      dashBoard: {
        topBar: {
          background:
            "linear-gradient(122deg, rgba(255,255,255,1) 0%, rgba(94,37,73,1) 20%, rgba(230,6,147,1) 50%, rgba(110,41,84,1) 75%, rgba(255,255,255,1) 100%)",
        },
        lineColor: "#F283C9",
        body: {
          background:
            "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(230,6,147,1) 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  rcb: {
    title: "Royal Challengers Bangalore",
    image: "./rcbLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 180deg at 50% 50%, #BD933F, #c8d02f, #ffffff, #ffffff, #c8d02f, #BD933F)",
      },
      dashBoard: {
        topBar: {
          background:
            "conic-gradient(from 180deg at 50% 50%, #BD933F, #c8d02f, #ffffff, #ffffff, #c8d02f, #BD933F)",
        },
        lineColor: "#FCFCF4",
        body: {
          background: "linear-gradient(120deg,#BD933F 0%, #E6EAA0 100%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
  sh: {
    title: "Sunrisers Hyderabad",
    image: "./shLogo.png",
    style: {
      confPage: {
        background:
          "conic-gradient(from 180deg at 50% 50%, #A91721, #BD933F, #F7A81A, #ffffff, #FEDE2E, #ffffff, #FEDE2E, #ffffff, #F7A81A, #BD933F, #A91721)",
      },
      dashBoard: {
        topBar: {
          background:
            "conic-gradient(from 180deg at 50% 50%, #A91721, #BD933F, #F7A81A, #ffffff, #FEDE2E, #ffffff, #FEDE2E, #ffffff, #F7A81A, #BD933F, #A91721)",
        },
        lineColor: "#a91721",
        body: {
          background:
            "linear-gradient(160deg, rgba(169,23,33,1) 11%, rgba(255,255,255,1) 51%, rgba(254,222,47,1) 66%)",
        },
      },
      card: {
        lowerBackground: "#ffffff",
        textColor: "black",
        lowerBorderColor: "#ffffff",
      },
    },
  },
};
