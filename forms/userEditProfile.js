var form = require('forms');
var fields = form.fields;
var widgets = form.widgets;
var validators = form.validators;

var userForm = form.create({
    id: fields.number({ widget: widgets.hidden()}),
    first_name: fields.string({ required: true }),
    last_name: fields.string({ required: true }),
    email: fields.email({required: true})
});

module.exports = userForm;
