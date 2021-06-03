pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract covidVaccineRegister {

  // define the struct VaccineRecord
  struct VaccinationRecord {
    string name;
    string surname;
    string vaccinationDate;
    string vaccineName;
    string vaccinationPlace;
    address added_by;

  }

  // define the array of users
  VaccinationRecord[] public vaccinationRecords;

  function createVaccinationRecord (string calldata _name, string calldata _surname,string calldata _vaccinationDate,string calldata _vaccineName,string calldata _vaccinationPlace) external returns(uint){
    // get an instance of a VaccineRecord using the input variables and push into the array of vaccineRecords, returns the id
    uint id = vaccinationRecords.push(VaccinationRecord(_name, _surname,_vaccinationDate,_vaccineName,_vaccinationPlace, msg.sender)) - 1;
    
    // return the user id
    return id;
  }

  function getNumberOfVaccinations() external view returns(uint) {
    // return the length of the vaccineRecords array
    return vaccinationRecords.length;
  }

 function getVaccinationRecord(uint id ) external view returns(VaccinationRecord memory) {
    uint lg = vaccinationRecords.length;
    if (id >= 0 && id < lg){ 
       return vaccinationRecords[id]; 
    }
   revert("Invalid index!");
  }
}