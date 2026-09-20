const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


/* ========================================
   RUTA PRINCIPAL
======================================== */

app.get("/", (req, res) => {

    res.send("Bot de Dimarca funcionando");

});


/* ========================================
   WEBHOOK - VERIFICACIÓN
======================================== */

app.get("/webhook", (req, res) => {

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (
        mode === "subscribe" &&
        token === process.env.VERIFY_TOKEN
    ) {

        console.log("Webhook verificado correctamente.");

        return res.status(200).send(challenge);

    }

    res.sendStatus(403);

});


/* ========================================
   WEBHOOK - MENSAJES
======================================== */

app.post("/webhook", (req, res) => {

    console.log(
        JSON.stringify(req.body, null, 2)
    );

    res.sendStatus(200);

});


/* ========================================
   SERVIDOR
======================================== */

app.listen(PORT, () => {

    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );

});