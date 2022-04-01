import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    await createUseCase.execute({
      name,
      email,
      driver_license,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
