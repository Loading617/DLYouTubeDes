function downloadDescription() {
  const descriptionElement = document.querySelector('#description yt-formatted-string');
  if (!descriptionElement) return alert("No description found!");

  const descriptionText = descriptionElement.innerText;
  const videoTitle = document.title.replace(" - YouTube", "").replace(/[\\/:*?"<>|]/g, '');
  const blob = new Blob([descriptionText], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${videoTitle}.description`;
  link.click();
}

const button = document.createElement('button');
button.className = 'yt-description-download-button';
button.innerText = 'Download Description';
button.style.setProperty('--color', '#e8e2d7');
button.style.marginTop = '10px';
button.style.padding = '5px';
button.style.background = 'transparent';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.onclick = downloadDescription;

const target = document.querySelector('#top-level-buttons-computed');
if (target) target.appendChild(button);
