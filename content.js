console.log("Content script running");

// Function to mute all audio and video elements on the page
function muteAllMedia() {
  const mediaElements = document.querySelectorAll('audio, video');

  mediaElements.forEach(media => {
    if (!media.muted) {
      media.muted = true;
      media.volume = 0;  // Set volume to 0 just in case
      console.log("Muted media element.");
    }
  });
}

// Function to handle iframe media muting as well
function muteMediaInIframes() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    try {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const iframeMediaElements = iframeDocument.querySelectorAll('audio, video');
      iframeMediaElements.forEach(media => {
        if (!media.muted) {
          media.muted = true;
          media.volume = 0;  // Set volume to 0 just in case
          console.log("Muted media in iframe.");
        }
      });
    } catch (error) {
      console.log("Unable to access iframe content, possibly due to cross-origin restrictions.");
    }
  });
}

// Function to mute all media including iframes
function muteEntirePage() {
  // Check if the current URL is the YouTube homepage
  if (window.location.pathname === '/' || window.location.pathname === '/feed/trending') {
    console.log("Muting media on YouTube homepage.");
    muteAllMedia();  // Mute all media elements in the main document
    muteMediaInIframes();  // Mute media inside iframes
  } else {
    console.log("Not on the YouTube homepage, skipping mute.");
  }
}

// Set up a MutationObserver to detect changes and mute new media elements dynamically
const observer = new MutationObserver(() => {
  muteEntirePage();
});

// Start observing changes to the document's body (for dynamically loaded media or new ads)
observer.observe(document.body, { childList: true, subtree: true });

// Initial call to mute everything when the page loads
setTimeout(muteEntirePage, 1000); // Adding a slight delay to make sure everything loads
