import React from 'react'
import PropTypes from 'prop-types'

const RefreshBtn = ({ loading, fetchPlayers }) => (
  <button type='button'
    className='btn btn-primary'
    disabled={loading}
    onClick={fetchPlayers}>Refresh</button>
)

RefreshBtn.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchPlayers: PropTypes.func.isRequired,
}

export default RefreshBtn
