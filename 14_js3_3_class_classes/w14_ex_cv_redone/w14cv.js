
// this is JS3-3 week 14 // 2020 01 19   



console.log(`\nClasses\nweek 14 JS3-3 \n `)
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

                const ul_job_entry_El = document.createElement("ul");
                ul_job_entry_El.classList.add("job_entry_ul_in_ul");


                const li_job_id_El = document.createElement("li");
                li_job_id_El.textContent = `id: ${job.id}`
                ul_job_entry_El.appendChild(li_job_id_El)

                const li_job_title_El = document.createElement("li");
                li_job_title_El.textContent = `title: ${job.title}`
                ul_job_entry_El.appendChild(li_job_title_El)

                const li_job_description_El = document.createElement("li");
                li_job_description_El.textContent = `description: ${job.description}`
                ul_job_entry_El.appendChild(li_job_description_El)

                const li_job_startD_El = document.createElement("li");
                li_job_startD_El.textContent = `start date: 
                    ${new Intl.DateTimeFormat('ko-KR')
                        .format(job.startDate)}`
                ul_job_entry_El.appendChild(li_job_startD_El)

                const li_job_endD_El = document.createElement("li");
                li_job_endD_El.textContent = `end date: 
                    ${new Intl.DateTimeFormat('ko-KR')
                        .format(job.endDate)}`
                ul_job_entry_El.appendChild(li_job_endD_El)

                // append the internal ul
                ul_jobs_El.appendChild(ul_job_entry_El);

            });

        body_El.appendChild(ul_jobs_El);


        // EDUCATION

        const h2_educations_El = document.createElement("h2");
        h2_educations_El.textContent = "Education Adventures";
        body_El.appendChild(h2_educations_El);

        const ul_educations_El = document.createElement("ul");

        this.educations

            .forEach((education) => {

                const ul_edu_entry_El = document.createElement("ul");
                ul_edu_entry_El.classList.add("edu_entry_ul_in_ul");


                const li_edu_id_El = document.createElement("li");
                li_edu_id_El.textContent = `id: ${education.id}`
                ul_edu_entry_El.appendChild(li_edu_id_El)

                const li_edu_title_El = document.createElement("li");
                li_edu_title_El.textContent = `title: ${education.title}`
                ul_edu_entry_El.appendChild(li_edu_title_El)

                const li_edu_school_El = document.createElement("li");
                li_edu_school_El.textContent = `school: ${education.school}`
                ul_edu_entry_El.appendChild(li_edu_school_El)

                const li_edu_address_El = document.createElement("li");
                li_edu_address_El.textContent = `address: ${education.address}`
                ul_edu_entry_El.appendChild(li_edu_address_El)

                const li_edu_startD_El = document.createElement("li");
                li_edu_startD_El.textContent = `start date: 
                    ${new Intl.DateTimeFormat('ko-KR')
                        .format(education.startDate)}`
                ul_edu_entry_El.appendChild(li_edu_startD_El)

                const li_edu_endD_El = document.createElement("li");
                li_edu_endD_El.textContent = `end date: 
                    ${new Intl.DateTimeFormat('ko-KR')
                        .format(education.endDate)}`
                ul_edu_entry_El.appendChild(li_edu_endD_El)

                // append the internal ul
                ul_educations_El.appendChild(ul_edu_entry_El);

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
    'Polyrhytmic Magician',
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

