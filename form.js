function isEmptyField(inputID, errorID) {
    let data = document.getElementById(inputID).value
        data=data.trim();
    if (data.length != 0) {
      document.getElementById(errorID).innerHTML = data;
      return true;
    }
    else{
      return false;
    }
  }
  function getSum(){
      let mark1=document.getElementById('m1').value;
      mark1=Number(mark1);
      let mark2=document.getElementById('m2').value;
      mark2=Number(mark2);
      let mark3=document.getElementById('m3').value;
      mark3=Number(mark3);
      let mark4=document.getElementById('m4').value;
      mark4=Number(mark4);
      let sum=mark1+mark2+mark3+mark4;
      document.getElementById('total').innerHTML = sum;
      let per=sum/4.0;
      document.getElementById('per').innerHTML = per;
      let grade;
      if(per>=80)
      {
        grade='A';
      }
      else if(per<80 && per>=60)
      {
        grade='B';
      }
      else if(per<60 && per>=35)
      {
        grade='C';
      }
      else{ 
        grade='Fail';
      }
      document.getElementById('grade').innerHTML =grade;
      return mark1+mark2+mark3+mark4;
  }
  
  function Display() {
  
  let flag1 = isEmptyField('name', 'name1');
  let flag2 = isEmptyField('fname', 'fname1');
  let flag3 = isEmptyField('iname', 'Iname1');
  let flag4 = isEmptyField('batch', 'batch1');
  let flag5 = isEmptyField('m1', 'oa');
  let flag6 = isEmptyField('m2', 'wd');
  let flag7 = isEmptyField('m3', 'it');
  let flag8 = isEmptyField('m4', 'c');
  let sum=getSum();
  
  if (flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8) 
  {
  return true;
  }
  else {
  return false;
  }
  
  }

  