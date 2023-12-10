import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const PdfDewonlode = () => {
  const downloadPdf = () => {
    // Replace 'your_pdf_link.pdf' with the actual link to your PDF file
    // const pdfUrl =
    //   "https://tan-lynnett-5.tiiny.site/";

    fetch('/public/shamim-reza-resume.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Shamim Reza Resume.pdf");

        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the PDF file: ", error);
      });
  };

  return (
    <div>
      <button onClick={downloadPdf} className="text-white border hover:text-black duration-500 border-red-600 px-4 py-2 hover:bg-[#CCCD34] hover:border-none">Download CV
      <IoCloudDownloadOutline className="text-[#CCCD34] text-2xl inline-flex ml-2 hover:text-black"></IoCloudDownloadOutline>
      </button>
    </div>
  );
};

export default PdfDewonlode;
