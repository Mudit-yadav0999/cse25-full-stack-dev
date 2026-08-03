//create a promise that resolve with assignment submitted and print using then(), rejct with submission failed 
const assignment = new Promise((resolve, reject) => {
    let submitted = true;

    if (submitted) {
        resolve("Assignment submitted");
    } else {
        reject("Submission failed");
    }
});

assignment
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });