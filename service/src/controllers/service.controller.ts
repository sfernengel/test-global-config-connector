import { Request, Response } from 'express';
import { getProject } from '../client/create.client';
import CustomError from '../errors/custom.error';

/**
 * Exposed service endpoint.
 * - Receives a POST request, parses the action and the controller
 * and returns it to the correct controller. We should be use 3. `Cart`, `Order` and `Payments`
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (request: Request, response: Response) => {
  try {
    const project = await getProject();
    response.status(200).json(project);
  } catch (error) {
    throw new CustomError(500, 'Internal Server Error');
  }
};
