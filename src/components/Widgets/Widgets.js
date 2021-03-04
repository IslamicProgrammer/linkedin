import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('Murodjon Azamov', 'Top news - 99921 readers')}
      {newsArticle('New "QOVUN"', 'Leaders of Uzbekistan - 1921 readers')}
      {newsArticle('Coronavirus: Uzbekistan', 'Top news - 7099 readers')}
      {newsArticle('Black PR: Ahad Qayum', 'Stars - 99921 readers')}
      {newsArticle('Monopolist GM Uzbekistan', 'Cars & Auto - 99921 readers')}
      {newsArticle('Is Redux soo good ? ', 'coding - 99921 readers')}
    </div>
  );
};

export default Widgets;
