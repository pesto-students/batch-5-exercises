/**
 * @name getFormvalue
 * @description get value of first name and last name
 * @author (Mohd hassaan)
 * @date 2019-02-26
 */
function getFormvalue() {
    event.preventDefault();
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;
    console.log(firstName);
    console.log(lastName);
}

document.addEventListener("submit", getFormvalue);

