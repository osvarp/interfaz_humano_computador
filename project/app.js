import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.listen( 5010, () => {
        console.log( "Servidor Iniciado..." );
} );




app.use( express.static( path.join( __dirname, "dist" ) ) );

app.use( (req,res,n) => {
        res.sendFile( path.join( __dirname, "dist", "index.html" ) );
} );



