var Alert = ReactBootstrap.Alert;

const alertInstance = (
<Alert bsStyle='success'>
  <strong>It Works</strong>Good.
  </Alert>
);

var mountNode = document.getElementById('demo');

React.render(alertInstance, mountNode);
