import React, { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFDisplay(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
  // options={{ workerSrc: "/pdf.worker.js"}}
  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={ index + 1} />
      ))}
    </Document>
  );
}

export default PDFDisplay