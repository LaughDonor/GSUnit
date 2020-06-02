
function add_(x, y){
  return x+y;
}

function testNumbers_(){  
 var added = add(1,'2');  
 GsUnit.assert('Not a number', typeof added == 'number');   
}



function testing_(){

  var one = 1;
  var two = '1';
  
  var obj1 = new Object();
  var obj2 = new Object();
  obj1.num = 4;
  obj2.num = 4;
  
  
  assertEquals('Fail num != string', one, two);
  assertEquals(1, '1'); //Fail No comments just error   
//  assertEquals('fail too many args', one, two, 3); 
  assertEquals('Pass ===', one, one); //Does not throw error
  assertEquals('use f', one, someN_()); //Pass 
  
  assert('This will error', false);
  assertTrue('assertTrue w/ false value', false);
  assertFalse(false);
  assertNotEquals('not = ', 2, 3);  
  assertNull(null);
  assertNotNull(null);
  assertUndefined(one);
  assertNotUndefined(GsUnit_UNDEFINED_VALUE);
  assertNaN(5);
  assertNotNaN('R');
  assertObjectEquals(obj1, obj2);
  assertArrayEquals([1,2], [2,2]);
  assertEvaluatesToTrue('');
  assertEvaluatesToFalse('test');
  assertHashEquals(obj1, obj2);
  assertRoughlyEquals(2,5,4);
  assertContains('World', 'Hi World');
  assertArrayEqualsIgnoringOrder([1,2,3], [1,3,2]);
  
  
}  

function someN_(){  
 return 1; 
}

function valueOutOfRange_(){
 for (var i=1; i<4; i++)
   assertEquals('Is not 1', someN_(), i);  
   //Comment: Is not 1 -- Failure: Expected <1> (Number) but was <2> (Number)
}
