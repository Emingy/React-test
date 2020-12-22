import React from 'react'
import Table from './Table/table.js'
import Loader from './Loader/Loader.js'
import PaginationTable from './PaginationTable/paginationTable.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state ={
    isLoading: true,
    data: [],
    currentData: [],
    currentPage: null,
    totalPages: null,
    direction: {
      id: 'asc',
      firstName: 'asc',
      lastName: 'asc',
      email: 'asc',
      phone: 'asc'
    }
  }
  async componentDidMount() {
    const response = await fetch(`http://www.filltext.com/?rows=110&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data: data,
      totalPages: Math.ceil(data.length/50),
      currentPage: 1
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
          this.state.isLoading ? <Loader /> : <Table data={this.state.data} sortBySymbol={this.sortBySymbolHandler}/>
        }
        {
          this.state.isLoading ? <Loader /> : <PaginationTable currentPage={this.state.currentPage} totalPages={this.state.totalPages}/>
        }
        
      </div>
    );
  }
}
export default App;
