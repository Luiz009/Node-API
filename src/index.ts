import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'sucesso!' });
});

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('aplicação executando na porta 3000!');
});

