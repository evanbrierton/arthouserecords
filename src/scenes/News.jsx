import React, { Component } from 'react';

class News extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render = () => (
    <main>
      <h2 style={{ borderBottom: '8px solid #b71c1c' }}>News</h2>
      <section className="section static" />
    </main>
  );
}

export default News;
