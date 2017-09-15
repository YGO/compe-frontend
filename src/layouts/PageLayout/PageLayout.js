import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div id="mainContent">  
    <div id="top-info">
      <div id="topImage">
        <div id="golfInfo">
          <div className="infoText"><span>
               第19回　PGAティーチングプロ選手権大会</span></div>
          <div className="infoText"><span>
               登別カントリー倶楽部</span></div>
          <div className="infoText"><span>
               2017年9月21日 〜 22日</span></div>
          <div className="infoText"><a href="http://sp.golfnetwork.co.jp/tcp/" target="_black"><span>http://sp.golfnetwork.co.jp/tcp/</span></a></div>
        </div>
      </div>
      <div id="holeinfo">
        <div id="hole"><span>
             hole</span>
          <div className="hole"><span>1</span></div>
          <div className="hole"><span>2</span></div>
          <div className="hole"><span>3</span></div>
          <div className="hole"><span>4</span></div>
          <div className="hole"><span>5</span></div>
          <div className="hole"><span>6</span></div>
          <div className="hole"><span>7</span></div>
          <div className="hole"><span>8</span></div>
          <div className="hole"><span>9</span></div>
          <div className="hole"><span>10</span></div>
          <div className="hole"><span>11</span></div>
          <div className="hole"><span>12</span></div>
          <div className="hole"><span>13</span></div>
          <div className="hole"><span>14</span></div>
          <div className="hole"><span>15</span></div>
          <div className="hole"><span>16</span></div>
          <div className="hole"><span>17</span></div>
          <div className="hole"><span>18</span></div>
        </div>
        <div id="yards"><span>
             yards</span>
          <div className="yards"><span>403</span></div>
          <div className="yards"><span>547</span></div>
          <div className="yards"><span>376</span></div>
          <div className="yards"><span>162</span></div>
          <div className="yards"><span>403</span></div>
          <div className="yards"><span>187</span></div>
          <div className="yards"><span>410</span></div>
          <div className="yards"><span>501</span></div>
          <div className="yards"><span>412</span></div>
          <div className="yards"><span>407</span></div>
          <div className="yards"><span>375</span></div>
          <div className="yards"><span>166</span></div>
          <div className="yards"><span>406</span></div>
          <div className="yards"><span>548</span></div>
          <div className="yards"><span>411</span></div>
          <div className="yards"><span>397</span></div>
          <div className="yards"><span>165</span></div>
          <div className="yards"><span>496</span></div>
        </div>
        <div id="par"><span>
             par</span>
          <div className="par"><span>4</span></div>
          <div className="par"><span>5</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>3</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>3</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>5</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>3</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>5</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>4</span></div>
          <div className="par"><span>3</span></div>
          <div className="par"><span>5</span></div>
        </div>
      </div>
      <div id="total"><span>total</span></div>
      <div id="score"><span>score</span></div>
      <div id="scoretotal"><span>合計</span></div>
      <div id="dns"><span>棄権</span></div> 
      <div id="edit_row"><span>Edit</span></div>        
    </div>
    {children}
  </div>          
  
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
