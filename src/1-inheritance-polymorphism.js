class Phone {
  constructor(reubenContact,reubenAddedMsg,peterContact,peterAddedMsg) {
    this.reubenContact = [];
    this.reubenAddedMsg = reubenAddedMsg;
    this.peterContact = [];
    this.peterAddedMsg = peterAddedMsg;
  }


}

class AppleIPhone extends Phone {
  constructor(reubenContact,reubenAddedMsg,peterContact,peterAddedMsg,makeCall) {
    super (reubenContact, peterContact);
    this.makeCall = makeCall; {

    }
  }

 

};

module.exports = {
  Phone,
  AppleIPhone,
};
