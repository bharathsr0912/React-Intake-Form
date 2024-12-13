import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';

export const ConvertToPDF = () => {

    const input = document.getElementById('root'); 

    return new Promise((resolve, reject)=>{

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg',0.5); 
        
            const pdfWidth = 420;  
            const pdfHeight = 297; 
        
            const imgWidth = canvas.width * 0.264583;  
            const imgHeight = canvas.height * 0.264583; 
        
            const scaleFactor = pdfWidth / imgWidth; 
        
            const scaledHeight = imgHeight * scaleFactor;
            
            const pdf = new jsPDF('l', 'mm', [pdfWidth, pdfHeight]); 
        
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, scaledHeight);

            // const pdfBlob = pdf.output("blob");

            // pdf.save('generated-landscape-file.pdf');
        
            resolve(pdf)
        
            }).catch((error)=>{
                reject(error)
            })
    })
    
   
};

export const combinePDF =(createdPDF, uploadedPDF) =>{
    return new Promise(async (resolve,reject)=>{
        try {
            const combinedPdfDoc = await PDFDocument.create();  
        
            const createdPdfBytes = createdPDF.output('arraybuffer');
            const createdPdfDoc = await PDFDocument.load(createdPdfBytes);
            const createdPdfPages = await combinedPdfDoc.copyPages(createdPdfDoc, createdPdfDoc.getPages().map((_, idx) => idx));
            createdPdfPages.forEach((page) => combinedPdfDoc.addPage(page));
        
            const uploadedPdfPages = await combinedPdfDoc.copyPages(uploadedPDF, uploadedPDF.getPages().map((_, idx) => idx));
            uploadedPdfPages.forEach((page) => combinedPdfDoc.addPage(page));
        
            const combinedPdfBytes = await combinedPdfDoc.save();
        
            const pdfBlob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
        
            resolve(pdfBlob);
        
          } catch (error) {
            console.error('Error combining PDFs:', error);
            reject(error)
          }
    })
    
}


