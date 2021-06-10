function receivesAFunction (cb) {
    console.log(cb());
  }
  
receivesAFunction(function () { return "Hello!"});

function returnsANamedFunction() {
    function liftWeights() {console.log('whats up')};
    return liftWeights;
} 

function returnsAnAnonymousFunction() {
    return (function() {
        return ('hello')
    })
}