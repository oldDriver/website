var form = require('forms');
var fields = form.fields;
var widgets = form.widgets;
//var validators = form.validators;

var userForm = form.create({
    nickname: fields.string({ required: true }),
    password: fields.string({ required: true, widget: widgets.password()})
});

module.exports = userForm;
