import React from 'react'
import jQuery from 'jquery'

class ScoreToggler extends React.Component {
  show = () => {
    jQuery('.scores').collapse('show')
  }

  hide = () => {
    jQuery('.scores').collapse('hide')
  }

  render () {
    return (
      <div className='form-inline'>
        <label className='mr-2 font-weight-bold'>スコア詳細表示</label>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.show}/> 表示
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.hide} defaultChecked/> 非表示
          </label>
        </div>
      </div>
    )
  }
}

export default ScoreToggler
