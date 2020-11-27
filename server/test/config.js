const request = require('supertest');
const fs = require("fs");
const db = require("../db/db.js");
const api = require('../server.js');

const createTables = fs.readFileSync(__dirname + '/../db/database.sql').toString()
const seed = fs.readFileSync(__dirname + '/seedsTest.sql').toString()

const resetTestDB = () => {
    return new Promise (async (resolve, reject) => {
        try {
            await db.run(createTables);
            await db.run(seed);
            resolve('Test DB reset');
        } catch (err) {
            reject("Test DB could not be reset");
        };
    });
}

global.request = request;
global.api = api;
global.resetTestDB = resetTestDB;