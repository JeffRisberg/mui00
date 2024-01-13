import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';

const actionButton = {
   background: "#AAF"
};

const Course = (props) => {
   return (
      <div>
         {props.course ? (
            <Card>
               <CardMedia sx={{height: 0, paddingTop: '56.25%'}}
                          image={props.course.fields.courseImage.fields.file.url}
                          title={props.course.fields.title}
               />
               <CardContent>
                  <Typography gutterBottom component="h2">
                     {props.course.fields.title}
                  </Typography>
                  <Typography component="p">
                     {props.course.fields.description}
                  </Typography>
               </CardContent>
               <CardActions>
                  <Button size="small" color="primary"
                          href={props.course.fields.url} target="_blank">
                     Go To Course
                  </Button>
                  <IconButton sx={actionButton}
                              aria-label="Menu">
                     <ThumbUpIcon/>
                  </IconButton>
                  <IconButton sx={actionButton}
                              aria-label="Menu">
                     <GroupIcon/>
                  </IconButton>
                  <IconButton sx={actionButton}
                              aria-label="Menu">
                     <CommentIcon/>
                  </IconButton>
                  <IconButton sx={actionButton}
                              aria-label="Menu">
                     <ShareIcon/>
                  </IconButton>
               </CardActions>
            </Card>
         ) : null}
      </div>
   )
};

export default Course;
