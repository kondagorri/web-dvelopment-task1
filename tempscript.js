window.onload = function() {
  let c = document.getElementById("celcius");
  let f = document.getElementById("fahr");
  let k = document.getElementById("kelvin");
  c.oninput = function() {
      f.value = (c.value * 9/5) + 32;
      k.value = (parseFloat (c.value )+ 273.15);
  };
  f.oninput = function() {
      c.value = (f.value - 32) * 5/9;
      k.value= (f.value - 32)* 5/9 +273.15;
  };
 K.oninput = function() {
  f.value =(k.value-273.15)*9/5 +32;
  c.value= (k.value-273.15);
};
};

      
