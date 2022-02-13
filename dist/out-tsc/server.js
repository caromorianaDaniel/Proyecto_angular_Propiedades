import { __awaiter } from "tslib";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { routes } from './routes/routes';
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.set('port', process.env.PORT || 3000); // preparado para subir a heroku          
            this.app.use(express.json()); // para que nuestro servidor entienda         // los formatos json desde clientes         
            this.app.use(cors()); // evitar el error CORS         
            this.app.use(morgan('dev')); // Para que muestre las url invocadas                  
            this.app.use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
                next();
            });
        });
    }
    routes() {
        this.app.use('/', routes);
    }
    start() {
        this.app.listen(this.app.get('post'), () => {
            console.log(`Server on port: ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map