
    const downloadBtn = document.getElementById('downloadBtn');
    const videoUrlInput = document.getElementById('videoUrl');
    const resultBox = document.getElementById('resultBox');
    const adBlockMessage = document.getElementById('adBlockMessage');

    const supportedSites = [
      'youtube.com', 'youtu.be',
      'tiktok.com',
      'instagram.com',
      'facebook.com',
      'fb.watch',
      'x.com', 'twitter.com'
    ];

    function detectAdBlock() {
      const adBlock = window.canRunAds === undefined;
      downloadBtn.disabled = adBlock;
      adBlockMessage.style.display = adBlock ? 'block' : 'none';
      return !adBlock;
    }

    // Enable download button only for supported links
    videoUrlInput.addEventListener('input', () => {
      const url = videoUrlInput.value.trim();
      const isValid = supportedSites.some(site => url.includes(site));
      downloadBtn.disabled = !isValid || !detectAdBlock();
    });

    // Main download logic
    downloadBtn.addEventListener('click', () => {
      const url = videoUrlInput.value.trim();
      if (!url) {
        alert("Please enter a valid video URL.");
        return;
      }

      // Show message to user
      resultBox.innerHTML = "🔄 Redirecting to secure download page...";

      // Open external service that handles download
      window.open(`https://www.vevioz.com/en/youtube-to-mp4?url=${encodeURIComponent(url)}`, '_blank');

      // Confirm to user
      resultBox.innerHTML = "✅ You're being redirected. If nothing opens, please allow pop-ups.";
    });