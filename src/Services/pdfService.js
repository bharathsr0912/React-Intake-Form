import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const ConvertToPDF = () => {


    const input = document.getElementById('root'); 
    
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png'); 

    const pdfWidth = 420;  
    const pdfHeight = 297; 

    const imgWidth = canvas.width * 0.264583;  
    const imgHeight = canvas.height * 0.264583; 

    const scaleFactor = pdfWidth / imgWidth; 

    
    const scaledHeight = imgHeight * scaleFactor;

    
    const pdf = new jsPDF('l', 'mm', [pdfWidth, pdfHeight]); 

   
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, scaledHeight);

    const pdfBase64 = pdf.output('datauristring').split(',')[1];

    // pdf.save('generated-landscape-file.pdf');
    })
};

 


export default ConvertToPDF;
