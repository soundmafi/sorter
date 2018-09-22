class Sorter {
  constructor() {
    this.array= [];
    this.defaultCompareFunction = (right, left) => right - left;
    this.compareFunction = this.defaultCompareFunction;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    if (indices.length <= this.array.length){

      indices.sort(this.defaultCompareFunction);

      var tempArray = [];
      for(var i=0; i< indices.length; i++){
        if (indices[i] < this.array.length) {
          tempArray.push(this.array[indices[i]]);
        }
      }
      tempArray.sort(this.compareFunction);

      for(var i=0; i< indices.length; i++){
        if (indices[i] < this.array.length) {
          this.array[indices[i]] = tempArray[i];
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;