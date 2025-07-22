function createDownloadButton() {
    const existing = document.getElementById('yt-desc-download-btn');
    if (existing) return;

    const descBox = document.querySelector('#meta-contents #description');
    if (!descBox) return;

    const btn = document.createElement('button');
    btn.id = 'yt-desc-download-btn';
    btn.innerText = 'Download Description';
    btn.style.marginTop = '10px';
    btn.style.padding = '8px';
    btn.style.border = 'none';
    btn.style.background = '#FF0000';
    btn.style.color = 'white';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';

    btn.onClick = () => {
        const text = descBox.innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${document.title.replace(/\s+/g, '_')}_description.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    descBox.parentElement.appendChild(btn);
}