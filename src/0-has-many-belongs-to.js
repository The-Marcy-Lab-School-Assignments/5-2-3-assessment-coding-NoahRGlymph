const { getId } = require('./utils');

class ToDoItem {
  #chores = [];

  static #allChores = []
  constructor(sweep,mop,wash) {
    this.sweep = sweep;
    this.mop = mop;
    this.wash = wash;
    this.id = getId();
  }
};


class ToDoList {
  #errands = [];

  static #allerrands = []
  constructor(deliver,pickUp,dropOff) {
    this.deliver = deliver;
    this.pickUp = pickUp;
    this.dropOff = dropOff;
    this.id = getId();
  }
};

module.exports = {
  ToDoItem,
  ToDoList
};