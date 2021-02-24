
// this is JS3-3 week 14 // 2020 01 19   
// preparation links: 
// https://javascript.info/class 
// https://flaviocopes.com/javascript-classes/


console.log(`\nClasses\nweek 14 JS3-3 \n `)

// constructor is a function, class has a keyword: class :>  
// the constructor is called when the class is instantiated


// 
console.log(`\nclass Comment\n `)

class Comment {
    constructor(comment, date) {
        this.comment = comment
        this.date = date
        console.log(comment, date)
    }
    outputComment() {
        console.log(this.comment)
    }
}

// instantiate the class 
const comment = new Comment('This is my comment', new Date)
const anotherComment = new Comment('This is another comment', new Date)

comment.outputComment()


// 
console.log(`\nclass Post\n `)

class Post {
    // setup
    constructor(username, content, postTime, likes, comments, shares) {
        this.username = username;
        this.content = content;
        this.postTime = postTime;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }

    addLike(username, time) {
        const like = {
            username: username,
            time: time
        };

        this.likes.push(like);
    }

    addComment(username, content, time) {
        this.comments.push(new Comment(username, content, time));
    }

    doShare() {

    }

    save() {

    }

    logThis() {
        console.log(this.username);
    }
}

const post1 = new Post('benna100', 'asd', '10/02/1019', [], [], []);
const post2 = new Post('habsdhjd', 'asdajhdb', '10/02/1019', [], [], []);

post1.addLike('bennaasdasd', '14:07');
console.log(post1.likes);

post1.addComment('ugg', 'Great post', '14:16');
console.log(post1.comments);

post1.logThis();
post2.logThis();



// 
console.log(`\nclass User_00\n `)

class User_000 {

    constructor(username, email) {
        this.username = username
        this.email = email
    }
    isValid001() { // this is the way, NOT the example below :)
        if (this.username.length < 5) { return false }
        return true
    }
}

// instead the below, do it on the class as above :)
function isUserValid001(username) {
    if (username.length < 5) { return false }
    return true
}

// instantiate the class 
const user001 = new User_000('m01', 'bla_bla@bla.dk')
const user002 = new User_000('m02', 'bla_bla@bla.dk')
const user003 = new User_000('m03', 'bla_bla@bla.dk')

const users_000 = [user001, user002, user003]

// instead of this
if (!isUserValid001('mads')) { console.log('error!!!') }
// we can do this 
if (!user001.isValid001()) { console.log('class error!!!') }









// 
console.log(`\nex. 1: \nclass User\n `)

// Create a user class 
// The class should have 2 properties: firstName and lastName. 
// Hint: Use this and constructor.
// Create an instance of the class 
// Use the new keyword and assign the instance in a variable.
// Try to log out the instance of the User to the console. 
// Try to log out the users firstName 


class User {

    constructor(username, email) {
        this.username = username
        this.email = email
    }

    isValid() {
        if (this.username.length < 5) {
            return false
        }
        return true
    }

    fetchUserData() {
        const url = 'my_url'
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.handleUserData(result)
            })
    }

    handleUserData(result) {
        this.result = result
    }

    render() {
        // render in <p>
        const user = document.createElement('P')
        user.textContent = `username: ${this.username}`
        return user
    }
}

const user = new User('mads', 'my_mail@mads.dk')
const user2 = new User('mads2', 'my_mail@mads.dk')
const user3 = new User('mads3', 'my_mail@mads.dk')

const users = [user, user2, user3]
// console.log(users)

// render
const rootElm = document.getElementById('root')
rootElm.appendChild(user.render())

function isUserValid(username) {
    if (username.length < 5) { return false }
    return true
}

// instead of this
if (!isUserValid('mads')) { console.log('error!') }
// we can do this
if (!user.isValid()) { console.log('class error!') }






console.log(`\nex. 2: \nclass CV\n `)

// Creating a CV class 
// there are 3 version - view one at a time !!!  

// The CV that we will be making uses three classes: Job, Education and CV. 
// The CV class we have made for you (with some missing functionality). 
// The Job and Education classes you need to create.

// Part 1:  done
// Create the classes Job and Education.
// Job has five properties: id, title, description, startDate and endDate 
// (the dates can be strings or actual Date objects).
// Education has six properties: id, title, school, address, startDate and endDate.

// Part 2:  done
// Now add the functionality for the methods in the CV class.
// Remember: jobs and educations are just arrays of class instances. 
// So use your array manipulation knowledge for the add and remove methods.

// Part 3:  done
// Create a new CV instance using the new keyword, and save it in a variable called myCV.
// Apply the methods you have created on the myCV object. 
// Create a few Job and Education objects and add them to your CV.
// Remove a job and an education from myCV.
// Log myCV to the console, again, 
// and check that the objects were removed correctly.

// Part 4:  done
// Add a method to the CV class called renderCV(). 
// This method should render out the CV using HTML. 
// Use document.getElementById("<id>") and document.createElement("<element>"), 
// as well as element.appendChild(<element>) to build your HTML using JavaScript.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
// but I prefer my own formatting... :) (or Korean)



// version 3: 

class Job {

    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
}
class Education {

    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
}


class CV {

    constructor(email) {
        this.email = email;
        this.jobs = [];
        this.educations = [];
    }

    // methods:

    addJob(job) {
        this.jobs
            .push(job);
    }

    removeJob(job) {
        this.jobs = this.jobs
            .filter((currentjob) => currentjob.id !== job.id);
        // or * (see at the v bottom)

    }

    addEducation(education) {
        this.educations
            .push(education);
    }

    removeEducation(education) {
        this.educations = this.educations
            .filter((currentEducation) => currentEducation.id !== education.id);
        // or ** (see at the v bottom)

    }


    renderCV() {

        // grab the body Element 
        const body_El = document.querySelector("body");

        // --> create; define/grab_content; appendChild --> done

        // JOBS 

        const p_El = document.createElement("p");
        p_El.textContent = `${this.email}`;
        body_El.appendChild(p_El);

        const h2_jobs_El = document.createElement("h2");
        h2_jobs_El.textContent = "Job Adventures";
        body_El.appendChild(h2_jobs_El);

        const ul_jobs_El = document.createElement("ul");
        this.jobs
            .forEach((job) => {
                const li_El = document.createElement("li");
                li_El.classList.add("list-item");
                li_El.innerHTML =
                    `id: ${job.id},
                     title: ${job.title}, 
                     description: ${job.description}, 
                     start date: ${new Intl.DateTimeFormat('ko-KR')
                        .format(job.startDate)} -  
                     end date: ${new Intl.DateTimeFormat('ko-KR')
                        .format(job.endDate)}`;
                ul_jobs_El.appendChild(li_El);
            });
        body_El.appendChild(ul_jobs_El);


        // EDUCATION

        const h2_educations_El = document.createElement("h2");
        h2_educations_El.textContent = "Education Adventures";
        body_El.appendChild(h2_educations_El);

        const ul_educations_El = document.createElement("ul");
        this.educations
            .forEach((education) => {
                const li_El = document.createElement("li");
                li_El.classList.add("list-item");
                li_El.textContent =
                    `id: ${education.id}, 
                     title: ${education.title}, 
                     school: ${education.school}, 
                     address: ${education.address}, 
                     start date: ${new Intl.DateTimeFormat('ko-KR')
                        .format(education.startDate)} -
                     end date: ${new Intl.DateTimeFormat('ko-KR')
                        .format(education.endDate)}`;
                ul_educations_El.appendChild(li_El);
            });
        body_El.appendChild(ul_educations_El);

    }

}



// email instance

const myCV = new CV("squirrel@forest.dk");


// job instances

const fullstackWitch = new Job(
    '666',
    'fullstack Witch',
    'fullstack witchcraft maker',
    '1993, 05, 08',
    '2025, 05, 07'
);
// console.log(fullstackWitch);
myCV.addJob(fullstackWitch);

const squirrelBabySitter = new Job(
    '235',
    'Squirrel Babysitter',
    'providing warmth for baby squirrels',
    '2019, 10, 03',
    '2020, 05, 02'
);
// console.log(squirrelBabySitter);
myCV.addJob(squirrelBabySitter);

const polyrhytmicMagician = new Job(
    '3434',
    'Polyrhitmic Magician',
    'counting to 3 and 4 simultaneously',
    '1980, 06, 16',
    '2021, 01, 06'
);
// console.log(polyrhytmicMagician);
myCV.addJob(polyrhytmicMagician);

const metalManipulator = new Job(
    '925',
    'Precious Metal Manipulator',
    'melting, soldering and making metals look cool',
    '2007, 09, 06',
    '2021, 01, 06'
);
// console.log(metalManipulator);
myCV.addJob(metalManipulator);

const photoManipulator = new Job(
    'C-41/131',
    'Images Manipulator',
    'developing (C-41, 131) and colour manipulating ',
    '2007, 09, 08',
    '2017, 11, 01'
);
// console.log(photoManipulator);
myCV.addJob(photoManipulator);

const toBeDeletedJob = new Job(
    '1!!1',
    'bad job',
    'nothing special',
    '2005, 09, 08',
    '2005, 09, 08'
);
// console.log(toBeDeletedJob);
myCV.addJob(toBeDeletedJob);

// removing toBeDeleted
// console.log(myCV.jobs.map((job) => `${job.title}: ${job.description}`));
myCV.removeJob(toBeDeletedJob);
// console.log(myCV.jobs.map((job) => `${job.title}: ${job.description}`));
// worked 



// education instances

const musicSchoolPupil = new Education(
    '001',
    'Music School Pupil',
    'Music School / piano class',
    'Rhythm St',
    '2007, 09, 06',
    '2021, 01, 06'
);
// console.log(musicSchoolPupil);
myCV.addEducation(musicSchoolPupil);

const secondarySchoolAdventures = new Education(
    '002',
    'Comprehensive Education Absorber',
    'Maria Curie-Sklodowska School / Poland',
    'Hell St',
    '1995, 09, 01',
    '1999, 05, 10'
);
// console.log(secondarySchoolAdventures);
myCV.addEducation(secondarySchoolAdventures);

const universityHell = new Education(
    '003',
    'English Sound Perfection Student',
    'Gdansk University / Poland',
    'Bazynskiego St',
    '1999, 09, 01',
    '2005, 09, 07'
);
// console.log(universityHell);
myCV.addEducation(universityHell);

const toBeDeletedEdu = new Job(
    '1!!1',
    'bad education',
    'nothing special',
    '2005, 09, 08',
    '2005, 09, 08'
);
// console.log(toBeDeletedEdu);
myCV.addEducation(toBeDeletedEdu);

// removing secondarySchoolAdventures
// console.log(myCV.educations.map((education) => `${education.title}: ${education.school}`));
myCV.removeEducation(toBeDeletedEdu);
// console.log(myCV.jobs.map((job) => `${job.title}: ${job.description}`));
// worked



// render everything !

myCV.renderCV();





















// // version 1 (works but keep commented out)

// class Job {

//     constructor(id, title, description, startDate, endDate) {
//         this.id = id
//         this.title = title
//         this.description = description
//         this.startDate = startDate
//         this.endDate = endDate
//     }
// }

// class Education {

//     constructor(id, title, school, address, startDate, endDate) {
//         this.id = id
//         this.title = title
//         this.school = school
//         this.address = address
//         this.startDate = startDate
//         this.endDate = endDate
//     }
// }

// class CV {

//     constructor(jobs, educations, email) {
//         // write code here
//         this.jobs = jobs
//         this.educations = educations
//         this.email = email
//     }

//     addJob(job) {
//         // add functionality here
//         this.jobs.push(job)
//     }

//     removeJob(job) {
//         // add functionality here
//         const newArray = this.jobs.filter((item) => {
//             return item.id !== job.id // !!!
//         })
//         // override the array to actually remove the item !
//         this.jobs = newArray
//     }

//     addEducation(education) {
//         // add functionality here

//         // same
//     }

//     removeEducation(education) {
//         // add functionality here

//         // same
//     }

//     renderCV() {
//         let listOfJobs = ''
//         this.jobs.forEach(job => {
//             listOfJobs += `Job: ${job.title}`
//         })

//         const p = document.createElement('P')
//         p.textContent = listOfJobs

//         return p
//     }
// }

// // old version of v 1
// // const myCV = new CV ([], [], 'myemail@mads.dk')
// // current version  of v 1
// const jobsArr = []
// const educationArr = []
// const email = 'myemail@mads.dk'
// const myCV = new CV(jobsArr, educationArr, email)

// // an instance: 
// const myJob = new Job('123', 'my title', 'my description', new Date(), new Date())

// myCV.addJob(myJob)
// console.log(myCV.jobs)
// myCV.removeJob(myJob)
// myCV.addJob(myJob)
// myCV.addJob(myJob)
// console.log(myCV.jobs)
// const root = document.getElementById('root')
// root.appendChild(myCV.renderCV())





// // version 2 (no rendering)

// class Job {
//     constructor(id, title, description, startDate, endDate) {

//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
// }

// class Education {

//     constructor(id, title, school, address, startDate, endDate) {
//         this.id = id;
//         this.title = title;
//         this.school = school;
//         this.address = address;
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
// }

// class CV {

//     constructor(email) {
//         this.jobs = [];
//         this.educations = [];
//         this.email = email;
//     }

//     // methods:
//     addJob(job) {
//         // add functionality here
//         this.jobs.push(job);
//     }
//     removeJob(job) {
//         // add functionality here
//         this.jobs = this.jobs.filter((currentjob) => currentjob.id !== job.id);
//     }
//     addEducation(education) {
//         // add functionality here
//         this.educations.push(education);
//     }
//     removeEducation(education) {
//         // add functionality here
//         this.educations = this.educations.filter(
//             (curentEdu) => curentEdu.id !== education.id
//         );
//     }
// }

// const job1 = new Job("111", "junior Software Developer", "do stuff", "2021", "---");
// const job2 = new Job("Web development", "Hack Your Fature", "Disie, Vesterbro", "11/9/2020", "15/4/2021");
// const education1 = new Education("222", "Mechanical Engineering", "MIT", "Boston", "2015", "2016");
// const myCV = new CV("aldub@dfds.com");

// myCV.addJob(job1);
// myCV.addJob(job2);
// console.log(myCV.jobs);
// myCV.removeJob(job1);
// console.log(`after removal:`);
// console.log(myCV.jobs);
// myCV.addEducation(education1);
// console.log(myCV.educations);




// Notes to v 3:

// // *
// for (let i = 0; i < this.jobs.length; i++) {
//     if (this.jobs[i] === job) {
//         this.jobs.splice(i, 1);
//     }
// }

// // **
// for (var i = 0; i < this.educations.length; i++) {
//     if (this.educations[i] === education) {
//         this.educations.splice(i, 1);
//     }
// }