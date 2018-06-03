(function(){
  var trackArr = [25,50,75,95];
  var activeArr = [];
  var elementOffset = document.querySelector('.post').offsetTop;
  var elementHeight = document.querySelector('.post').scrollHeight - document.querySelector('#disqus_thread').scrollHeight;
  document.addEventListener('scroll',function(e){
    var percent = Math.floor(((window.pageYOffset + elementOffset) / elementHeight) * 100);
    trackArr.forEach(function(value,index){
      if(percent >= value){
        if(activeArr.indexOf(value) === -1){
          ga('send', 'event', 'post_scroll', value +'%',document.querySelector('title').textContent, {
            nonInteraction: true
          })
          activeArr.push(value);
        }
      }
    })
  });
}());