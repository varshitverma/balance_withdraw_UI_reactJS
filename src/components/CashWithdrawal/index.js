// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalanceFunction = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const name = 'Sarah Williams'
    const profileName = name.slice(0, 1)
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-container">
            <div className="profile">
              <p className="profile-name">{profileName}</p>
            </div>
            <h1 className="user-name">{name}</h1>
          </div>
          <div className="balance-card">
            <p className="heading">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="currency-type">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-desc">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationsList={eachDenomination}
                updateBalanceFunction={this.updateBalanceFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
