const students = [
{
name:"Arun Kumar",
activities:[
{name:"HTML",status:false},
{name:"CSS",status:true},
{name:"JavaScript",status:false},
{name:"React",status:true},
{name:"GitHub",status:false}
]
},
{
name:"Buvanesh Kumar",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:false},
{name:"JavaScript",status:true},
{name:"React",status:false},
{name:"GitHub",status:false}
]
},
{
name:"Dharun",
activities:[
{name:"HTML",status:false},
{name:"CSS",status:false},
{name:"JavaScript",status:true},
{name:"React",status:false},
{name:"GitHub",status:true}
]
},
{
name:"Divya",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:true},
{name:"JavaScript",status:false},
{name:"React",status:false},
{name:"GitHub",status:true}
]
},
{
name:"Kavin",
activities:[
{name:"HTML",status:false},
{name:"CSS",status:true},
{name:"JavaScript",status:false},
{name:"React",status:true},
{name:"GitHub",status:false}
]
},
{
name:"Keerthana",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:true},
{name:"JavaScript",status:true},
{name:"React",status:false},
{name:"GitHub",status:false}
]
},
{
name:"Rahul",
activities:[
{name:"HTML",status:false},
{name:"CSS",status:false},
{name:"JavaScript",status:false},
{name:"React",status:true},
{name:"GitHub",status:true}
]
},
{
name:"Pranitha",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:false},
{name:"JavaScript",status:true},
{name:"React",status:true},
{name:"GitHub",status:false}
]
},
{
name:"Vignesh",
activities:[
{name:"HTML",status:false},
{name:"CSS",status:true},
{name:"JavaScript",status:true},
{name:"React",status:false},
{name:"GitHub",status:true}
]
},
{
name:"Sanjay",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:false},
{name:"JavaScript",status:false},
{name:"React",status:true},
{name:"GitHub",status:false}
]
},
{
name:"Yuvasree",
activities:[
{name:"HTML",status:true},
{name:"CSS",status:false},
{name:"JavaScript",status:false},
{name:"React",status:true},
{name:"GitHub",status:false}
]
}

];

const studentList = document.getElementById("studentList");

function loadStudents(){

studentList.innerHTML="";

students.forEach((student,sIndex)=>{

let completed=student.activities.filter(a=>a.status).length;

let html=`
<div class="student">

<div class="header" onclick="toggle(${sIndex})">
<span>${student.name}</span>
<span id="count${sIndex}">${completed}/${student.activities.length} ▼</span>
</div>

<div class="content" id="content${sIndex}">

<table>

<tr>
<th>Activity</th>
<th>Status</th>
<th>Action</th>
</tr>
`;

student.activities.forEach((activity,aIndex)=>{

html+=`
<tr>

<td>${activity.name}</td>

<td class="${activity.status?"completed":"pending"}">
${activity.status?"Completed":"Pending"}
</td>

<td>
${
activity.status
?
"✔"
:
`<button onclick="completeTask(${sIndex},${aIndex})">Complete</button>`
}
</td>

</tr>
`;

});

html+=`
</table>

<div class="progress">
Completed ${completed} of ${student.activities.length}
</div>

</div>

</div>
`;

studentList.innerHTML+=html;

});

}

function toggle(index){

let content=document.getElementById("content"+index);

if(content.style.display==="block"){
content.style.display="none";
}else{
content.style.display="block";
}

}

function completeTask(studentIndex,activityIndex){

students[studentIndex].activities[activityIndex].status=true;

loadStudents();

document.getElementById("content"+studentIndex).style.display="block";

}

loadStudents();