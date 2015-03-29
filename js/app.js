$(function () {
	var start = 0;                                                   // It is main counter.
	var id = 0;                                                      // It is counter of digit in number.
	$('#count').append('<div class="smallBox" id="digit0"></div>');
	$('#digit0').text(start);

    setTimeout(function tik(){ 
			start++;
			var reg = /^10+$/;
			if (reg.test(start)) {                                  // Here we check match with numbers like: 10, 100, 1000 etc.
				id++;
			};
			if ((start%10) === 0) {                                 // Check when first digit come up to 0.
				var previousValue = 0;
				for (var i = 0; i <= id; i++) {                     // Fill in all boxes. Begin with first box at the right side.
	                    	if ($('#digit' + i +'').length === 0) {
	                    		$("#count").prepend('<div class="smallBox" id="digit'+ i +'"></div>');  // If box don't exist we create it.
	                    		previousValue = (Math.floor(start/Math.pow(10, i)))%10;
	                    		$('#digit' + i +'').text(previousValue);
	                    		
	                    		
	                    	}
	                    	else if (previousValue === 0) {
	                    		previousValue = (Math.floor(start/Math.pow(10, i)))%10;
	                    		$('#digit' + i +'').text(previousValue);                   // If box exist we fill in it.
	                    	    }
	                    	    else { 
	                    	        previousValue = (Math.floor(start/Math.pow(10, i)))%10;  // If previousValue don't equal 0 we don't change box.
	                    	    };
	                    };    
				}
				else { 
					$('#digit0').text(start%10);                    // Fill in first digit when it change 1-9.
					
			      };
		    setTimeout(tik, 100);                                   // Timeout for function tik on 100 ms.
		
		}, 100);

})