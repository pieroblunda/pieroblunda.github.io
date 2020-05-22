function run() {
  var birth = new Date('1988-09-02');
  var curr  = new Date();
  var diff = curr.getTime() - birth.getTime();
  var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  console.log(age);
  document.getElementById('piero-age').innerText = age;
};

run();
