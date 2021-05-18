/**
 * Defines Custom method types over Express's Request
 *
 */

import { Request } from 'express';

export interface IRequest extends Request {
	flash(message: string, callback: any): any;

	logIn(user: any, callback: any): any;
	user(): any;
	logout(): void;
}
