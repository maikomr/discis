/**
 * Created by maiko on 27/12/2016.
 */
const initialCourse = {
  "id": "123",
  "name": "Introduction to Advertising",
  "description": "Learn about advertising",
  "textbooks": [
    {
      "id": "1",
      "author": "Joe Smith",
      "title": "Mobile Advertising Fundamentals"
    },
    {
      "id": "2",
      "author": "Eli Hinnegan",
      "title": "Introduction to Location-Based Advertising"
    },
    {
      "id": "3",
      "author": "Edward Bernays",
      "title": "Public Relations"
    }
  ]
};

const initialState = {
  course: {
    draft: initialCourse,
    backend: initialCourse
  }
};

export default initialState;
