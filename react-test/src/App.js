import React from 'react'
import Table from './Table/table.js'
import Loader from './Loader/Loader.js'

class App extends React.Component {
  state ={
    isLoading: true,
    data: [],
    direction: {
      id: 'asc',
      firstName: 'asc',
      lastName: 'asc',
      email: 'asc',
      phone: 'asc'
    }
  }
  async componentDidMount() {
    const response = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data
    })
  }
  sortBySymbolHandler = (key) => {
    this.setState({
      data: this.state.data.sort((a, b) => {
        const asc = this.state.direction[key] === 'asc';
        if (a[key] < b[key]) {
            return asc ? -1 : 1;
        } else if (a[key] > b[key]) {
            return asc ? 1 : -1;
        } else {
            return 0;
        }
      }),

      direction: {
          [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
  })
  }
  render() {
    return (
      <div>
        {
        this.state.isLoading ? <Loader /> : <Table data={this.state.data} sortBySymbol={this.sortBySymbolHandler}
        sortByPrice={this.sortByPriceHandler}/>
        }
      </div>
    );
  }
}
export default App;
