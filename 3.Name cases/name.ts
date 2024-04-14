let PersonName :string='';
PersonName = prompt('what is your name?') || '' ;
let Lowercase :string=PersonName.toLowerCase ();
let upercase :string=PersonName.toUpperCase ();
let titlecase :string= PersonName.split('').map( word =>word.charAt(0).toUpperCase() + word.slice (1).toLowerCase()).join('')
if (PersonName !== null && PersonName !==''){
    alert(`Hello ${PersonName}, here are you name in :
    lowercase: ${Lowercase}
 upercase: ${upercase}
titlecase: ${titlecase}
`)
}
else{
    alert('please fill your name')
}

