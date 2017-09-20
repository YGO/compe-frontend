import React from 'react'
import Radium from 'radium'
import jQuery from 'jquery'

class ScoreToggler extends React.Component {
  toggle = () => {
    jQuery('.scores').collapse('toggle')
  }

  render () {
    return (
      <div className='form-inline'>
        <label className='mr-2 font-weight-bold'>スコア詳細表示</label>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.toggle}/> 表示
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.toggle} defaultChecked/> 非表示
          </label>
        </div>
      </div>
    )
  }
}

export default Radium(ScoreToggler)
