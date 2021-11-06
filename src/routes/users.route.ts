import { Router, Response, Request, NextFunction } from "express";


const usersRoute = Router();

usersRoute.get('/users', (req, res, next) => {
  const users = [{ userName: 'Luiz' }];
  res.status(200).send({ users });
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(200).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;

  console.log(req.body);

  res.status(200).send(newUser);
});

export default usersRoute;