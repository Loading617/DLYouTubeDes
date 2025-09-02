function insertDownloadButton() {
  const descriptionContainer = document.querySelector('ytd-video-secondary-info-renderer');
  if (!descriptionContainer) return;

  const uploadDateElement = descriptionContainer.querySelector('span');
  if (!uploadDateElement) return;

  const button = document.createElement('button');
  button.innerText = 'Download Description';
  button.style = `
    margin-left: 10px;
    padding: 4px 8px;
    font-size: 12px;
    background-color: #e8e2d7;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

  button.onclick = () => {
    const descElement = descriptionContainer.querySelector('yt-formatted-string');
    if (!descElement) return alert("Description not found!");
    
    const descriptionText = descElement.innerText;
    const videoTitle = document.title.replace(" - YouTube", "").replace(/[\\/:*?"<>|]/g, '');
    const blob = new Blob([descriptionText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${videoTitle}.description`;
    link.click();
  };

  uploadDateElement.parentNode.insertBefore(button, uploadDateElement.nextSibling);
}

setTimeout(insertDownloadButton, 4000);


