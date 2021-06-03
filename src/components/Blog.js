import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAuthors, fetchPosts } from "../actions";
import PostList from "./PostList";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from '@material-ui/core/styles';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedAurhor: "", selectedCount: 2 };

    this.handleAuthorsChange = this.handleAuthorsChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAuthors();
  }

  handleAuthorsChange = function (e) {
    this.setState({
      selectedAurhor: e.target.value,
    });
    this.props.fetchPosts(e.target.value);
  };

  handleCountChange = function (e) {
    this.setState({
      selectedCount: e.target.value,
    });
  };

  render() {
    const { authors } = this.props;

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl style={{ width: "100%" }} variant="outlined">
            <InputLabel id="author_select_label">Author</InputLabel>
            <Select
              variant="outlined"
              label="Author"
              labelId="author_select_label"
              value={this.state.selectedAurhor}
              onChange={this.handleAuthorsChange}
            >
              {authors &&
                authors.map((author) => (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl style={{ width: "100%" }} variant="outlined">
            <InputLabel id="count_select_label">Count</InputLabel>
            <Select
              variant="outlined"
              label="Count"
              labelId="count_select_label"
              value={this.state.selectedCount}
              onChange={this.handleCountChange}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}> */}
        <PostList slice={this.state.selectedCount} userId={this.state.userId} />
        {/* </Grid> */}
      </Grid>
    );
  }
}

const mapStateToProps = ({ authors }) => {
  return {
    authors,
  };
};

export default connect(mapStateToProps, { fetchAuthors, fetchPosts })(Blog);
