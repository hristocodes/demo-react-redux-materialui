import React from "react";
import Comments from "./Comments";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  title: {
    margin: 16,
  },
  body: {
    margin: 16,
    // marginBottom: 12,
  },
  comments: {
    paddingLeft: 160,
  },
});

const Post = (props) => {
  const { id, title, body } = props;

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root} variant="outlined">
        {/* <Card variant="outlined"> */}
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <Typography className={classes.body} variant="body1">
          {body}
        </Typography>
        <Comments postId={id} />
      </Card>
    </Grid>
  );
};

export default Post;
