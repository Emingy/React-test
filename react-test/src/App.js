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
    const response = await fetch(`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data: data,
      currentData: data.slice(0,50),
      totalPages: Math.ceil(data.length/50),
      currentPage: 1
    })
    console.log(this.state.totalPages)
  }
  changePage = (key) => {
    this.setState({
      currentData: this.state.data.slice((key-1)*50,key*50),
      currentPage: key
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
      currentData: this.state.data.slice((this.state.currentPage-1)*50,this.state.currentPage*50),
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
          this.state.isLoading ? <Loader /> : <Table data={this.state.currentData} sortBySymbol={this.sortBySymbolHandler}/>
        }
        {
          this.state.isLoading ? <Loader /> : <PaginationTable currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage}/>
        }
        
      </div>
    );
  }
}
export default App;
