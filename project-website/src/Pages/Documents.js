import React, { useState } from 'react';
import styled from 'styled-components';
import comingPDF from './PDFs/Coming.pdf'
import PDFDisplay from './PDFDisplay';
import RFP from './PDFs/RFP.pdf';

import "./PDFStyling.css";


const DocumentContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(3, auto);
  padding-bottom: 100%;
  width: 100%;
`;

const DocumentListContainer = styled.div`
  margin-left: 10px;
  margin-top: 9%;
  justify-content: center;
  align-content: center;
  grid-column: 1;
  background-color: #ffaa00;
  border-radius: 30px;
  height: 400px;
`;

const DownloadContainer = styled.div`
  margin-left: 10px;
  margin-top: 2%;
  justify-content: center;
  align-content: center;
  grid-column: 1;
  grid-row: 2;
  background-color: #ffaa00;
  border-radius: 30px;
  height: 100px;
`;

const DownloadLabel = styled.a`
  color: white;
  font-weight: 600;
  font-size: 30px;
`;

const DownloadButtonContainer = styled.div`
  margin-top: 3%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 10px;
  justify-content: center;
  align-content: center;
`;

const DownloadButton = styled.button`
  background: green;
  width: 200px;
  height: 75px;
  border-radius: 5px;
`;

const DocumentList = styled.div`
  margin-top: 10%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 10px;
  justify-content: center;
  align-content: center;
`;

const DocumentItem = styled.button`
  background: #d51900;
  width: 200px;
  height: 50px;
  border-radius: 5px;
`;

const ButtonLabel = styled.p`
  color: white;
  font-size: 25px;
`;

const PDFDiv = styled.div`
  background-color: #ffaa00;
  border-radius: 30px;
  margin-left: 8%;
  margin-top: 3%;
  grid-column: 2;
  grid-row: 1 / 4;
  height: 700px;
  width: 900px;
  overflow: auto;
`;

function Documents() {


  const [rendPDF, setPDF] = useState(() => ({pdfView: RFP, downloadName: "RFP.pdf"}))

  return(
    <DocumentContainer>
      <DocumentListContainer>
        <DocumentList>
          <DocumentItem onClick={() => setPDF({pdfView: RFP, downloadName: "RFP.pdf"})} >
            <ButtonLabel>RFP</ButtonLabel>
          </DocumentItem>
          <DocumentItem onClick={() => setPDF({pdfView: comingPDF, downloadName: "Coming.pdf"})} >
            <ButtonLabel>Charter</ButtonLabel>
          </DocumentItem>
          <DocumentItem onClick={() => setPDF({pdfView: comingPDF, downloadName: "Coming.pdf"})} >
            <ButtonLabel>Meeting Notes</ButtonLabel>
          </DocumentItem>
          <DocumentItem onClick={() => setPDF({pdfView: comingPDF, downloadName: "Coming.pdf"})} >
            <ButtonLabel>Client Meeting</ButtonLabel>
          </DocumentItem>
          <DocumentItem onClick={() => setPDF({pdfView: comingPDF, downloadName: "Coming.pdf"})} >
            <ButtonLabel>Gantt Chart</ButtonLabel>
          </DocumentItem>
        </DocumentList>
      </DocumentListContainer>
      <DownloadContainer>
        <DownloadButtonContainer>
          <DownloadButton>
            <DownloadLabel download={rendPDF.downloadName} href={rendPDF.pdfView}>Download</DownloadLabel>
          </DownloadButton>
        </DownloadButtonContainer>
      </DownloadContainer>
      <PDFDiv>
        <PDFDisplay pdf={rendPDF.pdfView} />
      </PDFDiv>
    </DocumentContainer>
  )
}

export default Documents