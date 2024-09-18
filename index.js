// Intro
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  // Split into name / language
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  // setting for language optional 
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  