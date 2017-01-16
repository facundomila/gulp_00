var React = require('react');

var App = React.createClass ({
    render: function() {
        return <ul>
            <li>HOme</li>
            <li>Contact</li>
        </ul>
    }
});
module.exports = App;

/*
var Home = React.createClass ({
    render: function() {
        return <ul>
            <li>HOme</li>
        </ul>
    }
});
module.exports = Home;

var Contact = React.createClass ({
    render: function() {
        return <ul>
            <li>Contact</li>
        </ul>
    }
});
module.exports = Contact;*/
