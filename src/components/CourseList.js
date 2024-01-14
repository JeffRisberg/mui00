import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = 'j50y8d8104uc';
const ACCESS_TOKEN = '83ed3f1c9da56994a27af7a45bd6a6d8147dc6e090f6815eaecad902afee4a35';

const client = contentful.createClient({
   space: SPACE_ID,
   accessToken: ACCESS_TOKEN
});

const CourseList = (props) => {

   const [courses, setCourses] = useState([]);
   const [searchString, setSearchString] = useState('');

   useEffect(() => {
      client.getEntries({
         content_type: 'course',
         query: searchString
      })
         .then((response) => {
            setCourses(response.items)
         })
         .catch((error) => {
            console.log("Error occurred while fetching data")
            console.log(error)
         })
   }, [searchString])

   return (
      <div>
         {courses ? (
            <div>
               <TextField style={{padding: 24}}
                          id="searchInput"
                          placeholder="Search for Courses"
                          margin="normal"
                          onChange=
                             {(e) => {
                               setSearchString(e.target.value)}}>
               </TextField>
               <Grid container style={{padding: 24}}>
                  {courses.map(currentCourse => (
                     <Grid key={currentCourse.sys.id} item xs={12} sm={6} lg={4}
                           xl={3}>
                        <Course course={currentCourse}/>
                     </Grid>
                  ))}
               </Grid>
            </div>
         ) : "No courses found"}
      </div>
   )
}

export default CourseList;
