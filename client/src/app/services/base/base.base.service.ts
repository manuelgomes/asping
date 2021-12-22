/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE baseBaseService PLEASE EDIT ../base.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Base } from '../../domain/asping_db/base';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../base.service.ts
 */

/*
 * SCHEMA DB base
 *
	{
		as_of: {
			type: 'Date',
			required : true
		},
		country: {
			type: 'String',
			required : true
		},
		lat: {
			type: 'Number'
		},
		lon: {
			type: 'Number'
		},
		postcode: {
			type: 'String',
			required : true
		},
		until: {
			type: 'Date'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		based: {
			type: Schema.ObjectId,
			ref : "User"
		},
	}
 *
 */
@Injectable()
export class BaseBaseService {

    contextUrl: string = environment.endpoint + '/base';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS


    // Custom APIs

}
