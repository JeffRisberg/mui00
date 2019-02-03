import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = 'j50y8d8104uc';
const ACCESS_TOKEN = '83ed3f1c9da56994a27af7a45bd6a6d8147dc6e090f6815eaecad902afee4a35';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    };

    constructor() {
        super();
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
            .then((response) => {
                this.setState({courses: response.items})
            })
            .catch((error) => {
                console.log("Error occured while fetching data")
                console.log(error)
            })
    };

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    };

    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                                   id="searchInput"
                                   placeholder="Search for Courses"
                                   margin="normal"
                                   onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}

export default CourseList;