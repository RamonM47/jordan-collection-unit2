import { render } from 'ejs'
import { Jordan } from '../models/jordan.js'


function newJordan(req,res) {
    res.render('jordans/new')
}

function index(req,res) {
    Jordan.find ({})
    .then(jordans => {
        res.render('jordans/index', {
            jordans
        })
    })
}

function create(req,res) {
    req.body.worn = !!req.body.worn
    Jordan.create(req.body)
    .then(() => {
        res.redirect('/jordans')
    })
}

function show(req,res) {
    Jordan.findById(req.params.id)
    .then(jordan => {
        res.render('jordans/show', {
            jordan
        })
    })
}

function deleteJordan(req,res) {
    Jordan.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.redirect('/jordans')
    })
}

export {
    index,
    create,
    newJordan as new,
    show,
    deleteJordan as delete
}