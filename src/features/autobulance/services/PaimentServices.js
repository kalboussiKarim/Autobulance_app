const { PDFDocument, rgb } = require("pdf-lib");
import { getProfile } from "../../authentication/slice";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../authentication/slice";
import React, { useEffect } from "react";
import RNHTMLtoPDF from "react-native-html-to-pdf";

export async function genererFacture(detailsReparation) {
  console.log("details " + detailsReparation);
  const clientDetails = detailsReparation.request;
  const servicesDetails = detailsReparation.services;

  // Construire le contenu HTML de la facture
  const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          <h2>Détails du client :</h2>
          <p>Matricule : ${clientDetails.matricule}</p>
          <p>Type de voiture : ${clientDetails.car_type}</p>
          <p>Type de demande : ${clientDetails.request_type}</p>
          
          <h2>Détails des services :</h2>
          <ul>
            ${servicesDetails
              .map(
                (service) =>
                  `<li>${service.name} - Quantité : ${service.quantity} - Prix : $${service.price}</li>`
              )
              .join("")}
          </ul>
        </body>
      </html>
    `;

  // Configurer les options pour la génération du PDF
  const options = {
    html: htmlContent,
    fileName: "facture",
    directory: "Documents",
  };

  // Générer le PDF
  const file = await RNHTMLtoPDF.convert(options);
  console.log("Chemin du fichier PDF:", file.filePath);
}
