const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/server');


describe("GET /hex-to-rgb/:hex", () => {
	it("returns RGB for valid hex", async () => {
		const res = await request(app).get('/hex-to-rgb/FF0000');
		expect(res.status).to.equal(200);
		expect(res.body).to.equal({r: 255, g: 0, b: 0});
	});

	it("returns 400 for invalid hex", async () => {
		const res = await request(app).get('/hex-to-rgb/XYZ123');
		expect(res.status).to.equal(400);
        expect(res.body.error).to.equal("Invalid HEX color");
	});
});