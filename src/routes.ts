import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'teste@gmail.com', password: 'teste',
    techs: ['Node.js', {title:'Javascript', experience: 100}]
  });
  
  return response.json({message: 'Hello World'});
}