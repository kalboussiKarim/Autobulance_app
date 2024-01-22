const { PDFDocument, rgb } = require("pdf-lib");
import { getProfile } from "../../authentication/slice";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../authentication/slice";
import React, { useEffect } from "react";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { shareAsync } from "expo-sharing";
import * as Print from "expo-print";

export async function genererFacture(detailsReparation) {
  const clientDetails = detailsReparation.request;
  console.log(clientDetails);
  const servicesDetails = detailsReparation.services;
  function calculateTotal(services) {
    var somme = 0;

    services.forEach(function (service) {
      somme += parseFloat(service.price);
    });

    return somme.toFixed(2);
  }
  function generateRandomNumber() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    return randomNumber.toString();
  }
  const billId = generateRandomNumber();

  const htmlContent = `
     <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 30px;
        border: 1px solid ; /* Bordure autour du corps de la facture */
        padding: 30px;
      }

      h1, h2 {
    
        border-bottom: 2px solid ; /* Bordure inférieure pour les titres */
        padding-bottom: 5px;
      }

      p {
        margin: 5px 0;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 5px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      th, td {
        border: 1px solid ;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }
        p.total {
          margin:20;
        font-weight: bold;
        color: #28a745; /* Vert */
        border-top: 2px solid #28a745; /* Bordure supérieure */
        padding-top: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Facture de Réparation</h1>
     <h2>Informations de Facture :</h2>
          <p><strong>Numéro de Facture :</strong> ${billId}</p>
    <h2>Détails du Client :</h2>
          <p><strong>Nom du Client :</strong> ${
            clientDetails.client.full_name
          }</p>
          <p><strong>E-mail du Client :</strong> ${
            clientDetails.client.email
          }</p>
          <p><strong>Matricule :</strong> ${clientDetails.matricule}</p>
          <p><strong>Type de Voiture :</strong> ${clientDetails.car_type}</p>
          <p><strong>Type de Demande :</strong> ${
            clientDetails.request_type
          }</p>

<h2>Détails de l'Autobus :</h2>
    <p><strong>Matricule de l'Autobulance :</strong> ${
      detailsReparation.autobulance.matricule
    }</p>
    <p><strong>Téléphone de l'Autobulance :</strong> ${
      detailsReparation.autobulance.phone
    }</p>

    <h2>Détails des Services :</h2>
    <table>
      <thead>
        <tr>
          <th>Service</th>
         
          <th>Prix </th>
         
        </tr>
      </thead>
      <tbody>
        ${servicesDetails
          .map(
            (service) => `
              <tr>
                <td>${service.name}</td>
             
                <td>$${service.price} dt</td>
              
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>

    <p><strong>Total à Payer :</strong> $${calculateTotal(
      servicesDetails
    )} dt </p>
    
  </body>
</html>

    `;

  const file = await Print.printAsync({
    html: htmlContent,
    base64: false,
  });
  const { uri } = await Print.printToFileAsync({ html });
  console.log("File has been saved to:", uri);
  await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  console.log(file);
}
