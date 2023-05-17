// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onAmountWithdrawal = value => {
    this.setState(prevState => {
      const amountValue = prevState.amount - value
      return {amount: amountValue}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="container-1">
            <div className="circle-container">
              <p className="circle-paragraph"> S </p>
            </div>
            <p className="name-paragraph"> Sarah Williams </p>
          </div>

          <div className="balance-container">
            <div className="container-2">
              <p className="balance-paragraph"> Your Balance </p>
              <div className="rupees-container">
                <p className="rupees-count-paragraph">{amount}</p>
                <p className="rupees-paragraph"> In Rupees </p>
              </div>
            </div>
          </div>

          <div className="container-3">
            <div>
              <p className="paragraph-1"> Withdraw </p>
              <p className="paragraph-2"> CHOOSE SUM (IN RUPEES) </p>
            </div>
          </div>

          <ul>
            <div className="button-container">
              {denominationsList.map(eachObj => (
                <DenominationItem
                  key={eachObj.id}
                  obj={eachObj}
                  onAmountWithdrawal={this.onAmountWithdrawal}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
