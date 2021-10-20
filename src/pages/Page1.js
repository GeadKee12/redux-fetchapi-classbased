import React, { Component } from "react";
import { connect } from "react-redux";
import { PageHeader } from "antd";
import { get_users } from "../redux/actions/users";

class Page1 extends Component {
  componentDidMount = () => {
    this.props.dispatch(get_users());
  };

  render() {
    return (
      <div>
        <PageHeader title="Page 1" />
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  //   usersReducer: state.key1,
});

export default connect(mapStatetoProps)(Page1);
