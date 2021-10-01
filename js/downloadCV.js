function cvDownload(url,name) {
        var link =document.createElement('a');
        link.download='resume.pdf';
        link.href='data:application/pdf,This is the resume PDF';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;       
}
