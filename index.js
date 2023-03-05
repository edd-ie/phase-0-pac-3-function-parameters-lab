function introduction(name){
    return(`Hi, my name is ${name}.`);
}
 
function introductionWithLanguage(name, language){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

/*
Copy the function you created for the second test 
name it introductionWithLanguageOptional. 
It should have two parameters, name and language, 
the second parameter should have a default value of "JavaScript".
*/

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}