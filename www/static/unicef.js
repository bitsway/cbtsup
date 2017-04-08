
var imageNameA = "";
var imageNameB = "";

var imagePathA="";
var imagePathB="";

var achPhoto1="";
var achPhoto2="";

var latitude="";
var longitude="";

function getLocationInfoAch() {	
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess(position) {
	$("#ach_lat").val(position.coords.latitude);
	$("#ach_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError(error) {
   $("#ach_lat").val(0);
   $("#ach_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

/********************************************************************/
//---- online 
var apipath="http://a007.yeapps.com/cbt/syncmobile/";

//--- local
//var apipath="http://127.0.0.1:8000/cbt/syncmobile/";
/********************************************************************/

 url ="";
$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
		}else{			
			url = "#homePage";
		}
	$.mobile.navigate(url);
});

function syncBasic() {
					
		var mobile=$("#mobile").val() ;
	 	var password=$("#password").val() ;
		
		if (mobile=="" || password==""){
			 $(".errorMsg").html("Required mobile no and password");	
		 }else{	
			 $('#syncBasic').hide();			 
			 $(".errorMsg").html("Sync in progress. Please wait...");
			if(localStorage.sync_code==undefined || localStorage.sync_code==""){
					localStorage.sync_code=0
				}
		
		 	//alert(apipath+'passwordCheck?cid=UNICEF&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
			$.ajax({
			  url:apipath+'passwordCheck?cid=UNICEF&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
			  success: function(result) {
				syncResult=result
				var syncResultArray = syncResult.split('rdrd');
					localStorage.synced=syncResultArray[0];
					if (localStorage.synced=='YES'){	
						localStorage.sync_code=syncResultArray[1];
						localStorage.ffID=syncResultArray[2];							
						localStorage.mobile_no=mobile;
						
						$(".errorMsg").html("সফল ভাবে প্রবেশ করেছেন ।");	
																	
						$('#syncBasic').show();
						$("#suncTime").text(localStorage.syncTime);
						$("#mobile").val(localStorage.mobile_no) ;
						$("#password").val(localStorage.password) ;
			
						url = "#homePage";
						$.mobile.navigate(url);

					}else{
						
						$(".errorMsg").html("প্রবেশ করতে ব্যর্থ হয়েছেন নেটওয়ার্ক সমস্যা ।");
						$('#syncBasic').show();
					}
				
			  }//----/success f
			});//------/ajax
			
		 }//-----/field
			
	}
	

function menuClick(){
		$(".errorChk").text("");
		$(".sucChk").text("");
		
		$("#btn_take_pic").show();
		$("#btn_ach_lat_long").show();
				
		url = "#homePage";
		$.mobile.navigate(url);
	
	}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	}


	
//---------------------------Banbeis data page 
var unicefData1="";
var unicefData2="";
var unicefData3="";
var unicefData4="";
var unicefData5="";
var unicefData6="";
var unicefData7="";
var unicefData8="";

function supportiveSupervision(){
				
	url="#page1";					
	$.mobile.navigate(url);		
}

function secondPage(){		
		var healthCenterName=$("#healthCenterName").val();
		var office=$("#office").val();
		var helathWorkerName=$("#helathWorkerName").val();
		var helathWorkerDeg=$("#helathWorkerDeg").val();
		var healthWorkerPhoneNo=$("#healthWorkerPhoneNo").val();
		var unionWord=$("#unionWord").val();
		var upzilaZone=$("#upzilaZone").val();
		var districtCityCor=$("#districtCityCor").val();
		var supName=$("#supName").val();
		var supWorkGround=$("#supWorkGround").val();
		var supType=$("#supType").val();
		var supDeg=$("#supDeg").val();
		var supPhoneNo=$("#supPhoneNo").val();
		var visitDate=$("#visitDate").val();
				
		if (healthCenterName==""){
			$(".errorChk").text("Required ");
		}else if (office==""){
			$(".errorChk").text("Required ");	
		}else if (helathWorkerName=="" ){
			$(".errorChk").text("Required ");	
		}else if (helathWorkerDeg==""){
			$(".errorChk").text("Required ");	
		}else if (healthWorkerPhoneNo==""){
			$(".errorChk").text("Required ");
		}else if (unionWord==""){
			$(".errorChk").text("Required ");
		}else if (upzilaZone==""){
			$(".errorChk").text("Required ");
		}else if (districtCityCor==""){
			$(".errorChk").text("Required ");	
		}else if (supName==""){
			$(".errorChk").text("Required ");	
		}else if (supWorkGround==""){
			$(".errorChk").text("Required ");	
		}else if (supType==""){
			$(".errorChk").text("Required ");	
		}else if (supDeg==""){
			$(".errorChk").text("Required ");	
		}else if (supPhoneNo==""){
			$(".errorChk").text("Required ");		
		}else if (visitDate==""){
			$(".errorChk").text("Required ");
		}else{
			
			unicefData1="&healthCenterName="+healthCenterName+"&office="+office+"&helathWorkerName="+helathWorkerName+"&helathWorkerDeg="+helathWorkerDeg+"&healthWorkerPhoneNo="+healthWorkerPhoneNo+"&unionWord="+unionWord+"&upzilaZone="+upzilaZone+"&districtCityCor="+districtCityCor+"&supName="+supName+"&supWorkGround="+supWorkGround+"&supType="+supType+"&supDeg="+supDeg+"&supPhoneNo="+supPhoneNo+"&visitDate="+visitDate;
		
		//alert(unicefData1);
		
		}
		$(".errorChk").text("");
		url="#page2";					
		$.mobile.navigate(url);	
	
	}

//===================		
function thirdPage(){
	//দক্ষতা ১
	var A3S1_Q1=$("#A3S1_Q1").val();
	//var A3S1_Q1=$("input[name='A3S1_Q1']:checked").val();
	//দক্ষতা ২
	var A3S2_Q1=$("#A3S2_Q1").val();
	var A3S2_Q2=$("#A3S2_Q2").val();
	var A3S2_Q3=$("#A3S2_Q3").val();
	var A3S2_Q4=$("#A3S2_Q4").val();
	var A3S2_Q5=$("#A3S2_Q5").val();
	var A3S2_Q6=$("#A3S2_Q6").val();
	var A3S2_Q7=$("#A3S2_Q7").val();
	//দক্ষতা ৩
	var A3S3_Q1=$("#A3S3_Q1").val();
	var A3S3_Q2=$("#A3S3_Q2").val();
	var A3S3_Q3=$("#A3S3_Q3").val();
	//দক্ষতা ৪
	var A3S4_Q1=$("#A3S4_Q1").val();
	var A3S4_Q2=$("#A3S4_Q2").val();
	var A3S4_Q3=$("#A3S4_Q3").val();
	var A3S4_Q4=$("#A3S4_Q4").val();
	var A3S4_Q5=$("#A3S4_Q5").val();
	var A3S4_Q6=$("#A3S4_Q6").val();
	
	unicefData2="&A3S1_Q1="+A3S1_Q1+"&A3S2_Q1="+A3S2_Q1+"&A3S2_Q2="+A3S2_Q2+"&A3S2_Q3="+A3S2_Q3+"&A3S2_Q4="+A3S2_Q4+"&A3S2_Q5="+A3S2_Q5+"&A3S2_Q6="+A3S2_Q6+"&A3S2_Q7="+A3S2_Q7+"&A3S3_Q1="+A3S3_Q1+"&A3S3_Q2="+A3S3_Q2+"&A3S3_Q3="+A3S3_Q3+"&A3S4_Q1="+A3S4_Q1+"&A3S4_Q2="+A3S4_Q2+"&A3S4_Q3="+A3S4_Q3+"&A3S4_Q4="+A3S4_Q4+"&A3S4_Q5="+A3S4_Q5+"&A3S4_Q6="+A3S4_Q6;
		
	//alert(unicefData2);
							
	url="#page3"
	$.mobile.navigate(url);	
				
	};	
	
function fourPage(){
	//দক্ষতা ৫
	var A3S5_Q1=$("#A3S5_Q1").val();
	var A3S5_Q2=$("#A3S5_Q2").val();
	var A3S5_Q3=$("#A3S5_Q3").val();
	var A3S5_Q4=$("#A3S5_Q4").val();
	//দক্ষতা ৬
	var A3S6_Q1=$("#A3S6_Q1").val();
	var A3S6_Q2=$("#A3S6_Q2").val();
	var A3S6_Q3=$("#A3S6_Q3").val();
	var A3S6_Q4=$("#A3S6_Q4").val();
	//সাপোর্টিভ সুপারভিশন পদ্ধতি ৩ খ: GMP বিষয়ে সাপোর্টিভ সুপারভিশন/মেনটরিং চেকলিস্ট
	//দক্ষতা ১
	var B3S1_Q1=$("#B3S1_Q1").val();
	//দক্ষতা ২
	var B3S2_Q1=$("#B3S2_Q1").val();
	var B3S2_Q2=$("#B3S2_Q2").val();		
	var B3S2_Q3=$("#B3S2_Q3").val();
	var B3S2_Q4=$("#B3S2_Q4").val();
	var B3S2_Q5=$("#B3S2_Q5").val();
	var B3S2_Q6=$("#B3S2_Q6").val();
	var B3S2_Q7=$("#B3S2_Q7").val();
	var B3S2_Q8=$("#B3S2_Q8").val();
	var B3S2_Q9=$("#B3S2_Q9").val();
	var B3S2_Q10=$("#B3S2_Q10").val();
	var B3S2_Q11=$("#B3S2_Q11").val();
	var B3S2_Q12=$("#B3S2_Q12").val();
	var B3S2_Q13=$("#B3S2_Q13").val();
	var B3S2_Q14=$("#B3S2_Q14").val();
	var B3S2_Q15=$("#B3S2_Q15").val();
	var B3S2_Q16=$("#B3S2_Q16").val();
	var B3S2_Q17=$("#B3S2_Q17").val();
	var B3S2_Q18=$("#B3S2_Q18").val();
	var B3S2_Q19=$("#B3S2_Q19").val();
	var B3S2_Q20=$("#B3S2_Q20").val();
	
	unicefData3="&A3S5_Q1="+A3S5_Q1+"&A3S5_Q2="+A3S5_Q2+"&A3S5_Q3="+A3S5_Q3+"&A3S5_Q4="+A3S5_Q4+"&A3S6_Q1="+A3S6_Q1+"&A3S6_Q2="+A3S6_Q2+"&A3S6_Q3="+A3S6_Q3+"&A3S6_Q4="+A3S6_Q4+"&B3S1_Q1="+B3S1_Q1+"&B3S2_Q1="+B3S2_Q1+"&B3S2_Q2="+B3S2_Q2+"&B3S2_Q3="+B3S2_Q3+"&B3S2_Q4="+B3S2_Q4+"&B3S2_Q5="+B3S2_Q5+"&B3S2_Q6="+B3S2_Q6+"&B3S2_Q7="+B3S2_Q7+"&B3S2_Q8="+B3S2_Q8+"&B3S2_Q9="+B3S2_Q9+"&B3S2_Q10="+B3S2_Q10+"&B3S2_Q11="+B3S2_Q11+"&B3S2_Q12="+B3S2_Q12+"&B3S2_Q13="+B3S2_Q13+"&B3S2_Q14="+B3S2_Q14+"&B3S2_Q15="+B3S2_Q15+"&B3S2_Q16="+B3S2_Q16+"&B3S2_Q17="+B3S2_Q17+"&B3S2_Q18="+B3S2_Q18+"&B3S2_Q19="+B3S2_Q19+"&B3S2_Q20="+B3S2_Q20;
	
	//alert(unicefData3);
						
	url="#page4"
	$.mobile.navigate(url);	
				
	};
	
function fivePage(){
	var B3S2_Q21=$("#B3S2_Q21").val();
	var B3S2_Q22=$("#B3S2_Q22").val();
	var B3S2_Q23=$("#B3S2_Q23").val();
	var B3S2_Q24=$("#B3S2_Q24").val();
	var B3S2_Q25=$("#B3S2_Q25").val();
	var B3S2_Q26=$("#B3S2_Q26").val();
	var B3S2_Q27=$("#B3S2_Q27").val();
	var B3S2_Q28=$("#B3S2_Q28").val();
	var B3S2_Q29=$("#B3S2_Q29").val();
	var B3S2_Q30=$("#B3S2_Q30").val();
	var B3S2_Q31=$("#B3S2_Q31").val();
	var B3S2_Q32=$("#B3S2_Q32").val();
	var B3S2_Q33=$("#B3S2_Q33").val();
	var B3S2_Q34=$("#B3S2_Q34").val();
	var B3S2_Q35=$("#B3S2_Q35").val();
	var B3S2_Q36=$("#B3S2_Q36").val();
	var B3S2_Q37=$("#B3S2_Q37").val();
	var B3S2_Q38=$("#B3S2_Q38").val();
	var B3S2_Q39=$("#B3S2_Q39").val();
	var B3S2_Q40=$("#B3S2_Q40").val();
	var B3S2_Q41=$("#B3S2_Q41").val();
	var B3S2_Q42=$("#B3S2_Q42").val();
	var B3S2_Q43=$("#B3S2_Q43").val();
	var B3S2_Q44=$("#B3S2_Q44").val();
	var B3S2_Q45=$("#B3S2_Q45").val();
	var B3S2_Q46=$("#B3S2_Q46").val();
	var B3S2_Q47=$("#B3S2_Q47").val();
	var B3S2_Q48=$("#B3S2_Q48").val();
	var B3S2_Q49=$("#B3S2_Q49").val();
	
	unicefData4="&B3S2_Q21="+B3S2_Q21+"&B3S2_Q22="+B3S2_Q22+"&B3S2_Q23="+B3S2_Q23+"&B3S2_Q24="+B3S2_Q24+"&B3S2_Q25="+B3S2_Q25+"&B3S2_Q26="+B3S2_Q26+"&B3S2_Q27="+B3S2_Q27+"&B3S2_Q28="+B3S2_Q28+"&B3S2_Q29="+B3S2_Q29+"&B3S2_Q30="+B3S2_Q30+"&B3S2_Q31="+B3S2_Q31+"&B3S2_Q32="+B3S2_Q32+"&B3S2_Q33="+B3S2_Q33+"&B3S2_Q34="+B3S2_Q34+"&B3S2_Q35="+B3S2_Q35+"&B3S2_Q36="+B3S2_Q36+"&B3S2_Q37="+B3S2_Q37+"&B3S2_Q38="+B3S2_Q38+"&B3S2_Q39="+B3S2_Q39+"&B3S2_Q40="+B3S2_Q40+"&B3S2_Q41="+B3S2_Q41+"&B3S2_Q42="+B3S2_Q42+"&B3S2_Q43="+B3S2_Q43+"&B3S2_Q44="+B3S2_Q44+"&B3S2_Q45="+B3S2_Q45+"&B3S2_Q46="+B3S2_Q46+"&B3S2_Q47="+B3S2_Q47+"&B3S2_Q48="+B3S2_Q48+"&B3S2_Q49="+B3S2_Q49;
	
	//alert(unicefData4);
							
	url="#page5"
	$.mobile.navigate(url);	
				
	};	
	
function sixPage(){
	//মুয়াক পরিমাপ: মুয়াক পরিমাপ করেছেন কিনা
	var B3S2_Q50=$("#B3S2_Q50").val();
	var B3S2_Q51=$("#B3S2_Q51").val();
	var B3S2_Q52=$("#B3S2_Q52").val();
	var B3S2_Q53=$("#B3S2_Q53").val();
	var B3S2_Q54=$("#B3S2_Q54").val();
	var B3S2_Q55=$("#B3S2_Q55").val();
	var B3S2_Q56=$("#B3S2_Q56").val();
	var B3S2_Q57=$("#B3S2_Q57").val();
	var B3S2_Q58=$("#B3S2_Q58").val();
	var B3S2_Q59=$("#B3S2_Q59").val();
	var B3S2_Q60=$("#B3S2_Q60").val();
	var B3S2_Q61=$("#B3S2_Q61").val();
	var B3S2_Q59=$("#B3S2_Q59").val();
	var B3S2_Q62=$("#B3S2_Q62").val();
	//দক্ষতা ৩
	var B3S3_Q1=$("#B3S3_Q1").val();
	var B3S3_Q2=$("#B3S3_Q2").val();
	var B3S3_Q3=$("#B3S3_Q3").val();
	var B3S3_Q4=$("#B3S3_Q4").val();
	var B3S3_Q5=$("#B3S3_Q5").val();
	var B3S3_Q6=$("#B3S3_Q6").val();
	var B3S3_Q7=$("#B3S3_Q7").val();
	var B3S3_Q8=$("#B3S3_Q8").val();
	var B3S3_Q9=$("#B3S3_Q9").val();
	//দক্ষতা ৪
	var B3S4_Q1=$("#B3S4_Q1").val();
	var B3S4_Q2=$("#B3S4_Q2").val();
	var B3S4_Q3=$("#B3S4_Q3").val();
	var B3S4_Q4=$("#B3S4_Q4").val();
	var B3S4_Q5=$("#B3S4_Q5").val();
	var B3S4_Q6=$("#B3S4_Q6").val();
	
	unicefData5="&B3S2_Q50="+B3S2_Q50+"&B3S2_Q51="+B3S2_Q51+"&B3S2_Q52="+B3S2_Q52+"&B3S2_Q53="+B3S2_Q53+"&B3S2_Q54="+B3S2_Q54+"&B3S2_Q55="+B3S2_Q55+"&B3S2_Q56="+B3S2_Q56+"&B3S2_Q57="+B3S2_Q57+"&B3S2_Q58="+B3S2_Q58+"&B3S2_Q59="+B3S2_Q59+"&B3S2_Q60="+B3S2_Q60+"&B3S2_Q61="+B3S2_Q61+"&B3S2_Q62="+B3S2_Q62+"&B3S3_Q1="+B3S3_Q1+"&B3S3_Q2="+B3S3_Q2+"&B3S3_Q3="+B3S3_Q3+"&B3S3_Q4="+B3S3_Q4+"&B3S3_Q5="+B3S3_Q5+"&B3S3_Q6="+B3S3_Q6+"&B3S3_Q7="+B3S3_Q7+"&B3S3_Q8="+B3S3_Q8+"&B3S3_Q9="+B3S3_Q9+"&B3S4_Q1="+B3S4_Q1+"&B3S4_Q2="+B3S4_Q2+"&B3S4_Q3="+B3S4_Q3+"&B3S4_Q4="+B3S4_Q4+"&B3S4_Q5="+B3S4_Q5+"&B3S4_Q6="+B3S4_Q6;
	
	//alert(unicefData5);
						
	url="#page6"
	$.mobile.navigate(url);	
				
	};	
	
function sevenPage(){
	//দক্ষতা ৫: উপাদান সমূহের যথাযথ ব্যবহার
	var B3S5_Q1=$("#B3S5_Q1").val();
	var B3S5_Q2=$("#B3S5_Q2").val();
	var B3S5_Q3=$("#B3S5_Q3").val();
	var B3S5_Q4=$("#B3S5_Q4").val();
	//দক্ষতা ৬	
	var B3S6_Q1=$("#B3S6_Q1").val();
	var B3S6_Q2=$("#B3S6_Q2").val();
	var B3S6_Q3=$("#B3S6_Q3").val();
	//সাপোর্টিভ সুপারভিশন পদ্ধতি ৬ ক: কিশোরী ও মহিলাদের পুষ্টি বিষয়ে সাপোর্টিভ সুপারভিশন চেকলিস্ট  
    //দক্ষতা ১
	//ক. পুষ্টির অবস্হা
	var AA6S1_Q1=$("#AA6S1_Q1").val();
	var AA6S1_Q2=$("#AA6S1_Q2").val();
	var AA6S1_Q3=$("#AA6S1_Q3").val();
	var AA6S1_Q4=$("#AA6S1_Q4").val();
	//খ. যদি কিশোরি হন 
	var BA6S1_Q1=$("#BA6S1_Q1").val();
	var BA6S1_Q2=$("#BA6S1_Q2").val();
	var BA6S1_Q3=$("#BA6S1_Q3").val();
	//গ. যদি গর্ভবতী হন 
	var CA6S1_Q1=$("#CA6S1_Q1").val();
	var CA6S1_Q2=$("#CA6S1_Q2").val();
	var CA6S1_Q3=$("#CA6S1_Q3").val();
	var CA6S1_Q4=$("#CA6S1_Q4").val();
	//ঘ. যদি শিশুকে বুকের দুধ খাওয়ান
	var DA6S1_Q1=$("#DA6S1_Q1").val();
	var DA6S1_Q2=$("#DA6S1_Q2").val();
	
	unicefData6="&B3S5_Q1="+B3S5_Q1+"&B3S5_Q2="+B3S5_Q2+"&B3S5_Q3="+B3S5_Q3+"&B3S5_Q4="+B3S5_Q4+"&B3S6_Q1="+B3S6_Q1+"&B3S6_Q2="+B3S6_Q2+"&B3S6_Q3="+B3S6_Q3+"&AA6S1_Q1="+AA6S1_Q1+"&AA6S1_Q2="+AA6S1_Q2+"&AA6S1_Q3="+AA6S1_Q3+"&AA6S1_Q4="+AA6S1_Q4+"&BA6S1_Q1="+BA6S1_Q1+"&BA6S1_Q2="+BA6S1_Q2+"&BA6S1_Q3="+BA6S1_Q3+"&CA6S1_Q1="+CA6S1_Q1+"&CA6S1_Q2="+CA6S1_Q2+"&CA6S1_Q3="+CA6S1_Q3+"&CA6S1_Q4="+CA6S1_Q4+"&DA6S1_Q1="+DA6S1_Q1+"&DA6S1_Q2="+DA6S1_Q2;
	
	//alert(unicefData6);
							
	url="#page7"
	$.mobile.navigate(url);	
				
	};	
	
function eightPage(){
	//ঙ. গতকাল কি খেয়েছেন- বিগত ২৪ ঘন্টা স্মরণ করুন : মায়ের সকালে ঘুম থেকে ওঠার সময় থেকে শুরু করে রাতে ঘুমাতে যাওয়া পর্যন্ত  
	var EA6S1_Q1=$("#EA6S1_Q1").val();
	var EA6S1_Q2=$("#EA6S1_Q2").val();		
	var EA6S1_Q3=$("#EA6S1_Q3").val();
	var EA6S1_Q4=$("#EA6S1_Q4").val();
	var EA6S1_Q5=$("#EA6S1_Q5").val();
	var EA6S1_Q6=$("#EA6S1_Q6").val();
	var EA6S1_Q7=$("#EA6S1_Q7").val();
	var EA6S1_Q8=$("#EA6S1_Q8").val();
	var EA6S1_Q9=$("#EA6S1_Q9").val();
	var EA6S1_Q10=$("#EA6S1_Q10").val();
	var EA6S1_Q11=$("#EA6S1_Q11").val();
	var EA6S1_Q12=$("#EA6S1_Q12").val();
	//দক্ষতা ২
	var A6S2_Q1=$("#A6S2_Q1").val();
	var A6S2_Q2=$("#A6S2_Q2").val();
	//দক্ষতা ৩
	var A6S3_Q1=$("#A6S3_Q1").val();
	var A6S3_Q2=$("#A6S3_Q2").val();
	var A6S3_Q3=$("#A6S3_Q3").val();
	var A6S3_Q4=$("#A6S3_Q4").val();
	var A6S3_Q5=$("#A6S3_Q5").val();
	//দক্ষতা ৪  
	var A6S4_Q1=$("#A6S4_Q1").val();
	var A6S4_Q2=$("#A6S4_Q2").val();
	//দক্ষতা ৫  
	var A6S5_Q1=$("#A6S5_Q1").val();
	var A6S5_Q2=$("#A6S5_Q2").val();
	var A6S5_Q3=$("#A6S5_Q3").val();
	var A6S5_Q4=$("#A6S5_Q4").val();
	
	unicefData7="&EA6S1_Q1="+EA6S1_Q1+"&EA6S1_Q2="+EA6S1_Q2+"&EA6S1_Q3="+EA6S1_Q3+"&EA6S1_Q4="+EA6S1_Q4+"&EA6S1_Q5="+EA6S1_Q5+"&EA6S1_Q6="+EA6S1_Q6+"&EA6S1_Q7="+EA6S1_Q7+"&EA6S1_Q8="+EA6S1_Q8+"&EA6S1_Q9="+EA6S1_Q9+"&EA6S1_Q10="+EA6S1_Q10+"&EA6S1_Q11="+EA6S1_Q11+"&EA6S1_Q12="+EA6S1_Q12+"&A6S2_Q1="+A6S2_Q1+"&A6S2_Q2="+A6S2_Q2+"&A6S3_Q1="+A6S3_Q1+"&A6S3_Q2="+A6S3_Q2+"&A6S3_Q3="+A6S3_Q3+"&A6S3_Q4="+A6S3_Q4+"&A6S3_Q5="+A6S3_Q5+"&A6S4_Q1="+A6S4_Q1+"&A6S4_Q2="+A6S4_Q2+"&A6S5_Q1="+A6S5_Q1+"&A6S5_Q2="+A6S5_Q2+"&A6S5_Q3="+A6S5_Q3+"&A6S5_Q4="+A6S5_Q4;	
			
	//alert(unicefData7);
			
	url="#page8"
	$.mobile.navigate(url);	
				
	};
	
function ninePage(){	
	//সাপোর্টিভ সুপারভিশন  পদ্ধতি ৭খ: সার্বিক মতামত ও সর্বসম্মত সুপারিশমালা 
	var B7_Q1=$("#B7_Q1").val();
	var B7_Q2=$("#B7_Q2").val();
	var B7_Q3=$("#B7_Q3").val();
	var B7_Q4=$("#B7_Q4").val();
	var B7_Q5=$("#B7_Q5").val();
	var B7_Q6=$("#B7_Q6").val();
	var B7_Q7=$("#B7_Q7").val();
	var B7_Q8=$("#B7_Q8").val();
	
	unicefData8="&B7_Q1="+B7_Q1+"&B7_Q2="+B7_Q2+"&B7_Q3="+B7_Q3+"&B7_Q4="+B7_Q4+"&B7_Q5="+B7_Q5+"&B7_Q6="+B7_Q6+"&B7_Q7="+B7_Q7+"&B7_Q8="+B7_Q8;	
	
	//alert(unicefData8);
						
	url="#inPhoto"
	$.mobile.navigate(url);	
				
	};			



function submitData(){
		//("#btn_submit").hide();
		
		var d = new Date();	
		var get_time_pmt=d.getTime();	
		
		latitude=$("#ach_lat").val();
		longitude=$("#ach_long").val();
		
		achPhoto1=$("#achPhoto1").val();
		achPhoto2=$("#achPhoto2").val();
		
		if (latitude==undefined || latitude==''){
			latitude=0;
			}
		if (longitude==undefined || longitude==''){
			longitude=0;
			}
			
	imageUpload();	
	//syncData();
		
	}

function imageUpload(){
					
	if (imagePathA!=""){	
		var d = new Date();	
		var get_time=d.getTime();
							
		imageNameA = localStorage.mobile_no+"_"+get_time+".jpg";			
		uploadPhotoAch(imagePathA, imageNameA);
	}			
			
	if (imagePathB!=""){
		var d = new Date();	
		var get_time=d.getTime();	
		
		imageNameB = localStorage.mobile_no+"_"+get_time+".jpg";				
		uploadPhoto2Ach(imagePathB, imageNameB);		
	}
	
	syncData();
}

//------------------------image 1
function getAchivementImageA() {
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	imagePathA = imageURI;	
	$("#achPhoto1").val(imagePathA);
	
}

function onFailA(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}


function uploadPhotoAch(imageURI, imageNameA) { 	

	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageNameA;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/cbt_image/syncmobile_cbt/fileUploaderCbt/"),winAch,onfail,options);
	
}

function winAch(r) {	
	//$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
}

function onfail(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit").show();
}

//----------------image 2
function getAchivementImageB() { 
	navigator.camera.getPicture(onSuccessB, onFailB, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccessB(imageURI) {	
    var image = document.getElementById('myImageB');
    image.src = imageURI;
	imagePathB = imageURI;	
	$("#achPhoto2").val(imagePathB);
	
}

function onFailB(message) { 
	imagePathB="";
    alert('Failed because: ' + message);
}


function uploadPhoto2Ach(imageURI, imageNameB) { // second step
	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageNameB;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/cbt_image/syncmobile_cbt/fileUploaderCbt/"),winAch2,onfail2,options);
	
}

function winAch2(r) {
	$(".errorChk").text('Image upload successfull. Syncing Data ...');	
}

function onfail2(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit").show();
}



function syncData(){	
			
			//alert(apipath+"submitData?cid=UNICEF&ff_id="+localStorage.ffID+"&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&achPhoto1='+imageNameA+'&achPhoto2='+imageNameB+'&latitude='+latitude+'&longitude='+longitude+"&unicefData1="+encodeURIComponent(unicefData1)+"&unicefData2="+encodeURIComponent(unicefData2)+"&unicefData3="+encodeURIComponent(unicefData3)+"&unicefData4="+encodeURIComponent(unicefData4)+"&unicefData5="+encodeURIComponent(unicefData5)+"&unicefData6="+encodeURIComponent(unicefData6)+"&unicefData7="+encodeURIComponent(unicefData7)+"&unicefData8="+encodeURIComponent(unicefData8));
			$.ajax({
					type: 'POST',
					url:apipath+"submitData?cid=UNICEF&ff_id="+localStorage.ffID+"&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&achPhoto1='+imageNameA+'&achPhoto2='+imageNameB+'&latitude='+latitude+'&longitude='+longitude+"&unicefData1="+encodeURIComponent(unicefData1)+"&unicefData2="+encodeURIComponent(unicefData2)+"&unicefData3="+encodeURIComponent(unicefData3)+"&unicefData4="+encodeURIComponent(unicefData4)+"&unicefData5="+encodeURIComponent(unicefData5)+"&unicefData6="+encodeURIComponent(unicefData6)+"&unicefData7="+encodeURIComponent(unicefData7)+"&unicefData8="+encodeURIComponent(unicefData8),
					
					
					   success: function(result) {
						   if(result=='Success'){							
							//alert(result)
							//--------------							
							$("#healthCenterName").val("");
							$("#office").val("");
							$("#helathWorkerName").val("");
							$("#helathWorkerDeg").val("");
							$("#healthWorkerPhoneNo").val("");
							$("#unionWord").val("");
							$("#upzilaZone").val("");
							$("#districtCityCor").val("");
							$("#supName").val("");
							$("#supWorkGround").val("");
							$("#supType").val("");
							$("#supDeg").val("");
							$("#supPhoneNo").val("");
							$("#visitDate").val("");
							
							$("#B7_Q5").val("");
							$("#B7_Q6").val("");
							$("#B7_Q7").val("");
							$("#B7_Q8").val("");
							//--------------
							
							$("#ach_lat").val(0);
							$("#ach_long").val(0);
							$("#achPhoto1").val("");										
							$("#achPhoto2").val("");	
							
							$(".sucChk").text('Successfully Submitted');
							$(".errorChk").text("");
							$("#btn_submit").show();
							
							setTimeout(function(){
								window.location.reload(1);	
							},5000);	
												
						}else{
							$(".errorChk").text('Unauthorized Access');																	
							$("#btn_submit").show();
							}
							
					   }//end result
			});//end ajax
	
	}

