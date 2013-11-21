/**
 * Created by 23rd and Walnut
 * www.23andwalnut.com
 * User: Saleem El-Amin
 * Date: 6/8/11
 * Time: 9:39 AM
 */
 var myPlaylist =[];
function getMusicList(callback){
		var featureRelId = getUrlVars()['transferId'];
		var userSiteId =  getUrlVars()['touchId'];
		var url = baseUrl+'web/web/getMusicPlayer/'+featureRelId+'/'+userSiteId;
		var data = '';
//alert(url);
 doAjaxCall(url,data,false,function(html){  
		  if($.isEmptyObject(html)){
		 
		   $('#main-content').html('Sorry we have an Empty data');
		  }else{
		   var backGroundColor,textColor;
		   
		   
		   $.each(html,function(i,item){
					
			var	myPlayli = 	 {
									mp3:item.track_url,
									title:item.title,
									artist:item.artist,
									buy:item.Pur_url,
									cover:item.album_art_image
								};		
				// alert(myPlayli);
				 myPlaylist.push(myPlayli);
				 })
				callback();
	  }
		  
		  })	
}


	
