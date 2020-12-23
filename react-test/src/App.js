import React from 'react'
import Table from './Table/table.js'
import Filter from './Filter/filter.js'
import Loader from './Loader/Loader.js'
import AdditionalInfo from './AdditionalInfo/additionalInfo.js'
import AddData from './AddData/addData.js'
import PaginationTable from './PaginationTable/paginationTable.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state ={
    isLoading: true,
    data: [],
    currentData: [],
    filteredData: [],
    currentPage: null,
    totalPages: null,
    direction: {
      id: 'asc',
      firstName: 'asc',
      lastName: 'asc',
      email: 'asc',
      phone: 'asc'
    },
    filterValue:null,
    additionalInfo:[],
    addDataFormFlag:false,
    inputIdNull: false,
    inputFirstNameNull: false,
    inputLastNameNull: false,
    inputEmailNull: false,
    inputPhoneNull: false
  }
  async componentDidMount() {
    // const response = await fetch(`http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    // const data = await response.json()
    const data = [
      {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
          streetAddress: '9792 Mattis Ct',
          city: 'Waukesha',
          state: 'WI',
          zip: '22178'
        },
        description: 'et lacus magna dolor...',
      }
    ]
    this.setState({
      isLoading: false,
      data: data,
      filteredData: data,
      currentData: data.slice(0,50),
      totalPages: Math.ceil(data.length/50),
      currentPage: 1
    })
  }
  changePage = (key) => {
    this.setState({
      currentData: this.state.filteredData.slice((key-1)*50,key*50),
      currentPage: key
  })
  }
  sortBySymbolHandler = (key) => {
    this.setState({
      filteredData: this.state.filteredData.sort((a, b) => {
        const asc = this.state.direction[key] === 'asc';
        if (a[key] < b[key]) {
            return asc ? -1 : 1;
        } else if (a[key] > b[key]) {
            return asc ? 1 : -1;
        } else {
            return 0;
        }
      }),
      currentData: this.state.filteredData.slice((this.state.currentPage-1)*50,this.state.currentPage*50),
      direction: {
          [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
  })
  }
  search = (key) => {
    this.setState({
      filteredData: this.state.data.filter(item => {
        var flag = false
        Object.values(item).forEach((val) => {
          if(String(val).indexOf(key) >-1){
            flag = true;
            return;
          }
        });
        if(flag) return item;
      }),
      filterValue: key,
      currentData: this.state.filteredData.slice(0,50),
      totalPages: Math.ceil(this.state.filteredData.length/50),
      currentPage: 1
    })
  }
  additionalInformation = (id, firstName, lastName) => {
    this.setState({
      additionalInfo:  this.state.data.filter(item => {
        if (item.firstName==firstName && item.lastName==lastName && item.id==id) {
          return item;
        }
      })
    })
  }
  openFormAddData = () =>{
    this.setState({
      addDataFormFlag: true
    })
  }
  checkInput = (key,val) =>{
      this.setState({
        [key]:val
      })
    
    // console.log(this.state.addDataState)
    
  }
  render() {
    return (
      <div>
        {
          this.state.isLoading ? <Loader /> : <Filter search={this.search}/>
        }
        {
          this.state.isLoading ? <Loader /> : <AddData formFlag={this.state.addDataFormFlag} openFormAddData={this.openFormAddData} checkInput={this.checkInput} state={this.state}/>
        }
        {
          this.state.isLoading ? <Loader /> : <Table data={this.state.currentData} sortBySymbol={this.sortBySymbolHandler} additionalInformation={this.additionalInformation}/>
        }
        {
          this.state.isLoading ? <Loader /> : this.state.additionalInfo.map(item => {
            return <AdditionalInfo data={item}/>
        }) 
        }
        {
          this.state.isLoading ? <Loader /> : <PaginationTable currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage}/>
        }
      </div>
    );
  }
}
export default App;
