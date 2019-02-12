import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Project = ({ title, description }) => (
  // <div className="project">
  //   <div className="project-content">
  //     <p className="project-title">title</p>
  //     <image />
  //     <p className="project-description">description</p>
  //     <p className="text-button">GITHUB</p>
  //     <p className="text-button">LINK</p>
  //   </div>
  // </div>
  // <Card style={{}}>
  //   <CardContent>
  //     <Typography variant="h5">{title}</Typography>
  //     <Typography>{description}</Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size="small">github</Button>
  //     <Button size="small">link</Button>
  //   </CardActions>
  // </Card>
  <div className="project">{title}</div>
);

export default Project;
