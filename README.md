PMMGBeautifier Extended adds all the features of the base PMMGBeautifier extension plus extra features including custom buffers via the XIT command.

Thank you to yarekt for developing the base features of PMMGBeautifier that this extension is based on. And thank you to Rynx for developing PrUN UI Enhancer, now integrated into PMMG Extended.

# Base Features

* Show the price per unit for local market ads
* Show the ETA of ships as actual date-time
* Show the ETA in flightplan as actual date-time
* Show the production order completion as actual date-time
* Show price per ton/m3 for shipping ads
* Show price per unit when posting local market ads
* Change LM Post button to the type of ad
* Calculate Queued production load in percentage

# Extended Features

* Show price per ton/m3 when posting shipping ads
* Pull custom pricing scheme from Google webapp
* Pull and display burnrate data from FIO on WF buffers
* Implement custom buffers using the XIT commands
* See Google web app template or contact PiBoy about setting up a web app for an individual or corporation: https://docs.google.com/spreadsheets/d/10ojMes08p3ZXKEEZTg_jDj166Bi8ZiuDrhajxp6GGak/edit?usp=sharing
* Colorful notifications based on type
* Custom sidebar hotkeys
* Custom settings menu

# XIT Commands

* XIT SETTINGS - opens up the settings for PMMG Extended
* XIT INV_{username}\_{planet} - gets the FIO inventory for a user and planet
* XIT DISCORD_{serverID or shortlist server name}\_{channelID} - Opens a Discord chat window to Widget Bot connected servers
* XIT SHEETS_{sheetID} - Opens a google sheets editor in a buffer
* XIT PRUN - Opens a copy of PRUN in a buffer, it's PRUN-ception!
* XIT SHEETTABLE_{switchable parameter}\_{optional extra parameter} - Displays any 2 dimensional array returned from the connected Google web app. The switchable parameter is passed as a parameter in the URL called "mode" and the optional extra parameter as "param"
* XIT FIN_{parameter} - Loads a financial overview via the connected Google web app. Parameter is switched upon with the mode "fin" in the web app.
* XIT CHAT_{planet name} - Loads the planet chat for a specified planet.
* XIT BURN_{planet name} - Loads workforce and material production and burn.
* XIT BURN_GROUP_{group id} - Loads workforce and material production and burn for a whole group.

# XIT Examples

* XIT INV_PiBoy314_Gibson (needs API key)
* XIT DISCORD_PTS
* XIT SHEETS_1qU3WE2vUlIlADhmnQzh7vsxhfqQG-1pf4miNzjRMC0k
* XIT PRUN
* XIT SHEETTABLE_pirepairs_JS-952c (needs web app ID)
* XIT FIN_PiBoy314 (needs web app ID)
* XIT CHAT_Montem
* XIT BURN_Gibson

# Setting up API Key and Web App ID

* Click on the PMMG icon in the upper right corner
* Fill in your username
* Fill in your FIO api key
* Fill in your Web app ID (if available)
* Click configure

# Setting up the sidebar

* Enter the abbreviation you want to show up in the left hand box and the command it should run in the right hand box. To add another row, click the + button.

# Installation

For Chrome install - use instructions for "Chrome" below to install manually.

For Firefox you need to install this extension manually (see below for instructions). **New Instructions to be Compatible with Manifest V3**

## Contributing

The structure of this project is designed to be friendly to contributions.
Each feature is split into a module that can be worked on independently
from others. If a module is causing performance problems, it can be disabled
in the sidebar.

If you want to add a feature start by doing this:
- Fork this repository on Github
- Clone your forked repository
- Create a branch with your feature's name
- Temporarily disable PMMGBeautifier if you installed it via web store 
- Follow setup instructions in the section below, and load your locally built copy
- Test that it works on the `test.html` file

You are now ready to begin hacking!
- Run the build process, and watch for any typescript errors as you work
- Create a new module in `src/` which follows the `Module` interface
- Instantiate it in `main.ts` and add it into the array of modules
- Iterate on your module until it works, commit often!

Each module has a `cleanup` and `run` method, they run once per second.
Your module should create or attach itself to any UI element that you need
to tweak. On cleanup you should do the reverse, and ensure the UI is
restored back to its original state. This ensures that when the module is
disabled, the UI isn't broken. Have a look at existing modules for inspiration
but be aware that some may need refactoring. Ask if you have questions.

The XIT_Handler module works differently. When a buffer with the correct header is detected, 
the XIT handler will load in the information once and set the ID to the first child to be something
the original code recognizes as a success. The buffer will not update after that unless it is refreshed.
Add another case to the switch statement and look at the other "get" methods to see this process in action.

When you are happy with how it works submit a Pull Request to this repository.
One of us will review it, suggest feedback with the goal of merging it in.
Be aware that as number of users of this extension grows, so does our care for
not breaking any existing features, or the interface itself. We might not be
able to accept all contributions if they cause stability issues.

Once your PR is merged, a new version of the extension will be automatically
published to the chrome web store.

## Development

Requirements: `nodejs`, `npm` (or `yarn` works too)

Webpack is used to create javascript from typescript, and puts everything into
`dist/` dir.
You can load that directly using "load unpacked" extension pointing to `dist`.
Keep the build command running to make it rebuild as you edit typescript files.
```bash
npm install
npm run build
```

There is a test file that you can use while developing so you don't have to
refresh the real website many times. Add snippets of HTML to it for your new
features, but consider it a temporary tool, we might wipe it if it gets too
out of hand

Extensions loaded from disk have permissions to open local files, see: https://stackoverflow.com/a/19493206

## Chrome

* Unzip the `dist` zip file
* Open Chrome Extensions Screen
* Enable Dev-Mode
* Select `Load unpacked` and browse to the `dist` folder where the build output is
* that's it

## Firefox

* Unzip the `dist` zip file
* Delete manifest.json
* Rename manifest_v2.json to manifest.json
* Open `about:debugging` in Firefox
* Select `Load Temporary Add-on` and select the `manifest.json` from this repo
* that's it

## Deployment and Publishing

The extension is automatically built and deployed via Circle CI, but only on
branches `ci` and `master` (and published only on `master`). Setup so we
can debug CI builds correctly.
