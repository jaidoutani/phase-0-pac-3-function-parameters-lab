function introduction(name) {
    return(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language) {
//takes in two arguments, a name and a language, and returns a phrase using those arguments:
    console.log("Aki", "Ember.js"); 
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name, language) {
//takes in two arguments, a name and a language, and language defaults to JavaScript
    console.log("Aki", language="JavaScript");
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    
}
function introductionWithLanguageOptional(name, language) {
/*takes in two arguments, a name and a language, and the default value can be overridden with an argument:
Expected 'Hi, my name is Gracie and I am learning to program in Python.'
*/
    console.log("Gracie", "Python");
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
