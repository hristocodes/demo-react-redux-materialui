import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions";

import Badge from "@material-ui/core/Badge";
import CommentIcon from "@material-ui/icons/Comment";

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  render() {
    // return <div>{this.props.comments.length} comments</div>;
    return (
      <Badge color="primary" style={{ margin: 16 }} badgeContent={this.props.comments.length}>
        <CommentIcon />
      </Badge>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

export default connect(mapStateToProps, { fetchComments })(Comments);
