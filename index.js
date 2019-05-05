// add solution here
function theBeatlesPlay (musicians, instruments) {
var beatlesPlay = []
for (var i = 0; i < 4; i++) {
beatlesPlay.push(musicians[i] + " plays " + instruments[i])}
return beatlesPlay}

function johnLennonFacts (facts) {
  var johnLennon = []
  for (var i = 0; i < facts.length - 1; i++) {
    johnLennon.push(facts[i]+"!!!")
  }
  return johnLennon
}
