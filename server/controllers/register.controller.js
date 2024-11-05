const express = require('express');
const Register = require('../models/register.model');

exports.registerController = async (req, res) => {
    try {
        const { 
            firstName, lastName, email, country, streetAddress, city, state, postalCode, byEmail, pushNotifications
        } = req.body;

        console.log(req.body);
        const newUser = new  Register({
            firstName,
            lastName,
            email,
            country,
            streetAddress,
            city,
            state,
            postalCode,
            byEmail,
            pushNotifications
        });

        const savedUser = await newUser.save();

        return res.status(200).json({
            success: true,
            data: savedUser
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}