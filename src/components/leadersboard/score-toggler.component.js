import React from 'react'
import jQuery from 'jquery'

class ScoreToggler extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpened: false,
    }
  }

  show = () => {
    this.setState({isOpened: true})
    jQuery('.leaders-board-scores').collapse('show')
  }

  hide = () => {
    this.setState({isOpened: false})
    jQuery('.leaders-board-scores').collapse('hide')
  }

  render () {
    return (
      <div className='form-inline'>
        <label className='mr-2 font-weight-bold'>スコア詳細表示</label>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.show} checked={this.state.isOpened}/> 表示
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <label className='form-check-label'>
            <input className='form-check-input' type='radio'
                   name='toggleOptions'
                   onChange={this.hide} checked={!this.state.isOpened}/> 非表示
          </label>
        </div>
      </div>
    )
  }
}

export default ScoreToggler
