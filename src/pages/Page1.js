import React, { Component } from "react";
import { connect } from "react-redux";
import { PageHeader, Table } from "antd";
import { get_users } from "../redux/actions/users";

const columns = [
  {
    title: "UserID",
    dataIndex: "userId1",
    key: "header",
  },
  {
    title: "Title",
    dataIndex: "title1",
    key: "header",
  },
  {
    title: "Body",
    dataIndex: "body1",
    key: "header",
  },
];

class Page1 extends Component {
  componentDidMount = () => {
    this.props.dispatch(get_users());
  };

  render() {
    return (
      <div>
        <PageHeader title="Page 1" />
        <Table
          columns={columns}
          dataSource={Object.values[this.props.usersReducer]}
          //   loading={display.length === 0}
        />
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  usersReducer: state.usersReducer,
});

export default connect(mapStatetoProps)(Page1);
