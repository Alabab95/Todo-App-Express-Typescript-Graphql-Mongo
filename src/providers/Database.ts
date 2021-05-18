/**
 * Define Database connection
 *
 */

import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { MongoError } from 'mongodb';

import Locals from './Locals';
import Log from "../utils/middlewares/Log";

export class Database {
	// Initialize your database pool
	public static init (): void {
		const dsn = Locals.config().mongooseUrl;
		const options = { useNewUrlParser: true, useUnifiedTopology: true };
		(<any>mongoose).Promise = bluebird;
		mongoose.set('useFindAndModify', false);
		mongoose.connect(dsn, options, (error: MongoError) => {
			// handle the error case
			if (error) {
				console.log("Failed to connect to the Mongo server!!");
				console.log(error);
				throw error;
			} else {
				console.log("connected to mongo server at: " + dsn);
			}
		});
	}
}

export default mongoose;
