// const Plotly = require('plotly')
function rand() {
        return Math.random();
      }
      
Plotly.plot('graph', [{
y: [1,2,3].map(rand),
mode: 'lines',
line: {color: '#80CAF6'}
}, {
y: [1,2,3].map(rand),
mode: 'lines',
line: {color: '#DF56F1'}
}]);

var cnt = 0;

var interval = setInterval(function() {

Plotly.extendTraces('graph', {
        y: [[rand()], [rand()]]
}, [0, 1])

if(cnt === 100) clearInterval(interval);
}, 300);