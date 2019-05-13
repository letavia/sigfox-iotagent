/*
 * Copyright 2015 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of sigfox-iotagent
 *
 * sigfox-iotagent is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * sigfox-iotagent is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with sigfox-iotagent.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[daniel.moranjimenez at telefonica.com]
 */

var config = {};

config.sigfox = {
    port: 17428
};

config.iota = {
    logLevel: 'DEBUG',
    timestamp: true,
    contextBroker: {
        host: 'localhost',
        port: '1026'
    },
    server: {
        port: 4041
    },
    authentication: {
    //enabled: false,
    //type: 'keystone',
    //header: 'Authorization',
    //host: 'localhost',
    //port: '5000',
    //url: 'localhost:5000',
    //user: 'IOTA_AUTH_USER',
    //password: 'IOTA_AUTH_PASSWORD',
    //tokenPath: '/oauth2/token',
    //permanentToken: true,
    //clientId: 'IOTA_AUTH_CLIENT_ID',
    //clientSecret: 'IOTA_AUTH_CLIENT_SECRET'
    },
    iotManager: {
        //host: 'localhost',
        //port: 18082,
        //path: '/iot/protocols',
        //protocol: 'IoTA-Sigfox',
        //description: 'Sigfox_IoT_Agent_Node'
    },
    defaultResource: '/iot/sigfox',
    deviceRegistry: {
        type: 'mongodb'
    },
    mongodb: {
        host: 'localhost',
        port: '27017',
        db: 'iotasigfox'
        //replicaSet: ''
    },
    types: {},
    //service: 'howtoService',
    //subservice: '/howto',
    providerUrl: 'http://192.168.0.1:4041',
    deviceRegistrationDuration: 'P1Y',
    defaultType: 'Thing'
};

//config.defaultKey = 'TEF';

module.exports = config;
