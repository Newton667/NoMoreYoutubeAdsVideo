# YouTube Audio Ad Muter

**YouTube Audio Ad Muter** is a Chrome/Edge extension that mutes all media (audio and video) on the YouTube homepage, helping to avoid hearing unwanted audio ads that may still play in the background despite using other ad blockers. The extension does not mute videos on other YouTube pages—only the homepage.

## Features

- Mutes all `audio` and `video` elements on the YouTube homepage.
- Also mutes media elements inside `iframes`, which may include hidden or background ads.
- Ensures media elements on other YouTube pages (like video pages) remain unmuted.
- Works in both Google Chrome and Microsoft Edge.

## Prerequisites

- We highly recommend using this extension alongside **[uBlock Origin](https://ublockorigin.com/)** to block YouTube ads, as uBlock Origin handles visual ad-blocking while this extension silences any remaining background audio ads.

## Installation (for Chrome and Edge)

### 1. Download/Clone the Repository
To install the extension, you'll first need to download or clone this repository to your local machine.

- **Download ZIP**: You can download the repository as a ZIP by clicking the green "Code" button and selecting "Download ZIP."
- **Clone**: Alternatively, you can clone the repository using Git:
  ```bash
  git clone https://github.com/yourusername/youtube-audio-ad-muter.git

2. Enable Developer Mode in Chrome/Edge
Chrome:
Open Chrome and navigate to chrome://extensions/.
Toggle the Developer mode switch at the top-right corner of the page.
Edge:
Open Edge and navigate to edge://extensions/.
Toggle the Developer mode switch at the bottom-left corner of the page.
3. Load the Extension
Click on the Load unpacked button (in either Chrome or Edge).
Select the folder where you downloaded/cloned the repository (the folder containing the manifest.json file).
The extension will now be loaded and active!
4. Install uBlock Origin (Optional but Recommended)
For Chrome: Install uBlock Origin from the Chrome Web Store.
For Edge: Install uBlock Origin from the Edge Add-ons Store.
uBlock Origin blocks visual ads on YouTube, while this extension mutes any audio that may still slip through.

How It Works
Once installed, this extension will automatically mute all media elements (like audio ads or background videos) on the YouTube homepage (https://www.youtube.com/). It uses a MutationObserver to detect and mute dynamically loaded content (like new ads or content).

If you navigate away from the homepage (e.g., to a video), the extension will not mute any media, allowing you to watch videos with sound.
