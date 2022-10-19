/*   STEP 1   */
export const leagueID = "784389466008739840"; // your league ID
export const leagueName = "Dynasty Relegation League"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <h6>Dynasty Relegation League 24-team</h6>
            <p>Founded in 2020 This league uses 24 teams, who eventually will split into 2 12-team leagues. Each year 2 teams get relegated down to the lower league, and the 2 top teams in the lesser league get promoted to the main league.</p>
            <p>The league has a yearly buy-in of $25 per year. Both LeagueSafe and TeamStake are options to be used for overseas teams.</p>
            <p>You are encouraged to create your own team name, but it is not required.</p>
            <p>Trading between leagues is allowed and encouraged.</p>
            <p>Rookie Drafts will take place together with both leagues taking place in a single Rookie Draft.</p>
            <p>For more info, check the bylaws.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
         "roster": 1,  // ID of the roster that the manager manages
         "name": "Rumham86", // (optional) used if a manager took over a team, null or omit otherwise
         "location": "Austria",
         "bio": "Addict",
         "photo": "/managers/rumham_logo2.jpg", // done
         "fantasyStart": 2009, // when did the manager start playing fantasy football
         "favoriteTeam": "chi", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Rebuild", // 'Win Now' or 'Rebuild'
         "rival": {
           name: "Rival", // Can be anything (usually your rival's name)
           link: 3, // manager array number within this array, or null to link back to all managers page
           image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
         },
         "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
         "philosophy": "If you ain't 1st you last",
         "tradingScale": 10, // 1 - 10
         "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
          "roster": 2,  // ID of the roster that the manager manages
          "name": "vlads", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Just here so I don't get Fined",
          "photo": "/managers/vlads.png", // done
          "fantasyStart": 2017, // when did the manager start playing fantasy football
          "favoriteTeam": "pit", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 1, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 5, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 3,  // ID of the roster that the manager manages
          "name": "jphfitz", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "UK",
          "bio": "Addict",
          "photo": "/managers/jphfitz.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "lv", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 4, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 4,  // ID of the roster that the manager manages
          "name": "CALee44", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/CALee44.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "min", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Rebuild", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 5,  // ID of the roster that the manager manages
          "name": "abef99", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/abef99.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "tb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 6, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 6,  // ID of the roster that the manager manages
          "name": "bigfatjim", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/bigfatjim.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "kc", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 7,  // ID of the roster that the manager manages
          "name": "EskimoBrothers6", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "Australia",
          "bio": "Addict",
          "photo": "/managers/EskimoBrothers6.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "chi", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Rebuild", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 8, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 8,  // ID of the roster that the manager manages
          "name": "earthgetsblack", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/earthgetsblack.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "no", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 7, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 9,  // ID of the roster that the manager manages
          "name": "JamesPSullivan", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/JamesPSullivan.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "atl", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 10, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
          "roster": 10,  // ID of the roster that the manager manages
          "name": "ChaoticNeutrale", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/chaoticneutrale.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
          "roster": 11,  // ID of the roster that the manager manages
          "name": "asapmoe", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "Europe",
          "bio": "Addict",
          "photo": "/managers/asapmoe.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "mia", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Rebuild", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 12, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
          "roster": 12,  // ID of the roster that the manager manages
          "name": "richiebrown605", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/richiebrown605.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "kc", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 11, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
          {
          "roster": 13,  // ID of the roster that the manager manages
          "name": "Shano1201", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "UK",
          "bio": "Addict",
          "photo": "/managers/shano1201.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "tb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 10, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
        },
        {
          "roster": 14,  // ID of the roster that the manager manages
          "name": "BeaversNation", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/BeaversNation.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "mia", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
          "roster": 15,  // ID of the roster that the manager manages
          "name": "Xavisito", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/Xavisito.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "ari", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Rebuild", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 12, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
          "roster": 16,  // ID of the roster that the manager manages
          "name": "ThePhotonCannon", // (optional) used if a manager took over a team, null or omit otherwise
          "location": "US",
          "bio": "Addict",
          "photo": "/managers/ThePhotonCannon.png", // done
          "fantasyStart": 2009, // when did the manager start playing fantasy football
          "favoriteTeam": "lar", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
          "mode": "Win Now", // 'Win Now' or 'Rebuild'
          "rival": {
            name: "Rival", // Can be anything (usually your rival's name)
            link: 11, // manager array number within this array, or null to link back to all managers page
            image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
          },
          "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
          "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
          "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
          "philosophy": "If you ain't 1st you last",
          "tradingScale": 10, // 1 - 10
          "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
        },
        {
            "roster": 17,  // ID of the roster that the manager manages
            "name": "ElCigar", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "Australia",
            "bio": "Addict",
            "photo": "/managers/ElCigar.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "pit", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Win Now", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 10, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
          },
          {
            "roster": 18,  // ID of the roster that the manager manages
            "name": "covercorner", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "US",
            "bio": "Addict",
            "photo": "/managers/covercorner.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "sf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Win Now", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 9, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
          {
            "roster": 19,  // ID of the roster that the manager manages
            "name": "Lilone24", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "US",
            "bio": "Addict",
            "photo": "/managers/lilone24.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "lac", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Rebuild", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 12, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
          {
            "roster": 20,  // ID of the roster that the manager manages
            "name": "DegenerateRando", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "US",
            "bio": "Addict",
            "photo": "/managers/degeneraterando.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "det", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Win Now", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 11, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
            {
            "roster": 21,  // ID of the roster that the manager manages
            "name": "stevey1der88", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "US",
            "bio": "Addict",
            "photo": "/managers/stevey1der88.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "ten", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Win Now", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 10, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Sleeper' are currently supplied in the template
          },
          {
            "roster": 22,  // ID of the roster that the manager manages
            "name": "mste89", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "UK",
            "bio": "Addict",
            "photo": "/managers/mste89.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Win Now", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 9, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
          {
            "roster": 23,  // ID of the roster that the manager manages
            "name": "Mattarazi", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "UK",
            "bio": "Addict",
            "photo": "/managers/mattarazi.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "cin", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Rebuild", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 12, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
          {
            "roster": 24,  // ID of the roster that the manager manages
            "name": "IfUrNotFirstUrLast", // (optional) used if a manager took over a team, null or omit otherwise
            "location": "US",
            "bio": "Addict",
            "photo": "/managers/IfUrNotFirstUrLast.png", // done
            "fantasyStart": 2009, // when did the manager start playing fantasy football
            "favoriteTeam": "kc", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
            "mode": "Rebuild", // 'Win Now' or 'Rebuild'
            "rival": {
              name: "Rival", // Can be anything (usually your rival's name)
              link: 12, // manager array number within this array, or null to link back to all managers page
              image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
            },
            "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
            "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
            "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
            "philosophy": "If you ain't 1st you last",
            "tradingScale": 10, // 1 - 10
            "prefferedContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
          },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
