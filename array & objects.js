let personalDetails = {
    Name: "Nithish",
    Age: 32,
    Gender: "Male",
    DOB: "16.03.1990",
    HighestQualification: "BCA",
    AdditionalQualification: "Diploma in 3D & Animation",
    MobileNo: 0000000000,
    Email: "abcdefg@gmail.com",
  };
  
  //for loop method
  
  for (let i = 0; i < Object.length; i++) {
    let obj = personalDetails[i];
    console.log(obj.Name);
    console.log(obj.Gender);
  }
  
  //for each method
  
  personalDetails.forEach(function (obj) {
    console.log(obj.DOB);
  });
  
  //for in method
  
  for (let key in personalDetails) {
    console.log(personalDetails[key].HighestQualification);
  }
  
  //for of method
  
  for (let key of Object.keys(personalDetails)) {
    console.log(`${key} => ${personalDetails[key]}`);
  }