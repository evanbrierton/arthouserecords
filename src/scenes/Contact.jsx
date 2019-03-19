import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render = () => (
    <main>
      <h2 style={{ borderBottom: '8px solid #b71c1c' }}>Contact</h2>
      <section className="section static" />
    </main>
  );
}

export default Contact;
