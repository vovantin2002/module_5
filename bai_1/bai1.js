let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
//task 1
let temp=courses.filter((courses)=>{
    return courses.rating>=4;
})
console.log(temp);
// task2
let temp2=courses.filter((courses)=>{
    return courses.rating<4;
})
temp2.map((temp2)=>{
    console.log("["+temp2.id+"-"+temp2.title+"-"+temp2.rating+"]")
}
)
// task 3
let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  let arr=[...courses, ...addedCourses];
  console.log(arr);