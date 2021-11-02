import { Router, Response, request, NextFunction } from "express";


const usersRoute = Router();

usersRoute.get('/users', (req, res, next) => {
  const users = [{ userName: 'Luiz' }];
  res.status(200).send({users});
});

export default usersRoute;