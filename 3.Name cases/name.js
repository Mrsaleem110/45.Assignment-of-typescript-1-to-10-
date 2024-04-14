"use strict";
let PersonName = '';
PersonName = prompt('what is your name?') || '';
let Lowercase = PersonName.toLowerCase();
let upercase = PersonName.toUpperCase();
let titlecase = PersonName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName}, here are you name in :
    lowercase: ${Lowercase}
 upercase: ${upercase}
titlecase: ${titlecase}
`);
}
else {
    alert('please fill your name');
}
