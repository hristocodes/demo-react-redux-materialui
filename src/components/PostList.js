import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visiblePosts: this.props.slice,
      totalPosts: 0,
    };

    this.handleClick_ShowMore = this.handleClick_ShowMore.bind(this);
  }

  handleClick_ShowMore = function () {
    this.setState((prevState, props) => {
      const totalPosts = props.posts.length;
      const newCount = prevState.visiblePosts + props.slice;

      return { visiblePosts: newCount > totalPosts ? totalPosts : newCount };
    });
  };

  componentDidUpdate(prevProps) {
    const { slice, posts } = this.props;

    if (slice !== prevProps.slice || posts !== prevProps.posts) {
      this.setState({
        visiblePosts: slice,
      });
    }
  }

  render() {
    const { posts } = this.props;

    if (!posts || posts.length === 0) return null;

    const buttonDisabled = this.state.visiblePosts >= posts.length;

    return (
      <Fragment>
        {posts.map(
          (entry, index) =>
            index < this.state.visiblePosts && (
              <Post key={entry.id} id={entry.id} title={entry.title} body={entry.body} />
            )
        )}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            style={{ width: "100%" }}
            disabled={buttonDisabled}
            onClick={this.handleClick_ShowMore}
          >
            SHOW MORE
          </Button>
        </Grid>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(PostList);
