import "./App.css";
import { Component } from "react";
import { Table } from "antd";
import Page1 from "./pages/Page1";

// const columns = [
//   {
//     title: "UserID",
//     dataIndex: "userId1",
//     key: "header",
//   },
//   {
//     title: "Title",
//     dataIndex: "title1",
//     key: "header",
//   },
//   {
//     title: "Body",
//     dataIndex: "body1",
//     key: "header",
//   },
// ];

class App extends Component {
  //   fetchUserHandler = () => {
  //     this.props.dispatch(fetchAction.FetchUser());
  //   };
  //   mapStatetoProps = (state) =>{
  //     {fetchAction} = state,
  //   };
  //   render() {
  //     return (
  //       <div className="App">
  //         {/* <button onClick={this.fetchUserHandler}>Fetch Users</button> */}
  //         <button onClick={() => this.props.dispatch()}>Fetch Users</button>
  //         <Table
  //           columns={columns}
  //           dataSource={display}
  //           loading={display.length === 0}
  //         />
  //       </div>
  //     );
  //   }

  render() {
    return <Page1 />;
  }
}
// export default connect(null, { fetchAction })(App);
export default App;
