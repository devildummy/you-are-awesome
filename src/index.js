// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {Object.defineProperty(this, propertyName, {
    enumerable: true
});
return propertyName;};


const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype,propertyName,{
        enumerable:false,
        get: function(){
            return propertyName;
        },
        set:function(value){
            propertyName=value;
        }});
        return propertyName;
};

const createProtoMagicObject = () => {
    function b(){
    }
    b.__proto__=b.prototype;
    return b;

};


const incrementor = () => {  
    if(!Function.prototype.val){
        Function.prototype.val=0;
    }
    function add(){
        Function.prototype.val++;
        return add;
    }
    add.toString=function(){
        return Function.prototype.val;
    };
    return add();
};

const asyncIncrementor = () => {
    if(!Function.prototype.valAsync){
        Function.prototype.valAsync=0;
    }
    function f(){
        return new Promise(resolve => {
        setTimeout(() => {
            resolve(++Function.prototype.valAsync);
        }, 20);
        });
    }
    return f();
};

const createIncrementer = () => {
    let obj ={
        from:0,
        next(){
            return{
            done:false,
            value: ++this.from
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
    return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(param);
        }, 1002);
        });
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    function howDeep(obj){
        for(let key in obj){
            if(typeof obj[key] == 'object'){
            count++;
            howDeep(obj[key]);
            }
        }
    }
        count+=Object.keys(obj).length;
        for(let key in obj){
        if(typeof obj[key] == 'object'){
            count++;
            howDeep(obj[key]);
        }
    }
    return count -1;
};
const createSerializedObject = () => {
    return {
        toString:function(){
            return 1;
        },
        toJSON:function(){
            return 1;
        }
    };
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    const getDeepProtoCount = (obj) => {
        let count = 0;
        function howDeep(obj){
          if(obj){
                if(typeof obj.__proto__ == 'object'){
                count++;
                howDeep(obj.__proto__);
            }
        }}
            count++;
            if(typeof obj.__proto__ == 'object'){
                count++;
                howDeep(obj.__proto__);
            }
        return count -1;
    };
    let ok = [];
    arr.forEach(function(element,i) {
      let b = getDeepProtoCount(element);
      ok.push([b,i]);
    });
    ok.sort(function(a,b){
      return a[0]-b[0];
    });
    let retArr=[];
    for(let i=0;i<arr.length;i++){
      let position = ok[i][1];
      retArr.push(arr[position]);
    }
    
    return retArr;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;