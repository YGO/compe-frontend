import React from 'react'
import PropTypes from 'prop-types'
import style from './entry-list.styles'
import classNames from 'classnames'
import isEqual from 'lodash.isequal'

class EntryListItem extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.retired !== nextProps.retired) return true
    if (this.props.isEditing !== nextProps.isEditing) return true
    if (this.props.loading !== nextProps.loading) return true
    if (!isEqual(this.props.roundEntries, nextProps.roundEntries)) return true
    return false
  }

  render () {
    const {
      id,
      name,
      retired,
      isEditing,
      roundEntries,
      pars,
      loading,
      onClickEdit,
      onClickCancel,
      onClickSave,
      onChangeScore,
      onChangeRetired,
    } = this.props

    const totalStrokes = roundEntries.map(re =>
      re.strokes.map(Number).reduce((a, b) => a + b, 0)
    ).reduce((a, b) => a + b, 0)

    const totalScore = roundEntries.map(re =>
      re.strokes.map(Number).reduce((sum, v, idx) => {
        if (v === 0) return sum
        return sum + (v - pars[idx])
      }, 0)
    ).reduce((a, b) => a + b, 0)

    return (
      <div className='row'>
        <div className='col'>
          <div className='row' style={style.entryRow}>
            <div className='col-auto'>
              <span className='font-weight-bold'>{name}</span>
            </div>
            <div className='col-auto'>{totalStrokes} ({totalScore})</div>
            <div className='col-auto mr-auto'>
              <div
                className={classNames('form-check', {disabled: !isEditing || loading})}>
                <label className='form-check-label'>
                  <input className='form-check-input' type='checkbox'
                         checked={retired} disabled={!isEditing || loading}
                         onChange={e => onChangeRetired(e.target.checked)}/> 棄権
                </label>
              </div>
            </div>
            {!isEditing &&
            <div className='col-auto'>
              <button type='button' className='btn btn-link' style={style.ctrlBtn}
                      onClick={() => onClickEdit(id)}>スコア編集
              </button>
            </div>
            }
            {isEditing &&
            <div className='col-auto'>
              <button type='button' className='btn btn-link' style={style.ctrlBtn}
                      onClick={onClickCancel} disabled={loading}>
                キャンセル
              </button>
              <button type='button' className='btn btn-primary btn-sm'
                      style={style.ctrlBtn} onClick={onClickSave}
                      disabled={loading}>保存
              </button>
            </div>
            }
          </div>
          <div className='row'>
            <div className='col'>
              <table className='table table-sm table-bordered'
                     style={style.scoreTable}>
                <thead>
                <tr>
                  {[...Array(18)].map((_, idx) =>
                    <th key={`EntryListItem-h${idx}`}
                        style={style.scoreTableHeader}>{idx + 1}</th>
                  )}
                  <th style={style.scoreTableHeader}>合計</th>
                </tr>
                </thead>
                <tbody>
                {roundEntries.map((re, idx) =>
                  <tr key={`EntryListItem-${re.id}`}>
                    {re.strokes.map((v, idx) =>
                      <td key={`EntryListItem-${re.id}-${idx}`}>
                        <input type='text' value={v} style={style.scoreInput}
                               disabled={!isEditing}
                               onChange={e => onChangeScore(re.id, idx, e.target.value)}/>
                      </td>
                    )}
                    <td>{re.strokes.map(Number).reduce((a, b) => a + b, 0)}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EntryListItem.defaultProps = {
  isEditing: false
}

EntryListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  roundEntries: PropTypes.array.isRequired,
  pars: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onChangeScore: PropTypes.func.isRequired,
  onChangeRetired: PropTypes.func.isRequired,
}

export default EntryListItem
