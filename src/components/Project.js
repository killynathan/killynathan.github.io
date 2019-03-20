import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Project = ({ title, description, github, link }) => (
  <Card
    style={{
      backgroundColor: "rgba(26, 26, 27, 0.8)"
      // border: "1px solid rgb(52, 53, 54)"
    }}
    className="project2"
  >
    <CardContent>
      <Typography variant="h5" style={{ color: "rgb(215, 218, 220)" }}>
        {title}
      </Typography>
      <Typography style={{ color: "rgb(215, 218, 220)" }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        style={{ color: "rgb(215, 218, 220)" }}
        href={github}
        target="_blank"
      >
        github
      </Button>
      <Button
        size="small"
        style={{ color: "rgb(215, 218, 220)" }}
        href={link}
        target="_blank"
      >
        link
      </Button>
    </CardActions>
  </Card>
);

export default Project;
