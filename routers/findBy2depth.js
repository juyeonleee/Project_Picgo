const express = require('express')
const Location = require('../schemas/location')
const Photo = require('../schemas/photo')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/', async (req, res, next) => {
	const { region_2depth_name } = req.body

	console.log(region_2depth_name)

	const photos = await Photo.aggregate([
		{
			"$lookup": {
				"from": "locations",
				"localField": "locationId",
				"foreignField": "_id",
				"as": "locations"
			}
		}, { "$match": { "locations.region_2depth_name": { "$eq": region_2depth_name } } }
	]).exec(function (err, photos) {
		if (err) throw err;
		res.status(201);
		res.json({ result: 1, photos });
	})
})
module.exports = router
	
